
///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const router = express.Router()
const blogCtrl = require('../controllers/blog-controller')

///////////////////////////////
// ROUTES
////////////////////////////////

//Blog INDEX ROUTE ie blog list
router.get("/", blogCtrl.index)



// Blog CREATE ROUTE
router.post("/", blogCtrl.create)

//BLOG SHOW ROUTE  ie details
router.get("/:id", blogCtrl.getOne)

//BLOG DELETE ROUTE
router.delete("/:id", blogCtrl.delete)

//UPDATE BLOG ROUTE
router.put("/:id", blogCtrl.update)


module.exports = router
