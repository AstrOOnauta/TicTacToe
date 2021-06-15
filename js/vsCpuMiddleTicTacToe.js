
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
var btnVsCPU = document.getElementById("btnVsCPU")
var btnVsCPUMiddle = document.getElementById("btnVsCPUMiddle")
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
    btnMultiplayer.style.display="none" 
    btnVsCPU.style.display="none"
    btnVsCPUMiddle.style.display="none"   

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

function switchMiddleClick1(){
    if(cont%2==0 && blockBox1==0){
        box1.style.backgroundColor="#00f"
        box1.style.borderRadius="100%"
        blockBox1 = 1
        checkMiddle()
        CPUMiddle()
    }
}
function switchMiddleClick2(){
    if(cont%2==0 && blockBox2==0){
        box2.style.backgroundColor="#00f"
        box2.style.borderRadius="100%"
        blockBox2 = 1
        checkMiddle()
        CPUMiddle()
    }
}
function switchMiddleClick3(){
    if(cont%2==0 && blockBox3==0){
        box3.style.backgroundColor="#00f"
        box3.style.borderRadius="100%"
        blockBox3 = 1
        checkMiddle()
        CPUMiddle()
    }
}
function switchMiddleClick4(){
    if(cont%2==0 && blockBox4==0){
        box4.style.backgroundColor="#00f"
        box4.style.borderRadius="100%"
        blockBox4 = 1
        checkMiddle()
        CPUMiddle()
    }
}
function switchMiddleClick5(){
    if(cont%2==0 && blockBox5==0){
        box5.style.backgroundColor="#00f"
        box5.style.borderRadius="100%"
        blockBox5 = 1
        checkMiddle()
        CPUMiddle()
    }
}
function switchMiddleClick6(){
    if(cont%2==0 && blockBox6==0){
        box6.style.backgroundColor="#00f"
        box6.style.borderRadius="100%"
        blockBox6 = 1
        checkMiddle()
        CPUMiddle()
    }
}
function switchMiddleClick7(){
    if(cont%2==0 && blockBox7==0){
        box7.style.backgroundColor="#00f"
        box7.style.borderRadius="100%"
        blockBox7 = 1
        checkMiddle()
        CPUMiddle()
    }
}
function switchMiddleClick8(){
    if(cont%2==0 && blockBox8==0){
        box8.style.backgroundColor="#00f"
        box8.style.borderRadius="100%"
        blockBox8 = 1
        checkMiddle()
        CPUMiddle()
    }
}
function switchMiddleClick9(){
    if(cont%2==0 && blockBox9==0){
        box9.style.backgroundColor="#00f"
        box9.style.borderRadius="100%"
        blockBox9 = 1
        checkMiddle()
        CPUMiddle()
    }
}

function CPUMiddle(){
    if(((box1.style.backgroundColor && box2.style.backgroundColor) ||
    (box7.style.backgroundColor && box5.style.backgroundColor) ||
    (box9.style.backgroundColor && box6.style.backgroundColor)) && blockBox3 == 0){
        box3.style.backgroundImage ="url(./img/player2.png)"
        blockBox3=1
        checkMiddle()
    }else if(((box2.style.backgroundColor && box3.style.backgroundColor) ||
    (box9.style.backgroundColor && box5.style.backgroundColor) ||
    (box7.style.backgroundColor && box4.style.backgroundColor)) && blockBox1 == 0){
            box1.style.backgroundImage ="url(./img/player2.png)"
            blockBox1=1
            checkMiddle()
    }else if(((box1.style.backgroundColor && box4.style.backgroundColor) ||
    (box3.style.backgroundColor && box5.style.backgroundColor) ||
    (box8.style.backgroundColor && box9.style.backgroundColor)) && blockBox7 == 0){
        box7.style.backgroundImage ="url(./img/player2.png)"
            blockBox7=1
            checkMiddle()
    }else if(((box3.style.backgroundColor && box6.style.backgroundColor) ||
    (box1.style.backgroundColor && box5.style.backgroundColor) ||
    (box7.style.backgroundColor && box8.style.backgroundColor)) && blockBox9 == 0){
        box9.style.backgroundImage ="url(./img/player2.png)"
            blockBox9=1
            checkMiddle()
    }else if(((box1.style.backgroundColor && box3.style.backgroundColor) ||
    (box5.style.backgroundColor && box8.style.backgroundColor)) && blockBox2 == 0){
        box2.style.backgroundImage ="url(./img/player2.png)"
            blockBox2=1
            checkMiddle()
    }else if(((box1.style.backgroundColor && box7.style.backgroundColor) ||
    (box5.style.backgroundColor && box6.style.backgroundColor)) && blockBox4 == 0){
        box4.style.backgroundImage ="url(./img/player2.png)"
            blockBox4=1
            checkMiddle()
    }else if(((box3.style.backgroundColor && box9.style.backgroundColor) ||
    (box4.style.backgroundColor && box5.style.backgroundColor)) && blockBox6 == 0){
        box6.style.backgroundImage ="url(./img/player2.png)"
            blockBox6=1
            checkMiddle()
    }else if(((box7.style.backgroundColor && box9.style.backgroundColor) ||
    (box2.style.backgroundColor && box5.style.backgroundColor)) && blockBox8 == 0){
        box8.style.backgroundImage ="url(./img/player2.png)"
            blockBox8=1
            checkMiddle()
    }else if(((box1.style.backgroundColor && box9.style.backgroundColor) ||
    (box2.style.backgroundColor && box8.style.backgroundColor) ||
    (box3.style.backgroundColor && box7.style.backgroundColor) ||
    (box4.style.backgroundColor && box6.style.backgroundColor)) && blockBox5 == 0){
        box5.style.backgroundImage ="url(./img/player2.png)"
            blockBox5=1
            checkMiddle()
    }else{
        CPURandom()
    }
}

