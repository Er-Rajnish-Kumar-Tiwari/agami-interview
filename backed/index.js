const processAssesment = require("./Config/engine");
const express = require("express");
const app = express();

app.use(express.json());

const payload = {
  assesment_id: 9001,
  user_email: "devtest@able.com",
  idempotency_key: "abc-123",
  questions: [
    { question_id: 1, weight: 2, correct: [2], answer: [2] },
    { question_id: 2, weight: 2, correct: [1, 3], answer: [1] },
    { question_id: 3, weight: 1, correct: [4], answer: null },
    { question_id: 4, weight: 3, correct: [2, 4], answer: [2, 5] },
  ],
};

console.log("first Run:");
console.log(processAssesment(payload));

console.log(" \n second Run (with idempotency key):");
console.log(processAssesment(payload));
