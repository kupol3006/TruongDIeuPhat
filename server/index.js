const express = require('express');
const app = express();
const PORT =process.env.PORT || 3000;
app.listen(PORT, ()=> {
    console.log(`Server listening on ${PORT}`);
});
const bodyParsers = require('body-parser');
app.use(bodyParsers.json({limit : '10mb'}));
app.use(bodyParsers.urlencoded({extended: true, limit :'10mb'}));

app.get('/hello',(req,res)=>{
    res.json({message: 'Hello from server'});
})

app.use('/api/admin', require('./api/admin.js'));

app.use('/api/customer', require('./api/customer.js'));
