let userscore=0;
let compscore=0;

const msgPara=document.querySelector("#msg");
const user_score=document.querySelector("#u-score");
const comp_score=document.querySelector("#c-score");

const compGenChoice=()=>{
      const options=["rock","paper","scisor"];
      const genNum=Math.floor(Math.random()*3);
       const compChoice=options[genNum];
      return compChoice;

};
const drawgame=(userChoice,computerchoice)=>{
      console.log("Game is draw , choices was same");
      msgPara.innerText=`Game Drawn ${userChoice} is Equal ${computerchoice}`;
      msgPara.style.backgroundColor="#081b31";
};
const showUserWin=(userWin,userChoice,computerchoice)=>{
    if(userWin)
    {
        userscore++;
        user_score.innerText=userscore;
        msgPara.innerText=`You Win ${userChoice} Beats ${computerchoice}`;
        msgPara.style.backgroundColor="green";
    }
    else
    {
        compscore++;
        comp_score.innerText=compscore;
        msgPara.innerText=`You Lose ${computerchoice} Beats ${userChoice}`;
        msgPara.style.backgroundColor="red";
        
    }
};
const playgame=(userChoice)=>{
    console.log(" user choice : ",userChoice);
    const computerchoice=compGenChoice();
    console.log("computer choice : ",computerchoice);

    if(userChoice==computerchoice)
    {
      drawgame(userChoice,computerchoice);
    }
    else{
        let userWin=true;
        if(userChoice==="rock")
        {
          userWin=computerchoice==="paper" ?false : true ;
        }
        else if(userChoice==="paper")
        {
           userWin= computerchoice==="scisor" ? false:true;
        }
        else if(userChoice==="scisor")
        {
           userWin=computerchoice==="rock"?false:true;
        }
        showUserWin(userWin,userChoice,computerchoice);
    }
};

const choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);
       
    });
});