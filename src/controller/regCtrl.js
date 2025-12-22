
let regservice=require("../services/regservice.js");
exports.regCtrl = (req, res) => {
  res.render("register.ejs",{msg:""});
}

exports.saveReg=(req,res)=>{
    let{name,email,contact,username,password}=req.body;
    let result =regService.regServiceLogic(name,email,contact,username,password);
    result.then((r)=>{
        res.render("register.ejs",{msg:r});
    });
}

exports.regLogin=((req, res) => {
    res.render("login.ejs", { msg: "" });
})
    
exports.validateUser = (req, res) => {
    let { username, password } = req.body;
    
}