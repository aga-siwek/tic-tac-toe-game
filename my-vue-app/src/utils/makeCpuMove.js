export function makeCpuMove(board, cpuPlayer) {
//     [
//         [null, null, null],
//         [null, null, null],
//         [null, null, null]]


    // board.map((row, rowIndex) => {
    //     row.map((col, colIndex) => {
    //         const currentCell = board[rowIndex][colIndex];
    //         const rowSecondCell = board[rowIndex][colIndex + 1];
    //         const rowThirdCell = board[rowIndex][colIndex + 2];
    //         const rowPrevCell = board[rowIndex][colIndex - 1];
    //         const colSecondCell = board[rowIndex + 1][colIndex];
    //         const colThirdCell = board[rowIndex + 2][colIndex];
    //         const colPrevCell = board[rowIndex - 1][colIndex];
    //         const crossRSecondCell = board[rowIndex + 1][colIndex + 1];
    //         const crossRThirdCell = board[rowIndex + 2][colIndex + 2];
    //         const crossRPrevCell = board[rowIndex - 1][colIndex - 1];
    //         const crossLSecondCell = board[rowIndex + 1][colIndex - 1];
    //         const crossLThirdCell = board[rowIndex + 1][colIndex - 1];
    //         const crossLPrevCell = board[rowIndex - 1][colIndex + 1];
    //
    //
    //         if (rowSecondCell && rowThirdCell) {
    //             if (currentCell === rowSecondCell
    //                 && rowThirdCell=== null
    //                 && currentCell ==cpuPlayer) {
    //                 return (rowIndex, colIndex + 2, cpuPlayer)
    //             }
    //             if (currentCell === rowThirdCell
    //                 && rowSecondCell=== null
    //                 && currentCell ==cpuPlayer) {
    //                 return (rowIndex, colIndex + 1, cpuPlayer)
    //             }
    //         }
    //
    //         if (rowPrevCell && rowSecondCell) {
    //             if (currentCell === rowPrevCell &&
    //             rowSecondCell === null
    //             && currentCell ==cpuPlayer) {
    //                 return (rowIndex, colIndex + 1, cpuPlayer)
    //             }
    //             if (currentCell === rowSecondCell &&
    //                 rowPrevCell === null
    //                 && currentCell ==cpuPlayer) {
    //                 return (rowIndex, colIndex - 1, cpuPlayer)
    //             }
    //         }
    //         if (colSecondCell && colThirdCell) {
    //             if (currentCell === colSecondCell
    //                 && colThirdCell === null
    //             && currentCell ==cpuPlayer) {
    //                 return (rowIndex +2, colIndex, cpuPlayer)
    //             }
    //             if (currentCell === colThirdCell
    //                 && colSecondCell === null
    //                 && currentCell ==cpuPlayer) {
    //                 return (rowIndex +1, colIndex, cpuPlayer)
    //             }
    //         }
    //         if (colSecondCell && colPrevCell) {
    //             if (currentCell === colPrevCell
    //                 && colSecondCell === null
    //             && currentCell ==cpuPlayer) {
    //                 return (rowIndex +1, colIndex, cpuPlayer)
    //             }
    //             if (currentCell === colSecondCell
    //                 && colPrevCell === null
    //                 && currentCell ==cpuPlayer) {
    //                 return (rowIndex -1, colIndex, cpuPlayer)
    //             }
    //         }
    //
    //
    //     })
    // })


    while (true) {
        console.log("board from makecpumove", board)

        if (!board.flat().includes(null)) {
            return null
        }
        const randomRowIndex  = Math.floor(Math.random() * 3);
        const randomColIndex  = Math.floor(Math.random() * 3);
        if (board[randomRowIndex][randomColIndex] === null) {
            return [randomRowIndex, randomColIndex]
        }

    }

}