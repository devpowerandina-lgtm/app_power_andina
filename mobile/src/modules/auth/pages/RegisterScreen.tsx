import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, Image } from 'react-native';
import { Mail, Lock, ShieldCheck, AlertCircle } from 'lucide-react-native';
import { AuthInput } from '../components/AuthInput';
import { AuthButton } from '../components/AuthButton';
import { AuthScreenWrapper } from '../components/AuthScreenWrapper';
import { signUpWithEmail } from '../services/AuthService';

interface RegisterScreenProps {
  onNavigateToLogin: () => void;
  onRegisterSuccess: () => void;
}

export const RegisterScreen = ({ onNavigateToLogin, onRegisterSuccess }: RegisterScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string; confirm?: string }>({});
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validate = () => {
    const newErrors: any = {};
    if (!email.includes('@')) newErrors.email = 'Email inválido';
    if (password.length < 6) newErrors.password = 'Mínimo 6 caracteres';
    if (password !== confirmPassword) newErrors.confirm = 'Las contraseñas no coinciden';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async () => {
    setErrorMessage(null);
    if (!validate()) return;

    setLoading(true);
    const result = await signUpWithEmail(email, password);
    setLoading(false);

    if (result.success) {
      if (result.data?.session) {
        onRegisterSuccess();
      } else {
        Alert.alert(
          'Registro Exitoso', 
          'Se ha creado tu cuenta. Por favor verifica tu correo si es necesario.',
          [{ text: 'OK', onPress: () => onNavigateToLogin() }]
        );
      }
    } else {
      const errorMessage = result.error || '';
      
      if (errorMessage.includes('already registered')) {
        setErrorMessage('Este correo electrónico ya está registrado en Power Andina. Por favor, inicia sesión.');
      } else if (errorMessage.includes('at least 6 characters')) {
        setErrorMessage('La contraseña debe tener al menos 6 caracteres.');
      } else if (errorMessage.toLowerCase().includes('network') || errorMessage.toLowerCase().includes('fetch')) {
        setErrorMessage('Hubo un problema de red. Verifica tu conexión e intenta de nuevo.');
      } else {
        setErrorMessage('Verifica tus datos y vuelve a intentarlo.');
      }
    }
  };

  return (
    <AuthScreenWrapper>
      <View style={{ flex: 1, paddingHorizontal: 28, justifyContent: 'center', paddingTop: 40 }}>
        {/* Logo Monocromático */}
        <View style={{ alignItems: 'center', marginBottom: 24 }}>
          <Image
            source={require('../../../../assets/images/logo_power.png')}
            style={{ width: 150, height: 150, tintColor: '#FFFFFF' }}
            resizeMode="contain"
          />
        </View>

        {/* Título */}
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 28,
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: 8,
          }}
        >
          Crear Cuenta
        </Text>
        <Text
          style={{
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: 15,
            textAlign: 'center',
            marginBottom: 32,
          }}
        >
          Únete a Power Andina SAS
        </Text>

        {/* Formulario con Glassmorphism */}
        <View>
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
            error={errors.email}
          />

          <AuthInput
            placeholder="Contraseña (mín. 6 caracteres)"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              setErrorMessage(null);
            }}
            secureTextEntry
            icon={<Lock color="white" size={20} />}
            error={errors.password}
          />

          <AuthInput
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChangeText={(text) => {
              setConfirmPassword(text);
              setErrorMessage(null);
            }}
            secureTextEntry
            icon={<ShieldCheck color="white" size={20} />}
            error={errors.confirm}
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

          {/* Botón de Registro */}
          <View style={{ marginTop: 16 }}>
            <AuthButton
              title="Registrarse"
              onPress={handleRegister}
              loading={loading}
            />
          </View>
        </View>

        {/* Footer */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 36,
            paddingBottom: 40,
          }}
        >
          <Text style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 14 }}>
            ¿Ya tienes una cuenta?{' '}
          </Text>
          <TouchableOpacity onPress={onNavigateToLogin}>
            <Text style={{ color: '#FFFFFF', fontWeight: '700', fontSize: 14 }}>
              Inicia Sesión
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </AuthScreenWrapper>
  );
};
