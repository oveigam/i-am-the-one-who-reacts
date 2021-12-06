# I Am The One Who Reacts
Aplicación que muestra información sobre los personajes de Breaking Bad.
Consta de dos pantallas.

1. Lista de personajes: carga la lista de todos los personajes. Se puede buscar por nombre (o nickname). Al pulsar en alguno de los peronajes se avanza a la segunda pantalla de detalle de personaje.
2. Detalle de personaje: muestra la info del personaje. Se mostrará (si tiene) una cita aleatoria del personaje. Se puede refrescar esta cita dandole al botón de refrescar.

# Instalación
Instalar las dependencias
```sh
npm install
```
Iniciar la aplicación en modo desarrollo, abrir http://localhost:3000 para ver en el navegador
```sh
npm start
```
Iniciar tests
```sh
npm test
```
Compilar para produccion. Los resultados estarán en la carpeta "build"
```sh
npm build
```

# Aspectos técnicos
# React
Para la creación del proyecto se ha usado [create-react-app](https://create-react-app.dev/) con la versión actual de React 17.0.2.

# Librería de componentes
Para agilizar el desarrollo se ha decidido utilizar la librería [Meterial UI](https://mui.com/) principalmente por su facilidad de uso (especialmente para el diseño responsivo) y es una librería con la que ya estoy familiarizado.

# Routing
Para la navegación entre rutas se utiliza [react-router](https://reactrouter.com/) ya que es la solución más típica y con la que tengo experiencia.

# Internacionalización
Para la internacionalización de textos (inflés y español) he utilizado [react-i18next](https://react.i18next.com/) que ya me proporciona todos los compoenntes, hooks, etc. que necesito para mostrar los textos internacionalizados con una configuración mínima.

# Estado global
Para gestionar el estado global de la aplicación he decidido usar dos estrategias, ya que se mencionan en el enunciado, Context para gestionar el dark mode y Redux para los datos recuperados de la api.
La elección de ambas es principalmente por familiaridad, son las más comunes y que se mencionan directamente en el enunciado.

# Context
Para gestionar el tipo de tema que ustiliza el usuario utilizo el propio Context incluido en React.
Este context almacenará un boolean (isDarkMode) que identifica si usar el tema oscuro o no.
En el provider gestiono la lógica necesaria para persistir el valor en localStorage (y que se mantenga la configuración entre sesiones) y además incluyo el propio ThemeProvider the Material UI que sera el que se encargará de ajustar el tema acorde a lo seleccionado.

# Redux 
Para gestionar el estado global de los datos del servidor he usado redux ayudandome de [redux-toolkit](https://redux-toolkit.js.org/) que me permite simplificar la creación de los reducers y acciones sin tener que escribir todo el boilerplate típico de redux. Además, a día de hoy, es la manera recomendada por el equipo de redux para utilizar redux.
Para los side effects react toolkit ya utiliza thunk por defecto.
