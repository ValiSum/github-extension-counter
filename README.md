## Iniciar proyecto

- Clona la carpeta del proyecto en tu localhost
- Añade un archivo `.env` dentro de la carpeta raiz del proyecto con la siguiente linea: `REACT_APP_GITHUB_ACCESS_TOKEN=/* Your github personal access token */`
- Cambia `/* Your github personal access token */` por el token de acceso personal que se crea accediendo a `Settings > Developer settings > Personal access tokens` de tu cuenta de Github.
- Ejecuta en un terminal `yarn install` y luego `yarn start` estando en la carpeta raiz del proyecto.
- Accede a `http://localhost:3000/` para poder ver el proyecto levantado.

Tambien lo puedes ver desplegado accediendo [AQUI](https://github-extension-counter.valisum.com).

## Funcionamiento

- A traves de los parametros `Propietario` y `Repositorio` puedes acceder a un repositorio en particular para descargarte todas las extensiones y agruparlas por tipo de extensión.
- Una vez hecho eso, puedes filtrar y ordenar esas extensiones.

## Librerias usadas

- [Chakra UI](https://chakra-ui.com/)
- [Axios](https://axios-http.com/docs/intro)
- [Lodash](https://lodash.com/)
