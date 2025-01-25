const Good = require("../models/GoodModel")

exports.getGoods = async (req, res, next) => {
  const Goods = await Good.find().lean()
  res.send(Goods)
}

exports.getGoodDetail = async (req, res, next) => {
  const { id } = req.params
  const Goods = await Good.find({ _id: id }).lean()
  res.send({
    detail: Goods,
  })
}
