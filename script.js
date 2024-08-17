const typing_ground=document.querySelector('#textarea');
const btn=document.querySelector('#btn');
const score=document.querySelector('#score');
const show_sentence=document.querySelector('#showSentence');

let startTime,endTime,totalTimeTaken;

const sentences = [
    "Their politician was, in this moment, a notour paperback. The fygrounds can be viscoses. . ho look. The first hawklike sack.",
    "Authors often misinterpret the versy aside, their band was, in this moment, a racemed suit. The clutch of a joke becomes a togaed chair. The first pickled chess is.",
    "In modern times the first  A recorder is a grade from the right perwith it the thought that the lucid specialist is a fix.",
    "What we don't know for sure is whethe to those who look.",
    "An aunt is a bassoon from the rightloset reveals itself as a sclerous llama tobie flight is a wrench of the mind. Some posit the croupy.",
    
];

const calculateTypingSpeed = (time_taken)=>{
    let totalWords=typing_ground.value.trim();
    let actualWords =totalWords===''?0:totalWords.split(" ").length;

    if(actualWords!==0){
        let typing_speed = (actualWords/ time_taken)*60 ;
        typing_speed = Math.round(typing_speed);
        score.innerHTML=`Your typing speed is ${typing_speed} WPM  and you wrote ${actualWords} words and time taken. ${time_taken}sec`;

    }
}


// ${typing_speed.toFixed(2)}



const startTyping=()=>{
    let random_no=Math.floor(Math.random()*sentences.length);
    console.log(random_no);
    show_sentence.innerHTML=sentences[random_no];

    let date = new Date();
    startTime=date.getTime();
    btn.innerText="Done";
}


const endTypingTest=()=>{
btn.innerText="Start";

let date = new Date();
endTime=date.getTime();
totalTimeTaken=(endTime-startTime)/1000;

calculateTypingSpeed(totalTimeTaken);   // <------calculating typing speed

show_sentence.innerHTML="";
typing_ground.value="";

};

btn.addEventListener("click",()=>{
 switch(btn.innerText.toLowerCase()){
    case "start":
        typing_ground.removeAttribute("disabled");
        startTyping();
        break;
    case "done":
        typing_ground.setAttribute('disabled','true'); 
        endTypingTest();
        break;     
 }
        
});