import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Configuracoes() {
  const [endereco, setEndereco] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>

      <TouchableOpacity
        style={styles.option}
        onPress={() =>
          Alert.alert("Notificações", "Deseja ativar as notificações?", [
            {
              text: "Não",
              style: "cancel",
            },

            {
              text: "Sim",

              onPress: () =>
                Alert.alert("Ativado 🔔", "Notificações ativadas com sucesso!"),
            },
          ])
        }
      >
        <Ionicons name="notifications-outline" size={24} color="#333" />

        <Text style={styles.optionText}>Notificações</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Ionicons name="moon-outline" size={24} color="#333" />

        <Text style={styles.optionText}>Tema Escuro</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() =>
          Alert.alert(
            "Meus Endereços",

            "📍 Endereço atual:\nRua Exemplo, 123 - Centro\n\nDeseja adicionar um novo endereço?",

            [
              {
                text: "Cancelar",
                style: "cancel",
              },

              {
                text: "Adicionar",

                onPress: () =>
                  Alert.alert(
                    "Novo endereço",
                    "Função de adicionar endereço em breve 😎",
                  ),
              },
            ],
          )
        }
      >
        <Ionicons name="location-outline" size={24} color="#333" />

        <Text style={styles.optionText}>Endereço</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Ionicons name="help-circle-outline" size={24} color="#333" />

        <Text style={styles.optionText}>Ajuda</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 40,
  },

  option: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 18,
    marginBottom: 15,

    flexDirection: "row",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 4,
  },

  optionText: {
    fontSize: 18,
    marginLeft: 15,
    fontWeight: "500",
  },

  logoutButton: {
    marginTop: 30,
    backgroundColor: "#FF4B4B",
    padding: 18,
    borderRadius: 18,
    alignItems: "center",
  },

  logoutText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
