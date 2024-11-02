
import { adicionarItem } from "./javaScript/adicionarItem.js";
import { verificarListaComprados } from "./javaScript/verificarListaComprados.js";

const botaoSalvarItem = document.getElementById("adicionar-item");
botaoSalvarItem.addEventListener("click", adicionarItem);

const listaComprados = document.getElementById("lista-comprados");
verificarListaComprados(listaComprados);