const express = require('express');
const bodyParser = require('body-parser');
const mC = require(__dirname + './messages_controller');

const app = express();

app.use(bodyParser.json());
// If using build folder to give accomplished work to others (giving static website)
app.use(express.static(__dirname + '/../public/build'));

app.post('/api/messages', mC.create);
app.get('/api/messages', mC.read);
app.put('/api/messages', mC.update)
app.delete('/api/messages', mC.delete)

let PORT = 3001
app.listen(PORT, console.log(`Server is listening to ${PORT}`))