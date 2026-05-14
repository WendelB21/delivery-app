import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Perfil() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* FOTO + NOME DA CONTA */}
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://images.icon-icons.com/3868/PNG/512/profile_circle_icon_242774.png",
          }}
          style={styles.avatar}
        />

        <Text style={styles.username}>@wendelborges</Text>
        <Text style={styles.name}>Wendel Borges</Text>
      </View>

      {/* INFORMAÇÕES */}
      <View style={styles.card}>
        <Text style={styles.label}>Nome completo</Text>
        <Text style={styles.value}>Wendel Borges Silva</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>CPF</Text>
        <Text style={styles.value}>***.***.***-**</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Número</Text>
        <Text style={styles.value}>(99) 99999-9999</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>E-mail</Text>
        <Text style={styles.value}>wendel@email.com</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F5F5F5",
  },

  header: {
    alignItems: "center",
    marginBottom: 30,
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },

  username: {
    fontSize: 16,
    color: "#888",
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    marginBottom: 12,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },

  label: {
    fontSize: 14,
    color: "#888",
  },

  value: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 3,
  },
});
