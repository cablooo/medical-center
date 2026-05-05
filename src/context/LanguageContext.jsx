import { createContext, useContext, useState, useEffect } from 'react'
import translations from '../translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')
  const t = translations[lang]

  useEffect(() => {
    document.documentElement.dir = t.dir
    document.documentElement.lang = lang
  }, [lang, t.dir])

  const toggleLang = () => setLang(prev => (prev === 'en' ? 'ar' : 'en'))

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
