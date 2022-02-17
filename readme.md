como crear este template

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
