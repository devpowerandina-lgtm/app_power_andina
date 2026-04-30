import 'react-native-url-polyfill/auto';
import "./src/styles/global.css";
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator, BackHandler } from 'react-native';
import { LoginScreen } from './src/modules/auth/pages/LoginScreen';
import { RegisterScreen } from './src/modules/auth/pages/RegisterScreen';
import { OfflineScreen } from './src/modules/auth/pages/OfflineScreen';
import { CatalogScreen } from './src/modules/catalog/pages/CatalogScreen';
import { ProductDetailScreen } from './src/modules/catalog/pages/ProductDetailScreen';
import { CartScreen } from './src/modules/cart/pages/CartScreen';
import { NotificationScreen } from './src/modules/notifications/pages/NotificationScreen';
import { useNetworkStatus } from './src/shared/hooks/useNetworkStatus';
import { supabase } from './src/shared/infrastructure/supabase';

export default function App() {
  const { isConnected } = useNetworkStatus();
  const [currentScreen, setCurrentScreen] = useState<'login' | 'register' | 'home' | 'notifications' | 'details' | 'cart'>('login');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
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

  useEffect(() => {
    const backAction = () => {
      if (currentScreen === 'details' || currentScreen === 'cart' || currentScreen === 'notifications') {
        setCurrentScreen('home');
        return true; // Bloquea el cierre
      }
      return false; // Permite el cierre normal
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => backHandler.remove();
  }, [currentScreen]);

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
      <StatusBar style="light" />

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
        <CatalogScreen
          onNavigateToNotifications={() => setCurrentScreen('notifications')}
          onNavigateToDetails={(id) => {
            setSelectedProductId(id);
            setCurrentScreen('details');
          }}
          onNavigateToCart={() => setCurrentScreen('cart')}
        />
      )}

      {currentScreen === 'notifications' && (
        <NotificationScreen onBack={() => setCurrentScreen('home')} />
      )}

      {currentScreen === 'details' && selectedProductId && (
        <ProductDetailScreen
          productId={selectedProductId}
          onBack={() => setCurrentScreen('home')}
        />
      )}

      {currentScreen === 'cart' && (
        <CartScreen onBack={() => setCurrentScreen('home')} />
      )}
    </View>
  );
}
