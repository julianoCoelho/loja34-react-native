import { StyleSheet } from 'react-native';

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
    backgroundColor: '#2563eb',
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
  themeToggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderTopWidth: 1,
    gap: 8,
  },
  themeToggleLabel: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
  },
  themeSwitch: {},
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
    fontSize: 14,
    fontWeight: '600',
  },
});
