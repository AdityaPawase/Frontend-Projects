 isAlive=true;
 let scoreCount=0;
document.onkeydown=function(e)
{
    console.log("Keycode :"+e.keyCode);
    if(e.keyCode==38)
        {
           let dino=document.querySelector(".dino");
            dinoUp=parseInt(window.getComputedStyle(dino,null).getPropertyValue('bottom'));
            dino.style.bottom=dinoUp+400+"px";
            setTimeout(() => {
                dino.style.bottom=0+"px";
             }, 500);
            
        }
       else if(e.keyCode==39)
        {
            let dino=document.querySelector(".dino");
            dinloX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
            dino.style.left=dinloX+112+"px";                   
        }
        else if(e.keyCode==37)
        {
            let dino=document.querySelector(".dino");
            dinoY=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
            dino.style.left=dinoY-112+"px";
        }
}

setInterval(() => {
    let dino=document.querySelector(".dino");
    let gameover=document.querySelector(".gameover"); 
    let obstacle=document.querySelector(".obstacle");

    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetX=Math.abs(dx-ox);
    offsetY=Math.abs(dy-oy);
    if(offsetX<100 && offsetY<53)
        {
          gameover.style.visibility="visible";
          obstacle.classList.remove('obstacleAni');  
        }
        else if(offsetX<145 && isAlive){
            scoreCount++;
            updateScore(scoreCount);
            isAlive=false;
            setTimeout(() =>{
                isAlive=true;
            }, 1000);
            setTimeout(() => {
                aniDur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
                obstacle.style.animationDuration=aniDur-0.01+'s';
            }, 500);
            
        }
        
}, 100);
function updateScore(scoreCount)
{
    let scorediv=document.querySelector(".score");
    scorediv.innerHTML="Your Score is : "+scoreCount;
}
