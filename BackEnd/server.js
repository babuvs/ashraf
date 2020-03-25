const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const cors = require('cors');

//Models
const Role = require('./models/roles');
const User = require('./models/user');

const app = express();

//variables
const PORT = process.env.PORT || 5000;
const DB_STRING = process.env.DB_CONNECTION_STRING;

//DB Connection
mongoose.connect(DB_STRING, { useNewUrlParser: true,  useUnifiedTopology: true}, (err)=> {if(err) {console.log(err)} console.log(`MongoDB Connected`)});

//middlewares
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.send('Hello'));

app.post('/api/addRole', (req, res) => {
    const data = req.body;
    console.log(data);

    const role = new Role(data);

    role.save((err, doc) => {
        if(err){
            console.log(err);
        }
        console.log('document saved');
    });

    res.send(data);
});

app.post('/api/addUser', (req, res) => {
    const data = req.body;
    console.log(data);

    const user = new User(data);

    user.save((err, doc) => {
        if(err){
            console.log(err);
        }
        console.log('document saved');
    });

    res.send(data);
});

//GetUser
app.get('/api/user/:token', (req, res) => {
    const id = req.params.token;
    
    const user = User.findOne({token: id}, (err, user) => {
        if(err){
            console.log(err);
        }
        console.log(user);
        res.send(user);
    });
});

//Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));