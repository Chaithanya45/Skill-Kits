import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';

mongoose.connect('mongodb+srv://admin:admin123@cluster0.w2cgs.mongodb.net/db',{ useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('DB Connected');
  })
  .catch((err) => {
    console.log('Error connecting to muxdb' + err.stack);
});


const port =  8000;
const app = express();
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(cookieParser());
app.options('*',cors());

var api = express.Router();
api.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
})
require('./src/routes/api.js')(api);
app.use('/api',api);
var auth = express.Router();
auth.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
})
require('./src/routes/auth.js')(auth);
app.use('/auth',auth);

app.listen(port,()=>{
  console.log(`server listening on PORT ${port}`);
})
