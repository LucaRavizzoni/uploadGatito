import React from "react";

import { FlatList } from "react-native";

import Item from "./Item";

import StatusCarrinho from "../../componentes/StatusCarrinho";

import TelaPadrao from "../../componentes/TelaPadrao";

const servicos = [
  {
    id: 1,
    nome: "Banho",
    preco: 79.9,
    descricao: "Especializados em banho para gatos",
    quantidade: 1,
  },
  {
    id: 2,
    nome: "Massagem",
    preco: 190.9,
    descricao:
      "Massagem super relaxante para felinos. Aplicada por profissionais altamente treinados na Arte",
    quantidade: 2,
  },
  {
    id: 3,
    nome: "Vacina",
    preco: 150.0,
    descricao:
      "Vacina 4.0 coquetel completo com tudo que o seu felino precisa!",
    quantidade: 1,
  },
];

export default function Carrinho() {
  const total = servicos.reduce(
    (soma, { preco, quantidade }) => soma + preco * quantidade,
    0
  );

  return (
    <TelaPadrao>
      <StatusCarrinho total={total} />
      <FlatList
        data={servicos}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={({ id }) => String(id)}
      />
    </TelaPadrao>
  );
}
