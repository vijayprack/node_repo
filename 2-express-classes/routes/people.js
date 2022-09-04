const express = require('express')
const router = express.Router()

const {
    getPeoples,
    createPeople,
    createPeoplePostman,
    updatePeople,
    deletePeople
  } = require('../controllers/people')

// router.get('/', getPeoples);
// router.post('/', createPeople);
// router.post('/postman', createPeoplePostman);
// router.put('/:id', updatePeople);
// router.delete('/:id', deletePeople);

router.route('/').get(getPeoples).post(createPeople);
router.route('/postman').post(createPeoplePostman);
router.route('/:id').put(updatePeople).delete(deletePeople);

module.exports = router;