const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const cors = require('cors');
require('dotenv').config();

const Note = require('./models/Note')

const app = express()

app.use(cors())
app.use(bodyParser());
app.use(express.urlencoded({"extended": false}))

app.post('/note', function (req, res) {
  try{
      const body = req.body;
      console.log(body);
      const user = new Note(body);
      user.save().then((item)=>{
        console.log(item)
      })
  } catch(e) {
      console.log(e)
      res.status(400).json({message:'error'})
  }
});

app.get("/get-notes", async function (req, res) {
  Note.find().exec((err, found) => {
    console.log(found)
    if (found) {
      res.json({found: found})
    }
    
  })
})

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.listen(process.env.PORT, () => console.log(`Server started on ${process.env.PORT}`));