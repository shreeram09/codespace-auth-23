const db = require('mongoose')

const {MONGODB_URL}=process.env
//mongodb+srv://shreeram09:<password>@cluster0.lsdsvyg.mongodb.net/test
exports.connect = ()=>{
    db.connect(MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(console.log(`db connected to test...`))
    .catch((err)=>{
        console.log(`db connection failed`);
        console.log(err);
        process.exit(1)
    })
}