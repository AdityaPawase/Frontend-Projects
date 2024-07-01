let songInedx=0;
let audio=new Audio('Rang lageya - Mohit chauhan.mp3');
let masterplay=document.getElementById("masterplay");
let myprogbar=document.getElementById("progbar");
let songs=[
    {songName:"Jay Shree Ram",filePath:"Jay Shree Ram ! Notification ! Message.mp3"},
    {songName:"hanuman chalisa",filePath:"Rang lageya - Mohit chauhan.mp3"},
    {songName:"hanuman chalisa",filePath:"So many things i do and girl you never wanna judge.mp3"},
    {songName:"hanuman chalisa",filePath:"Tu Hai To Mujhe Kya Chahiye - Arijit Singh ! Hindi.mp3"},
]

masterplay.addEventListener('click',()=>{
    if(audio.paused || audio.currentTime<=0)
    {
        audio.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    }
    else
    {
        audio.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
    }
   
})


audio.addEventListener('timeupdate',()=>{
   progress=parseInt((audio.currentTime/audio.duration)*100);
   myprogbar.value=progress;
})


myprogbar.addEventListener('change',()=>{
    audio.currentTime=myprogbar.value*audio.duration/100;
})



