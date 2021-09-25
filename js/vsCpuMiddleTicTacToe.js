
var cont = 0
var randomSwitch = Math.floor(Math.random()*9)
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

function gameVsCPUMiddleEvents(){
    alert("Jogo contra o CPU iniciado - Nível Médio!")
    setTimeout(switchMiddlePlayer)
    setTimeout(checkMiddleVictory)

    //Enable the tictactoe boardgame
    boardgame.style.display = "flex"
    
    //Disable buttons when game start
    btnMultiplayer.style.display="none" 
    btnVsCPU.style.display="none"
    btnVsCPUMiddle.style.display="none"
    btnVsCPUHard.style.display="none"   

    //Click events to play the game
    box1.addEventListener("click", switchMiddleClick1)
    box2.addEventListener("click", switchMiddleClick2)
    box3.addEventListener("click", switchMiddleClick3)
    box4.addEventListener("click", switchMiddleClick4)
    box5.addEventListener("click", switchMiddleClick5)
    box6.addEventListener("click", switchMiddleClick6)
    box7.addEventListener("click", switchMiddleClick7)
    box8.addEventListener("click", switchMiddleClick8)
    box9.addEventListener("click", switchMiddleClick9)
}

//Functions for Player1 to play the game
function switchMiddleClick1(){
    if(cont%2==0 && blockBox1==0){
        box1.innerHTML = "X"
        blockBox1 = 1
        checkMiddle()
        CPUDefenseMiddle()
    }
}
function switchMiddleClick2(){
    if(cont%2==0 && blockBox2==0){
        box2.innerHTML = "X"
        blockBox2 = 1
        checkMiddle()
        CPUDefenseMiddle()
    }
}
function switchMiddleClick3(){
    if(cont%2==0 && blockBox3==0){
        box3.innerHTML = "X"
        blockBox3 = 1
        checkMiddle()
        CPUDefenseMiddle()
    }
}
function switchMiddleClick4(){
    if(cont%2==0 && blockBox4==0){
        box4.innerHTML = "X"
        blockBox4 = 1
        checkMiddle()
        CPUDefenseMiddle()
    }
}
function switchMiddleClick5(){
    if(cont%2==0 && blockBox5==0){
        box5.innerHTML = "X"
        blockBox5 = 1
        checkMiddle()
        CPUDefenseMiddle()
    }
}
function switchMiddleClick6(){
    if(cont%2==0 && blockBox6==0){
        box6.innerHTML = "X"
        blockBox6 = 1
        checkMiddle()
        CPUDefenseMiddle()
    }
}
function switchMiddleClick7(){
    if(cont%2==0 && blockBox7==0){
        box7.innerHTML = "X"
        blockBox7 = 1
        checkMiddle()
        CPUDefenseMiddle()
    }
}
function switchMiddleClick8(){
    if(cont%2==0 && blockBox8==0){
        box8.innerHTML = "X"
        blockBox8 = 1
        checkMiddle()
        CPUDefenseMiddle()
    }
}
function switchMiddleClick9(){
    if(cont%2==0 && blockBox9==0){
        box9.innerHTML = "X"
        blockBox9 = 1
        checkMiddle()
        CPUDefenseMiddle()
    }
}

