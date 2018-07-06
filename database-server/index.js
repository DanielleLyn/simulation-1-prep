const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config(); 
const pC = require('./products_controller');

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db',database);
}).catch(error => console.log('error', error));

app.post( '/api/product', pC.create );
app.get( '/api/products', pC.getAll );
app.get( '/api/product/:id', pC.getOne );
app.put( '/api/product/:id', pC.update );
app.delete( '/api/product/:id', pC.delete );





const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`server is listening on server ${PORT}`)
})
