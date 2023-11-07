# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

En el archivo CharacterList.jsx
1. **Importaciones:**
   - Importa los módulos `useState` y `useEffect` de React y el componente `Character` desde un archivo externo.

2. **Componente `NavPage`:**
   - Es un componente funcional que renderiza la barra de navegación de páginas. Muestra el número de página actual y un botón para avanzar a la siguiente página.

3. **Componente `CharacterList`:**
   - Es el componente principal que lista los personajes de Pokémon.
   - Utiliza estados para manejar la carga de datos, los personajes y el número de página.
   - Utiliza `useEffect` para realizar la solicitud a la API cuando cambia la página o al inicio.
   - Llama a la función `fetchData` para obtener datos de los Pokémon.
   - Muestra un mensaje de "Loading..." mientras se cargan los datos y luego muestra la lista de personajes.
   - Usa el componente `Character` para renderizar cada personaje, pasando las propiedades de nombre y URL de imagen (asumiendo que las imágenes se obtienen de la API de Pokémon).

4. **Función `fetchData`:**
   - Función asíncrona para obtener los datos de los Pokémon.
   - Realiza una solicitud a la API de Pokémon para obtener una lista de Pokémon.
   - Obtiene los detalles de cada Pokémon individual basado en la URL proporcionada en la respuesta.
   - Extrae la URL de la imagen del detalle de cada Pokémon y almacena estos datos en el estado de `characters`.
  
5. **Renderizado de la Interfaz:**
   - Muestra la barra de navegación de páginas (`NavPage`) para permitir la navegación entre las páginas de resultados.
   - Muestra un mensaje de carga o la lista de personajes de Pokémon, dependiendo del estado de carga.
   - Por cada personaje obtenido, utiliza el componente `Character` para renderizar el nombre y la imagen del Pokémon, si están disponibles.

En el archivo Character.jsx

1. **Función `Character`:**
   - Es un componente funcional que recibe un objeto `character` como argumento.
   - Muestra la información del personaje de Pokémon.
   - Imprime en la consola el objeto `character` recibido para su depuración.

2. **Renderizado del Componente:**
   - Renderiza una tarjeta (`card`) que muestra información sobre el personaje.
   - Estiliza la tarjeta con un ancho fijo (`w-96`) y colores específicos (`bg-secondary` y `text-primary-content`).
   - Muestra el nombre del personaje (`character.name`) en un título de nivel 2 (`h2`).
   - Muestra el peso del personaje (`character.weight`) en un párrafo (`p`), presumiblemente asumiendo que estas propiedades están presentes en el objeto `character`.
