Projeto voltado ao desenvolvimento PWA
###Tecnologias
##Bundler
"webpack": "^5.21.1",

##Plugins Webpack
"clean-webpack-plugin": "^3.0.0",
"copy-webpack-plugin": "^7.0.0",
"css-loader": "^5.0.1",
"dotenv": "^8.2.0",
"file-loader": "^6.2.0",
"html-webpack-plugin": "^5.0.0",
"mini-css-extract-plugin": "^1.3.5",
"node-sass": "^4.0.0",
"resolve-url-loader": "^3.1.2",
"sass-loader": "^10.1.1",
"source-map-loader": "^2.0.0",
"webpack-cli": "^4.5.0",
"webpack-dev-server": "^3.11.2",
"webpack-manifest-plugin": "^3.0.0",
"webpack-merge": "^5.7.3",
"workbox-webpack-plugin": "^6.1.0"
"style-loader": "^2.0.0",
"ts-loader": "^8.0.15",

##Projeto baseado em TS  
 "typescript": "^4.1.3",

##Estilos
"bootstrap": "^4.6.0",

##Service Worker
Utilização do workbox

## Build project with container

docker build -t pwa-figaroo-app .

docker run -it -p 3000:80 example-react-app
