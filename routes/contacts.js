const express = require('express');

const router = express.Router();

//@route  get api/contacts
//@desc   get all contacts
//@access Private

router.get('/', (req, res) => {
  res.send('Get all contacts');
});

//@route  post  api/contacts
//@desc   add new contact
//@access Private

router.post('/', (req, res) => {
  res.send('Add contacts');
});

//@route  put api/contacts/:id
//@desc   Upadate a contact
//@access Private

router.put('/:id', (req, res) => {
  res.send('Update a contact');
});

//@route  Delete api/contacts/:id
//@desc   Delete a contact
//@access Private

router.delete('/:id', (req, res) => {
  res.send('Delete a contact');
});

module.exports = router;
