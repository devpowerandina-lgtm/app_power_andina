import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
import { AuthInput } from '../components/AuthInput';
import { AuthButton } from '../components/AuthButton';
import { AuthService } from '../services/AuthService';
import { UserPlus } from 'lucide-react-native';

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
    <SafeAreaView className="flex-1 bg-light">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="px-6 py-12">
          <View className="items-center mb-10">
            <View className="w-20 h-20 bg-primary-600 rounded-3xl items-center justify-center shadow-lg mb-4">
              <UserPlus color="white" size={40} />
            </View>
            <Text className="text-3xl font-bold text-dark">Crear Cuenta</Text>
            <Text className="text-gray-500 mt-2">Únete a Power Andina SAS</Text>
          </View>

          <View className="space-y-2">
            <AuthInput
              label="Correo Electrónico"
              placeholder="ejemplo@correo.com"
              value={email}
              onChangeText={setEmail}
              error={errors.email}
            />
            <AuthInput
              label="Contraseña"
              placeholder="Mínimo 6 caracteres"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              error={errors.password}
            />
            <AuthInput
              label="Confirmar Contraseña"
              placeholder="Repite tu contraseña"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
              error={errors.confirm}
            />
            
            <View className="mt-4">
              <AuthButton
                title="Registrarse"
                onPress={handleRegister}
                loading={loading}
              />
            </View>
          </View>

          <View className="flex-row justify-center mt-10">
            <Text className="text-gray-600">¿Ya tienes una cuenta? </Text>
            <TouchableOpacity onPress={onNavigateToLogin}>
              <Text className="text-primary-600 font-bold">Inicia Sesión</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
