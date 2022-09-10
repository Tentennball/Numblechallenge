const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DoctorSchema = new Schema({
    id: String,
    doctor_display_name: String,
    doctor_image_url: String,
    hospital_name: String,
    hospital_address: String,
    description: String,
    hospital_img: String,
});




module.exports = mongoose.model('Doctor', DoctorSchema);
