The app consist of backend and frontend, the frontend will be built using React and Redux and the backend using Expressjs and Nodejs.

## Client side
Create client 
```
    npm i create-react-app -g
    cd medium-clone
    create-react-app .

    npm i axios history prop-types react-google-login redux react-redux react-router-dom react-router-redux redux-devtools-extension redux-logger redux-thunk -S
```
- history is a JavaScript library that lets you easily manage session history anywhere JavaScript runs

### Create reducers and states
```
    mkdir src/redux

    mkdir src/redux/reducers
    touch src/redux/reducers/articles.js
    touch src/redux/reducers/authUser.js
    touch src/redux/reducers/common.js
```

### Combine reducers into a single reducers

### Create actions

### Craete store
     use the reducer as an argument to create our store

### Bind react with redux store
```
    <Provider store={store}>
        <App />
    </Provider>
```

### Add components and routes

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
### Run server
```
    node server/app.js
```