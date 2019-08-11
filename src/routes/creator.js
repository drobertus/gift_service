var express = require('express')
var router = express.Router()
const { models }  = require('../../models').sequelize
const _ = require('lodash')
const crypto = require('crypto');
const md5sum = crypto.createHash('md5');


console.log({Gifts: models.gifts})
// middleware that is specific to this router
// router.use(function timeLog (req, res, next) {
//   console.log('Time: ', Date.now())
//   next()
// })
// define the home page route
router.get('/', async function (req, res) {
    console.log('getter called', { gifts: models.gifts })
    const data = await models.gifts.findAll()
  res.json({msg: "this is a getter", data})
})
// define the about route
router.post('/gifts/1.0', async function (req, res) {
    console.log('posting a gift creation', req.body)

  const creator = _.clone(req.body)
  if(!creator.redemption_code) {
    creator.redemption_code = md5sum.update(`${process.hrtime()}`).digest('hex').substring(0,10);
  }
  console.log(creator)
  const newModel = await models.gifts.create(creator)
  console.log(newModel)
  res.json({newGift: newModel.dataValues})
})

module.exports = router