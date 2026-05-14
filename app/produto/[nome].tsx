import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
    Image,
    Modal,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Produto() {
  const [quantidade, setQuantidade] = useState(1);
  const [descricao, setDescricao] = useState("");
  const params = useLocalSearchParams();

  const nome = Array.isArray(params.nome) ? params.nome[0] : params.nome;
  const preco = Array.isArray(params.preco) ? params.preco[0] : params.preco;
  const imagem = Array.isArray(params.imagem)
    ? params.imagem[0]
    : params.imagem;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={{ uri: imagem }} style={styles.image} />

      <Text style={styles.title}>{nome}</Text>
      <Text style={styles.price}>{preco}</Text>

      {/* QUANTIDADE */}
      <View style={styles.qtdArea}>
        <TouchableOpacity
          style={styles.qtdButton}
          onPress={() => setQuantidade((q) => (q > 1 ? q - 1 : 1))}
        >
          <Text style={styles.qtdBtnText}>−</Text>
        </TouchableOpacity>

        <View style={styles.qtdBox}>
          <Text style={styles.qtdNumber}>{quantidade}</Text>
        </View>

        <TouchableOpacity
          style={styles.qtdButton}
          onPress={() => setQuantidade((q) => q + 1)}
        >
          <Text style={styles.qtdBtnText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* DESCRIÇÃO */}
      <Text style={styles.label}>Descrição do pedido</Text>

      <View style={styles.inputBox}>
        <TextInput
          placeholder="Ex: sem cebola, molho à parte..."
          value={descricao}
          onChangeText={setDescricao}
          style={styles.input}
          multiline
        />
      </View>

      {/* BOTÃO */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Finalizar compra</Text>
      </TouchableOpacity>

      {/* MODAL */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Confirmar pedido</Text>

            <Text style={styles.modalText}>Produto: {nome}</Text>
            <Text style={styles.modalText}>Quantidade: {quantidade}</Text>
            <Text style={styles.modalText}>
              Descrição: {descricao || "Nenhuma"}
            </Text>

            <Text style={styles.modalTotal}>
              Total: R$ {(Number(preco?.replace("R$", "")) || 0) * quantidade}
            </Text>

            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setModalVisible(false);
                alert("Compra realizada!");
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                Confirmar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.modalButton,
                { backgroundColor: "#ccc", marginTop: 10 },
              ]}
              onPress={() => setModalVisible(false)}
            >
              <Text>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  price: {
    fontSize: 22,
    color: "#32C766",
    marginTop: 10,
    fontWeight: "bold",
  },
  button: {
    marginTop: 30,
    backgroundColor: "#32C766",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  qtdArea: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },

  qtdButton: {
    backgroundColor: "#ddd",
    padding: 10,
    borderRadius: 10,
  },

  qtdText: {
    fontSize: 20,
    fontWeight: "bold",
  },

  qtdNumber: {
    marginHorizontal: 15,
    fontSize: 18,
    fontWeight: "bold",
  },

  label: {
    marginTop: 20,
    fontWeight: "bold",
  },

  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },

  qtdArea: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 15,
  },

  qtdButton: {
    backgroundColor: "#32C766",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  qtdBtnText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },

  qtdBox: {
    marginHorizontal: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
  },

  qtdNumber: {
    fontSize: 18,
    fontWeight: "bold",
  },

  inputBox: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    marginTop: 10,
    minHeight: 80,
    borderWidth: 1,
    borderColor: "#eee",
  },

  input: {
    fontSize: 16,
    textAlignVertical: "top",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalBox: {
    width: "85%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },

  modalText: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: "center",
  },

  modalTotal: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#32C766",
  },

  modalButton: {
    width: "100%",
    marginTop: 15,
    backgroundColor: "#32C766",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
});
