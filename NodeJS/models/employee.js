const mongoose=require('mongoose');

var Employee=mongoose.model('Employee',{
 
    _id:{type:String},
    name:{type:String},
    position:{type:String},
    office:{type:String},
    salary:{type:Number}
    
} );

module.exports= {
    Employee:Employee 
};