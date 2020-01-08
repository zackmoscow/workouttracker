const router = require('express').Router();
const db = require('../models/');
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

router.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/stats.html'));
});

router.get('/api/workouts', (req, res) => {
  db.Workout.find({})
    .then (data => {
      res.send(data);
    })
    .catch (e => {
      res.send(e);
    });
});

router.put('/api/workouts/:id', (req, res) => {
  db.Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body }})
    .then (data => {
      res.send(data);
    })
    .catch (e => {
      res.send(e);
    });
});

router.post('/api/workouts', (req, res) => {
  db.Workout.create({})
    .then (data => {
      res.send(data);
    })
    .catch (e => {
      res.send(e);
    });
});

router.get('/api/workouts/range', (req, res) => {
  db.Workout.find({})
    .then (data => {
      res.send(data);
    })
    .catch (e => {
      res.send(e);
    });
});

module.exports = router;