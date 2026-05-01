import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Platform,
  FlatList,
} from 'react-native';
import { 
  ArrowLeft, 
  Settings, 
  Bell, 
  MessageSquare, 
  Tag, 
  Calendar, 
  Ticket 
} from 'lucide-react-native';

interface NotificationScreenProps {
  goBack: () => void;
}

interface Promotion {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
}

// Datos Mock de Promociones
const mockPromotions: Promotion[] = [
  { 
    id: '1', 
    title: 'Día sin IVA en Suavizantes', 
    description: 'Aprovecha y lleva todos los suavizantes Power Andina sin el impuesto.', 
    startDate: '28 de Abril', 
    endDate: '30 de Abril' 
  },
  { 
    id: '2', 
    title: 'Kits de Limpieza 2x1', 
    description: 'Lleva dos kits completos por el precio de uno. Exclusivo en la app.', 
    startDate: '1 de Mayo', 
    endDate: '5 de Mayo' 
  }
];

// Sub-componente Tarjeta de Promoción
const PromotionCard = ({ item }: { item: Promotion }) => (
  <View className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100">
    <Text className="text-lg font-bold text-power-darkGreen mb-1">{item.title}</Text>
    <Text className="text-gray-500 mb-4 leading-5">{item.description}</Text>
    
    <View className="flex-row items-center bg-power-blue/5 self-start px-3 py-2 rounded-lg border border-power-blue/10">
      <Calendar size={14} color="#1C4076" />
      <Text className="text-power-blue text-[11px] font-bold ml-2">
        Válido del {item.startDate} al {item.endDate}
      </Text>
    </View>
  </View>
);

export const NotificationScreen = ({ goBack }: NotificationScreenProps) => {
  const [activeTab, setActiveTab] = useState<'generales' | 'promociones'>('generales');

  // Renderizado dinámico del Estado Vacío
  const renderEmptyState = () => {
    if (activeTab === 'generales') {
      return (
        <View className="flex-1 items-center justify-center px-10">
          <View className="bg-gray-50 p-12 rounded-full mb-8 shadow-sm">
            <View className="relative">
               <Bell size={80} color="#cbd5e1" strokeWidth={1.2} />
               <View className="absolute top-1 right-1 w-4 h-4 bg-gray-200 rounded-full border-2 border-white" />
            </View>
          </View>
          <Text className="text-2xl font-black text-power-darkGreen text-center mb-3">
            No tienes notificaciones
          </Text>
          <Text className="text-gray-400 text-base text-center leading-6 px-4">
            ¡Aprovecha para descubrir productos increíbles!
          </Text>
          <TouchableOpacity 
            onPress={goBack}
            className="mt-10 bg-power-blue/5 px-8 py-3 rounded-full border border-power-blue/10"
          >
            <Text className="text-power-blue font-bold">Volver al inicio</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View className="flex-1 items-center justify-center px-10">
        <View className="bg-gray-50 p-12 rounded-full mb-8 shadow-sm">
          <Ticket size={80} color="#cbd5e1" strokeWidth={1.2} />
        </View>
        <Text className="text-2xl font-black text-power-darkGreen text-center mb-3">
          No hay promociones este mes
        </Text>
        <Text className="text-gray-400 text-base text-center leading-6 px-4">
          Mantente atento a nuestras próximas ofertas especiales.
        </Text>
      </View>
    );
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle="light-content" backgroundColor="#1C4076" translucent />
      
      {/* Header Personalizado */}
      <View 
        className="bg-power-blue px-4 pb-5 shadow-sm"
        style={{ 
          paddingTop: Platform.OS === 'ios' ? 60 : (StatusBar.currentHeight ? StatusBar.currentHeight + 15 : 50) 
        }}
      >
        <View className="flex-row items-center justify-between">
          <TouchableOpacity onPress={goBack} activeOpacity={0.7} className="p-1">
            <ArrowLeft color="#fff" size={26} strokeWidth={2.5} />
          </TouchableOpacity>
          
          <Text className="text-white text-xl font-bold">Notificaciones</Text>
          
          <TouchableOpacity activeOpacity={0.7} className="p-1">
            <Settings color="#fff" size={24} strokeWidth={2} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Selector de Pestañas (Tabs) */}
      <View className="flex-row bg-white border-b border-gray-100 shadow-sm">
        <TouchableOpacity 
          activeOpacity={0.9}
          onPress={() => setActiveTab('generales')}
          className={`flex-1 flex-row items-center justify-center py-4 border-b-4 ${
            activeTab === 'generales' ? 'border-power-lightGreen' : 'border-transparent'
          }`}
        >
          <View className="flex-row items-center">
            <MessageSquare 
              size={18} 
              color={activeTab === 'generales' ? '#1C4076' : '#9ca3af'} 
              strokeWidth={activeTab === 'generales' ? 2.5 : 2}
            />
            <Text className={`ml-2 text-sm font-bold tracking-tight ${
              activeTab === 'generales' ? 'text-power-blue' : 'text-gray-400'
            }`}>
              Generales
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          activeOpacity={0.9}
          onPress={() => setActiveTab('promociones')}
          className={`flex-1 flex-row items-center justify-center py-4 border-b-4 ${
            activeTab === 'promociones' ? 'border-power-lightGreen' : 'border-transparent'
          }`}
        >
          <View className="flex-row items-center">
            <Tag 
              size={18} 
              color={activeTab === 'promociones' ? '#1C4076' : '#9ca3af'} 
              strokeWidth={activeTab === 'promociones' ? 2.5 : 2}
            />
            <Text className={`ml-2 text-sm font-bold tracking-tight ${
              activeTab === 'promociones' ? 'text-power-blue' : 'text-gray-400'
            }`}>
              Promociones
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Contenido Dinámico */}
      <View className="flex-1 bg-gray-50/50">
        {activeTab === 'promociones' && mockPromotions.length > 0 ? (
          <FlatList
            data={mockPromotions}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <PromotionCard item={item} />}
            contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          renderEmptyState()
        )}
      </View>
    </View>
  );
};
