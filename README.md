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
```

### Base de datos

Se deben realizar lo siguientes pasos:
 - Crear base de datos
 - Configurar variables en archivo config/bd.js
 "username": "root",
    "password": null,
    "database": "db",
    "host": "127.0.0.1",
    "dialect": "mysql"
 
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
Para realizar las pruebas se debe configurar las siguientes variables del archivo config/index.js
 - test/user = Datos de un usuario registrado en bd
 - test/coinId = Id de criptomoneda existente en coingecko

Despues de configurar estas variables se debe correr el siguiente comando:
```sh
$ npm run test
```

