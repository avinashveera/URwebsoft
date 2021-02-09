const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://avinashveera:mylove@cluster0.fh4jg.mongodb.net/avinashveera?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true},()=>{


console.log('db connected')
})


const users=mongoose.model('user',{

    name:String,
    number:Number

})


module.exports=users;