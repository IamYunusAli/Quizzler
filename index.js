const questions = [
{
    question: "What is an example of CSS preprocessor?",
    a:"LESS",
    b:"Stylus",
    c:"SASS",
    d:"All of above answers are correct",
    correct:"d",
},
{
    question: "A JavaScript object is a collection of?",
    a:"Variables and functions",
    b:"Keys and properties",
    c:"Key/Value pairs",
    d:"Names and methods",
    correct:"c",
},
{
    question: "What is the benefit of using the arrow functions?",
    a:"Implicit return when there is no body block.",
    b:"Shorter syntax.",
    c:"No `this` of its own.",
    d:"All answers are correct",
    correct:"d",
},
{
    question: "Jest testing library provide a set of methods for common test assertions. What do we call them?",
    a:"matchers",
    b:"getters",
    c:"blockers",
    d:"testers",
    correct:"a",
}
]

const quiz= document.getElementById('quiz')
const answerElements = document.querySelectorAll('.answer')
const question = document.getElementById('questions');
const choice1 = document.getElementById('choice1')
const choice2 = document.getElementById('choice2')
const choice3 = document.getElementById('choice3')
const choice4 = document.getElementById('choice4')
const submitBtn = document.getElementById('submit')

let currentindex = 0;
let score = 0;

loadquestion()
function loadquestion(){
    answerElements.forEach((element) => {element.checked=false})
    question.innerText = questions[currentindex].question;
    choice1.innerText = questions[currentindex].a;
    choice2.innerText = questions[currentindex].b;
    choice3.innerText = questions[currentindex].c;
    choice4.innerText = questions[currentindex].d;
}

submitBtn.addEventListener("click", () =>{
    let ans
    answerElements.forEach((answerEl)=>{
        if(answerEl.checked){
            ans=answerEl.id;
        }
    })
    if(ans)
    {
        if(ans=== questions[currentindex].correct){
        score++
    }
    currentindex++
    if(currentindex<questions.length)
    {
        loadquestion();
    }
    else {
        quiz.innerHTML= `
        <h2>you have answered ${score} out of ${questions.length} questions</h2>
        <button onClick="location.reload()">Reload</button>
        `
    }
}
})

