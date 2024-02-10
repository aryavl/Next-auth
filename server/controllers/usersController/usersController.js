export const postUser = async(req,res)=>{
try {
    console.log(req.body);
    const data = req.body
    // res.status(400).json({error:"Incorrect input fileds"})
    res.status(200).json({success:"Successfully login"})
} catch (error) {
    console.log(error);
}
}