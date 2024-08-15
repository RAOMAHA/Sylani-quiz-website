const quiz = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        ans1text: "<scripting>",
        ans2text: "<javascript>",
        ans3text: "<script>",
        ans4text: "<js>",
        answer: "JavaScript",
    },
    {
        question: "Which method can be used to return a string in upper case letters?",
        ans1text: "toppercase()",
        ans2text: "tuc()",
        ans3text: "toUpperCase()",
        ans4text: "upperCase()",
        answer: "toUpperCase()",
    },{
        question: "How do you insert COMMENTS in Java code?",
        ans1text: " # This is a comment",
        ans2text: "/* This is a comment",
        ans3text: "// This is a comment",
        answer: "// This is a comment",
    },
    {
        question: "What is a correct syntax to output Hello World in Java?",
        ans1text: "console.WriteLine(Hello Worl)",
        ans2text: "System.Out.Println( Hello World)",
        ans3text: "Print (Hello World)",
        ans4text: "echo(Hello World)",
        answer: "System.Out.Println( Hello World)",

    }
    ,{
        question: "Which data type is used to create a variable that should store text?",
        ans1text: "string",
        ans2text: "Txt",
        ans3text: "myString",
        ans4text: "none of the above",
        answer: "string",

    }
    ,{
        question: "How do you create a variable with the numeric value 5?",
        ans1text: " x = 5;",
        ans2text: "int x = 5;",
        ans3text: "num x = 5",
        ans4text: "float x = 5;",
        answer: "int x = 5;",

    }
    ,{
        question: "How do you create a variable with the floating number 2.8?",
        ans1text: "int x = 2.8f;",
        ans2text: "byte x = 2.8f;",
        ans3text: "x = 2.8f;",
        ans4text: "float x = 2.8f;",
        answer: "x = 2.8f;",

    }
    ,{
        question: "Which method can be used to find the length of a string?",
        ans1text: "gentLength()",
        ans2text: "len()",
        ans3text: "length()",
        ans4text: "gentSize()",
        answer: "length()",

    }
    ,{
        question: "Which operator is used to add together two values?",
        ans1text: "The + sign",
        ans2text: "The $ sign",
        ans3text: "The * sign",
        ans4text: "none of the above",
        answer: "The + sign",

    }
    ,{
        question: "Which operator can be used to compare two values?",
        ans1text: "==",
        ans2text: "><",
        ans3text: "=",
        ans4text: "<>",
        answer: "==",

    }
]
const question = document.getElementById("quiz-question");
console.log(question);
console.log(question.textContent)
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const answerElement = document.querySelectorAll(".answer");
console.log(option_a);
console.log(option_b);  
console.log(option_c);
console.log(option_d);
console.log(option_a.textContent);
console.log(option_b.textContent);
console.log(option_c.textContent);
console.log(option_d.textContent);

const submit = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

console.log(quiz[currentQuestion].question);
console.log(quiz[currentQuestion].ans1text);
console.log(quiz[currentQuestion].ans2text);
console.log(quiz[currentQuestion].ans3text);
console.log(quiz[currentQuestion].ans4text);

question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;


submit.addEventListener("click", () => {
    const checkedAns = document.querySelector('input[type="radio"]:checked')
    console.log(checkedAns);
    // console.log(checkedAns.nextElementSibling.textContent);
    if( checkedAns === null){
        alert("Please select an answer");
    }else{
        if( checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer){
            score++;
        }

        currentQuestion++;
        if( currentQuestion < quiz.length){
            question.textContent = quiz[currentQuestion].question;
            option_a.textContent = quiz[currentQuestion].ans1text;
            option_b.textContent = quiz[currentQuestion].ans2text;
            option_c.textContent = quiz[currentQuestion].ans3text;
            option_d.textContent = quiz[currentQuestion].ans4text;
            checkedAns.checked = false;
        }else{
            alert("Your score is " + score + " out of " + quiz.length);
            location.reload();
        }

    }
});
