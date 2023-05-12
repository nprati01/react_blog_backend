const express = require('express')
const { Comment } = require('../models')



async function index(req,res,next) {
	try {
    // get all comments
    res.status(200).json(await Comment.find());
  } catch (err) {
    //send error
    res.status(400).json({error: err.message});
  }
};

// Comment CREATE ACTION
async function create(req,res,next) {
  try {
    // create new blog
    res.status(201).json(await Comment.create(req.body));
  } catch (err) {
    //send error
    res.status(400).json({error: err.message});
  }
};

// BLOG Detail ACTION
async function detail(req,res,next) {
    try {
        // send one Blog
        res.status(200).json(await Comment.findById(req.params.id));
      } catch (err) {
        //send error
        res.status(400).json({error: err.message});
      }
};



// BLOG DESTROY ACTION
async function destroy(req,res,next) {
    try {
      // delete Blog by ID
      res.status(200).json(await Comment.findByIdAndRemove(req.params.id));
    } catch (err) {
      //send error
      res.status(400).json({error: err.message});
    }
  };

// Blog UPDATE ACTION
async function update(req,res,next) {
    try {
      // update Blog by ID, provide the form data, and return the updated document.
      res.status(200).json(
        await Comment.findByIdAndUpdate(req.params.id, req.body, {new:true})
      );
    } catch (err) {
      //send error
      res.status(400).json({error: err.message});
    }
  };


// EXPORT Controller Action
module.exports = {
	index,
	create,
	getOne: detail,
  delete: destroy,
  update
}
