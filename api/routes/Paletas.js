var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.use(express.urlencoded({extended: false}));
router.use(express.json());

router.get("/", function(req, res){
    dbConnection = req.app.locals.db;
    dbConnection.collection('paletas').find().toArray(function(err,datos){
        console.log(datos);
        res.send(datos);
    })

})



router.put("/put", function(req, res){
    dbConnection = req.app.locals.db;
    res.send("")
})

router.delete("/delete", function(req, res){
    dbConnection = req.app.locals.db;
    res.send("")
})




module.exports = router;
