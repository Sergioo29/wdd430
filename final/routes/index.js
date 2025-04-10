const express = require('express');
const router = express.Router();
const documentController = require('../controllers/documentController.js');
const mongodb = require('../database/connect.js');
const { ObjectId } = require('mongodb');

// Get all documents
router.get('/', documentController.getAllDocuments);

// Render new document form
router.get('/new', (req, res) => {
  res.render('newDocument');
});

// Add a new document
router.post('/', documentController.addDocument);

// Render edit document form
router.get('/:id/edit', async (req, res) => {
  const documentId = req.params.id;
  const db = mongodb.getDb().db('WDD430Final'); // ✅ correct DB name
  const document = await db.collection('documents').findOne({ _id: new ObjectId(documentId) });

  if (document) {
    res.render('editDocument', { document });
  } else {
    res.status(404).send('Document not found');
  }
});

// Update a document
router.put('/:id', documentController.editDocument);

// Delete a document
router.delete('/:id', documentController.deleteDocument);

module.exports = router;
