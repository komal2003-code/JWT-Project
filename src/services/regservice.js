let bcrypt=require("bcryptjs");
let regModel = require("../models/regmodel.js");


exports.regServiceLogic = (...regdata) => {
    let hashedPassword=bcrypt.hashSync(regdata[4],10);
    let result=regModel.saveRegData(regdata[0], regdata[1], regdata[2], regdata[3], hashedPassword);
        return result;
}