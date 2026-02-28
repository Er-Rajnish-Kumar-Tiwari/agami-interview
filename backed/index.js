const processAssesment=require("./Config/engine");
const express=require("express");
const app=express();

app.use(express.json());

const payload={
    assesment_id:"1234",
    user_email:"rajnish@gmail.com",
    idempotency_key:"abcd-1234",
    questions:[
        {
            question_id:"q1",
            weight:2,
            answer:[2],
            correct:[2]
        },
        {
            question_id:"q2",
            weight:2,
            answer:[1],
            correct:[1,3]
        },
        {
            question_id:"q3",
            weight:2,
            answer:null,
            correct:[2]
        },
        {
            question_id:"q4",
            weight:2,
            answer:[2,5],
            correct:[2,4]
        }
    ]
};

console.log("first Run:");
console.log(processAssesment(payload));

console.log(" \n second Run (with idempotency key):");
console.log(processAssesment(payload));