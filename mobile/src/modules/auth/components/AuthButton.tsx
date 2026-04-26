import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, View } from 'react-native';

interface AuthButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: React.ReactNode;
}

export const AuthButton = ({ title, onPress, loading, variant = 'primary', icon }: AuthButtonProps) => {
  const getStyles = () => {
    switch (variant) {
      case 'secondary': return 'bg-gray-800';
      case 'outline': return 'bg-transparent border border-gray-300';
      default: return 'bg-primary-600';
    }
  };

  const getTextStyles = () => {
    switch (variant) {
      case 'outline': return 'text-gray-700';
      default: return 'text-white';
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading}
      className={`${getStyles()} rounded-2xl py-4 items-center justify-center shadow-md flex-row space-x-2 active:opacity-80`}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'outline' ? '#000' : '#fff'} />
      ) : (
        <>
          {icon && <View className="mr-2">{icon}</View>}
          <Text className={`${getTextStyles()} font-bold text-lg`}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};
