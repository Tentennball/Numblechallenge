const User = require('../model/auth');
const jwt = require('../middleware/jwt');
const Doctor = require('../model/doctor');
const DoctorInfo = require('../model/doctorinf');
const doctor = require('../model/doctor');

exports.getDoctorList = async (req, res, next) => {
    const docs = await Doctor.find({});
    res.status(200).json({
        "status": "ok",
        "data": { "doctors": docs }
    })

};

exports.getDoctorInfo = async (req,res,next) => {
    const doctorId = req.query.doctor_id; 

    await DoctorInfo.findOne({doctor_id : doctorId})
    .then(doctorDoc => {
        docDoc = doctorDoc.doctor;
        console.log(docDoc);
        res.status(200).json({
            status: "ok",
            "data": { doctor: docDoc }
        })
    });
}
// exports.postRegister = (req,res,next) => {
    
// };