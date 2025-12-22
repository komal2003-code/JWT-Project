let db=require("../config/db.js");

exports.saveRegData=(...regData)=>{
    return new Promise((resolve, reject) => {

    db.query("INSERT INTO register values ('0',?, ?, ?, ?, ?)", [regData[0], regData[1], regData[2], regData[3], regData[4]], (err, result) => {
        if (err) {
            reject(err);
        } else {
            resolve("Data inserted successfully");
        }

    });
});
}


