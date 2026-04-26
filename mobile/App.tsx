import "./src/styles/global.css";
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator } from 'react-native';
import { LoginScreen } from './src/modules/auth/pages/LoginScreen';
import { RegisterScreen } from './src/modules/auth/pages/RegisterScreen';
import { OfflineScreen } from './src/modules/auth/pages/OfflineScreen';
import { useNetworkStatus } from './src/shared/hooks/useNetworkStatus';
import { supabase } from './src/shared/infrastructure/SupabaseClient';

export default function App() {
  const { isConnected } = useNetworkStatus();
  const [currentScreen, setCurrentScreen] = useState<'login' | 'register' | 'home'>('login');
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) setCurrentScreen('home');
      setLoading(false);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) setCurrentScreen('home');
      else setCurrentScreen('login');
    });
  }, []);

  if (!isConnected) {
    return <OfflineScreen />;
  }

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-light">
        <ActivityIndicator size="large" color="#0284c7" />
      </View>
    );
  }

  return (
    <View className="flex-1">
      <StatusBar style="auto" />
      
      {currentScreen === 'login' && (
        <LoginScreen 
          onNavigateToRegister={() => setCurrentScreen('register')} 
          onLoginSuccess={() => setCurrentScreen('home')}
        />
      )}
      
      {currentScreen === 'register' && (
        <RegisterScreen 
          onNavigateToLogin={() => setCurrentScreen('login')} 
          onRegisterSuccess={() => setCurrentScreen('home')}
        />
      )}

      {currentScreen === 'home' && (
        <View className="flex-1 items-center justify-center bg-light">
          <ActivityIndicator size="large" color="#0284c7" />
          {/* Dashboard implementation will go here */}
        </View>
      )}
    </View>
  );
}
