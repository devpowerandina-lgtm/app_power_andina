import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, Image } from 'react-native';
import { Mail, Lock, AlertCircle } from 'lucide-react-native';
import { AuthInput } from '../components/AuthInput';
import { AuthButton } from '../components/AuthButton';
import { AuthScreenWrapper } from '../components/AuthScreenWrapper';
import { signInWithEmail, resetPassword, signInWithGoogle } from '../services/AuthService';

interface LoginScreenProps {
  onNavigateToRegister: () => void;
  onLoginSuccess: () => void;
}

export const LoginScreen = ({ onNavigateToRegister, onLoginSuccess }: LoginScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleLogin = async () => {
    setErrorMessage(null);
    if (!email || !password) {
      setErrorMessage('Por favor completa todos los campos');
      return;
    }

    setLoading(true);
    const result = await signInWithEmail(email, password);
    setLoading(false);

    if (result.success) {
      onLoginSuccess();
    } else {
      const errorStr = result.error || '';
      if (errorStr.includes('Invalid login credentials') || errorStr.includes('invalid_credentials')) {
        setErrorMessage('El correo o la contraseña son incorrectos. Por favor, verifica tus datos.');
      } else {
        setErrorMessage('Ocurrió un error al iniciar sesión. Intenta de nuevo.');
      }
    }
  };

  const handleGoogleLogin = async () => {
    setErrorMessage(null);
    setGoogleLoading(true);
    
    try {
      const result = await signInWithGoogle();
      
      if (result.success) {
        onLoginSuccess();
      } else {
        setErrorMessage(result.error || 'Error al iniciar sesión con Google');
      }
    } catch (error) {
      setErrorMessage('Ocurrió un error inesperado al conectar con Google');
    } finally {
      setGoogleLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    setErrorMessage(null);

    if (!email) {
      setErrorMessage("Por favor, ingresa tu correo electrónico arriba para recuperar tu contraseña.");
      return;
    }

    const result = await resetPassword(email);

    if (result.success) {
      Alert.alert(
        "Correo Enviado",
        "Hemos enviado un enlace a tu correo para restablecer tu contraseña. Por favor, revisa tu bandeja de entrada o la carpeta de spam."
      );
    } else {
      setErrorMessage("Error al intentar enviar el correo de recuperación.");
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
            onChangeText={(text) => {
              setEmail(text);
              setErrorMessage(null);
            }}
            keyboardType="email-address"
            autoCapitalize="none"
            icon={<Mail color="white" size={20} />}
          />

          {/* Password Input */}
          <AuthInput
            placeholder="Contraseña"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              setErrorMessage(null);
            }}
            secureTextEntry
            icon={<Lock color="white" size={20} />}
          />

          {/* Banner de Error */}
          {errorMessage && (
            <View className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-4 flex-row items-center justify-center">
              <AlertCircle color="#f87171" size={20} style={{ marginRight: 8 }} />
              <Text className="text-red-400 text-sm font-medium text-center flex-1">
                {errorMessage}
              </Text>
            </View>
          )}

          {/* Forgot Password */}
          <TouchableOpacity
            style={{ alignSelf: 'center', marginBottom: 24, marginTop: 4 }}
            onPress={handleForgotPassword}
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
