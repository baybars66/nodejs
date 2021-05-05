const path = require('path');
const express = require ('express');
const router = express.Router();
//const path = require('path');

var DescCont = require ('../Controls/Confg/DescCon')
var KisiCont = require ('../Controls/Confg/KisiCont')
var Ac = require('../Controls/Ac')

router.get('/bb', Ac.PindexCon);
//router.get('/deneme/Login', Controls.loginCon);
//router.get('/ana', Controls.deneCon);


router.get('/kisiler',KisiCont.Kisiler);


router.get('/Desc', DescCont.DescALL);
//router.post('/Desc/Add/:name', DescCont.DescADD);
// router.delete('/kisiler',KisiCont.Kisiler);

module.exports = router;
