const express = require('express');
const router = express.Router();
 const homeController = require('../controllers/home_controller');
// const db=require('./config/mongoose');



router.get('/',homeController.home);
router.post('/add-item',homeController.addItem);
router.post('/delete_todo',homeController.deleteItem);
router.get('/editdata',homeController.editData);
router.post('/edit-todolist',homeController.editDetails);
module.exports = router;