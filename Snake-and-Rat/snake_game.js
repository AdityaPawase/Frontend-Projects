let eat=0;
let giveUp=0;
let catchbgm=new Audio("eatSnake.wav");
let giveupbgm=new Audio('SnakeGiveup.wav');
let bgm=new Audio('chilling-time-200497.mp3');
bgm.loop=true;
bgm.autoplay=true;
document.body.appendChild(bgm);

document.onkeydown=function(e){
    if(e.keyCode==39)
        {
           
           
           let mySnake=document.querySelector(".snake");
           mySnake.classList.remove('RotateSnakeToLeft');
           mySnake.classList.remove('RotateSnakeToUp');
           mySnake.classList.remove('RotateSnakeToDown');
           let snakePos=parseInt(window.getComputedStyle(mySnake,null).getPropertyValue('left'));
           mySnake.style.left=snakePos+50+"px";
           
            
          
        }
    else if(e.keyCode==37)
        {
           let mySnake=document.querySelector(".snake");
           mySnake.classList.remove('RotateSnakeToUp');
           mySnake.classList.remove('RotateSnakeToDown');
           mySnake.classList.add('RotateSnakeToLeft');
           let snakePos=parseInt(window.getComputedStyle(mySnake,null).getPropertyValue('left'));
           mySnake.style.left=snakePos-50+"px"; 
        }
        else if(e.keyCode==38)
            {
                let mySnake=document.querySelector(".snake"); 
                mySnake.classList.remove('RotateSnakeToDown');
                mySnake.classList.add('RotateSnakeToUp');
                let snakePos=parseInt(window.getComputedStyle(mySnake,null).getPropertyValue('top'));
                mySnake.style.top=snakePos-50+"px";
            }
            else if(e.keyCode==40)
                {
                  
                    let mySnake=document.querySelector(".snake"); 
                    mySnake.classList.add('RotateSnakeToDown');
                    let snakePos=parseInt(window.getComputedStyle(mySnake,null).getPropertyValue('top'));
                    mySnake.style.top=snakePos+50+"px";
                }
}
    function showRat(){
        let mygif=document.querySelector("#mygif");
        let gameBox=document.querySelector(".gameBox");
        let maxHeight=gameBox.clientHeight-mygif.clientWidth;
        let maxWidth=gameBox.clientHeight-mygif.clientWidth;
        let ranHeight=Math.floor(Math.random()*maxHeight);
        let ranWidth=Math.floor(Math.random()*maxWidth);
        mygif.style.top=ranHeight+"px";
        mygif.style.left=ranWidth+"px";
        mygif.style.display="block";
        setTimeout(function(){
            mygif.style.display="none";
        }, 2000);
        
    }
    setInterval(showRat,3000);

   setInterval(() => {
    let snake=document.querySelector(".snake");
    let rat=document.querySelector("#mygif");

    let snakeX=parseInt(window.getComputedStyle(snake,null).getPropertyValue('left'));
    let snakeY=parseInt(window.getComputedStyle(snake,null).getPropertyValue('top'));
    let ratX=parseInt(window.getComputedStyle(rat,null).getPropertyValue('left'));
    let ratY=parseInt(window.getComputedStyle(rat,null).getPropertyValue('top'));

    let offsetX=Math.abs(snakeX-ratX);
    let offsetY=Math.abs(snakeY-ratY);
    console.log(offsetX);
    console.log(offsetY);

    if(offsetX<150 || offsetY<150)
        {
           eat++;
           let eatMe=document.querySelector(".eat");
           eatMe.textContent="Eat : "+eat;
           catchbgm.play();
          
           
        }
        else
        {
            giveUp++;
            let giveup=document.querySelector(".giveUp");
            giveup.textContent="Give Up : "+giveUp;
            giveupbgm.play();
            
        }

    
   }, 3000);
  
  
    
    

