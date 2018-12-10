const express = require('express');
const vendorsRouter = express.Router();
const { Vendor }  = require('../models');

vendorsRouter.get('/', async (req, res) => {
  try {
    const vendors = await Vendor.findAll();
    res.json({ data: vendors })
  } catch(e) {
    console.log(e);
    res.status(500).json({message: `The rout is not connecting`})
  }
});

vendorsRouter.get('/:id', async (req, res) => {
  try {
    const vendors = await Vendor.findOne({
      where: { id: req.params.id }
    });
    res.json({data: vendors});
  } catch(e) {
    console.log(e);
    res.status(500).json({message: e.message})
  }
});

vendorsRouter.post('/', async (req, res) => {
  try {
    const vendors = await Vendor.create(req.body);
    res.json(vendors);
  } catch(e) {
    console.log(e);
    res.status(500).json({message: e.message})
  }
});

vendorsRouter.delete('/:id', async (req, res) => {
  try {
    const vendors = await Vendor.destroy({
      where: { id: req.params.id }
    });
    res.json({message: `Vendor with id ${req.params.id} deleted`})
  } catch(e) {
    res.json({message: e.message})
  }
});

vendorsRouter.put('/:id', async (req, res) => {
  try {
    const updatedVendors = await Vendor.findByPk(req.params.id)
    await updatedVendors.update(req.body)
    res.json({updatedVendors});
  } catch(e) {
    res.json({message: e.message})
  }
});

module.exports = {
  vendorsRouter
}
