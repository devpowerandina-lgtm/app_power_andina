import React from 'react';
import { View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import Svg, { Path, Defs, LinearGradient as SvgGradient, Stop } from 'react-native-svg';

interface AuthScreenWrapperProps {
  children: React.ReactNode;
}

/**
 * Wrapper reutilizable para las pantallas de autenticación.
 * Provee el fondo gradiente oscuro con ondas SVG decorativas,
 * StatusBar light, y manejo de teclado.
 */
export const AuthScreenWrapper = ({ children }: AuthScreenWrapperProps) => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <LinearGradient
        colors={['#0a1628', '#0d2357', '#1a237e', '#261b6e', '#311b92']}
        locations={[0, 0.25, 0.5, 0.75, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.3, y: 1 }}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      />

      {/* Ondas abstractas decorativas */}
      <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60%' }}>
        <Svg
          width="100%"
          height="100%"
          viewBox="0 0 400 600"
          preserveAspectRatio="none"
        >
          <Defs>
            <SvgGradient id="wave1" x1="0" y1="0" x2="1" y2="1">
              <Stop offset="0" stopColor="#1e3a8a" stopOpacity="0.15" />
              <Stop offset="1" stopColor="#7c3aed" stopOpacity="0.08" />
            </SvgGradient>
            <SvgGradient id="wave2" x1="0" y1="0" x2="0.5" y2="1">
              <Stop offset="0" stopColor="#3b82f6" stopOpacity="0.1" />
              <Stop offset="1" stopColor="#6366f1" stopOpacity="0.05" />
            </SvgGradient>
          </Defs>

          {/* Onda 1 - más grande y suave */}
          <Path
            d="M-50 300 C50 250, 150 350, 250 280 C350 210, 400 300, 450 270 L450 600 L-50 600Z"
            fill="url(#wave1)"
          />

          {/* Onda 2 - media */}
          <Path
            d="M-50 380 C80 330, 180 420, 280 360 C380 300, 420 380, 450 350 L450 600 L-50 600Z"
            fill="url(#wave2)"
          />

          {/* Onda 3 - sutil */}
          <Path
            d="M-50 450 C100 410, 200 480, 300 430 C400 380, 430 450, 450 430 L450 600 L-50 600Z"
            fill="url(#wave1)"
          />
        </Svg>
      </View>

      {/* Círculos decorativos sutiles */}
      <View
        style={{
          position: 'absolute',
          top: '15%',
          right: -40,
          width: 160,
          height: 160,
          borderRadius: 80,
          backgroundColor: 'rgba(99, 102, 241, 0.06)',
        }}
      />
      <View
        style={{
          position: 'absolute',
          bottom: '20%',
          left: -60,
          width: 200,
          height: 200,
          borderRadius: 100,
          backgroundColor: 'rgba(139, 92, 246, 0.05)',
        }}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};
