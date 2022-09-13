const Doctor = require('../model/doctorinf');

exports.getDoctorList = async (req, res, next) => {
    Doctor.find({},{id:1,doctor_display_name:1,doctor_image_url:1,hospital_name:1,hospital_address:1,description:1,hospital_img:1})
    .then((docs) => {
        console.log(docs);
        res.status(200).json({
            "status":"ok",
            "data":{"doctors": docs}
        })
    })
    .catch((err)=>{throw new Error(err)});

};

exports.getDoctorInfo = async (req,res,next) => {
    const doctorId = req.query.doctor_id;
    console.log(doctorId);
    await Doctor.findOne({id : doctorId})
    .then(doctorDoc => {
        res.status(200).json({
            status: "ok",
            "data": { doctor: doctorDoc }
        })
    });
};

exports.postRegister = async(req,res,next) => {
    const doctor = req.body.doctor_id;
    const message = "Failed";
    console.log(req.body);
    await Doctor.findOne({id: doctor})
    .then(doctorDoc => {
        if(doctorDoc)
            res.status(200).json({
                status:"ok",
            })
        else
            res.status(200).json({
                status:"ok",
                "data": message
            })
    })
}