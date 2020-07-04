var mongoose = require( 'mongoose' );

var  termux_battery_status = new mongoose.Schema({
    health: {type: String},
    percentage: {type: Number},
    plugged: {type: String},
    status: {type: String},
    temperature: {type: Number},
    current: {type: Number},
    date: { type: Date, default: Date.now },
});

var termux_location = new mongoose.Schema({
	latitude: {type: Number},
	longitude: {type: Number},
	altitude: {type: Number},
	accuracy: {type: Number},
	vertical_accuracy: {type: Number},
	bearing: {type: Number},
	speed: {type: Number},
	elapsedMs: {type: Number},
	provider: {type: String},
	date: { type: Date, default: Date.now },
});

var termux_microphone_record = new mongoose.Schema({
	File: {type: String},
	FileName: {type: String},
	date: { type: Date, default: Date.now},
});

var errors_schema = new mongoose.Schema({
	Errors: {type: String},
	date: { type: Date, default: Date.now },
});
mongoose.model('erorrs_models', errors_schema);
mongoose.model('microphone_record_models', termux_microphone_record);
mongoose.model('locations', termux_battery_status);
mongoose.model('termux_location_models', termux_location);