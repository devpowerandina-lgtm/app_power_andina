import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, Image } from 'react-native';
import { Mail, Lock } from 'lucide-react-native';
import { AuthInput } from '../components/AuthInput';
import { AuthButton } from '../components/AuthButton';
import { AuthScreenWrapper } from '../components/AuthScreenWrapper';
import { AuthService } from '../services/AuthService';

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
      // OAuth flow handles session via redirect
    } else {
      Alert.alert('Error', response.error || 'No se pudo conectar con Google');
    }
  };

  return (
    <AuthScreenWrapper>
      <View style={{ flex: 1, paddingHorizontal: 28, justifyContent: 'center' }}>
        {/* Logo */}
        <View style={{ alignItems: 'center', marginBottom: 48 }}>
          <Image
            source={require('../../../../assets/images/logo_power.png')}
            style={{ width: 200, height: 200, tintColor: '#FFFFFF' }}
            resizeMode="contain"
          />
        </View>

        {/* Form */}
        <View>
          {/* Email Input */}
          <AuthInput
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            icon={<Mail color="white" size={20} />}
          />

          {/* Password Input */}
          <AuthInput
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            icon={<Lock color="white" size={20} />}
          />

          {/* Forgot Password */}
          <TouchableOpacity
            style={{ alignSelf: 'center', marginBottom: 24, marginTop: 4 }}
          >
            <Text
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: 13,
              }}
            >
              ¿Olvidaste tu contraseña?
            </Text>
          </TouchableOpacity>

          {/* Login Button */}
          <AuthButton
            title="Iniciar Sesión"
            onPress={handleLogin}
            loading={loading}
          />

          {/* Separator */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 24,
            }}
          >
            <View style={{ flex: 1, height: 1, backgroundColor: 'rgba(255, 255, 255, 0.15)' }} />
            <Text style={{ marginHorizontal: 16, color: 'rgba(255, 255, 255, 0.5)', fontSize: 13 }}>
              o continuar con
            </Text>
            <View style={{ flex: 1, height: 1, backgroundColor: 'rgba(255, 255, 255, 0.15)' }} />
          </View>

          {/* Google Button */}
          <AuthButton
            title="Google"
            variant="google"
            onPress={handleGoogleLogin}
            loading={googleLoading}
            icon={
              <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: '700' }}>G</Text>
            }
          />
        </View>

        {/* Footer */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 36,
            paddingBottom: 24,
          }}
        >
          <Text style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 14 }}>
            ¿No tienes una cuenta?{' '}
          </Text>
          <TouchableOpacity onPress={onNavigateToRegister}>
            <Text style={{ color: '#FFFFFF', fontWeight: '700', fontSize: 14 }}>
              Regístrate
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </AuthScreenWrapper>
  );
};
