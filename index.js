let current = document.getElementById("main");
let div = document.createElement("div");
current.style.justifyContent = "center"
current.style.backgroundImage = "url('./assets/background.jpg')"

current.style.backgroundSize = "100vw"
current.appendChild(div);
let title = document.createElement("h1")
title.id = "title"
title.innerText = "🤗 pick & play 🤗"
title.style.color = "white"
title.style.fontFamily = "Climate Crisis, sans serif"
title.style.fontSize = "90px"
title.style.marginTop = "10%"
title.style.textAlign = "center";
current.appendChild(title);
let divCard = document.createElement("div");
divCard.style.display = "flex";
divCard.style.flexDirection = "row";
divCard.style.justifyContent = "space-around"
divCard.style.marginTop = "5%"
current.appendChild(divCard)
let card0 = document.createElement("button");
card0.className = "card";
card0.style.width = "320px";
    card0.style.height = "320px";
    card0.style.border = "solid 4px #FFD700"
    card0.style.borderRadius = "52px"
    card0.style.padding = "10px"
    card0.style.background = "transparent";
    card0.style.backdropFilter = "blur(24px)";
    card0.style.justifyContent = "center"
    let imgCard0 = document.createElement("p");
    imgCard0.innerText = "🪨"
    imgCard0.style.fontSize = "200px"
    imgCard0.className = 'card-img-top'
    imgCard0.style.filter = "blur(0px)"
    card0.appendChild(imgCard0)
    let card1 = document.createElement("button");
    card1.className = "card";
    card1.style.width = "320px";
    card1.style.height = "320px";
    card1.style.border = "solid 4px #FFD700"
    card1.style.borderRadius = "52px"
    card1.style.padding = "10px"
    card1.style.background = "transparent";
    card1.style.backdropFilter = "blur(24px)";
    card1.style.justifyContent ="center"
    let imgCard1 = document.createElement("p");
    imgCard1.innerText = "🍂"
    imgCard1.style.fontSize = "200px"
    imgCard1.style.textAlign = 'center'
    card1.appendChild(imgCard1)
    let card2 = document.createElement("button");
    card2.className = "card";
    card2.style.width = "320px";
    card2.style.height = "320px";
    card2.style.border = " 4px solid #FFD700"
    card2.style.borderRadius = "52px"
    card2.style.padding = "10px"
    card2.style.background = "transparent";
    card2.style.backdropFilter = "blur(24px)";
    card2.style.justifyContent = "center"
    let imgCard2 = document.createElement("p");
    imgCard2.innerText = "✂️"
    imgCard2.style.fontSize = "200px"
    imgCard2.style.height = "300px"
    imgCard2.className = 'card-img-top'
    card2.appendChild(imgCard2)
    
    divCard.appendChild(card0);
    divCard.appendChild(card1);
    divCard.appendChild(card2);
    
   
    let restartDiv = document.createElement("div");
    restartDiv.style.display = "flex"
    restartDiv.style.flexDirection = "row";
    restartDiv.style.justifyContent = "center"
    let restartBtn = document.createElement("button");
    restartBtn.innerText = "Play again"
    restartBtn.style.fontSize = "70px"
    restartBtn.style.marginTop = "30px";
    restartBtn.style.borderRadius = "150px"
    restartBtn.style.padding = "25px";
    restartBtn.style.background = "linear-gradient(1200deg, yellow, orange)";
    restartDiv.appendChild(restartBtn);
    card0.addEventListener("click", () => {
        
        card1.style.display = "none";
        card2.style.display = "none";
        current.appendChild(restartDiv);

        play("pierre");
        setTimeout(() => {
            div.reload(startBtn.click())
        }, 5000);
        
        
    })
    card1.addEventListener("click", () => {
        
        card0.style.display = "none";
        card2.style.display = "none";
        current.appendChild(restartDiv);
        play("feuille")
        
    })
    card2.addEventListener("click", () => {
        
        card0.style.display = "none";
        card1.style.display = "none";
        current.appendChild(restartDiv);
        play("ciseaux");
        
    })
    restartBtn.addEventListener("click", () =>{
        location.reload();
        document.getElementById("startButton").click();
    })
    
;

function play(player2){ 
    let aiPlayer = Math.round(Math.random() * 2);
    let temp;   
    switch(player2){
        case "pierre" || "PIERRE":
            temp = 0;
            break;
            
        case "feuille" || "FEUILLE" || "Feuille":
            temp = 1;
            break;
            
        case "ciseaux" || "CISEAUX" || "Ciseaux":
            temp = 2;
            break;
            
        default:
            alerte("Veuillez saisir un choix valide !")
            break;
    }
    if (aiPlayer === temp){
        title = document.getElementById("title")
        title.innerText = "🫨 Draft  🫨";
    }else{
        if (temp === 0 && aiPlayer === 1 || temp === 1 && aiPlayer === 2 || temp === 2 && aiPlayer === 0){
            title = document.getElementById("title")
            title.innerText = "😣😭 You loose 😭😣";
            
            
        }else{
            if(temp === 0 && aiPlayer === 2 || temp === 1 && aiPlayer === 0 || temp === 2 && aiPlayer === 1){
                title = document.getElementById("title")
                title.innerText = "😎✌️ You Win ! ✌️😎";
            }
            }
            
        }
        console.log(temp)
        console.log(aiPlayer)
    }




