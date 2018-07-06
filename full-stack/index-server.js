const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();


const app = express(); 
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db',database);
}).catch(error => {
    console.log('--------error', error);
})

app.get('/api/heroes', (req, res) => {
    req.app.get('db').get_heroes().then(heroes => {
        res.json(heroes);
    }).catch(error => {
        console.log('error', error);
        res.status(500).send('There was an error on the server')
    })
})
app.post('/api/heroes', (req, res) => {
    const hero = req.body;
    req.app.get('db').create_hero({
        name: hero.name,
        streetName: hero.streetName, 
        age: hero.age,
        powers: hero.powers,
        pictureUrl: hero.pictureUrl
    }).then((newHeroes) => {
        res.json(newHeroes[0]);
    }).catch(error => {
        console.log('error',error);
        res.status(500).send('There was an error on the server');
    })
})

const PORT = 3001;
app.listen(PORT, () => { console.log(`server is running on port ${PORT}`)
});
