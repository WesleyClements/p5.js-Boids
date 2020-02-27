var rowCount = 8;
var colCount = 9;
var board;
function setup() {
    board = [];
    for (var row = 0; row < rowCount; row++) {
        board[row] = [];
        for (var col = 0; col < colCount; col++) {
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
//# sourceMappingURL=build.js.map