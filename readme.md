COMO VOLVERLO A CREAR

npm init 
npm install --save-dev @babel/preset-env
npm install --save-dev jest

create .babelrc
{
    "presets": ["@babel/preset-env"]
}

cambiar la linea de script en el archivo package.json
 "test": "echo \"Error: no test specified\" && exit 1"
 for 
  "test": "jest"

para ejecutar los test 
  npm run test  

ahora para poder ejecutar el codigo en node mediante babel 

npm install --save-dev @babel/node

y se inicia como 
npx babel-node mycomponent.js
o 
npm run test 


COMO USARLO

npm install
npm run test 
npm run start 




como he intalado el cliente de telegram para las pruebas de integraciones
usando gramjs  npm
npm i telegram -D

get your telegram account on https://my.telegram.org/auth   
https://my.telegram.org/apps  create an app , and copy the configuration of 
App api_id:
App api_hash:
App title:
Short name:

npm i input -D

change the file client_integration.test.js on ./test  the values of apiId and apiHash

run the script integrationTest
npm runt integrationTest

contesta todas las preguntas con tu numero de telefono y el codigo que te han mandado al telegram , copia el codigo hash que te aparece y pegalo en la constante 
stringSession  que veras en el archivo client_integration.test.js 

para el programa y vuele a iniciar el test de integracion
esta vez no pide datos porque ya tiene la clave apiHash

ahora ponemos los parametros ocultos para no subirlos al git 

npm install dotenv --save

change the configuration keys to .env


npm run integrationTest


