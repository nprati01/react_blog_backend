const express = require('express')
const router = express.Router()
const commentsCtrl = require('../controllers/comment-controller')

///////////////////////////////
// ROUTES
////////////////////////////////

//Blog INDEX ROUTE ie blog list
router.get("/", commentsCtrl.index)

//

// Blog CREATE ROUTE
router.post("/", commentsCtrl.create)

//BLOG SHOW ROUTE  ie details
router.get("/:id", commentsCtrl.getOne)

//BLOG DELETE ROUTE
router.delete("/:id", commentsCtrl.delete)

//UPDATE BLOG ROUTE
router.put("/:id", commentsCtrl.update)

module.exports = router
