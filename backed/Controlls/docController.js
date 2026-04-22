const Doc = require("../Models/docModel");

const getDocs = (req, res) => {
  res.json(Doc.getAllDocs());
};

const createDoc = (req, res) => {
  res.json(Doc.createDoc());
};

const updateDoc = (req, res) => {
  const doc = Doc.updateDoc(req.params.id, req.body);
  res.json(doc);
};

const shareDoc = (req, res) => {
  res.json(Doc.shareDoc(req.params.id));
};

const uploadFile = (req, res) => {
  res.json(Doc.createFromFile(req.file));
};

module.exports = {
  getDocs,
  createDoc,
  updateDoc,
  shareDoc,
  uploadFile
};