var mongoose = require( 'mongoose' );
var  chatInformationMessSchema = new mongoose.Schema({
    username: {type: String},
    message: {type: String},
    chat_id: {type: Number},
    date: { type: Date, default: Date.now },
});
mongoose.model('Locations', chatInformationMessSchema);