import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from './messages/en.json';
import es from './messages/es.json';

i18n
    // Enlazamos la libreria de internacionalizacion con react
    .use(initReactI18next)
    // Anhadimos el plugin para detectar el lenguage usado
    .use(LanguageDetector)
    .init({
        // Indicamos los mensajes de traducciones (idiomas soportados: ingles y espanhol)
        resources: {
            en: {
                translation: en
            },
            es: {
                translation: es
            }
        },
        detection: {
            // Configuracion de deteccion de lenguage, se da prioridad a selecciones previas del usuario 
            // y si es la primera vez que entra al idioma del navegador
            order: ['localStorage', 'navigator'],
            lookupLocalStorage: 'laguage'
        },
        interpolation: {
            // Ya se encarga react
            escapeValue: false
        },
    });

export default i18n;