const store=require("./store");

function isSetEqual(a,b){
    if(a.length !== b.length) return false;

    const setA=new Set(a);
    const setB=new Set(b);

    if(setA.size !== setB.size) return false;

    for(let val of setA){
        if(!setB.has(val)) return false;
    }

    return true;
}

function isSubset(answer,correct){
    const correrctSet=new Set(correct);

    for(let val of answer){
        if(!correrctSet.has(val)) return false;
    }

    return true;
}

function processAssessment(payload){

    // idempotency check
    if(store.has(payload.idempotency_key)){
        return store.get(payload.idempotency_key);
    }

    let totalPointsPossible=0;
    let earnedPoints=0;
    const breackdown=[];

    for(let q of payload.questions){
        totalPointsPossible+=q.weight;

        let status="";
        let points=0;

        if(q.answer === null){
            status="skipped";
            points=0;
        }

        else if(isSetEqual(q.answer,q.correct)){
            status="correct";
            points=q.weight;
        }
        else if(isSubset(q.answer,q.correct)){
            status="partial";
            points=0.5*q.weight;
        }
        else{
            status="wrong";
            points=-0.25*q.weight;
        }

        earnedPoints+=points;

        breackdown.push({
            question_id:q.question_id,
            status,
            points_Awarded:points,
            correct:q.correct,
            answer:q.answer
        })
    }

    if(earnedPoints<0) earnedPoints=0;

    const percentage=(earnedPoints/totalPointsPossible)*100;

    const result ={
        attempt_id:Date.now(),
        assesment_id:payload.assesment_id,
        user_email:payload.user_email,
        idempotency_key:payload.idempotency_key,
        total_points_possible:totalPointsPossible,
        earned_points:earnedPoints,
        percentage,
        breackdown
    }
    store.set(payload.idempotency_key,result);

    return result;
}

module.exports=processAssessment;