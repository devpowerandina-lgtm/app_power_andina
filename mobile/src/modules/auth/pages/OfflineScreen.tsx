import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { WifiOff, RefreshCw } from 'lucide-react-native';
import { AuthButton } from '../components/AuthButton';

export const OfflineScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white items-center justify-center px-8">
      <View className="w-24 h-24 bg-red-50 rounded-full items-center justify-center mb-6">
        <WifiOff color="#ef4444" size={48} />
      </View>
      
      <Text className="text-2xl font-bold text-gray-900 mb-2 text-center">
        Sin conexión a Internet
      </Text>
      
      <Text className="text-gray-500 text-center mb-10 text-lg">
        Parece que no tienes una conexión activa. Por favor, revisa tu red para continuar usando Power Andina.
      </Text>
      
      <View className="w-full">
        <AuthButton
          title="Reintentar"
          onPress={() => {}} // NetInfo will automatically update the state
          icon={<RefreshCw color="white" size={20} />}
        />
      </View>
    </SafeAreaView>
  );
};
