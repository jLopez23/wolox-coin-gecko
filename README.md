# Wolox CoinGecko

### Instalación

Instalar las dependencias y devDependencies del proyecto

```sh
$ npm install 
```

Crear el archivo .env y agregar las siguientes variables

```sh
SECRET_KEY=keyToken
ENDPOINT_COIN_MARKETS=https://api.coingecko.com/api/v3/coins/markets
DB_HOST=
DB_USERNAME=
DB_PASSWORD=
DB_NAME=
```

### Base de datos

```sh
Se deben realizar lo siguientes pasos:
 - Crear base de datos
 - Configurar variables db en archivo env:
    DB_USERNAME=root
    DB_PASSWORD=
    DB_NAME=wolox
    DB_HOST=127.0.0.1
```
 
### Migraciones

Correr el siguiente comando:
```sh
$ npx sequelize-cli db:migrate
```

### Iniciar aplicación

Para iniciar la aplicación se debe correr el siguiente comando:
```sh
$ npm run start
```
### Testing
```sh
Para realizar las pruebas se debe configurar las siguientes variables del archivo config/index.js
 - test/user = Datos de un usuario registrado en bd
 - test/coinId = Id de criptomoneda existente en coingecko
 ```

Despues de configurar estas variables se debe correr el siguiente comando:
```sh
$ npm run test
```

