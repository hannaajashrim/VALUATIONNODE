const express = require('express');
const { createuser, getuser, getsingleusr, updateuser, deleteuser } = require('../CONTROLLER/Usercrud');
const Loginuser = require('../CONTROLLER/Login');
const Signupuser = require('../CONTROLLER/Signup');
const { createproduct, getproduct, getsinglepro, productdelete, productupdate } = require('../CONTROLLER/Productcrud');
const protect = require('../MIDDLEWARE/Token');


const router = express.Router();
const middleware = [protect]



router.route('/createusr').post(createuser);
router.route('/getuser').get(getuser);
router.route('/getsingleusr/:id').get(getsingleusr);
router.route('/updateuser/:id').put(updateuser);
router.route('/deleteuser/:id').delete(deleteuser);


router.route('/login').post(Loginuser);
router.route('/signup').post(Signupuser);


router.route('/productcreate').post(createproduct);
router.route('/getproduct').get(getproduct);
router.route('/getsingle/:id').get(getsinglepro);
router.route('/deleteproduct/:id').delete(productdelete);
router.route('/updateproduct/:id').put(productupdate);

router.route('/tokenverification').post(middleware,Signupuser)





module.exports=router