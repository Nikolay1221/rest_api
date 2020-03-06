var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};
var mongoose = require( 'mongoose' );
var Mes = mongoose.model('Locations');
module.exports.mess = function (req, res) {
    Mes
        .find()
        .exec(function (err, location) {
            sendJsonResponse(res, 200, location);
        })
};
module.exports.messp = function (req, res) {
    Mes.create({
        username:req.body.username,
            message:req.body.message,
        chat_id: req.body.chat_id,
    },
        function(err, location) {
        if (err){
            sendJsonResponse(res, 400, err);
        } else {
            sendJsonResponse(res, 201, location);
        }
    });
};
