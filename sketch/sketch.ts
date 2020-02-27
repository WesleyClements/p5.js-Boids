let rowCount: number = 8;
let colCount: number = 9;
let board: string[][];


function setup() {
    board = [];
    for (let row = 0; row < rowCount; row++) {
        board[row] = [];
        for (let col = 0; col < colCount; col++) {
            board[row][col] = " ";
        } 
    }
    board[3][2] = "x";
    console.log(board);

    createCanvas(windowWidth, windowHeight);
}
function windowResized() {
   resizeCanvas(windowWidth, windowHeight); 
}

function draw() {
    textSize(32);
    text("peepeepoopoo", 500, 100);
}


