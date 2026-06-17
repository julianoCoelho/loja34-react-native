import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';


export const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1, 
  },
  headerContainer: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  brandText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userSubtitle: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  listContainer: {
    flex: 1, 
    paddingHorizontal: 8,
  },
  logoutContainer: {
    padding: 16,
    borderTopWidth: 1,
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 10,
    backgroundColor: '#fee2e2', 
    borderRadius: 8,
    width: '100%',
  },
  logoutText: {
    color: theme.colors.danger, 
    fontSize: 14,
    fontWeight: '600',
  },
});
