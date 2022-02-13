npm init




npm install --save-dev telegraf jest @babel/cli @babel/core @babel/preset-env jest @babel/register

it did not work properly with npm install 
the error:
npm ERR! code E404
npm ERR! 404 Not Found - GET https://registry.npmjs.org/create-babel-jest - Not found
npm ERR! 404 
npm ERR! 404  'create-babel-jest@latest' is not in this registry.
npm ERR! 404 You should bug the author to publish it (or use the name yourself!)
npm ERR! 404
npm ERR! 404 Note that you can also install from a
npm ERR! 404 tarball, folder, http url, or git url.

npm ERR! A complete log of this run can be found in:



yarn add --dev babel-jest   
 

.babelrc
{
    "presets": ["@babel/preset-env"]
  }
