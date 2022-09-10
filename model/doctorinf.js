const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DoctorInfoSchema = new Schema({
    id: String,
    available_hours: String,
    available_weekday: String,
    description: String,
    doctor_display_name: String,
    doctor_image_url: String,
    doctor_images: Array,
    doctor_tel: String,
    hospital_addr: String,
    hospital_name: String,
    lab_addr: String,
    lab_name: String,
    lab_postal_code: String,
    lab_receiver_name: String,
    lab_tel: String,
    lat: String,
    lng: String,
    professional_statement: String,
    open_hours: Array,
    subjects: String
});


module.exports = mongoose.model('DoctorInf', DoctorInfoSchema);
