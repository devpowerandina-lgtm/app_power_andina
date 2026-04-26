import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
import { AuthInput } from '../components/AuthInput';
import { AuthButton } from '../components/AuthButton';
import { AuthService } from '../services/AuthService';
import { LogIn, Github } from 'lucide-react-native';

interface LoginScreenProps {
  onNavigateToRegister: () => void;
  onLoginSuccess: () => void;
}

export const LoginScreen = ({ onNavigateToRegister, onLoginSuccess }: LoginScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Por favor completa todos los campos');
      return;
    }

    setLoading(true);
    const response = await AuthService.login({ email, password });
    setLoading(false);

    if (response.success) {
      onLoginSuccess();
    } else {
      Alert.alert('Error de Autenticación', response.error || 'Credenciales inválidas');
    }
  };

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    const response = await AuthService.signInWithGoogle();
    setGoogleLoading(false);
    
    if (response.success) {
      // In OAuth flow, the redirection handles the session
    } else {
      Alert.alert('Error', response.error || 'No se pudo conectar con Google');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-light">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="px-6 py-12">
          <View className="items-center mb-10">
            <View className="w-20 h-20 bg-primary-600 rounded-3xl items-center justify-center shadow-lg mb-4">
              <LogIn color="white" size={40} />
            </View>
            <Text className="text-3xl font-bold text-dark">Power Andina</Text>
            <Text className="text-gray-500 mt-2">Bienvenido de nuevo</Text>
          </View>

          <View className="space-y-2">
            <AuthInput
              label="Correo Electrónico"
              placeholder="ejemplo@correo.com"
              value={email}
              onChangeText={setEmail}
            />
            <AuthInput
              label="Contraseña"
              placeholder="••••••••"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            
            <TouchableOpacity className="self-end mb-6">
              <Text className="text-primary-600 font-medium">¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>

            <AuthButton
              title="Iniciar Sesión"
              onPress={handleLogin}
              loading={loading}
            />

            <View className="flex-row items-center my-6">
              <View className="flex-1 h-[1px] bg-gray-300" />
              <Text className="mx-4 text-gray-400">o continuar con</Text>
              <View className="flex-1 h-[1px] bg-gray-300" />
            </View>

            <AuthButton
              title="Google"
              variant="outline"
              onPress={handleGoogleLogin}
              loading={googleLoading}
              icon={<Text className="text-xl">G</Text>}
            />
          </View>

          <View className="flex-row justify-center mt-10">
            <Text className="text-gray-600">¿No tienes una cuenta? </Text>
            <TouchableOpacity onPress={onNavigateToRegister}>
              <Text className="text-primary-600 font-bold">Regístrate</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
