
const question = [
    {
        question: "What is JavaScript??",
        answer:[
                {text: "JavaScript is a scripting language used to make the website interactive", correct: true},
                {text: "Blue  JavaScript is an assembly language used to make the website interactive", correct: false},
                {text: "EleJavaScript is a compiled language used to make the website interactive", correct: false},
                {text: "None of the mentioned", correct: false},

        ]
    },
    {
        
        question: "What is DOM in HTML?",
        answer:[
            {text: "Language dependent application programmingk", correct: false},
                {text: " Convention for representing and interacting with objects in html documents", correct: true},
                {text: "Hierarchy of objects in ASP.NET", correct: false},
                {text: "Application programming interface", correct: false},
        ]
    },
    {
        
        question: " Which of the following CSS selectors are used to specify a group of elements??",
        answer:[
            {text: "Both Class and Tag", correct: false},
                {text: " Tag", correct: false},
                {text: "Class", correct: true},
                {text: "ID", correct: false},
        ]
    },
    {
        question: "Which of the following is not the property of the CSS box model?",
        answer:[
            {text: "Margin", correct: false},
                {text: "Height", correct: false},
                {text: "Width", correct: false},
                {text: "Color", correct: true},
        ]



            },
            {
                
        question: "Which of the following is correct about JavaScript?",
        answer:[
            {text: "JavaScript is an Object-Oriented language", correct: false},
                {text: " JavaScript is an Object-Based language", correct: true},
                {text: " JavaScript is Assembly-language", correct: false},
                {text: "JavaScript is a High-level language", correct: false},

            ]
            }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer");
const nextButton = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;

function StartQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}
function showQuestion(){
    resetState();

    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + " . " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct =answer.correct;
        }
        button.addEventListener("click", selectAnswer)
        
    });


}
function resetState(){
    nextButton.style.display= "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect")

    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${question.length} !`
    nextButton.innerHTML = " Play Again";
    nextButton.style.display = "block"
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex <question.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex <question.length){
        handleNextButton();
    }else{
        StartQuiz();
    }
})
StartQuiz();
