let express=require("express");
let controller=require("../controller/regCtrl.js");
let router=express.Router();

router.get("/reg",controller.regCtrl);
router.post("/savereg",controller.saveReg);
router.get("/login",controller.regLogin);
router.post("/validate",controller.validateUser);

router.get("/", (req, res) => {
    res.render("home.ejs"); // Or any page you want to show at /
});


module.exports=router;
