// استيراد المكتبات المطلوبة من زوستاند
import { create } from 'zustand'
// استيراد وسيط التخزين لتمكين حفظ الحالة
import { persist } from 'zustand/middleware'

// إنشاء مخزن للثيم باستخدام زوستاند
const useThemeStore = create(
  // استخدام وسيط التخزين لحفظ الثيم في ذاكرة التخزين المحلية
  persist(
    // تكوين المخزن مع دالة set لتحديث الحالة
    (set) => ({
      // حالة الثيم الأولية تم تعيينها إلى 'light'
      theme: 'light',
      
      // دالة للتبديل بين الثيمات الفاتحة والداكنة
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        })),
      
      // دالة لتعيين الثيم مباشرة إلى قيمة محددة
      setTheme: (theme) => set({ theme }),
    }),
    {
      // إعدادات وسيط التخزين
      name: 'theme-storage', // اسم فريد لمفتاح التخزين المحلي
    }
  )
)

// تصدير مخزن الثيم للاستخدام في المكونات
export default useThemeStore