function CPURandom (){
    if(randomSwitch == 0 && cont%2!=0){
        randomSwitch = Math.floor(Math.random()*9)
        CPUMiddle()
    }else{
        if(randomSwitch == 1 && cont%2!=0){
            if(blockBox1 == 0){
                box1.style.backgroundImage="url(./img/player2.png)"
                blockBox1 = 1
                checkMiddle()
            }else{
                randomSwitch = Math.floor(Math.random()*9)
                CPUMiddle()
            }
        }
        if(randomSwitch == 2 && cont%2!=0){
            if(blockBox2 == 0){
                box2.style.backgroundImage="url(./img/player2.png)"
                blockBox2 = 1
                checkMiddle()
            }else{
                randomSwitch = Math.floor(Math.random()*9)
                CPUMiddle()
            }
        }
        if(randomSwitch == 3 && cont%2!=0){
            if(blockBox3 == 0){
                box3.style.backgroundImage="url(./img/player2.png)"
                blockBox3 = 1
                checkMiddle()
            }else{
                randomSwitch = Math.floor(Math.random()*9)
                CPUMiddle()
            }
        }
        if(randomSwitch == 4 && cont%2!=0){
            if(blockBox4 == 0){
                box4.style.backgroundImage="url(./img/player2.png)"
                blockBox4 = 1
                checkMiddle()
            }else{
                randomSwitch = Math.floor(Math.random()*9)
                CPUMiddle()
            }
        }
        if(randomSwitch == 5 && cont%2!=0){
            if(blockBox5 == 0){
                box5.style.backgroundImage="url(./img/player2.png)"
                blockBox5 = 1
                checkMiddle()
            }else{
                randomSwitch = Math.floor(Math.random()*9)
                CPUMiddle()
            }
        }
        if(randomSwitch == 6 && cont%2!=0){
            if(blockBox6 == 0){
                box6.style.backgroundImage="url(./img/player2.png)"
                blockBox6 = 1
                checkMiddle()
            }else{
                randomSwitch = Math.floor(Math.random()*9)
                CPUMiddle()
            }
        }
        if(randomSwitch == 7 && cont%2!=0){
            if(blockBox7 == 0){
                box7.style.backgroundImage="url(./img/player2.png)"
                blockBox7 = 1
                checkMiddle()
            }else{
                randomSwitch = Math.floor(Math.random()*9)
                CPUMiddle()
            }
        }
        if(randomSwitch == 8 && cont%2!=0){
            if(blockBox8 == 0){
                box8.style.backgroundImage="url(./img/player2.png)"
                blockBox8 = 1
                checkMiddle()
            }else{
                randomSwitch = Math.floor(Math.random()*9)
                CPUMiddle()
            }
        }
        if(randomSwitch == 9 && cont%2!=0){
            if(blockBox9 == 0){
                box9.style.backgroundImage="url(./img/player2.png)"
                blockBox9 = 1
                checkMiddle()
            }else{
                randomSwitch = Math.floor(Math.random()*9)
                CPUMiddle()
            }
        }
    }
}
function checkMiddle(){
    setTimeout(switchMiddlePlayer)
    setTimeout(checkMiddleVictory)
    randomSwitch = Math.floor(Math.random()*9)
    cont=cont+1
}

function switchMiddlePlayer(){
    if(cont<9){
        if(cont%2==0){
            document.getElementById("infoGame").innerHTML= "Sua Vez!"
        }else{
            document.getElementById("infoGame").innerHTML= "Vez do Adversário!"
        }
    }
}

function checkMiddleVictory(){
    if((box1.style.backgroundColor && box2.style.backgroundColor && box3.style.backgroundColor) ||
    (box4.style.backgroundColor && box5.style.backgroundColor && box6.style.backgroundColor) ||
    (box7.style.backgroundColor && box8.style.backgroundColor && box9.style.backgroundColor) ||
    (box1.style.backgroundColor && box4.style.backgroundColor && box7.style.backgroundColor) ||
    (box2.style.backgroundColor && box5.style.backgroundColor && box8.style.backgroundColor) ||
    (box3.style.backgroundColor && box6.style.backgroundColor && box9.style.backgroundColor) ||
    (box1.style.backgroundColor && box5.style.backgroundColor && box9.style.backgroundColor) ||
    (box3.style.backgroundColor && box5.style.backgroundColor && box7.style.backgroundColor)){
        alert("Você é o vencedor!")
        window.location.reload()
    }else if((box1.style.backgroundImage && box2.style.backgroundImage && box3.style.backgroundImage) ||
    (box4.style.backgroundImage && box5.style.backgroundImage && box6.style.backgroundImage) ||
    (box7.style.backgroundImage && box8.style.backgroundImage && box9.style.backgroundImage) ||
    (box1.style.backgroundImage && box4.style.backgroundImage && box7.style.backgroundImage) ||
    (box2.style.backgroundImage && box5.style.backgroundImage && box8.style.backgroundImage) ||
    (box3.style.backgroundImage && box6.style.backgroundImage && box9.style.backgroundImage) ||
    (box1.style.backgroundImage && box5.style.backgroundImage && box9.style.backgroundImage) ||
    (box3.style.backgroundImage && box5.style.backgroundImage && box7.style.backgroundImage)){
        alert("Você perdeu!")
        window.location.reload()
    }else{
        if(cont>=9){
            document.getElementById("infoGame").innerHTML= "Jogo Finalizado!"
            alert("Jogo Empatado!")
            window.location.reload()
        }
    }
}