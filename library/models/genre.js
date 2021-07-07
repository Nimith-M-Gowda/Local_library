let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let GenreSchema = new Schema ({
    name : {type : String ,required : true ,minlength : 3 ,maxlength : 100}

});

GenreSchema
.virtual('url')
.get(function(){
    return '/catalog/genre/' + this._id; 
});

module.exports = mongoose.model('Genre' , GenreSchema)