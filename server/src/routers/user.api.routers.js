const router = require("express").Router();
const bcrypt = require('bcrypt');
const {Users} = require('../../db/models');

router.post("/auth", async (req, res) => {
try {
    const { name, pass } = req.body
    const oneUser = await Users.findOne({where: { name }, raw: true, nest: true});
    if(oneUser) {
        const unhashPass = await bcrypt.compare(pass, oneUser.pass);
        console.log('unhashPass===>', unhashPass);
        if(unhashPass){
            req.session.user = oneUser.name;
            res.json(oneUser)
        } {
            res.sendStatus(401)
        }
    } else {
        res.sendStatus(401)
    }
} catch (e) {
    console.log('e--', e)
    res.json({error: e})
}
})

router.post("/reg", async (req, res) => {
try {
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