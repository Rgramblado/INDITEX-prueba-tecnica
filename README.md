# Inditex Podcaster

Este proyecto ha sido creado desde cero, utilizando webpack para la realización de las tareas de despliegue e inicio local de la aplicación.

Está configurado con un modo de development y un modo de producción, de modo que, según el script que ejecutemos, tendremos un entorno u otro:

`npm start` inicia el proyecto en local en modo development.

`npm start:prod` inicia el proyecto en local en modo production.

`npm build` empaqueta el proyecto en modo development.

`npm build:prod` empaqueta el proyecto en modo production.

## Arquitectura

Durante la realización del proyecto hemos optado por una arquitectura de funciones puras. Esta decisión se ha tomado en base al tamaño del proyecto, sus características de comunicación con API y la facilidad que proporciona para realizar el desarrollo siguiendo TDD (Test Driven Development).

Consta de:
- Contexts: Contiene AppContext, que proporciona el estado global de la aplicación en lo que es necesario.
- Components: Componentes reutilizables en diferentes vistas
- Resolvers: Nos ayudan a aislar los servicios de los controladores de las vistas, de modo que actúan de interfaz para decidir la fuente de información (caché o API externa).
- Services: Realizan la comunicación con API y manejan un mapper para trasladar el resultado a un dominio propio.
- Types: Almacena algunos tipos generales que necesitamos.
- Utils: Almacen de utilidades a las que damos uso en diferentes situaciones.
- Views: Contiene las vistas de la aplicación.

Dentro de cada vista tenemos:
- Componente principal
- Hook
- Handlers

De este modo, aislamos renderizado, estado y lógica, facilitando, como antes hemos mencionado, el desarrollo TDD.

## Testing

Toda la aplicación está testeada con test unitarios, al menos al 80% de coverage, con Jest y React Testing Library.