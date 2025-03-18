////game js file\\\\\\\
const home= document.getElementById('home')
const gameReveal = document.getElementById('gameReveal')
const gameEnd = document.getElementById('gameEnd')//for modal after game end!!!
const restartBtn = document.getElementById('restartBtn')
const attemptInner = document.getElementById('attempt')
const pointsInner = document.getElementById('pointsId')
const gameSave = document.getElementById('gameSaveModal')
const pointsForSave = document.getElementById('pointsForSave')
const userName = document.getElementById('userName')
const rankListModal = document.getElementById('rankList')
const rankName = document.getElementById('rankName')
const rankPoints = document.getElementById('pointsRank')
const pauseModal = document.getElementById('pauseModal')
const audioPlayer = document.getElementById("player");
  const audioSource = document.getElementById("audioSource");
let attempt = 1
let points=0

document.addEventListener("click", () => {
    audioPlayer.play().catch(error => {
      console.log("Autoplay blocked:", error);
    });
  }, { once: true }); // Ensures it only runs once

  function startBtnFunc(){
    home.classList.add('hide')
    gameReveal.classList.remove('hide')
    document.body.classList.add('gameBC')//background color
    document.getElementById("awardBtn").classList.add('hide')
    document.getElementById("mBtn").classList.add('hide')

    Knife()
    setTimeout(spiderSpawn,1500)
    const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);
setInterval(() => {
    if(points>= 10){
        cursor.classList.remove("custom-cursor")
        cursor.classList.add("custom-cursor2");
    }
    if(points>= 20){
        cursor.classList.remove("custom-cursor2")
        cursor.classList.add("custom-cursor3");
    }
    if(points>= 30){
        cursor.classList.remove("custom-cursor3")
        cursor.classList.add("custom-cursor4");
    }
    if(points>= 40){
        cursor.classList.remove("custom-cursor4")
        cursor.classList.add("custom-cursor5");
    }
    if(points>= 50){
        cursor.classList.remove("custom-cursor5")
        cursor.classList.add("custom-cursor6");
    }
    if(points>= 60){
        cursor.classList.remove("custom-cursor6")
        cursor.classList.add("custom-cursor7");
    }
    if(points>= 70){
        cursor.classList.remove("custom-cursor7")
        cursor.classList.add("custom-cursor8");
    }
    if(points>= 80){
        cursor.classList.remove("custom-cursor8")
        cursor.classList.add("custom-cursor9");
    }
    if(points>= 90){
        cursor.classList.remove("custom-cursor9")
        cursor.classList.add("custom-cursor10");
    }
}, 1000);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});
    


}
function Knife(){
    var canvas = document.createElement('canvas')
    document.body.appendChild(canvas);

    var ctx = canvas.getContext('2d')
    resize()
    document.body.style.margin = 0;
    canvas.style.position = 'fixed';
    var pos= {x:0, y:0}
    window.addEventListener('resize', resize)
    document.addEventListener('mousemove', draw)
    document.addEventListener('mousedown' ,setPosition)
    document.addEventListener('mouseenter' ,setPosition)

function setPosition(e){
    pos.x =e.clientX
    pos.y =e.clientY
}
function resize(){
    ctx.canvas.width = window.innerWidth
    ctx.canvas.height = window.innerHeight
}
function draw(e){
    if(e.buttons !== 1 )return;
    
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.lineJoin= 'bevel'
    ctx.strokeStyle = 'black';
    ctx.miterLimit= 1

    ctx.moveTo(pos.x, pos.y)
    setPosition(e)
    ctx.lineTo(pos.x, pos.y)
    ctx.stroke()
    lineRemove()   
}function lineRemove(){
    setTimeout(function lineRemoveInner(){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }, 400)
}}
function spiderSpawn(){
setTimeout( ()=>{
    b = setInterval(spiderFall,800)
}, 2000)
console.log('func')
}
function spiderFall(){
        var spider = document.createElement('i')
        spider.setAttribute('class', 'fa-solid fa-carrot spider-Anime2')
        var spiderLine = document.createElement('span')
        spiderLine.addEventListener("mouseover", function() {
           spiderLine.classList.remove('spider-line-anime')
           spiderLine.classList.add('spider-line-anime-die')
           points++
           pointsInner.innerText = 'Carrots: '+'\n'+points
           setTimeout(() => {
            spiderPlace.display='none'
           }, 2000);
        }
            , false);
        spiderLine.setAttribute('class', 'spider-line spider-line-anime')
        spiderLine.append(spider)
        document.body.appendChild(spiderLine)
        var spiderPlace=spiderLine.style;
        spiderPlace.left = Math.random()*window.innerWidth/1.1+'px'
        if(points>=100){
            clearInterval(b)
            b=setInterval(spiderFall,800)
        };
        if(points>=150){
            clearInterval(b)
            b=setInterval(spiderFall,650)
        };
        if(points>=200){
            clearInterval(b)
            b=setInterval(spiderFall,600)
        };
        if(points>=250){
            clearInterval(b)
            b=setInterval(spiderFall,550)
        };
        if(points>=350){
            clearInterval(b)
            b=setInterval(spiderFall,500)
        };
        if(points>=450){
            clearInterval(b)
            b=setInterval(spiderFall,450)
        };
        if(points>=500){
            clearInterval(b)
            b=setInterval(spiderFall,400)
        };
        if(points>=650){
            clearInterval(b)
            b=setInterval(spiderFall,350)
        };
        if(points>=850){
            clearInterval(b)
            b=setInterval(spiderFall,300)
        };
        if(points>=1000){
            clearInterval(b)
            b=setInterval(spiderFall,100)
        }
        setTimeout(()=>{ var bounding =spider.getBoundingClientRect() 
        if(!(bounding.top >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight))){
           window.clearInterval(b)
           b= null
           console.log('test1')
           gameEnd.classList.remove('hide')
           spiderPlace.display = 'none'
           location.href= '#gameEnd'
           document.body.classList.remove('gameBC')
           
           document.getElementById('carrotPoints').innerHTML=
           'You collected <span style="color: darkblue;">' + points + '</span> carrots';
           if (points <= 10) {
            document.getElementById('awardImg').src = 'daisy.jpg';
        } else if (points > 10 && points <= 20) {
            document.getElementById('awardImg').src = 'tulipBouq.jpg';
        } else if (points > 20 && points <= 40) {
            document.getElementById('awardImg').src = 'packCarrot.jpg';
        } else if (points > 40 && points <= 70) {
            document.getElementById('awardImg').src = 'bigTulipB.jpg';
        } else if (points > 70 && points <= 100) {
            document.getElementById('awardImg').src = 'gramophone.jpg';
        } else if (points > 100 && points <= 200) {
            document.getElementById('awardImg').src = 'topgun.webp';
        } else if (points > 200 && points<= 250) {
            document.getElementById('awardImg').src = 'bayern.webp';
        }else if (points > 250 && points<= 350) {
            document.getElementById('awardImg').src = 'hellokitty,avif';
        }else if (points > 350) {
            document.getElementById('awardImg').src = 'fiat500.jpg';
        }
           restartBtn.disabled = true
           setTimeout(()=>{
            restartBtn.disabled = false
           },2700)
        }else{
            console.log('test')
        }},2800)
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            spiderLine.classList.remove('spider-line-anime')
            spiderLine.classList.add('spider-line-anime-die')
            pauseModal.classList.remove('hide');
            window.clearInterval(b)
        }
    }  
}
function continueFunc(){
    pauseModal.classList.add('hide')
    spiderSpawn()
}
function restartGame(){
    gameEnd.classList.add('hide')
    location.href= '#gameEnd';
    spiderSpawn()
    attemptPoints()

}
function attemptPoints(){
if(restartGame){
    points=0
    pointsInner.innerText= 'Points: '+'\n'+points
    attempt++
    attemptInner.innerText = 'Attemp: ' +attempt
}}


