const { get } = require('mongoose');
const mongodb = require('../database/connect.js');
const { MongoClient, ObjectId } = require('mongodb');
const controllers = {}

//-----------------------------------------------------------------------

controllers.getAllDocuments = async (req, res, next) => {
  try {
    const result = await mongodb.getDb().db('WDD430Final').collection('documents').find();
    const documents = await result.toArray();

    // Check the Accept header to determine the response format
    const acceptHeader = req.headers.accept;

    if (acceptHeader && acceptHeader.includes('text/html')) {
      // Respond with HTML
      res.setHeader('Content-Type', 'text/html');
      res.status(200).render('./documents.ejs', { documents });
    } else {
      // Respond with JSON
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(documents);
    }
  } catch (error) {
    console.error('Error fetching documents:', error);
    res.status(500).json({ error: 'An error occurred while fetching documents.' });
  }
};


controllers.addDocument = async (req, res) => {
  const document = {
    title: req.body.title,
    content: req.body.content
  };

  try {
    const response = await mongodb.getDb().db('WDD430Final').collection('documents').insertOne(document);
    const result = await mongodb.getDb().db('WDD430Final').collection('documents').find();
    const documents = await result.toArray();

    if (response.acknowledged) {
      let message = "Success!";
      res.status(200).render('./documents.ejs', { message, documents });
    } else {
      let message = "Error! " + response.error;
      res.status(500).render('./documents.ejs', { message, documents });
    }
  } catch (error) {
    const result = await mongodb.getDb().db('WDD430Final').collection('documents').find();
    const documents = await result.toArray();
    let message = "Error! " + error;
    res.status(500).render('./documents.ejs', { message, documents });
  }
};



controllers.editDocument = async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);
    const Newdoc = {
      title: req.body.title,
      content: req.body.content
    };

    const response = await mongodb.getDb().db('WDD430Final').collection('documents').replaceOne({ _id: id }, Newdoc);
    const result = await mongodb.getDb().db('WDD430Final').collection('documents').find();
    const documents = await result.toArray();

    if (response.modifiedCount > 0) {
      let message = "Success!";
      res.status(200).render('./documents.ejs', { message, documents });
    } else {
      let message = "Error! Nothing happened.";
      res.status(500).render('./documents.ejs', { message, documents });
    }
  } catch (error) {
    const result = await mongodb.getDb().db('WDD430Final').collection('documents').find();
    const documents = await result.toArray();
    let message = "Error! " + error;
    res.status(500).render('./documents.ejs', { message, documents });
  }
};

controllers.deleteDocument = async (req, res, next) => {
  try {
    const id = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db('WDD430Final').collection('documents').deleteOne({ _id: id });

    if (response.deletedCount > 0) {
      res.redirect('/');  // Redirect to the documents list after deletion
    } else {
      res.status(404).send('Document not found');
    }
  } catch (error) {
    console.error('Delete error:', error);
    res.status(500).send('Error deleting document');
  }
};



// EXPORT ---------------------------------------------------------------
module.exports = controllers