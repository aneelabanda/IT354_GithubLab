
const board = [
[0, 0, 0, 0],
[0, 0, 0, 0],
[0, 0, 0, 0],
[0, 0, 0, 0]
]
//const board=[
//[0, 2, 4, 8],
//[16, 32, 64, 1281],
//[256, 512, 1024, 0],
//[0, 0, 0, 0]
// ]
const boardContainer = document.querySelector(".board");
document.addEventListener ('swiped-up', function(e) {
console. log(e.target); // the element that was swiped
});




function assignRandom() {

    let row = Math. floor (Math.random * 4)
    
    let col = Math. Floor (Math. random() * 4)
    
    if (board[row][col] == 0) {
    
    let chance = Math. random() ;
    
    if (chance > 0.9)
    
    board[row][col] = 4;
    
    else board[row][col] = 2;
    } else {
    
    
    try {
    
    assignRandom() ;
    
    } catch {
    
    console. log ("game over");
    }
}
}