document.addEventListener('keydown', e =>{
    if (e.key.toLowerCase() ==="z" && e.ctrlKey){
      playPrevious;
    }
})

document.addEventListener('keydown', e =>{
    if (e.key.toLowerCase() ==="x" && e.altKey){
      e.playNext();
    }
})



let songs = [
    "PianoMan.mp3", "always.mp3", "calif.mp3",
    "game.mp3", "garjo.mp3", "jin.mp3", "mamas.mp3",
    "pari.mp3", "topgun.mp3", "heart.mp3"
  ];
  let currentSong = 0;
  

  function playNext() {
    currentSong = (currentSong + 1) % songs.length; // Go to next song
    changeSong();
  }


  function changeSong() {
    audioSource.src = songs[currentSong]; // Update source
    audioPlayer.load();
    audioPlayer.play();
  }

  // Auto-play next song when the current one ends
  audioPlayer.onended = playNext;
  

  document.addEventListener("keydown", (event) => {
    switch (event.code) {
        case "Enter": // Play/Pause
          event.preventDefault();
          audioPlayer.paused ? audioPlayer.play() : audioPlayer.pause();
          break;
    
        case "ArrowRight": // Skip forward
          audioPlayer.currentTime += 5;
          break;
    
        case "ArrowLeft": // Rewind
          audioPlayer.currentTime -= 5;
          break;
    
        case "KeyM": // Mute/Unmute
          audioPlayer.muted = !audioPlayer.muted;
          break;
    
          case "Space":
            currentSong = (currentSong + 1) % songs.length; // Go to next song
            changeSong();; 
            break;
      }
    });

    window.onload = function () {
        document.getElementById("popup").style.display = "block";
        document.getElementById("overlay").style.display = "block";
    };

    // Close popup function
    function closePopup() {
        document.getElementById("popup").style.display = "none";
        document.getElementById("overlay").style.display = "none";
    }
    
   function awardPop(){
        document.getElementById("popupAward").style.display = "block";
        document.getElementById("overlay").style.display = "block";
    }
    function awardPopClose() {
        document.getElementById("popupAward").style.display = "none";
        document.getElementById("overlay").style.display = "none";
    }
    let images = [
        { src: "daisy.jpg", text: "1 carrots" },
        { src: "tulipBouq.jpg", text: "20 carrots" },
        { src: "packCarrot.jpg", text: "40 carrots" },
        { src: "bigTulipB.jpg", text: "70 carrots" },
        { src: "gramophone.jpg", text: "100 carrots" },
        { src: "topgun.webp", text: "150 carrots" },
        { src: "bayern.webp", text: "200 carrots" },
        { src: "hellokitty.avif", text:"250 carrots"},
        { src:"fiat500.jpg", text:"350+ carrots"}
    ];
    
    
    let currentIndex = 0;
    
    function showImage() {
        document.getElementById("galleryImg").src = images[currentIndex].src;
        document.getElementById("imageText").innerHTML = images[currentIndex].text;
    }
    
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length; // Loop to start
        showImage();
    }
    
    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop back
        showImage();
    }
    