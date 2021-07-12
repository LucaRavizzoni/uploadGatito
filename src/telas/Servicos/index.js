import React from "react";

import { FlatList } from "react-native";

import TelaPadrao from "../../componentes/TelaPadrao";
import Item from "./Item";

const servicos = [
  {
    id: 1,
    nome: "Banho",
    preco: 79.9,
    descricao: "Especializados em banho para gatos",
  },
  {
    id: 2,
    nome: "Massagem",
    preco: 190.9,
    descricao:
      "Massagem super relaxante para felinos. Aplicada por profissionais altamente treinados na Arte",
  },
  {
    id: 3,
    nome: "Vacina",
    preco: 150.0,
    descricao:
      "Vacina 4.0 coquetel completo com tudo que o seu felino precisa!",
  },
];

export default function Servicos() {
  return (
    <TelaPadrao>
      <FlatList
        data={servicos}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={({ id }) => String(id)}
      />
    </TelaPadrao>
  );
}
