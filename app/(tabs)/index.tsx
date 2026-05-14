import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Burger");
  const categorias = [
    { emoji: "🍔", nome: "Burger" },
    { emoji: "🍕", nome: "Pizza" },
    { emoji: "🍣", nome: "Sushi" },
    { emoji: "🎂", nome: "Bolo" },
    { emoji: "🥤", nome: "Drinks" },
  ];

  const produtos = {
    Burger: [
      {
        nome: "X-Tudo",
        preco: "R$ 32",
        imagem: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      },

      {
        nome: "Smash Burger",
        preco: "R$ 28",
        imagem:
          "https://fibo.promokit.com.br/images/empresa/8bd24ea0-f789-11ee-9e74-ebf2784bb0af.png",
      },

      {
        nome: "Cheddar Bacon",
        preco: "R$ 35",
        imagem:
          "https://temperonapanela.com.br/wp-content/uploads/28_05-blog.png",
      },

      {
        nome: "Duplo Burger",
        preco: "R$ 40",
        imagem: "https://images.unsplash.com/photo-1553979459-d2229ba7433b",
      },

      {
        nome: "Monster Bacon",
        preco: "R$ 42",
        imagem:
          "https://ogimg.infoglobo.com.br/in/23479725-1b1-ff2/FT1086A/20180511DonninhaFotoVitor-Faria-media-1.jpg",
      },

      {
        nome: "Cheese Salad",
        preco: "R$ 30",
        imagem: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
      },

      {
        nome: "Burger Supreme",
        preco: "R$ 39",
        imagem: "https://images.unsplash.com/photo-1606755962773-d324e0a13086",
      },

      {
        nome: "Mega Burger",
        preco: "R$ 45",
        imagem:
          "https://www.sabornamesa.com.br/media/k2/items/cache/bf1e20a4462b71e3cc4cece2a8c96ac8_M.jpg",
      },

      {
        nome: "Texas Burger",
        preco: "R$ 37",
        imagem: "https://images.unsplash.com/photo-1520072959219-c595dc870360",
      },

      {
        nome: "Classic Burger",
        preco: "R$ 26",
        imagem: "https://images.unsplash.com/photo-1508737027454-e6454ef45afd",
      },
    ],

    Pizza: [
      {
        nome: "Calabresa",
        preco: "R$ 45",
        imagem:
          "https://www.sabornamesa.com.br/media/k2/items/cache/513d7a0ab11e38f7bd117d760146fed3_M.jpg",
      },

      {
        nome: "4 Queijos",
        preco: "R$ 52",
        imagem:
          "https://www.ogastronomo.com.br/upload/747855897-a-arte-e-a-historia-da-pizza-quatro-queijos-um-guia-completo.jpg",
      },

      {
        nome: "Portuguesa",
        preco: "R$ 52",
        imagem:
          "https://temperobom.com.br/wp-content/uploads/2025/12/receita-de-pizza-portuguesa-caseira-facil-de-fazer.jpg.webp",
      },

      {
        nome: "Frango com Catupiry",
        preco: "R$ 52",
        imagem:
          "https://s2-receitas.glbimg.com/X1Jh31TcFcl8b8U_D_j7bYJFLrU=/0x0:1200x675/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2024/l/N/7LsasZQoqZitWuUyIjAQ/pizza-de-frango-com-catupiry.jpg",
      },

      {
        nome: "Balacubana",
        preco: "R$ 50",
        imagem:
          "https://cdn0.tudoreceitas.com/pt/posts/9/8/3/pizza_calabresa_e_mussarela_4389_600.webp",
      },

      {
        nome: "Pizza de Chocolate",
        preco: "R$ 35",
        imagem:
          "https://selecoes.ig.com.br/media/_versions/legacy/8/0/220ccc849f230ead1bb53b6ec6aec743ceaaed01_widelg.jpg",
      },

      {
        nome: "Napolitana",
        preco: "R$ 30",
        imagem:
          "https://blog.livup.com.br/wp-content/uploads/2021/06/pizza-napolitana-800x534.jpg",
      },

      {
        nome: "Pepperoni",
        preco: "R$ 58",
        imagem:
          "https://www.seara.com.br/wp-content/uploads/2025/09/pizza-de-pepperoni-caseira-portal-minha-receita.jpg",
      },

      {
        nome: "Mussarela",
        preco: "R$ 46",
        imagem:
          "https://swiftbr.vteximg.com.br/arquivos/ids/207855-702-702/618284-pizza-artesanal-de-mussarela_rec.webp?v=638851842154900000",
      },

      {
        nome: "Bacon",
        preco: "R$ 52",
        imagem:
          "https://receitason.com/wp-content/uploads/2023/04/pizza-de-bacon-com-queijo-1013x675.jpg.webp",
      },
    ],

    Sushi: [
      {
        nome: "Hot Roll",
        preco: "R$ 32",
        imagem:
          "https://www.sabornamesa.com.br/media/k2/items/cache/f269038fa4534045b59925e7d5e023e1_M.jpg",
      },

      {
        nome: "Nigiri",
        preco: "R$ 25",
        imagem:
          "https://i0.wp.com/www.craftycookbook.com/wp-content/uploads/2024/04/img_4608-2-1.jpg?resize=1229%2C1536&ssl=1",
      },

      {
        nome: "Sashimi",
        preco: "R$ 20",
        imagem: "https://djapa.com.br/wp-content/uploads/2020/07/peixe-cru.jpg",
      },

      {
        nome: "Maki",
        preco: "R$ 28",
        imagem:
          "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/985C57BF-3015-46E3-B5E6-97A9DE6CB325/Derivates/28ab3191-3d43-4455-b13f-0f0876cb30cf.jpg",
      },

      {
        nome: "California Roll",
        preco: "R$ 25",
        imagem:
          "https://norecipes.com/wp-content/uploads/2019/12/best-california-roll-003-1025x1536.jpg",
      },

      {
        nome: "Temaki",
        preco: "R$ 32",
        imagem:
          "https://www.seara.com.br/wp-content/uploads/2025/09/R0625-SP-temaki-tradicional-1200x675-1.webp",
      },

      {
        nome: "Uramaki",
        preco: "R$ 28",
        imagem: "https://djapa.com.br/wp-content/uploads/2021/07/uramaki-1.jpg",
      },

      {
        nome: "Dragon Roll",
        preco: "R$ 22",
        imagem:
          "https://www.afarmgirlsdabbles.com/wp-content/uploads/2022/10/Dragon-Roll38797_1400-1025x1536.jpg",
      },

      {
        nome: "Philadelphia Roll",
        preco: "R$ 52",
        imagem:
          "https://pickledplum.com/wp-content/uploads/2023/04/Philadelphia-roll-05-1024x1536.jpg",
      },

      {
        nome: "Ebi Sushi",
        preco: "R$ 52",
        imagem:
          "https://thumbs.dreamstime.com/b/sushi-de-ebi-17454928.jpg?w=992",
      },
    ],

    Bolo: [
      {
        nome: "Chocolate",
        preco: "R$ 18",
        imagem: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
      },

      {
        nome: "Bolo de Cenoura",
        preco: "R$ 15",
        imagem:
          "https://static.itdg.com.br/images/640-400/b2b92774c7fec4a05604e5573ef5a294/365326-original.jpg",
      },

      {
        nome: "Bolo de Milho",
        preco: "R$ 15",
        imagem:
          "https://guiadacozinha.com.br/wp-content/uploads/2018/05/bolodefubacommilhocremoso.webp",
      },

      {
        nome: "Bolo Vulcão",
        preco: "R$ 45",
        imagem:
          "https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/c7558250d6a39eaf6cf970f61f095d4a.webp?itok=Y_nB21ly",
      },

      {
        nome: "Cheesecake",
        preco: "R$ 45",
        imagem:
          "https://www.sabornamesa.com.br/media/k2/items/cache/2a8e1377a86b78fb480ecd3a62e761cd_M.jpg",
      },

      {
        nome: "Bolo de Leite Ninho",
        preco: "R$ 25",
        imagem:
          "https://www.minhasreceitas.blog.br/wp-content/webp-express/webp-images/uploads/2020/08/Bolo-de-leite-Ninho-com-cobertura-de-creme-de-leite-Ninho.jpg.webp",
      },

      {
        nome: "Bolo de Fubá",
        preco: "R$ 25",
        imagem:
          "https://s2-receitas.glbimg.com/Y-bLmPCp22RZsTyVehcOk7JWwJA=/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/w/I/HzhyCkTqm1UoDynv8XDQ/bolo-de-fuba-fofino.jpg",
      },

      {
        nome: "Bolo de Paçoca",
        preco: "R$ 25",
        imagem:
          "https://guiadacozinha.com.br/wp-content/uploads/2018/05/bolo-gelado-de-pacoca-350x230.jpg",
      },

      {
        nome: "Bolo de Abacaxi",
        preco: "R$ 25",
        imagem:
          "https://static.itdg.com.br/images/640-400/75e9517577502d61b2eb2f77daef1540/3207-original.jpg",
      },

      {
        nome: "Bolo de Macaxeira",
        preco: "R$ 25",
        imagem:
          "https://s2-receitas.glbimg.com/CCy7yD0375aeHomi5Xg5LS5l62c=/0x0:924x924/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2024/g/2/Xkm1eVQHOghnkYF9qDkw/bolo-de-mandioca-cremoso.jpg",
      },
    ],

    Drinks: [
      {
        nome: "Coca Cola",
        preco: "R$ 12",
        imagem:
          "https://as2.ftcdn.net/jpg/02/84/65/61/1000_F_284656117_sPF8gVWaX627bq5qKrlrvCz1eFfowdBf.webp",
      },

      {
        nome: "Pepsi",
        preco: "R$ 10",
        imagem:
          "https://c4.wallpaperflare.com/wallpaper/928/1016/1015/ice-drops-glass-bank-wallpaper-preview.jpg",
      },

      {
        nome: "Milk Shake",
        preco: "R$ 16",
        imagem:
          "https://guiadacozinha.com.br/wp-content/uploads/2015/01/milk-shake-caseiro-1-350x230.jpg",
      },

      {
        nome: "Caldo de Cana",
        preco: "R$ 8",
        imagem:
          "https://static1.minhavida.com.br/recipes/ca/7a/90/8b/caldo-de-cana-engorda-article-1.jpg",
      },

      {
        nome: "Café",
        preco: "R$ 6",
        imagem:
          "https://vidavg.com.br/wp-content/uploads/2021/06/historia_do_cafe-968x660-1.jpg",
      },

      {
        nome: "Guaraná",
        preco: "R$ 16",
        imagem:
          "https://files.sunoresearch.com.br/n/uploads/2019/02/55dce734-guaran%C3%A1-antartica2-800x450.webp",
      },

      {
        nome: "Chá",
        preco: "R$ 12",
        imagem:
          "https://ciclovivo.com.br/wp-content/uploads/2021/05/plantas-Brasil-cha-1024x714.jpg",
      },

      {
        nome: "Energético",
        preco: "R$ 16",
        imagem:
          "https://cdn.dooca.store/43635/products/energetico-red-bull_640x640+fill_ffffff.jpg?v=1670686932",
      },

      {
        nome: "Achocolatado",
        preco: "R$ 7",
        imagem:
          "https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/3a7695c85f9ebfa5b9ea48ffb8f92c9a.webp?itok=jRmzzr_v",
      },

      {
        nome: "Água de Coco",
        preco: "R$ 8",
        imagem:
          "https://totalpass.com/wp-content/uploads/2025/08/agua-de-coco.jpg",
      },
    ],
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingBottom: 140,
      }}
    >
      {/* HEADER */}

      <View style={styles.header}>
        <Image
          source={{
            uri: "",
          }}
          style={styles.avatar}
        />

        <TouchableOpacity onPress={() => router.push("/configuracoes")}>
          <Ionicons name="settings-outline" size={30} color="#000" />
        </TouchableOpacity>
      </View>

      {/* TITULO */}

      <Text style={styles.food}>Silva</Text>
      <Text style={styles.delivery}>Lanchonete!</Text>

      {/* SEARCH */}

      <View style={styles.searchArea}>
        <TextInput
          placeholder="Search"
          placeholderTextColor="#999"
          style={styles.input}
        />

        <View style={styles.filterButton}>
          <Text style={styles.filterText}>⚙</Text>
        </View>
      </View>

      {/* CATEGORIAS */}

      <Text style={styles.sectionTitle}>Categories</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categorias.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.categoryCard,

              categoriaSelecionada === item.nome && {
                backgroundColor: "#32C766",
              },
            ]}
            onPress={() => setCategoriaSelecionada(item.nome)}
          >
            <Text style={styles.emoji}>{item.emoji}</Text>

            <Text style={styles.categoryName}>{item.nome}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* RECOMENDADOS */}

      <Text style={styles.sectionTitle}>Recommended</Text>

      <View style={styles.recommendedArea}>
        {produtos[categoriaSelecionada].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.foodCard}
            onPress={() =>
              router.push({
                pathname: "/produto/[nome]",
                params: {
                  nome: item.nome,
                  preco: item.preco,
                  imagem: item.imagem,
                },
              })
            }
          >
            <Image source={{ uri: item.imagem }} style={styles.foodImage} />

            <Text style={styles.foodName}>{item.nome}</Text>

            <Text style={styles.foodPrice}>{item.preco}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 120,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },

  menu: {
    fontSize: 26,
  },

  food: {
    fontSize: 34,
    marginTop: 20,
  },

  delivery: {
    fontSize: 38,
    fontWeight: "bold",
    marginBottom: 25,
  },

  searchArea: {
    flexDirection: "row",
    marginBottom: 30,
  },

  input: {
    flex: 1,
    backgroundColor: "#EAEAEA",
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 50,
  },

  filterButton: {
    backgroundColor: "#f78400",
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },

  filterText: {
    color: "#fff",
    fontSize: 20,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },

  categoryCard: {
    backgroundColor: "#b0aeac",
    width: 90,
    height: 110,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    marginBottom: 30,
  },

  emoji: {
    fontSize: 32,
    marginBottom: 10,
  },

  categoryName: {
    fontWeight: "bold",
  },

  recommendedArea: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  foodCard: {
    backgroundColor: "#fff",
    width: "48%",
    borderRadius: 20,
    padding: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,

    marginBottom: 20,
  },

  foodImage: {
    width: "100%",
    height: 120,
    borderRadius: 15,
    marginBottom: 10,
  },

  foodName: {
    fontSize: 18,
    fontWeight: "bold",
  },

  foodPrice: {
    color: "#32C766",
    marginTop: 5,
    fontWeight: "bold",
  },
});
