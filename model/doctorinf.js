const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DoctorInfoSchema = new Schema({
    doctor: Schema.Types.Mixed
});


module.exports = mongoose.model('DoctorInf', DoctorInfoSchema);
