import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface AuthButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  variant?: 'primary' | 'google' | 'outline';
  icon?: React.ReactNode;
}

/**
 * Botón de autenticación con múltiples variantes para tema oscuro.
 * - primary: Gradiente azul profesional con elevación
 * - google: Fondo oscuro traslúcido con borde blanco sutil
 * - outline: Borde blanco, fondo transparente
 */
export const AuthButton = ({ title, onPress, loading, variant = 'primary', icon }: AuthButtonProps) => {
  if (variant === 'primary') {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={loading}
        activeOpacity={0.85}
        style={{
          borderRadius: 14,
          overflow: 'hidden',
          shadowColor: '#3b82f6',
          shadowOffset: { width: 0, height: 6 },
          shadowOpacity: 0.35,
          shadowRadius: 12,
          elevation: 8,
        }}
      >
        <LinearGradient
          colors={['#2563eb', '#1d4ed8', '#1e40af']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            paddingVertical: 16,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <>
              {icon && <View style={{ marginRight: 8 }}>{icon}</View>}
              <Text
                style={{
                  color: '#FFFFFF',
                  fontWeight: '700',
                  fontSize: 17,
                  letterSpacing: 0.5,
                }}
              >
                {title}
              </Text>
            </>
          )}
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  // Google and outline variants
  const isGoogle = variant === 'google';

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading}
      activeOpacity={0.8}
      style={{
        backgroundColor: isGoogle ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.25)',
        borderRadius: 14,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      }}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <>
          {icon && <View style={{ marginRight: 10 }}>{icon}</View>}
          <Text
            style={{
              color: '#FFFFFF',
              fontWeight: '600',
              fontSize: 16,
              letterSpacing: 0.3,
            }}
          >
            {title}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};
