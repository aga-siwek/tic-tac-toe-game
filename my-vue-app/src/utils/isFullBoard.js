export function isFullBoard(board) {
    return !Object.values(board).includes(null);
}