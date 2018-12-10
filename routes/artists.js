const express = require('express');
const { Artist } = require('../models');

const artistsRouter = express.Router();

artistsRouter.get('/', async (req, res) => {
  try {
    const artists = await Artist.findAll();
    res.json(artists)
  } catch(e) {
    res.status(500).json({msg: e.message});
  }
});

artistsRouter.get('/:id', async (req, res) => {
  try {
    const artist = await Artist.findOne({
      where: {
        id: req.params.id
      }
    });
    res.json(artist);
  } catch(e) {
    res.status(500).json({msg: e.message});
  }
});

artistsRouter.post('/', async (req, res) => {
  try {
    const artist = await Artist.create(req.body);
    res.json(artist);
    } catch(e) {
      console.error(e);
      res.status(500).json({
        msg: e.message
      });
    }
});

artistsRouter.put('/:id', async (req, res) => {
  try {
    const artist = await Artist.findOne({
      where: {
        id: req.params.id
      }
    });
    artist.update({
      name: req.body.name,
      description: req.body.description,
      timeslot: req.body.timeslot
    });
    res.json(artist);
  } catch (e) {
    console.error(e);
    res.status(500).json({
      messsage: e.message
    })
  }
});

artistsRouter.delete('/:id', async (req, res) => {
  try {
    const artist = await Artist.findOne({
      where: {
        id: req.params.id
      }
    });
    artist.destroy();
    res.json(artist);
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: e.message
    })
  }
});

module.exports = {
 artistsRouter
}