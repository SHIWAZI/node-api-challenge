const express = require('express');
const router = express.Router();
const Userclasses = require('../models/Userclasses');

// Getting all future classes
router.get('/', async (req, res) => {
  try {
    const classes = await Userclasses.find()
    res.json(classes)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});

// Getting One
router.get('/:id', getClasses, (req, res) => {
  res.json(res.classes)
});

// Creating one
router.post('/', async (req, res) => {
  const classes = new Userclasses({
    title: req.body.title,
    discription: req.body.discription,
    maxNumStud:req.body.maxNumStud,
    startingDate:req.body.startingDate,
    endingDate:req.endingDate.endingDate
  })
  try {
    const newClasses = await Userclasses.save()
    res.status(201).json(classes)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
});


//  filtering by id
router.delete('/:id', getClasses, async (req, res) => {
  try {
    await res.subscriber.remove()
    res.json({ message: 'Deleted classes from Db' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});

async function getClasses(req, res, next) {
  let classes
  try {
    classes = await Userclasses.findById(req.params.id)
    if (classes == null) {
      return res.status(404).json({ message: 'Cannot find any classes' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.classes = classes
  next()
}

module.exports = router;