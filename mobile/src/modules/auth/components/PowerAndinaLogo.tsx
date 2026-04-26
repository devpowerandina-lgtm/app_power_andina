import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Circle, Path, Ellipse, G } from 'react-native-svg';

interface PowerAndinaLogoProps {
  width?: number;
  height?: number;
}

/**
 * Logo monocromático blanco de Power Andina.
 * Reproduce el diseño del logo original (círculo con hojas estilizadas,
 * texto "POWER ANDINA" y eslogan) todo en blanco sobre fondo transparente.
 */
export const PowerAndinaLogo = ({ width = 180, height = 220 }: PowerAndinaLogoProps) => {
  const iconSize = width * 0.55;

  return (
    <View style={{ alignItems: 'center', width, height }}>
      {/* Ícono del logo: Círculo con hojas */}
      <Svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 120 120"
        fill="none"
      >
        {/* Círculo de fondo */}
        <Circle cx="60" cy="60" r="56" stroke="white" strokeWidth="2.5" fill="none" />

        {/* Hoja grande (derecha superior) */}
        <Path
          d="M62 18 C62 18, 98 30, 96 68 C94 95, 68 100, 60 100 C60 100, 85 88, 86 62 C87 40, 62 18, 62 18Z"
          fill="white"
          opacity={0.95}
        />

        {/* Hoja pequeña (izquierda) */}
        <Path
          d="M58 38 C58 38, 28 48, 30 76 C31 90, 48 96, 56 98 C56 98, 38 86, 38 68 C38 52, 58 38, 58 38Z"
          fill="white"
          opacity={0.7}
        />

        {/* Tallo central con nodos (circuitos/tecnología) */}
        <Path
          d="M60 98 L60 52"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Rama izquierda */}
        <Path
          d="M60 72 L46 60"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* Rama derecha */}
        <Path
          d="M60 62 L74 52"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* Nodos (círculos en las puntas) */}
        <Circle cx="60" cy="50" r="3.5" fill="white" />
        <Circle cx="44" cy="58" r="3" fill="white" />
        <Circle cx="76" cy="50" r="3" fill="white" />
        <Circle cx="60" cy="72" r="2.5" fill="white" />
      </Svg>

      {/* Texto POWER ANDINA */}
      <Text
        style={{
          color: '#FFFFFF',
          fontSize: width * 0.135,
          fontWeight: '800',
          letterSpacing: 3,
          marginTop: 8,
          textAlign: 'center',
        }}
      >
        POWER{'\n'}
        <Text style={{ fontWeight: '800', letterSpacing: 3 }}>ANDINA</Text>
      </Text>

      {/* Eslogan */}
      <Text
        style={{
          color: 'rgba(255,255,255,0.7)',
          fontSize: width * 0.072,
          fontStyle: 'italic',
          marginTop: 4,
          textAlign: 'center',
        }}
      >
        ¡Nos inspiras a ser!
      </Text>
    </View>
  );
};
