const express = require('express');
const database = require('./database');
const cors = require('cors');

database.sync().then(()=> console.log('db running...'));
const Operations = require('./models/Operations');

const app = express();
app.use(cors())
app.use(express.json());

app.get('/operations' ,async (req, res)=> {
    let operations = await Operations.findAll();
    res.send(operations)
})

app.post('/operations' ,async (req, res)=> {
    await Operations.create(req.body)
    .then(()=>res.status(200).send());
})

app.get('/operations/:id', async (req, res) => {
    res.status(200).send(await Operations.findByPk(req.params.id));
})

app.put('/operations/:id', async(req, res) => {
    let operation = await Operations.findByPk(req.params.id);
    operation.amount = req.body.amount;
    await operation.save();
    res.send('updated')
})

app.delete('/operations/:id', async (req, res) => {
    (await Operations.findByPk(req.params.id)).destroy()
    .then(()=> res.status(200).send())
})


const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`listening on port ${PORT}`))
