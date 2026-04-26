import React from 'react';
import { TextInput, View, Text } from 'react-native';

interface AuthInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  error?: string;
}

export const AuthInput = ({ label, value, onChangeText, placeholder, secureTextEntry, error }: AuthInputProps) => {
  return (
    <View className="mb-4">
      <Text className="text-gray-700 font-medium mb-1 ml-1">{label}</Text>
      <TextInput
        className={`bg-white border ${error ? 'border-red-500' : 'border-gray-300'} rounded-2xl px-4 py-3 text-gray-900 shadow-sm`}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#9ca3af"
      />
      {error && <Text className="text-red-500 text-xs mt-1 ml-1">{error}</Text>}
    </View>
  );
};
