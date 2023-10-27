const express = require("express");
const router = express.Router();

const {list, read} = require('../Controller/user');

router.get("/user", list);
router.get("/user/:id", read);

module.exports = router;
