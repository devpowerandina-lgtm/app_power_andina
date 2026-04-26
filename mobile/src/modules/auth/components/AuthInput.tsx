import React from 'react';
import { TextInput, View, Text } from 'react-native';

interface AuthInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  error?: string;
  icon?: React.ReactNode;
  keyboardType?: 'default' | 'email-address' | 'numeric';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
}

/**
 * Input glassmorphism para pantallas de autenticación.
 * Fondo traslúcido, borde blanco semi-transparente, icono a la izquierda,
 * texto blanco. Diseñado para fondos oscuros.
 */
export const AuthInput = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  error,
  icon,
  keyboardType = 'default',
  autoCapitalize = 'none',
}: AuthInputProps) => {
  return (
    <View style={{ marginBottom: 16 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          borderWidth: 1,
          borderColor: error ? 'rgba(239, 68, 68, 0.7)' : 'rgba(255, 255, 255, 0.25)',
          borderRadius: 14,
          paddingHorizontal: 16,
          paddingVertical: 4,
        }}
      >
        {icon && (
          <View style={{ marginRight: 12, opacity: 0.7 }}>
            {icon}
          </View>
        )}
        <TextInput
          style={{
            flex: 1,
            color: '#FFFFFF',
            fontSize: 16,
            paddingVertical: 14,
          }}
          placeholder={placeholder}
          placeholderTextColor="rgba(255, 255, 255, 0.4)"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
        />
      </View>
      {error && (
        <Text
          style={{
            color: 'rgba(248, 113, 113, 0.9)',
            fontSize: 12,
            marginTop: 4,
            marginLeft: 8,
          }}
        >
          {error}
        </Text>
      )}
    </View>
  );
};
