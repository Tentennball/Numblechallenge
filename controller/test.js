export function getIndexPage(req,res,next) {
    try{
    res.status(200).json({"data":""});
    }
    catch(err){
        console.log(err);
    }
}