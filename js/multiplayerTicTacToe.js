
var cont = 0
var blockBox1 = 0
var blockBox2 = 0
var blockBox3 = 0
var blockBox4 = 0
var blockBox5 = 0
var blockBox6 = 0
var blockBox7 = 0
var blockBox8 = 0
var blockBox9 = 0
var btnVsCPU = document.getElementById("btnVsCPU")
var btnVsCPUHard = document.getElementById("btnVsCPUHard")
var btnMultiplayer = document.getElementById("btnMultiplayer")
var box1 = document.getElementById("box1")
var box2 = document.getElementById("box2")
var box3 = document.getElementById("box3")
var box4 = document.getElementById("box4")
var box5 = document.getElementById("box5")
var box6 = document.getElementById("box6")
var box7 = document.getElementById("box7")
var box8 = document.getElementById("box8")
var box9 = document.getElementById("box9")

function gameMultiplayerEvents(){
    alert("Jogo multiplayer iniciado!")
    setTimeout(switchMultiplayerPlayer)
    setTimeout(checkMultiplayerVictory)
    btnMultiplayer.style.display="none" 
    btnVsCPU.style.display="none"    
    btnVsCPUHard.style.display="none" 

    box1.addEventListener("click", switchMultiplayerClick1)
    box2.addEventListener("click", switchMultiplayerClick2)
    box3.addEventListener("click", switchMultiplayerClick3)
    box4.addEventListener("click", switchMultiplayerClick4)
    box5.addEventListener("click", switchMultiplayerClick5)
    box6.addEventListener("click", switchMultiplayerClick6)
    box7.addEventListener("click", switchMultiplayerClick7)
    box8.addEventListener("click", switchMultiplayerClick8)
    box9.addEventListener("click", switchMultiplayerClick9)
}

function switchMultiplayerClick1(){
    if(cont%2==0 && blockBox1==0){
        box1.style.backgroundColor="#00f"
        box1.style.borderRadius="100%"
        checkMultiplayer()
    }else if(cont%2!=0 && blockBox1==0){
        box1.style.backgroundImage="url(./img/player2.png)"
        checkMultiplayer()
    }
    blockBox1 = 1
}
function switchMultiplayerClick2(){
    if(cont%2==0 && blockBox2==0){
        box2.style.backgroundColor="#00f"
        box2.style.borderRadius="100%"
        checkMultiplayer()
    }else if(cont%2!=0 && blockBox2==0){
        box2.style.backgroundImage="url(./img/player2.png)"
        checkMultiplayer()
    }
    blockBox2 = 1
}
function switchMultiplayerClick3(){
    if(cont%2==0 && blockBox3==0){
        box3.style.backgroundColor="#00f"
        box3.style.borderRadius="100%"
        checkMultiplayer()
    }else if(cont%2!=0 && blockBox3==0){
        box3.style.backgroundImage="url(./img/player2.png)"
        checkMultiplayer()
    }
    blockBox3 = 1
}
function switchMultiplayerClick4(){
    if(cont%2==0 && blockBox4==0){
        box4.style.backgroundColor="#00f"
        box4.style.borderRadius="100%"
        checkMultiplayer()
    }else if(cont%2!=0 && blockBox4==0){
        box4.style.backgroundImage="url(./img/player2.png)"
        checkMultiplayer()
    }
    blockBox4 = 1
}
function switchMultiplayerClick5(){
    if(cont%2==0 && blockBox5==0){
        box5.style.backgroundColor="#00f"
        box5.style.borderRadius="100%"
        checkMultiplayer()
    }else if(cont%2!=0 && blockBox5==0){
        box5.style.backgroundImage="url(./img/player2.png)"
        checkMultiplayer()
    }
    blockBox5 = 1
}
function switchMultiplayerClick6(){
    if(cont%2==0 && blockBox6==0){
        box6.style.backgroundColor="#00f"
        box6.style.borderRadius="100%"
        checkMultiplayer()
    }else if(cont%2!=0 && blockBox6==0){
        box6.style.backgroundImage="url(./img/player2.png)"
        checkMultiplayer()
    }
    blockBox6 = 1
}
function switchMultiplayerClick7(){
    if(cont%2==0 && blockBox7==0){
        box7.style.backgroundColor="#00f"
        box7.style.borderRadius="100%"
        checkMultiplayer()
    }else if(cont%2!=0 && blockBox7==0){
        box7.style.backgroundImage="url(./img/player2.png)"
        checkMultiplayer()
    }
    blockBox7 = 1
}
function switchMultiplayerClick8(){
    if(cont%2==0 && blockBox8==0){
        box8.style.backgroundColor="#00f"
        box8.style.borderRadius="100%"
        checkMultiplayer()
    }else if(cont%2!=0 && blockBox8==0){
        box8.style.backgroundImage="url(./img/player2.png)"
        checkMultiplayer()
    }
    blockBox8 = 1
}
function switchMultiplayerClick9(){
    if(cont%2==0 && blockBox9==0){
        box9.style.backgroundColor="#00f"
        box9.style.borderRadius="100%"
        checkMultiplayer()
    }else if(cont%2!=0 && blockBox9==0){
        box9.style.backgroundImage="url(./img/player2.png)"
        checkMultiplayer()
    }
    blockBox9 = 1
}

