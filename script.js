let boxes=document.querySelectorAll(".box");
let reserbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turno=true;//playerx,player0
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    turno=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turno){
            //playero
            box.innerText="o";
            turno=false;
        }
        else{
            //playerx
            box.innerText="x";
            turno=true;
        }
        box.disabled=true;
        checkwinner();
    });
}
);
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner =(winner)=>{
    msg.innerText=`congratulation,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}
const checkwinner =()=>{
    for(let pattern of winpatterns){
            let pos1val=boxes[pattern[0]].innerText;
            let pos2val=boxes[pattern[1]].innerText;
            let pos3val=boxes[pattern[2]].innerText;
            if(pos1val!=""&&pos2val!=""&&pos3val!=""){
                if(pos1val==pos2val && pos2val==pos3val){
                    showWinner(pos1val);
                }
            }
    }
};
newgamebtn.addEventListener("click",resetGame);
reserbtn.addEventListener("click",resetGame);