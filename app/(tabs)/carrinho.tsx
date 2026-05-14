import { FlatList, StyleSheet, Text, View } from "react-native";

const carrinho = [
  { id: "1", nome: "Hambúrguer X-Tudo", preco: 25 },
  { id: "2", nome: "Pizza Calabresa", preco: 40 },
];

const entregues = [
  {
    id: "3",
    nome: "Sushi Combo",
    preco: 55,
    status: "Entregue",
  },
  {
    id: "4",
    nome: "Bolo de Chocolate",
    preco: 18,
    status: "Entregue",
  },
  {
    id: "5",
    nome: "Burger Bacon",
    preco: 32,
    status: "Entregue",
  },
];

export default function Carrinho() {
  const total = carrinho.reduce((acc, item) => acc + item.preco, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu Carrinho</Text>

      {/* CARRINHO ATUAL */}
      <FlatList
        data={carrinho}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.preco}>R$ {item.preco}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.vazio}>Seu carrinho está vazio</Text>
        }
      />

      <Text style={styles.total}>Total: R$ {total}</Text>

      {/* HISTÓRICO */}
      <Text style={styles.subtitle}>Pedidos entregues</Text>

      {entregues.map((item) => (
        <View key={item.id} style={styles.cardEntregue}>
          <Text style={styles.nome}>{item.nome}</Text>
          <Text style={styles.status}>{item.status}</Text>
          <Text style={styles.preco}>R$ {item.preco}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
  },

  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 10,
  },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  cardEntregue: {
    backgroundColor: "#E8F9EF",
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: "#32C766",
  },

  nome: {
    fontSize: 16,
    fontWeight: "bold",
  },

  preco: {
    color: "#333",
    fontWeight: "bold",
  },

  status: {
    color: "#32C766",
    fontWeight: "bold",
    marginTop: 5,
  },

  total: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 15,
  },

  vazio: {
    textAlign: "center",
    color: "#999",
    marginTop: 20,
  },
});
