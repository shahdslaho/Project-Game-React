// Import required libraries from Zustand
import { create } from 'zustand'

import { persist } from 'zustand/middleware'

// Create a theme store using Zustand
const useThemeStore = create(persist((set) => ({ theme: 'dark',
    
      toggleTheme: () =>
        set((state) => ({theme: state.theme === 'light' ? 'dark' : 'light',})),
    
      setTheme: (theme) => set({ theme }),}),
    {name: 'theme-storage',}
  )
)

export default useThemeStore