//CPU intelligence trying to dont player1 to win the game
function CPUDefenseMiddle(){
    if(((box1.innerHTML === "X" && box2.innerHTML === "X") ||
    (box7.innerHTML === "X" && box5.innerHTML === "X") ||
    (box9.innerHTML === "X" && box6.innerHTML === "X")) && blockBox3 == 0){
        box3.innerHTML = "O" 
        blockBox3=1
        checkMiddle()
    }else if(((box2.innerHTML === "X" && box3.innerHTML === "X") ||
    (box9.innerHTML === "X" && box5.innerHTML === "X") ||
    (box7.innerHTML === "X" && box4.innerHTML === "X")) && blockBox1 == 0){
            box1.innerHTML = "O" 
            blockBox1=1
            checkMiddle()
    }else if(((box1.innerHTML === "X" && box4.innerHTML === "X") ||
    (box3.innerHTML === "X" && box5.innerHTML === "X") ||
    (box8.innerHTML === "X" && box9.innerHTML === "X")) && blockBox7 == 0){
        box7.innerHTML = "O" 
            blockBox7=1
            checkMiddle()
    }else if(((box3.innerHTML === "X" && box6.innerHTML === "X") ||
    (box1.innerHTML === "X" && box5.innerHTML === "X") ||
    (box7.innerHTML === "X" && box8.innerHTML === "X")) && blockBox9 == 0){
        box9.innerHTML = "O" 
            blockBox9=1
            checkMiddle()
    }else if(((box1.innerHTML === "X" && box3.innerHTML === "X") ||
    (box5.innerHTML === "X" && box8.innerHTML === "X")) && blockBox2 == 0){
        box2.innerHTML = "O" 
            blockBox2=1
            checkMiddle()
    }else if(((box1.innerHTML === "X" && box7.innerHTML === "X") ||
    (box5.innerHTML === "X" && box6.innerHTML === "X")) && blockBox4 == 0){
        box4.innerHTML = "O" 
            blockBox4=1
            checkMiddle()
    }else if(((box3.innerHTML === "X" && box9.innerHTML === "X") ||
    (box4.innerHTML === "X" && box5.innerHTML === "X")) && blockBox6 == 0){
        box6.innerHTML = "O" 
            blockBox6=1
            checkMiddle()
    }else if(((box7.innerHTML === "X" && box9.innerHTML === "X") ||
    (box2.innerHTML === "X" && box5.innerHTML === "X")) && blockBox8 == 0){
        box8.innerHTML = "O" 
            blockBox8=1
            checkMiddle()
    }else if(((box1.innerHTML === "X" && box9.innerHTML === "X") ||
    (box2.innerHTML === "X" && box8.innerHTML === "X") ||
    (box3.innerHTML === "X" && box7.innerHTML === "X") ||
    (box4.innerHTML === "X" && box6.innerHTML === "X")) && blockBox5 == 0){
        box5.innerHTML = "O" 
            blockBox5=1
            checkMiddle()
    }else{
        CPURandom()
    }
}

//If CPU defense is not possible, play random using CPURandom function
function CPURandom (){
    if(randomSwitch == 0 && cont%2!=0){
        randomSwitch = Math.floor(Math.random()*9)
        CPURandom()
    }else{
        if(randomSwitch == 1 && cont%2!=0){
            if(blockBox1 == 0){
                box1.innerHTML = "O"
                blockBox1 = 1
                checkHard()
            }else{
                randomSwitch = Math.floor(Math.random()*9)
                CPURandom()
            }
        }
        if(randomSwitch == 2 && cont%2!=0){
            if(blockBox2 == 0){
                box2.innerHTML = "O"
                blockBox2 = 1
                checkHard()
            }else{
                randomSwitch = Math.floor(Math.random()*9)
                CPURandom()
            }
        }
        if(randomSwitch == 3 && cont%2!=0){
            if(blockBox3 == 0){
                box3.innerHTML = "O"
                blockBox3 = 1
                checkHard()
            }else{
                randomSwitch = Math.floor(Math.random()*9)
                CPURandom()
            }
        }
        if(randomSwitch == 4 && cont%2!=0){
            if(blockBox4 == 0){
                box4.innerHTML = "O"
                blockBox4 = 1
                checkHard()
            }else{
                randomSwitch = Math.floor(Math.random()*9)
                CPURandom()
            }
        }
        if(randomSwitch == 5 && cont%2!=0){
            if(blockBox5 == 0){
                box5.innerHTML = "O"
                blockBox5 = 1
                checkHard()
            }else{
                randomSwitch = Math.floor(Math.random()*9)
                CPURandom()
            }
        }
        if(randomSwitch == 6 && cont%2!=0){
            if(blockBox6 == 0){
                box6.innerHTML = "O"
                blockBox6 = 1
                checkHard()
            }else{
                randomSwitch = Math.floor(Math.random()*9)
                CPURandom()
            }
        }
        if(randomSwitch == 7 && cont%2!=0){
            if(blockBox7 == 0){
                box7.innerHTML = "O"
                blockBox7 = 1
                checkHard()
            }else{
                randomSwitch = Math.floor(Math.random()*9)
                CPURandom()
            }
        }
        if(randomSwitch == 8 && cont%2!=0){
            if(blockBox8 == 0){
                box8.innerHTML = "O"
                blockBox8 = 1
                checkHard()
            }else{
                randomSwitch = Math.floor(Math.random()*9)
                CPURandom()
            }
        }
        if(randomSwitch == 9 && cont%2!=0){
            if(blockBox9 == 0){
                box9.innerHTML = "O"
                blockBox9 = 1
                checkHard()
            }else{
                randomSwitch = Math.floor(Math.random()*9)
                CPURandom()
            }
        }
    }
}

