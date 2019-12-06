const { Router } = require("express");
const { user } = require("../controllers");
const { schemas, check } = require("../middlewares/validations");

const router = Router();

router.post("/register", check(schemas.register), user.register);

module.exports = router;
