const quizdata=[
    {
        Question: "What does Html stands for",
        a: "a.  Hyper Text Markup Language",
        b: "b.  Hyperlinks and Text Markup Language",
        c: "c.  Home Tool Markup Language",
        d: "d.  Hyper Tool Markup Language",
        correct:"a"
    },
    {
        Question: "What does CSS stands for",
        a: "a.  Cascading Steel Sheet",
        b: "b.  Cascading silver sheet",
        c: "c.  Cascading Style Sheet",
        d: "d.  None of the above",
        correct:"c"
    },
    {
        Question: "Who is making the web standards",
        a: "a.  Mozilla",
        b: "b.  World Wide Web Consortium",
        c: "c.  Google",
        d: "d.  Facebook",
        correct:"b"
    },
    {
        Question: "Javascript is an _______ language?",
        a: "Procedural",
        b: "object-based",
        c: "Object-Oriented",
        d: "None of the above",
        correct:"c"
    },
    {
        Question: "Which of the following methods is used to access HTML elements using Javascript?",
        a: "a.  getElementbyId()",
        b: "b.  getElementByClassName()",
        c: "c.  Both A and B",
        d: "d.  None of the above",
        correct:"c"
    },
    {
        Question: "How can a datatype be declared to be a constant type?",
        a: "a.  Constant",
        b: "b.  Var",
        c: "c.  let",
        d: "d.  const",
        correct:"d"
    },
    {
        Question: "Where in an HTML document is the correct place to refer to an external style sheet?",
        a: "a.  Body",
        b: "b.  Head",
        c: "c.  End of Html Tag",
        d: "d.  None of the above",
        correct:"b"
    },
    {
        Question: "Which HTML attribute is used to define inline styles?",
        a: "a.  class",
        b: "b.  font",
        c: "c.  style",
        d: "d.  styles",
        correct:"c"
    },
    {
        Question: "Which CSS property is used to change the text color of an element?",
        a: "a.  color",
        b: "b.  font-color",
        c: "c.  bg-color",
        d: "d.  colour",
        correct:"a"
    },
    {
        Question: "How do you select an element with id 'demo'?",
        a: "a.  .demo",
        b: "b.  #demo",
        c: "c.  *demo",
        d: "d.  -demo",
        correct:"b"
    },
    
    
]
const correctanswer= document.getElementById('correctanswer')
const scoresel= document.getElementById('scores')
const ansel= document.querySelectorAll('.answer')
const questel= document.getElementById('question')
const atext= document.getElementById('a_text')
const btext= document.getElementById('b_text')
const ctext= document.getElementById('c_text')
const dtext= document.getElementById('d_text')
let currentquiz=0
let score= 0
loadquiz()
function loadquiz(){

    
 deselectanswers()
    
    const currentquizdata= quizdata[currentquiz];
    questel.innerText=currentquizdata.Question;
    atext.innerText= currentquizdata.a;
    btext.innerText= currentquizdata.b;
    ctext.innerText= currentquizdata.c;
    dtext.innerText= currentquizdata.d;

    
}


function deselectanswers(){

    ansel.forEach(ansel=>ansel.checked=false)
}




function getselected(){
 let answers
    ansel.forEach(ansel=>{
        if(ansel.checked){
            answers =ansel.id
        }
        
    })

    return answers
}




submitbtn.addEventListener('click', ()=>{
    const answer=getselected()
    if(answer){
        if(answer===quizdata[currentquiz].correct){
            score++
            scoresel.innerText=`${score}/${quizdata.length}`


        }
        

           
        currentquiz++

        if(currentquiz<quizdata.length){
            
            loadquiz()
           
        }
        else if(currentquiz>=quizdata.length){
            correctanswer.innerText= ` your score is ${score}/ ${quizdata.length}`
           
    }
}
})




