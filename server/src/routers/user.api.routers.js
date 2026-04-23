const router = require("express").Router();
const bcrypt = require('bcrypt');
const {Users} = require('../../db/models');

router.get("/", async (req, res) => {
try{
const users = await Users.findAll({raw: true, nest: true});
// console.log('users-----', users)
res.json(users)
} catch (e) {
    console.log('e--', e)
    res.json({error: e})
}
})

router.post("/reg", async (req, res) => {
try{
const {name, mail, pass} = req.body
console.log('req.body--', req.body)
const hashPass = await bcrypt.hash(pass, 10) // при логине используется метод bcrypt.compare

const user = await Users.create({name, mail, pass: hashPass})

req.session.user = user.name
res.json(user)
} catch (e) {
    console.log('e--', e)
    res.json({error: e})
}
});

module.exports = router;