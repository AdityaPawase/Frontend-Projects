let clickBgm=new Audio('mixkit-cool-interface-click-tone-2568.wav');
let gameOver=new Audio('mixkit-interface-device-click-2577.wav');
let turnChangeBgm=new Audio('mixkit-positive-interface-beep-221.wav');

let turn='X';

let AllBox=document.querySelectorAll('.box');
AllBox.forEach(box=>{
    box.addEventListener('click',()=>{
        clickBgm.play();
        box.innerText=turn;
        setTimeout(()=>{
          turnChangeBgm.play();
          whoesTurn();
        },2000);
        changeTurn();
        box.innerText=turn;
        checkWin();
        celebration();
      });
});
const changeTurn=()=>{
  if(turn=='X')
  {
    turn='O';
  }
  else
  {
    turn='X';
  }
}
const whoesTurn=()=>{
  if(turn=='X')
  {
   let round=document.querySelector(".info2");
   round.innerText="Turn For : O"
  }
  else
  {
    let round=document.querySelector(".info2");
    round.innerText="Turn For : X";
  }
}
const checkWin=()=>{
 let box1=document.querySelector(".box1");
 let box2=document.querySelector(".box2");
 let box3=document.querySelector(".box3");
 let box4=document.querySelector(".box4");
 let box5=document.querySelector(".box5");
 let box6=document.querySelector(".box6");
 let box7=document.querySelector(".box7");
 let box8=document.querySelector(".box8");
 let box9=document.querySelector(".box9");


     if(box1.innerText==='X' && box2.innerText==='X' && box3.innerText==='X')
     {
      let winner=document.querySelector(".winnerInfo");
      winner.innerText="Winner is X";

     }
    else if(box4.innerText==='X' && box5.innerText==='X' && box6.innerText==='X')
     {
      let winner=document.querySelector(".winnerInfo");
      winner.innerText="Winner is X";
     }
    else if(box7.innerText==='X' && box8.innerText==='X' && box9.innerText==='X')
     {
        let winner=document.querySelector(".winnerInfo");
        winner.innerText="Winner is X";
     }
    else if(box1.innerText==='X' && box4.innerText==='X' && box7.innerText==='X')
     {
       let winner=document.querySelector(".winnerInfo");
       winner.innerText="Winner is X";
     }
    else if(box2.innerText==='X' && box5.innerText==='X' && box8.innerText==='X')
     {
      let winner=document.querySelector(".winnerInfo");
      winner.innerText="Winner is X";
     }
    else if(box3.innerText==='X' && box6.innerText==='X' && box9.innerText==='X')
     {
       let winner=document.querySelector(".winnerInfo");
       winner.innerText="Winner is X";
     }
    else if(box1.innerText==='O' && box2.innerText==='O' && box3.innerText==='O')
      {
       let winner=document.querySelector(".winnerInfo");
       winner.innerText="Winner is O";
      }
     else if(box4.innerText==='O' && box5.innerText==='O' && box6.innerText==='O')
      {
       let winner=document.querySelector(".winnerInfo");
       winner.innerText="Winner is O";
      }
     else if(box7.innerText==='O' && box8.innerText==='O' && box9.innerText==='O')
      {
         let winner=document.querySelector(".winnerInfo");
         winner.innerText="Winner is O";
      }
     else if(box1.innerText==='O' && box4.innerText==='O' && box7.innerText==='O')
      {
        let winner=document.querySelector(".winnerInfo");
        winner.innerText="Winner is O";
      }
     else if(box2.innerText==='O' && box5.innerText==='O' && box8.innerText==='O')
      {
       let winner=document.querySelector(".winnerInfo");
       winner.innerText="Winner is O";
      }
     else if(box3.innerText==='O' && box6.innerText==='O' && box9.innerText==='O')
      {
        let winner=document.querySelector(".winnerInfo");
        winner.innerText="Winner is O";
      }

      
}
const celebration=()=>{
  let winner1=document.querySelector(".winnerInfo");
  if(winner1.innerText=="Winner is X")
    {
       let gif=document.querySelector(".img");
       gif.style.display="block";
       winner1.style.color="green";
       winner1.style.fontSize="4em";
       gameOver.play();
    }
    else if(winner1.innerText=="Winner is O")
      {
         let gif=document.querySelector(".img");
         gif.style.display="block";
         winner1.style.color="green";
         winner1.style.fontSize="4em";
         gameOver.play();
      }
    
}






