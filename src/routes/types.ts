import { Produto } from '../components/CardProduto';

export type DrawerParamList = {
  Home: undefined;
  'Adicionar Produto': undefined;
  Sobre: undefined;
};

export type RootStackParamList = {
  Login: undefined;
  AppDrawer: undefined;
  Detalhes: { produto: Produto };
EditProduct: { produto: Produto };
  
};