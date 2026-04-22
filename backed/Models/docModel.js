const { readDB, writeDB } = require("../Config/newdb");

const getAllDocs = () => {
  return readDB().docs;
};

const createDoc = () => {
  const db = readDB();

  const newDoc = {
    id: Date.now(),
    title: "Untitled",
    content: "",
    owner: "user1",
    sharedWith: []
  };

  db.docs.push(newDoc);
  writeDB(db);

  return newDoc;
};

const updateDoc = (id, data) => {
  const db = readDB();
  const doc = db.docs.find(d => d.id == id);

  doc.title = data.title;
  doc.content = data.content;

  writeDB(db);

  return doc;
};

const shareDoc = (id) => {
  const db = readDB();
  const doc = db.docs.find(d => d.id == id);

  if (!doc.sharedWith.includes("user2")) {
    doc.sharedWith.push("user2");
  }

  writeDB(db);

  return doc;
};

const createFromFile = (file) => {
  const fs = require("fs");

  const content = fs.readFileSync(file.path, "utf-8");

  const db = readDB();

  const newDoc = {
    id: Date.now(),
    title: file.originalname,
    content,
    owner: "user1",
    sharedWith: []
  };

  db.docs.push(newDoc);
  writeDB(db);

  return newDoc;
};

module.exports = {
  getAllDocs,
  createDoc,
  updateDoc,
  shareDoc,
  createFromFile
};