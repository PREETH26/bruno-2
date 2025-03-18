const mongoose = require('mongoose')
require('dotenv').config()
const connect = async() => {
   try{
     await mongoose.connect(process.env.DB_URL)
     console.log("Connected to dataBase")
   }catch(err){
     console.log(`Error connecting DB : ${err}`)
   }
}

module.exports = connect;