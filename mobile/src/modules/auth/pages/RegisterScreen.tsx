import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Mail, Lock, ShieldCheck } from 'lucide-react-native';
import { AuthInput } from '../components/AuthInput';
import { AuthButton } from '../components/AuthButton';
import { AuthScreenWrapper } from '../components/AuthScreenWrapper';
import { PowerAndinaLogo } from '../components/PowerAndinaLogo';
import { AuthService } from '../services/AuthService';

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

  const validate = () => {
    const newErrors: any = {};
    if (!email.includes('@')) newErrors.email = 'Email inválido';
    if (password.length < 6) newErrors.password = 'Mínimo 6 caracteres';
    if (password !== confirmPassword) newErrors.confirm = 'Las contraseñas no coinciden';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async () => {
    if (!validate()) return;

    setLoading(true);
    const response = await AuthService.register({ email, password });
    setLoading(false);

    if (response.success) {
      Alert.alert('Éxito', 'Cuenta creada correctamente. ¡Bienvenido!', [
        { text: 'OK', onPress: onRegisterSuccess }
      ]);
    } else {
      Alert.alert('Error', response.error || 'No se pudo crear la cuenta');
    }
  };

  return (
    <AuthScreenWrapper>
      <View style={{ flex: 1, paddingHorizontal: 28, justifyContent: 'center' }}>
        {/* Logo (más pequeño que en Login) */}
        <View style={{ alignItems: 'center', marginBottom: 32 }}>
          <PowerAndinaLogo width={140} height={180} />
        </View>

        {/* Título */}
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 24,
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: 8,
          }}
        >
          Crear Cuenta
        </Text>
        <Text
          style={{
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: 14,
            textAlign: 'center',
            marginBottom: 28,
          }}
        >
          Únete a Power Andina SAS
        </Text>

        {/* Form */}
        <View>
          <AuthInput
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            icon={<Mail color="white" size={20} />}
            error={errors.email}
          />

          <AuthInput
            placeholder="Contraseña (mín. 6 caracteres)"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            icon={<Lock color="white" size={20} />}
            error={errors.password}
          />

          <AuthInput
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            icon={<ShieldCheck color="white" size={20} />}
            error={errors.confirm}
          />

          {/* Register Button */}
          <View style={{ marginTop: 8 }}>
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
            marginTop: 32,
            paddingBottom: 24,
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
