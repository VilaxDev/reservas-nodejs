const express = require('express')
const app = express()
const cors = require('cors');

const corsOptions = {
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
};

app.use(cors(corsOptions));


app.set('view engine', 'ejs');

const engine = require('ejs-mate');
app.engine('ejs', engine);

app.set('views', __dirname + '/views');



//Rutas
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', require('./routes/router'));


app.listen(3000, () => {
    console.log(`http://localhost:3000`)
})