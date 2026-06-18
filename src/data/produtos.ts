import AsyncStorage from '@react-native-async-storage/async-storage';
import { Produto } from '../components/CardProduto';
import produtosIniciais from '../../Products.json';

const STORAGE_KEY = '@loja34:produtos';

async function salvar(produtos: Produto[]): Promise<void> {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(produtos));
}

export async function getProdutos(): Promise<Produto[]> {
  try {
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    if (json) {
      return JSON.parse(json) as Produto[];
    }
    await salvar(produtosIniciais);
    return produtosIniciais;
  } catch (error) {
    console.error('Erro ao carregar produtos do storage:', error);
    return produtosIniciais;
  }
}

export async function adicionarProduto(novoProduto: Omit<Produto, 'id'>): Promise<Produto[]> {
  const produtosAtuais = await getProdutos();
  const proximoId = produtosAtuais.reduce((maxId, p) => Math.max(maxId, p.id), 0) + 1;
  const produtoCriado: Produto = { ...novoProduto, id: proximoId };

  const atualizados = [...produtosAtuais, produtoCriado];
  await salvar(atualizados);
  return atualizados;
}
