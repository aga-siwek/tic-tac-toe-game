export function checkWhoWin(board) {

    for (let row = 0; row < 3; row++) {
        {
            if (board[row][0] === board[row][1] &&
                board[row][1] === board[row][2] &&
                board[row][0] !== null) {
                return board[row][0];
            }
        }
    }
    for (let col = 0; col < 3; col++) {
        {
            if (board[0][col] === board[1][col] &&
                board[1][col] === board[2][col] &&
                board[0][col] !== null) {
                return board[0][col];
            }
        }
    }

    if (board[0][0] === board[1][1]
        && board[1][1] === board[2][2]
        && board[0][0] !== null) {
        return board[0][0]
    }

    if (board[0][2] === board[1][1]
        && board[1][1] === board[2][0]
        && board[0][2] !== null) {
        return board[0][2]
    }
    return null;
}