//Function to switch the time of the players
function checkMiddle(){
    setTimeout(switchMiddlePlayer)
    setTimeout(checkMiddleVictory)
    randomSwitch = Math.floor(Math.random()*9)
    cont=cont+1
}

//Switch the menssage accordingly wth player time
function switchMiddlePlayer(){
    if(cont<9){
        if(cont%2==0){
            document.getElementById("infoGame").innerHTML= "Sua Vez!"
        }else{
            document.getElementById("infoGame").innerHTML= "Vez do Adversário!"
        }
    }
}

//Check the player win
function checkMiddleVictory(){
    if((box1.innerHTML === "X" && box2.innerHTML === "X" && box3.innerHTML === "X") ||
    (box4.innerHTML === "X" && box5.innerHTML === "X" && box6.innerHTML === "X") ||
    (box7.innerHTML === "X" && box8.innerHTML === "X" && box9.innerHTML === "X") ||
    (box1.innerHTML === "X" && box4.innerHTML === "X" && box7.innerHTML === "X") ||
    (box2.innerHTML === "X" && box5.innerHTML === "X" && box8.innerHTML === "X") ||
    (box3.innerHTML === "X" && box6.innerHTML === "X" && box9.innerHTML === "X") ||
    (box1.innerHTML === "X" && box5.innerHTML === "X" && box9.innerHTML === "X") ||
    (box3.innerHTML === "X" && box5.innerHTML === "X" && box7.innerHTML === "X")){
        alert("Você é o vencedor!")
        cont = 0
        blockBox1 = 0
        blockBox2 = 0
        blockBox3 = 0
        blockBox4 = 0
        blockBox5 = 0
        blockBox6 = 0
        blockBox7 = 0
        blockBox8 = 0
        blockBox9 = 0
        box1.innerHTML = ""
        box2.innerHTML = ""
        box3.innerHTML = ""
        box4.innerHTML = ""
        box5.innerHTML = ""
        box6.innerHTML = ""
        box7.innerHTML = ""
        box8.innerHTML = ""
        box9.innerHTML = ""
    }else if((box1.innerHTML === "O" && box2.innerHTML === "O" && box3.innerHTML === "O") ||
    (box4.innerHTML === "O" && box5.innerHTML === "O" && box6.innerHTML === "O") ||
    (box7.innerHTML === "O" && box8.innerHTML === "O" && box9.innerHTML === "O") ||
    (box1.innerHTML === "O" && box4.innerHTML === "O" && box7.innerHTML === "O") ||
    (box2.innerHTML === "O" && box5.innerHTML === "O" && box8.innerHTML === "O") ||
    (box3.innerHTML === "O" && box6.innerHTML === "O" && box9.innerHTML === "O") ||
    (box1.innerHTML === "O" && box5.innerHTML === "O" && box9.innerHTML === "O") ||
    (box3.innerHTML === "O" && box5.innerHTML === "O" && box7.innerHTML === "O")){
        alert("Você perdeu!")
        cont = 0
        blockBox1 = 0
        blockBox2 = 0
        blockBox3 = 0
        blockBox4 = 0
        blockBox5 = 0
        blockBox6 = 0
        blockBox7 = 0
        blockBox8 = 0
        blockBox9 = 0
        box1.innerHTML = ""
        box2.innerHTML = ""
        box3.innerHTML = ""
        box4.innerHTML = ""
        box5.innerHTML = ""
        box6.innerHTML = ""
        box7.innerHTML = ""
        box8.innerHTML = ""
        box9.innerHTML = ""
    }else{
        if(cont>=9){
            document.getElementById("infoGame").innerHTML= "Jogo Finalizado!"
            alert("Jogo Empatado!")
            cont = 0
            blockBox1 = 0
            blockBox2 = 0
            blockBox3 = 0
            blockBox4 = 0
            blockBox5 = 0
            blockBox6 = 0
            blockBox7 = 0
            blockBox8 = 0
            blockBox9 = 0
            box1.innerHTML = ""
            box2.innerHTML = ""
            box3.innerHTML = ""
            box4.innerHTML = ""
            box5.innerHTML = ""
            box6.innerHTML = ""
            box7.innerHTML = ""
            box8.innerHTML = ""
            box9.innerHTML = ""
        }
    }
}