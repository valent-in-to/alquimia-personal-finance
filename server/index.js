const express = require('express');
const database = require('./database');

database.sync().then(()=> console.log('db running...'));
const Operations = require('./models/Operations');

const app = express();
app.use(express.json());

app.get('/operations', async (req, res)=> {
    let operations = await Operations.findAll();
    res.send(operations)
})

app.post('/operations', async (req, res)=> {
    let created = await Operations.create(req.body);
    res.send(`operation ${created.id} succesfully created`)
})

app.get('/operations/:id', async (req, res) => {
    let operation = await Operations.findByPk(req.params.id);
    res.send(operation);
})

app.put('/operations/:id', async(req, res) => {
    let operation = await Operations.findByPk(req.params.id);
    operation.amount = req.body.amount;
    await operation.save();
    res.send('updated')
})

app.delete('/operations/:id', async (req, res) => {
    let operation = await (await Operations.findByPk(req.params.id)).destroy()
    res.send('deleted successfully')
})


const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`listening on port ${PORT}`))
