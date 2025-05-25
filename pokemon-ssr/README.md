# 🌐 PokemonSSR

PokemonSSR es una aplicación web que transforma una SPA tradicional en una solución optimizada para SEO y despliegues modernos, aprovechando al máximo el **Server Side Rendering (SSR)** y el **Static Site Generation (SSG)**.

## 🚀 Demo

**[PokemonSSR - Demo](https://pokemon-ssr.netlify.app/pokemons/page/1)**

## 🧰 Tecnologías y conceptos aplicados

🌐 **Server Side Rendering (SSR)**  
Renderizado de páginas de lado del servidor para mejorar el SEO y la velocidad de carga inicial.

📄 **Static Site Generation (SSG)**  
Generación de páginas estáticas en tiempo de build usando prerendering.

🔀 **SPA → SSR**  
Transformación de una Single Page Application a una aplicación renderizada en el servidor.

🧠 **Ejecución selectiva de código (Server/Client)**  
Capacidad de ejecutar lógica específica solo en el servidor o en el cliente según la necesidad.

🏷️ **SEO Metatags y Title dinámico**  
Gestión dinámica de etiquetas meta y títulos de página para mejorar la indexación en buscadores.

🔗 **Enlaces con metadata y paginación híbrida**  
Páginas independientes con peticiones HTTP previas a la generación de metadata y paginación basada en argumentos de ruta.

📝 **Generación dinámica de archivo de rutas**  
Script para construir automáticamente el archivo de rutas a prerenderizar.

🚀 **Despliegues optimizados**  
Consideraciones y configuración para desplegar aplicaciones SSR/SSG en netlify.

🔹 **Angular**  
Framework principal para construir la interfaz y la lógica de la aplicación.

💅 **Tailwind CSS**  
ramework de estilos para construir interfaces modernas, limpias y responsivas.

✅ **Testing**  
Pruebas unitarias para garantizar la calidad y el comportamiento esperado del código.

## 📝 SPA, SSR y SSG:

- **SPA (Single Page Application):**  
  Toda la aplicación se carga en el navegador y la navegación entre páginas ocurre sin recargar la web. Es rápida y fluida, pero tiene limitaciones de SEO porque el contenido no está disponible para los motores de búsqueda en la carga inicial.

- **SSR (Server Side Rendering):**  
  El servidor genera el HTML de cada página en cada petición, enviando contenido listo para ser indexado por buscadores y mejorando la carga inicial. Ideal para SEO y aplicaciones que requieren contenido dinámico.

- **SSG (Static Site Generation):**  
  Las páginas se generan de forma estática en el momento del build. El resultado es un sitio rápido y seguro, con excelente SEO, pero el contenido solo se actualiza cuando se vuelve a generar el sitio.
