import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { LogOut, ShoppingBag, Package, Settings } from 'lucide-react-native';
import { signOut } from '../../auth/services/AuthService';

export const CatalogScreen = () => {
  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[#0a1628]">
      <View className="flex-1 p-6 justify-between">
        {/* Header Section */}
        <View className="mt-4">
          <View className="flex-row items-center mb-2">
            <View className="bg-blue-500/20 p-2 rounded-lg mr-3">
              <ShoppingBag color="#3b82f6" size={24} />
            </View>
            <Text className="text-3xl font-bold text-white">
              Power Andina
            </Text>
          </View>
          <Text className="text-gray-400 text-lg ml-1">
            Catálogo de Productos
          </Text>
        </View>

        {/* Content Placeholder Section */}
        <View className="flex-1 justify-center py-10">
          <View className="bg-[#1e293b] p-10 rounded-[40px] border border-gray-700 items-center shadow-2xl">
            <View className="bg-[#0a1628] p-6 rounded-full mb-6 border border-gray-800">
              <Package color="#94a3b8" size={48} />
            </View>
            <Text className="text-white text-2xl font-bold text-center mb-3">
              Próximamente
            </Text>
            <Text className="text-gray-400 text-center text-base leading-6">
              Estamos preparando nuestro catálogo digital con los mejores equipos industriales para ti.
            </Text>
          </View>
        </View>

        {/* Bottom Actions Section */}
        <View className="space-y-4 mb-4">
          <View className="flex-row space-x-4 mb-4">
            <TouchableOpacity className="flex-1 bg-[#1e293b] p-4 rounded-2xl flex-row items-center justify-center border border-gray-700">
              <Settings color="#94a3b8" size={20} className="mr-2" />
              <Text className="text-gray-300 font-semibold">Ajustes</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity 
            onPress={handleSignOut}
            className="bg-red-500/10 border border-red-500/50 p-4 rounded-2xl flex-row items-center justify-center"
          >
            <LogOut color="#ef4444" size={20} className="mr-2" />
            <Text className="text-red-500 font-bold text-lg">Cerrar Sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
