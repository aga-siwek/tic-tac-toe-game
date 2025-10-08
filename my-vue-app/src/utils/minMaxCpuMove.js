import {checkIsFullBoard} from "./checkIsFullBoard.js";
import {checkWhoWin} from "./checkWhoWin.js";


export function minMaxCpuMove(board, cpuPlayer, firstPlayer, isXTurn) {
    let minMaxScores
    let cpuBoard = structuredClone(board)
    let bestScore = -Infinity;
    let bestMove;

    if (cpuPlayer === "x") {
        minMaxScores = {
            "x": 1,
            "o": -1,
            "Tie": 0
        };
    }
    else {
        minMaxScores = {
            "x": -1,
            "o": 1,
            "Tie": 0
        };
    }

    const minMax = (someBoard, depth, isMaximizing) => {
        debugger
        let minMaxBoard = structuredClone(someBoard)
        let winResult = checkWhoWin(minMaxBoard)
        let isFull = checkIsFullBoard(minMaxBoard)
        let score

        if (winResult === null) {
            if (isFull) {
                console.log("minmax is full")
                return minMaxScores["Tie"]
            }
            if (isMaximizing) {
                console.log("minmax is maximizing")
                debugger
                let bestScore = -Infinity
                for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
                    for (let colIndex = 0; colIndex < 3; colIndex++) {
                        if (minMaxBoard[rowIndex][colIndex] === null) {
                            minMaxBoard[rowIndex][colIndex] = cpuPlayer
                            let score = minMax(minMaxBoard, depth + 1, false)
                            minMaxBoard[rowIndex][colIndex] = null
                            bestScore = Math.max(score, bestScore)
                        }
                    }
                }
                return bestScore
            } else {
                debugger
                let bestScore = Infinity
                for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
                    for (let colIndex = 0; colIndex < 3; colIndex++) {
                        if (minMaxBoard[rowIndex][colIndex] === null) {
                            minMaxBoard[rowIndex][colIndex] = firstPlayer
                            let score = minMax(minMaxBoard, depth + 1, true)
                            minMaxBoard[rowIndex][colIndex] = null
                            bestScore = Math.min(score, bestScore)
                        }
                    }
                }
                return bestScore
            }

        } else {
            console.log("minMaxScores[winResult]", minMaxScores[winResult])
            return minMaxScores[winResult]
        }
    }

    if (board.flat().every(cell => cell === null)) {
        const randomRowIndex  = Math.floor(Math.random() * 3);
        const randomColIndex  = Math.floor(Math.random() * 3);
        return [randomRowIndex, randomColIndex]
    }

    if (!board.flat().includes(null)) {
        return null
    }

    for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
        debugger
        for (let colIndex = 0; colIndex < 3; colIndex++) {
            console.log("row index from minmax", rowIndex)
            console.log("col index from minmax", colIndex)
            if (cpuBoard[rowIndex][colIndex] === null) {
                cpuBoard[rowIndex][colIndex] = cpuPlayer
                let score = minMax(cpuBoard, 0, false)
                cpuBoard[rowIndex][colIndex] = null
                if (score > bestScore) {
                    bestScore = score
                    bestMove = [rowIndex, colIndex]
                }
            }
        }

    }
    console.log(bestMove)
    return bestMove;


}