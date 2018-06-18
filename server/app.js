// server/app.js
const express = require("express")
const mongoose = require('mongoose')
// cors: It prevents cross-origin request errors.
const cors = require('cors')
// parse formdata in POST requests into req.bodyobject.
const bodyParser = require('body-parser')
// armours the APIs to prevent attacks.
const helmet = require('helmet')
// Image/Video service which handles media
const cloudinary = require('cloudinary')

// App routes
const routes = require('./routes/')

const app = express()
const router = express.Router()
const url = process.env.MONGODB_URI || "mongodb://admin:admin123@ds263460.mlab.com:63460/medium-clone"

/** configure cloudinary */
cloudinary.config({
    cloud_name: 'YOUR_CLOUDINARY_NAME_HERE',
    api_key: 'YOUR_CLOUDINARY_API_KEY_HERE',
    api_secret: 'YOUR_CLOUDINARY_API_SECRET_HERE'
})

/** connect to MongoDB datastore */
try {
    mongoose.connect(url, {
        //useMongoClient: true
    })
} catch (error) {

}

let port = 5000 || process.env.PORT

/** set up routes {API Endpoints} */
routes(router)

/** set up middlewares */
app.use(cors())
app.use(bodyParser.json())
app.use(helmet())
//app.use('/static',express.static(path.join(__dirname,'static')))

app.use('/api', router)

/** start server */
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});