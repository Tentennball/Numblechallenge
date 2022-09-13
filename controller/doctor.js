import Doctor from '../model/doctorinf.js';

export async function getDoctorList(req, res, next) {
    Doctor.find({},{id:1,doctor_display_name:1,doctor_image_url:1,hospital_name:1,hospital_address:1,description:1,hospital_img:1})
    .then((docs) => {
        console.log(docs);
        res.status(200).json({
            "status":"ok",
            "data":{"doctors": docs}
        })
    })
    .catch((err)=>{throw new Error(err)});

}

export async function getDoctorInfo(req,res,next) {
    const doctorId = req.query.doctor_id;
    console.log(doctorId);
    await Doctor.findOne({id : doctorId})
    .then(doctorDoc => {
        res.status(200).json({
            status: "ok",
            "data": { doctor: doctorDoc }
        })
    });
}

export async function postRegister(req,res,next) {
    const doctor = req.body.doctor_id;
    const message = "Failed";
    
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