The app consist of backend and frontend, the frontend will be built using React and Redux and the backend using Expressjs and Nodejs.

## Client side
Create client 
```
    npm i create-react-app -g
    cd medium-clone
    create-react-app .
```


## Server side
```
    cd medium-clone
    mkdir server
    cd server
    mkdir controllers
    mkdir models
    mkdir routes
    npm i mongoose cloudinary helmet express cors connect-multiparty body-parser compression -S
```
- cloudinary is an Image/Video service which handles media (Images, Videos) sharing seamlessly. We will use it to upload our article feature image. 
- cors: It prevents cross-origin request errors.
- helmet: Like a real helmet, armours our API to prevent attacks.
- bodyparse.json: It is used to parse formdata in POST requests into req.bodyobject.


### Create models

### Create controllers

### Create routes

### Create server entry-point
```
    touch server/app.js
```