// Tipos
export type DrawerParamList = {
  Home: undefined;
  'Adicionar Produto': undefined;
  Sobre: undefined;
};

export type RootStackParamList = {
  Login: undefined;
  AppDrawer: undefined;   
  Detalhes: { id: number }; 
};