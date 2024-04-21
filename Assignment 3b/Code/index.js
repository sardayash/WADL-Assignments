const dbConnect = require('./mongodb')
const express = require('express')
const app = express()
app.use(express.json())
//getAPI - retrieveing value from DB
app.get('/get', async (req, res) => {
    const db = await dbConnect()
    const result = await db.find({}).toArray()
    res.send(result)
})

app.post('/post', async (req, res) => {
    let result = await dbConnect()
    result = result.insertOne(req.body)
    res.send("Data inserted successfully")
})

app.put('/put/:name', async (req, res) => {
    let result = await dbConnect()
    result = result.updateOne({name: req.params.name},{$set: req.body})
    res.send("Data updated successfully")
})

app.delete('/delete/:name', async (req, res) => {
    let result = await dbConnect()
    result = result.deleteOne({name: req.params.name})
    res.send("Data deleted successfully")
}) 

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})