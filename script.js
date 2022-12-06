// This is an object with properties
const quizData =[
    {
        question: "What is Gabby's favorite color?",
        a: "purple",
        b: "yellow",
        c: "green",
        d: "red",
        correct: "a",
    }, {
        question: "Where does Gabby want to travel next?",
        a: 'North Korea',
        b: 'Hawaii',
        c: 'Japan',
        d: 'Indonesia',
        correct: 'c',
    }, {
        question: "What is Gabby's favorite movie?",
        a: 'Cloud Atlas',
        b: 'Interstellar',
        c: 'Inside Out',
        d: 'Shawshank Redemption',
        correct: 'b',
    }, {
        question: "Who is Gabby's favorite scientific author?",
        a: 'Michael Pollan',
        b: 'Stephen Hawking',
        c: 'Oliver Sacks',
        d: 'Carl Sagan',
        correct: 'd',
    }, {
        question: "Where does Gabby hope to live in the future?",
        a: 'Mexico',
        b: 'United States',
        c: 'Norway',
        d: 'Spain',
        correct: 'd',
    }
]

const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const quiz = document.getElementById('quiz');

// setting the start to zero index
let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    //this is to select the array from the beginning '0' and storing it inside a constant.
    const currentQuiz = quizData[currentQuestion];
    // this to to select the question element in the html and then modifying it (innerText) with the current 'object.property' that you selected above.
    questionEl.innerText = currentQuiz.question;
    a_text.innerText = currentQuiz.a;
    b_text.innerText = currentQuiz.b;
    c_text.innerText = currentQuiz.c;
    d_text.innerText = currentQuiz.d;
};

function getSelected(){
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        // this is to check which answer is being checked
        // console.log(answerEl.checked);

        // this says if answerEl is the one checked, 
        if (answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}


submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    // console.log(answer);
    console.log(quizData[currentQuestion].correct);
    
    if (answer) {
        if (answer === quizData[currentQuestion].correct){
            score++;
        }
        currentQuestion++;

        if(currentQuestion < quizData.length) {
            loadQuiz();
            }else{ 
                quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length} questions. </h2>
                <button onclick="location.reload()">Reload</button>`;
            }
    }
});