function checkMultiplayer(){
    setTimeout(switchMultiplayerPlayer)
    setTimeout(checkMultiplayerVictory)
    cont=cont+1
}

function switchMultiplayerPlayer(){
    if(cont<9){
        if(cont%2==0){
            document.getElementById("infoGame").innerHTML= "Vez do Jogador 1"
        }else{
            document.getElementById("infoGame").innerHTML= "Vez do Jogador 2"
        }
    }
}

function checkMultiplayerVictory(){
    if((box1.style.backgroundColor && box2.style.backgroundColor && box3.style.backgroundColor) ||
    (box4.style.backgroundColor && box5.style.backgroundColor && box6.style.backgroundColor) ||
    (box7.style.backgroundColor && box8.style.backgroundColor && box9.style.backgroundColor) ||
    (box1.style.backgroundColor && box4.style.backgroundColor && box7.style.backgroundColor) ||
    (box2.style.backgroundColor && box5.style.backgroundColor && box8.style.backgroundColor) ||
    (box3.style.backgroundColor && box6.style.backgroundColor && box9.style.backgroundColor) ||
    (box1.style.backgroundColor && box5.style.backgroundColor && box9.style.backgroundColor) ||
    (box3.style.backgroundColor && box5.style.backgroundColor && box7.style.backgroundColor)){
        alert("Jogador 1 é o vencedor!")
        window.location.reload()
    }else if((box1.style.backgroundImage && box2.style.backgroundImage && box3.style.backgroundImage) ||
    (box4.style.backgroundImage && box5.style.backgroundImage && box6.style.backgroundImage) ||
    (box7.style.backgroundImage && box8.style.backgroundImage && box9.style.backgroundImage) ||
    (box1.style.backgroundImage && box4.style.backgroundImage && box7.style.backgroundImage) ||
    (box2.style.backgroundImage && box5.style.backgroundImage && box8.style.backgroundImage) ||
    (box3.style.backgroundImage && box6.style.backgroundImage && box9.style.backgroundImage) ||
    (box1.style.backgroundImage && box5.style.backgroundImage && box9.style.backgroundImage) ||
    (box3.style.backgroundImage && box5.style.backgroundImage && box7.style.backgroundImage)){
        alert("Jogador 2 é o vencedor!")
        window.location.reload()
    }else{
        if(cont>=9){
            document.getElementById("infoGame").innerHTML= "Jogo Finalizado!"
            alert("Jogo Empatado!")
            window.location.reload()
        }
    }
}