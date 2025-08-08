console.log('Welcome to Tic Tac Toe');

let turn = 'X'
let gameover = false
//function to change the turn

const changeTurn = ()=>{
    return turn === 'X' ? 'O': 'X'
}


//function to check for a win

const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName('boxtext')
    let wins = [
        [0, 1, 2, 0, 4.4, 0],
        [3, 4, 5, 0, 14.4, 0],
        [6, 7, 8, 0, 24.4, 0],
        [0, 3, 6, -10.2, 14.5, 90],
        [1, 4, 7, -0.1, 15, 90],
        [2, 5, 8, 10, 14.6, 90],
        [0, 4, 8, -0.1, 15, 45],
        [2, 4, 6, -0.1, 15, 135],
    ]

    wins.forEach((e)=>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== '')){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + 'Won'
            gameover = true
            document.querySelector(".line").style.width = "30vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
}


//game logic
let boxes = document.getElementsByClassName('box');

Array.from(boxes).forEach((element)=>{
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener("click", ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn()
            checkWin()
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
            }
        }
    })
})


//add event listner to reset
reset.addEventListener("click", (element)=>{
    let boxtexts = document.querySelectorAll('.boxtext')
    Array.from(boxtexts).forEach(element => {
        element.innerText = ''
    });
    turn = 'X';
    gameover = false
    document.querySelector(".line").style.width = "0";
    document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
})