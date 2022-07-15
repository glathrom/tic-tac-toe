let move=0;
let entry = "X";
let winner = document.querySelector("#winner"); 

// winning combinations
let combinations = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

// load the cells

let cellids = [
    "#r1c1","#r1c2","#r1c3",
    "#r2c1","#r2c2","#r2c3",
    "#r3c1","#r3c2","#r3c3"
];

let getCells = function(){
    let ans = [];
    var cell;
    for( cid of cellids ){
        cell = document.querySelector(cid);
        ans.push(cell);
    }
    return ans;
}

let cells = getCells();


// determine player move
let getPlayer = function(){
    var value;
    if( move % 2 === 0 ){
        value = "X";
    } else {
        value = "O";
    }
    move += 1;
    return value;
}


let winCheck = function(){
    var value = null;
    var truthValue = false;
   
    for( var e of ["X", "O"] ){
        if(!truthValue){
            for( combo of combinations ){
                if( cells[combo[0]].textContent === e && cells[combo[1]].textContent === e && cells[combo[2]].textContent === e ){
                    truthValue = true;
                    value = e;
                    break;
                }
            } 
        }
    }

    if( value ){
        for( var i=0; i < 3; i++ ){
            cells[combo[i]].style.background = "red";
            cells[combo[i]].style.color="white";
        }
        winner.textContent = "Winner: " + value;
    }
}

cells.forEach((c)=>{
    c.addEventListener('click', (e)=>{
        if( e.target.textContent !== "X" && e.target.textContent !== "O" ){
            entry = getPlayer();
            console.log(entry);
            e.target.textContent = entry;
            winCheck();
        }
    });
});
