const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const authRouter = require('./routes/auth_routes');
const cors = require('cors');
const PORT = process.env.PORT || 9000;

const app = express();

mongoose.connect(keys.db_connect).then( ()=>{
    console.log('Connected to Mongo DB')
}).catch( err =>{
    console.log('Error connecting to Mongo DB:', err.message);
});

app.use(cors());
app.use(express.json());

authRouter(app);

app.get('/', (req, res)=> {
    res.send('<h1>App is working!</h1>');
});


app.listen(PORT, ()=>{
    console.log('Server running on ' + PORT);
});
