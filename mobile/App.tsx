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
import { CategoryScreen } from './src/modules/catalog/pages/CategoryScreen';
import { useNetworkStatus } from './src/shared/hooks/useNetworkStatus';
import { supabase } from './src/shared/infrastructure/supabase';

export default function App() {
  const { isConnected } = useNetworkStatus();
  const [navigationStack, setNavigationStack] = useState<string[]>(['login']);
  const currentScreen = navigationStack[navigationStack.length - 1];
  
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const navigateTo = (screen: string) => {
    setNavigationStack(prev => [...prev, screen]);
  };

  const goBack = () => {
    setNavigationStack(prev => {
      if (prev.length > 1) {
        return prev.slice(0, -1);
      }
      return prev;
    });
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) setNavigationStack(['home']);
      setLoading(false);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) setNavigationStack(['home']);
      else setNavigationStack(['login']);
    });
  }, []);

  useEffect(() => {
    const backAction = () => {
      if (navigationStack.length > 1) {
        goBack();
        return true; // Bloquea el cierre
      }
      return false; // Permite el cierre normal
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => backHandler.remove();
  }, [navigationStack]);

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
          onNavigateToRegister={() => navigateTo('register')}
          onLoginSuccess={() => setNavigationStack(['home'])}
        />
      )}

      {currentScreen === 'register' && (
        <RegisterScreen
          onNavigateToLogin={() => navigateTo('login')}
          onRegisterSuccess={() => setNavigationStack(['home'])}
        />
      )}

      {currentScreen === 'home' && (
        <CatalogScreen
          navigateTo={navigateTo}
          goBack={goBack}
          setSelectedProductId={setSelectedProductId}
          setSelectedCategory={setSelectedCategory}
        />
      )}

      {currentScreen === 'notifications' && (
        <NotificationScreen goBack={goBack} />
      )}

      {currentScreen === 'details' && selectedProductId && (
        <ProductDetailScreen
          productId={selectedProductId}
          goBack={goBack}
        />
      )}

      {currentScreen === 'cart' && (
        <CartScreen goBack={goBack} />
      )}

      {currentScreen === 'category' && selectedCategory && (
        <CategoryScreen
          categoryId={selectedCategory}
          goBack={goBack}
          navigateTo={navigateTo}
          setSelectedProductId={setSelectedProductId}
        />
      )}
    </View>
  );
}
