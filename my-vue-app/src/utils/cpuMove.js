export function cpuMove(board, firstPlayer) {
    let cpuPlayer
    console.log("firstplayer from cpumove", firstPlayer)
    if (firstPlayer === "x") {
        cpuPlayer = "o";
    } else if (firstPlayer === "o") {
        cpuPlayer = "x";
    }
    const avaliableFile = Object.keys(board).filter(
        (key) => board[key] === null);
    console.log("avaialble file from cpumove", avaliableFile)

    const randomChoice = () => {
        return avaliableFile[Math.floor(Math.random() * avaliableFile.length)];
    }

    for (const cell of Object.keys(board)) {
        debugger

        const [row, col] = cell.split(".").map(Number)
        const rowSecondCell = `${row}.${col + 1}`;
        const rowThirdCell = `${row}.${col + 2}`;
        const rowPrevCell = `${row}.${col - 1}`;
        const colSecondCell = `${row + 1}.${col}`;
        const colThirdCell = `${row + 2}.${col}`;
        const colPrevCell = `${row - 1}.${col}`;
        const crossRSecondCell = `${row + 1}.${col + 1}`;
        const crossRThirdCell = `${row + 2}.${col + 2}`;
        const crossRPrevCell = `${row - 1}.${col - 1}`;
        const crossLSecondCell = `${row + 1}.${col - 1}`;
        const crossLThirdCell = `${row - 1}.${col + 1}`;
        const crossLPrevCell = `${row - 1}.${col + 1}`;

        if (Object.keys(board).includes(rowSecondCell)
            && Object.keys(board).includes(rowThirdCell)) {

            if (board[cell] === cpuPlayer
                && board[rowSecondCell] === cpuPlayer
                && board[rowThirdCell] === null) {
                return ({cpuCell: rowThirdCell, cpuPlayer: cpuPlayer})
            }
            if (board[cell] === cpuPlayer
                && board[rowSecondCell] === null
                && board[rowThirdCell] === cpuPlayer) {
                return ({cpuCell: rowSecondCell, cpuPlayer: cpuPlayer})
            }

        }
        if (Object.keys(board).includes(rowSecondCell)
            && Object.keys(board).includes(rowPrevCell)) {

            if (board[cell] === cpuPlayer
                && board[rowSecondCell] === cpuPlayer
                && board[rowPrevCell] === null) {
                return ({cpuCell: rowPrevCell, cpuPlayer: cpuPlayer})
            }

            if (board[cell] === cpuPlayer
                && board[rowPrevCell] === cpuPlayer
                && board[rowSecondCell] === null) {
                return ({cpuCell: rowSecondCell, cpuPlayer: cpuPlayer})
            }

        }
        if (Object.keys(board).includes(colSecondCell)
            && Object.keys(board).includes(colThirdCell)) {
            if (board[cell] === cpuPlayer
                && board[colSecondCell] === cpuPlayer
                && board[colThirdCell] === null) {
                return ({cpuCell: colThirdCell, cpuPlayer: cpuPlayer})
            }
            if (board[cell] === cpuPlayer
                && board[colSecondCell] === null
                && board[colThirdCell] === cpuPlayer) {
                return ({cpuCell: colSecondCell, cpuPlayer: cpuPlayer})
            }
        }
        if (Object.keys(board).includes(colSecondCell)
            && Object.keys(board).includes(colPrevCell)) {

            if (board[cell] === cpuPlayer
                && board[colSecondCell] === cpuPlayer
                && board[colPrevCell] === null) {
                return ({cpuCell: colPrevCell, cpuPlayer: cpuPlayer})
            }

            if (board[cell] === cpuPlayer
                && board[colPrevCell] === cpuPlayer
                && board[colSecondCell] === null) {
                return ({cpuCell: colSecondCell, cpuPlayer: cpuPlayer})
            }

        }
        if (Object.keys(board).includes(crossRSecondCell)
            && Object.keys(board).includes(crossRThirdCell)) {

            if (board[cell] === cpuPlayer
                && board[crossRSecondCell] === cpuPlayer
                && board[crossRThirdCell] === null) {
                return ({cpuCell: crossRThirdCell, cpuPlayer: cpuPlayer})
            }
            if (board[cell] === cpuPlayer
                && board[crossRSecondCell] === null
                && board[crossRThirdCell] === cpuPlayer) {
                return ({cell: crossRSecondCell, cpuPlayer: cpuPlayer})
            }

        }
        if (Object.keys(board).includes(crossRSecondCell)
            && Object.keys(board).includes(crossRPrevCell)) {

            if (board[cell] === cpuPlayer
                && board[crossRSecondCell] === cpuPlayer
                && board[crossRPrevCell] === null) {
                return ({cpuCell: crossRPrevCell, cpuPlayer: cpuPlayer})
            }

            if (board[cell] === cpuPlayer
                && board[crossRPrevCell] === cpuPlayer
                && board[crossRSecondCell] === null) {
                return ({cpuCell: crossRSecondCell, cpuPlayer: cpuPlayer})
            }

        }
        if (Object.keys(board).includes(crossLSecondCell)
            && Object.keys(board).includes(crossLThirdCell)) {

            if (board[cell] === cpuPlayer
                && board[crossLSecondCell] === cpuPlayer
                && board[crossLThirdCell] === null) {
                return ({cpuCell: crossLThirdCell, cpuPlayer: cpuPlayer})
            }
            if (board[cell] === cpuPlayer
                && board[crossLSecondCell] === null
                && board[crossLThirdCell] === cpuPlayer) {
                return ({cpuCell: crossLSecondCell, cpuPlayer: cpuPlayer})
            }

        }
        if (Object.keys(board).includes(crossLSecondCell)
            && Object.keys(board).includes(crossLPrevCell)) {

            if (board[cell] === cpuPlayer
                && board[crossLSecondCell] === cpuPlayer
                && board[crossLPrevCell] === null) {
                return ({cpuCell: crossLPrevCell, cpuPlayer: cpuPlayer})
            }

            if (board[cell] === cpuPlayer
                && board[crossLPrevCell] === cpuPlayer
                && board[crossLSecondCell] === null) {
                return ({cpuCell: crossLSecondCell, cpuPlayer: cpuPlayer})
            }
        }


        if (Object.keys(board).includes(rowSecondCell)
            && Object.keys(board).includes(rowThirdCell)) {

            if (board[cell] === firstPlayer
                && board[rowSecondCell] === firstPlayer
                && board[rowThirdCell] === null) {
                return ({cpuCell: rowThirdCell, cpuPlayer: cpuPlayer})
            }
            if (board[cell] === firstPlayer
                && board[rowSecondCell] === null
                && board[rowThirdCell] === firstPlayer) {
                return ({cpuCell: rowSecondCell, cpuPlayer: cpuPlayer})
            }

        }
        if (Object.keys(board).includes(rowSecondCell)
            && Object.keys(board).includes(rowPrevCell)) {

            if (board[cell] === firstPlayer
                && board[rowSecondCell] === firstPlayer
                && board[rowPrevCell] === null) {
                return ({cpuCell: rowPrevCell, cpuPlayer: cpuPlayer})
            }

            if (board[cell] === firstPlayer
                && board[rowPrevCell] === firstPlayer
                && board[rowSecondCell] === null) {
                return ({cpuCell: rowSecondCell, cpuPlayer: cpuPlayer})
            }

        }
        if (Object.keys(board).includes(colSecondCell)
            && Object.keys(board).includes(colThirdCell)) {

            if (board[cell] === firstPlayer
                && board[colSecondCell] === firstPlayer
                && board[colThirdCell] === null) {
                return ({cpuCell: colSecondCell, cpuPlayer: cpuPlayer})
            }

            if (board[cell] === firstPlayer
                && board[colSecondCell] === null
                && board[colThirdCell] === firstPlayer) {
                return ({cpuCell: colSecondCell, cpuPlayer: cpuPlayer})
            }
        }
        if (Object.keys(board).includes(colSecondCell)
            && Object.keys(board).includes(colPrevCell)) {

            if (board[cell] === firstPlayer
                && board[colSecondCell] === firstPlayer
                && board[colPrevCell] === null) {
                return ({cpuCell: colPrevCell, cpuPlayer: cpuPlayer})
            }

            if (board[cell] === firstPlayer
                && board[colPrevCell] === firstPlayer
                && board[colSecondCell] === null) {
                return ({cpuCell: colSecondCell, cpuPlayer: cpuPlayer})
            }

        }
        if (Object.keys(board).includes(crossRSecondCell)
            && Object.keys(board).includes(crossRThirdCell)) {

            if (board[cell] === firstPlayer
                && board[crossRSecondCell] === firstPlayer
                && board[crossRThirdCell] === null) {
                return ({cpuCell: crossRThirdCell, cpuPlayer: cpuPlayer})
            }
            if (board[cell] === firstPlayer
                && board[crossRSecondCell] === null
                && board[crossRThirdCell] === firstPlayer) {
                return ({cpuCell: crossRSecondCell, cpuPlayer: cpuPlayer})
            }

        }
        if (Object.keys(board).includes(crossRSecondCell)
            && Object.keys(board).includes(crossRPrevCell)) {

            if (board[cell] === firstPlayer
                && board[crossRSecondCell] === firstPlayer
                && board[crossRPrevCell] === null) {
                return ({cpuCell: crossRPrevCell, cpuPlayer: cpuPlayer})
            }

            if (board[cell] === firstPlayer
                && board[crossRPrevCell] === firstPlayer
                && board[crossRSecondCell] === null) {
                return ({cpuCell: crossRSecondCell, cpuPlayer: cpuPlayer})
            }

        }
        if (Object.keys(board).includes(crossLSecondCell)
            && Object.keys(board).includes(crossLThirdCell)) {

            if (board[cell] === firstPlayer
                && board[crossLSecondCell] === firstPlayer
                && board[crossLThirdCell] === null) {
                return ({cpuCell: crossLThirdCell, cpuPlayer: cpuPlayer})
            }
            if (board[cell] === firstPlayer
                && board[crossLSecondCell] === null
                && board[crossLThirdCell] === firstPlayer) {
                return ({cpuCell: crossLSecondCell, cpuPlayer: cpuPlayer})
            }

        }
        if (Object.keys(board).includes(crossLSecondCell)
            && Object.keys(board).includes(crossLPrevCell)) {

            if (board[cell] === firstPlayer
                && board[crossLSecondCell] === firstPlayer
                && board[crossLPrevCell] === null) {
                return ({cell: crossLPrevCell, player: cpuPlayer})
            }

            if (board[cell] === firstPlayer
                && board[crossLPrevCell] === firstPlayer
                && board[crossLSecondCell] === null) {
                return ({cell: crossLSecondCell, player: cpuPlayer})
            }
        }
    }
    if ("2.2" in avaliableFile) {
        return ({cpuCell: "2.2", cpuPlayer: cpuPlayer})
    }
    return ({cpuCell: randomChoice(), cpuPlayer: cpuPlayer})
}

