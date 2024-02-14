
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