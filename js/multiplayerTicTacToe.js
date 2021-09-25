
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
var boardgame = document.getElementById("game")
var btnVsCPU = document.getElementById("btnVsCPU")
var btnVsCPUMiddle = document.getElementById("btnVsCPUMiddle")
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

    //Enable the tictactoe boardgame
    boardgame.style.display = "flex"

    //Disable buttons when game start
    btnMultiplayer.style.display="none" 
    btnVsCPU.style.display="none"
    btnVsCPUMiddle.style.display="none"    
    btnVsCPUHard.style.display="none" 

    //Click events to play the game
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

//Functions for Player1 and Player2 to play the game
function switchMultiplayerClick1(){
    if(cont%2==0 && blockBox1==0){
        box1.innerHTML="X"
        checkMultiplayer()
    }else if(cont%2!=0 && blockBox1==0){
        box1.innerHTML="O"
        checkMultiplayer()
    }
    blockBox1 = 1
}
function switchMultiplayerClick2(){
    if(cont%2==0 && blockBox2==0){
        box2.innerHTML="X"
        checkMultiplayer()
    }else if(cont%2!=0 && blockBox2==0){
        box2.innerHTML="O"
        checkMultiplayer()
    }
    blockBox2 = 1
}
function switchMultiplayerClick3(){
    if(cont%2==0 && blockBox3==0){
        box3.innerHTML="X"
        checkMultiplayer()
    }else if(cont%2!=0 && blockBox3==0){
        box3.innerHTML="O"
        checkMultiplayer()
    }
    blockBox3 = 1
}
function switchMultiplayerClick4(){
    if(cont%2==0 && blockBox4==0){
        box4.innerHTML="X"
        checkMultiplayer()
    }else if(cont%2!=0 && blockBox4==0){
        box4.innerHTML="O"
        checkMultiplayer()
    }
    blockBox4 = 1
}
function switchMultiplayerClick5(){
    if(cont%2==0 && blockBox5==0){
        box5.innerHTML="X"
        checkMultiplayer()
    }else if(cont%2!=0 && blockBox5==0){
        box5.innerHTML="O"
        checkMultiplayer()
    }
    blockBox5 = 1
}
function switchMultiplayerClick6(){
    if(cont%2==0 && blockBox6==0){
        box6.innerHTML="X"
        checkMultiplayer()
    }else if(cont%2!=0 && blockBox6==0){
        box6.innerHTML="O"
        checkMultiplayer()
    }
    blockBox6 = 1
}
function switchMultiplayerClick7(){
    if(cont%2==0 && blockBox7==0){
        box7.innerHTML="X"
        checkMultiplayer()
    }else if(cont%2!=0 && blockBox7==0){
        box7.innerHTML="O"
        checkMultiplayer()
    }
    blockBox7 = 1
}
function switchMultiplayerClick8(){
    if(cont%2==0 && blockBox8==0){
        box8.innerHTML="X"
        checkMultiplayer()
    }else if(cont%2!=0 && blockBox8==0){
        box8.innerHTML="O"
        checkMultiplayer()
    }
    blockBox8 = 1
}
function switchMultiplayerClick9(){
    if(cont%2==0 && blockBox9==0){
        box9.innerHTML="X"
        checkMultiplayer()
    }else if(cont%2!=0 && blockBox9==0){
        box9.innerHTML="O"
        checkMultiplayer()
    }
    blockBox9 = 1
}

//Function to switch the time of the players
function checkMultiplayer(){
    setTimeout(switchMultiplayerPlayer)
    setTimeout(checkMultiplayerVictory)
    cont=cont+1
}

//Switch the menssage accordingly wth player time
function switchMultiplayerPlayer(){
    if(cont<9){
        if(cont%2==0){
            document.getElementById("infoGame").innerHTML= "Vez do Jogador X"
        }else{
            document.getElementById("infoGame").innerHTML= "Vez do Jogador O"
        }
    }
}

//Check the player win
function checkMultiplayerVictory(){
    if((box1.innerHTML === "X" && box2.innerHTML === "X" && box3.innerHTML === "X") ||
    (box4.innerHTML === "X" && box5.innerHTML === "X" && box6.innerHTML === "X") ||
    (box7.innerHTML === "X" && box8.innerHTML === "X" && box9.innerHTML === "X") ||
    (box1.innerHTML === "X" && box4.innerHTML === "X" && box7.innerHTML === "X") ||
    (box2.innerHTML === "X" && box5.innerHTML === "X" && box8.innerHTML === "X") ||
    (box3.innerHTML === "X" && box6.innerHTML === "X" && box9.innerHTML === "X") ||
    (box1.innerHTML === "X" && box5.innerHTML === "X" && box9.innerHTML === "X") ||
    (box3.innerHTML === "X" && box5.innerHTML === "X" && box7.innerHTML === "X")){
        alert("Jogador 1 é o vencedor!")
        window.location.reload()
    }else if((box1.innerHTML === "O" && box2.innerHTML === "O" && box3.innerHTML === "O") ||
    (box4.innerHTML === "O" && box5.innerHTML === "O" && box6.innerHTML === "O") ||
    (box7.innerHTML === "O" && box8.innerHTML === "O" && box9.innerHTML === "O") ||
    (box1.innerHTML === "O" && box4.innerHTML === "O" && box7.innerHTML === "O") ||
    (box2.innerHTML === "O" && box5.innerHTML === "O" && box8.innerHTML === "O") ||
    (box3.innerHTML === "O" && box6.innerHTML === "O" && box9.innerHTML === "O") ||
    (box1.innerHTML === "O" && box5.innerHTML === "O" && box9.innerHTML === "O") ||
    (box3.innerHTML === "O" && box5.innerHTML === "O" && box7.innerHTML === "O")){
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
