var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};
var mongoose = require( 'mongoose' );
var DB = mongoose.model('locations');

module.exports.mess = function (req, res) {
    DB.find().exec(function (err, location) {
            sendJsonResponse(res, 200, location);
        })
};
module.exports.messp = function (req, res) {
    DB.create({
        health:req.body.health,
        percentage:req.body.percentage,
        plugged: req.body.plugged,
        status: req.body.status,
        temperature: req.body.temperature,
    },
        function(err, location) {
        if (err){
            sendJsonResponse(res, 400, err);
        } else {
            sendJsonResponse(res, 201, location);
        }
    });
};

var termux_location_models = mongoose.model('termux_location_models');

module.exports.getGpsfunc = function(req, res){
    termux_location_models.find().exec(function(err, termux_location){
        sendJsonResponse(res, 200, termux_location);
    })
};
module.exports.postGpsfunc = function(req, res){
    termux_location_models.create({
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        altitude: req.body.altitude,
        accuracy: req.body.accuracy,
        vertical_accuracy: req.body.vertical_accuracy,
        bearing: req.body.bearing,
        speed: req.body.speed,
        elapsedMs: req.body.elapsedMs,
        provider: req.body.provider,
    },
        function(err, termux_location){
            if (err) {
                sendJsonResponse(res, 400, err);
            } else{
                sendJsonResponse(res, 201, termux_location);
            }
    });
};

var erorrs_models = mongoose.model('erorrs_models');

module.exports.getErrorfunc = function(req, res){
    erorrs_models.find().exec(function(err, errors){
        sendJsonResponse(res, 200, errors);
    })
};
module.exports.postErrorfunc = function(req, res){
    erorrs_models.create({
        Errors: req.body.Errors,
    },
        function(err, errors){
            if (err) {
                sendJsonResponse(res, 400, err);
            }else{
                sendJsonResponse(res, 201, errors);
            }
        });
};

var microphone_record_models = mongoose.model('microphone_record_models')

module.exports.getMicrophoneRecordfunc = function(req, res){
    microphone_record_models.find().exec(function(err, MicrophoneRecord){
        sendJsonResponse(res, 200, MicrophoneRecord);
    })
};
module.exports.postMicrophoneRecordfunc = function(req, res){
    microphone_record_models.create({
        File: req.body.File,
        FileName: req.body.FileName,
    },
        function(err, MicrophoneRecord){
            if (err) {
                sendJsonResponse(res, 400, err);
            }else{
                sendJsonResponse(res, 201, MicrophoneRecord);
            }
        });
};