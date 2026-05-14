Silva Lanchonete - Projeto React Native (Expo)

Este projeto é um aplicativo de delivery desenvolvido com React Native e Expo Router, simulando um sistema de pedidos online com interface moderna e navegação entre telas.

Objetivo do Projeto

Este projeto foi criado com fins educacionais para praticar desenvolvimento mobile, focando em:

Criação de interfaces mobile
Navegação entre telas com Expo Router
Manipulação de estado com React Hooks
Uso de componentes nativos do React Native
Simulação de um aplicativo real de delivery

Funcionalidades

Lista de produtos por categoria
Seleção de itens (hambúrguer, pizza, sushi, bolos e bebidas)
Página de detalhes do produto
Seleção de quantidade
Campo de descrição do pedido
Modal de confirmação de compra
Carrinho com itens adicionados
Histórico de pedidos entregues
Navegação por abas
Interface responsiva e organizada

Tecnologias utilizadas

React Native
Expo
Expo Router
JavaScript
StyleSheet
FlatList
Modal
Hooks (useState)

Estrutura do projeto

app/
├── index (Home)
├── produto/[nome]
├── carrinho
├── perfil
├── configuracoes
├── login

▶️ Como executar o projeto

1. Instalar dependências
   npm install

ou

yarn install

2. Iniciar o projeto

npx expo start

3. Rodar no celular

Instale o app Expo Go
Escaneie o QR Code exibido no terminal ou navegador

Organização do sistema

Home

Exibe categorias de alimentos
Lista produtos disponíveis
Navegação para detalhes do produto

Produto

Exibe informações do item
Permite selecionar quantidade
Campo para observações do pedido
Confirmação de compra via modal

Carrinho

Lista itens adicionados
Exibe total da compra
Mostra histórico de pedidos entregues

Perfil

Informações do usuário
Dados pessoais simulados

Configurações

Opções do sistema

Observação sobre o projeto

O aplicativo não possui backend real, sendo um projeto simulado com foco em aprendizado de front-end mobile.

Os dados são armazenados apenas em estado local durante a execução.

Autores:

Desenvolvido por Wendel, Luiz e Gilberto

📌 Considerações finais

Este projeto representa um estudo prático de desenvolvimento mobile, simulando um app de delivery real com foco em experiência do usuário, organização de código e navegação entre telas.
