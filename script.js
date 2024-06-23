let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-Container");
let msg = document.querySelector(".msg");

let turnO = true;

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];



const resetGame = () =>{
    turn0 = true;
    enableBoxes();
    msg.innerText="See who is the Winner";
}


boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        // box.innerText="X"

        if(turnO){
            box.innerText ="O";
            turnO = false;
            
        }
        else{
            box.innerText="X";
            turnO=true;
        }

        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
}

const showWinner =(winner) =>{
    msg.innerText = `Congratulation 🎉, Winner is ${winner}`;
    // msgContainer.classList.remove("hide");
    disableBoxes();
    setTimeout(function myfunction(){
        alert(`Congratulation 🎉, Winner is ${winner}`);
    },1000);
    
}


const checkWinner = () =>{
    for(let pattern of winPatterns){
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }

}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

