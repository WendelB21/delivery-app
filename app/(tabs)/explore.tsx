import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

export default function PorQueComprar() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Animated.Text entering={FadeInDown.duration(600)} style={styles.title}>
        Por que comprar comigo?
      </Animated.Text>

      <Animated.Text entering={FadeInUp.delay(100)} style={styles.subtitle}>
        Uma experiência pensada para ser rápida, simples e confiável.
      </Animated.Text>

      <Animated.View entering={FadeInUp.delay(200)} style={styles.block}>
        <Text style={styles.blockTitle}>Rapidez que faz diferença</Text>
        <Text style={styles.text}>
          Seu pedido é processado imediatamente após a confirmação, reduzindo o
          tempo de espera ao máximo possível.
        </Text>
      </Animated.View>

      <Animated.View entering={FadeInUp.delay(300)} style={styles.block}>
        <Text style={styles.blockTitle}>Qualidade garantida</Text>
        <Text style={styles.text}>
          Trabalhamos apenas com produtos selecionados, garantindo padrão de
          sabor, preparo e apresentação.
        </Text>
      </Animated.View>

      <Animated.View entering={FadeInUp.delay(400)} style={styles.block}>
        <Text style={styles.blockTitle}>Preço justo e transparente</Text>
        <Text style={styles.text}>
          Sem taxas escondidas. O valor que você vê é o valor real, com
          promoções aplicadas sempre que possível.
        </Text>
      </Animated.View>

      <Animated.View entering={FadeInUp.delay(500)} style={styles.block}>
        <Text style={styles.blockTitle}>Entrega inteligente</Text>
        <Text style={styles.text}>
          Trabalhamos com parceiros próximos para reduzir distância e garantir
          que seu pedido chegue quente e rápido.
        </Text>
      </Animated.View>

      <Animated.Text entering={FadeInUp.delay(600)} style={styles.footer}>
        Cada detalhe foi pensado para melhorar sua experiência do início ao fim.
      </Animated.Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 70,
    paddingBottom: 50,
    backgroundColor: "#F5F5F5",
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#111",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 25,
  },

  block: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    borderLeftWidth: 5,
    borderLeftColor: "#32C766",
  },

  blockTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#111",
  },

  text: {
    fontSize: 14,
    lineHeight: 20,
    color: "#444",
  },

  footer: {
    marginTop: 20,
    fontSize: 15,
    fontStyle: "italic",
    color: "#666",
    textAlign: "center",
  },
});
