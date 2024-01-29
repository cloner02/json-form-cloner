# json-form
 Create forms from a Json 

## Getting started

In the project app directory, you can run:

```bash

# install dependencies
$ npm install

# build for production and create the folders dist-node and dist-webpack
$ npm run build:prod

# build for development and create the folders dist-node and dist-webpack
$ npm run build:dev

```

## Do tests
 If you want to do tests locally, you must write these commands in bash the first time, when you are already in the app directory:
 
 ```bash
 $ cd src
 $ npm link
 $ cd ..
 $ cd tests
 $ npm link json-form-cloner
 ```

Then :
 npm run test
