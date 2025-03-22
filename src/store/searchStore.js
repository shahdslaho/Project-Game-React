import { create } from 'zustand';

// Zustand store for managing search text state
const useSearchStore = create((set) => ({
  searchText: '',
  setSearchText: (text) => set({ searchText: text }),
}));

export default useSearchStore;