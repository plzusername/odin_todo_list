const express = require('express')
const app = express()
const port = 8080
const mongoURL = 'mongodb+srv://mohamedfaris2210:jvNiOpFnCgp7oqFM@cluster0.0sbrggg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const mongoose = require('mongoose')

app.listen(port, ()=>{
    console.log(`Connected to port ${port}`)
})

mongoose.connect(mongoURL).then(()=>{
    console.log('Mongoose is working')
}).catch((error) =>{console.log(error)})

const mySchema = new mongoose.Schema({
    name:{required: true, type: String},
    description:{type:String, required:true},
    priority:{type:String, required:true}
})

module.exports = mongoose.model('Custom Schema', mySchema)


Todo.delete(Task)
Todo.get(Task)
Todo.put(Task, newTask)
Todo.post(Task)
