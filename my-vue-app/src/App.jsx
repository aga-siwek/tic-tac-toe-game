import './App.css'
import {useState, useEffect} from 'react'
import GameBoard from "./components/GameBoard/GameBoard.jsx";
import PickPlayer from "./components/PickPlayer/PickPlayer.jsx";
import Score from "./components/Score/Score.jsx";
import {checkWin} from "./utils/checkWin.js";
import {isFullBoard} from "./utils/isFullBoard.js";


function App() {
    const playerX = "x"
    const playerO = "o"

    const [firstPlayer, setFirstPlayer] = useState(playerO);
        const [cpuPlayerActive, setCpuPlayerActive] = useState(false);
    const [isXTurn, setIsXTurn] = useState(true);
    const [gameplayResult, setGameplayResult] = useState({
        "1.1": null, "1.2": null, "1.3": null,
        "2.1": null, "2.2": null, "2.3": null,
        "3.1": null, "3.2": null, "3.3": null,
    });
    const [gameResult, setGameResult] = useState({
        "x": 0,
        "o": 0,
        "Ties": 0
    })
    const [gameOver, setGameOver] = useState(false);
    const restartBoard = () => {
        setGameplayResult({
            "1.1": null, "1.2": null, "1.3": null,
            "2.1": null, "2.2": null, "2.3": null,
            "3.1": null, "3.2": null, "3.3": null,
        })
        setIsXTurn((prevState) => true)
        setGameOver((prevState) => false)
    }
    const playWithCpu = (boolResult) => {
        setCpuPlayerActive(boolResult)
        console.log("play with cpu", cpuPlayerActive);
    }

    const choosePlayer = (user) => {
        setFirstPlayer(user)
        return firstPlayer
    }

    const changeGameResult = (cell, player) => {
        setGameplayResult((prevPlayer) => ({...prevPlayer, [cell]: player}))
        setIsXTurn(!isXTurn)
    }

    useEffect(() => {
        debugger;
        const winResult = checkWin(gameplayResult);
        const isFull = isFullBoard(gameplayResult);

        if (winResult != null) {
            setGameOver(true);
            setGameResult((prevGameResult) => ({...prevGameResult, [`${winResult}`]: prevGameResult[winResult]+1}));
            console.log("game result", gameResult)
            restartBoard()
            return;
        }

        if(isFull) {
            setGameOver(true);
            setGameResult((prevGameResult) => ({...prevGameResult, ["Ties"]: prevGameResult["Ties"]+1}));
            restartBoard()
            return;
        }
    }, [gameplayResult])

    const avaliableFile = Object.keys(gameplayResult).filter(
        (key) => gameplayResult[key] === null);

    const randomChoice = () => {
        return avaliableFile[Math.floor(Math.random() * avaliableFile.length)];
    }

    const CPUChoose = () => {
        // if 2.2 available
        // for file in board:
        // if +0,1 +0,2 exist:
        // -if file and +0,1 file player choose  -> if not null, +0,2 add cpu choose
        // - if file and +0,2 file player choose -> if not null, +0,1 add cpu choose
        // if +0,1 -0,1 exist:
        // if file and -0,1 player choose -> if not null, +0.1 add  cpu choose
        // if file and +0,1 player choose -> if not null, -0.1 add  cpu choose
        //if +1 +2 exist:
        // -if file and +1 file player cho0se  -> if not null, +2 add cpu choose
        // - if file and +2 file player choose -> if not null, +1 add cpu choose
        // if +1 -1 exist:
        // if file and -1 player choose -> if not null,+1 add  cpu choose
        // if file and +1 player choose -> if not null, -1 add  cpu choose
        // if +1,1 +,2,2 exist:
        // -if file and +1,1 file player choose  -> if not null, +2,2 add cpu choose
        // - if file and +2,2 file player choose -> if not null, +1,1 add cpu choose
        // if +1,1 -1,1 exist:
        // -if file and +1,1 file player choose  -> if not null, -1,1 add cpu choose
        // - if file and -1,1 file player choose -> if not null, +1,1 add cpu choose


        let cpuPlayer
        if (firstPlayer === playerX) {
            cpuPlayer = playerO;
        } else if (firstPlayer === playerO) {
            cpuPlayer = playerX;
        }

        if ("2.2" in avaliableFile) {
            return ({cell: "2.2", player: cpuPlayer})
        }
        for (const cell of Object.keys(gameplayResult)) {

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


            if (Object.keys(gameplayResult).includes(rowSecondCell)
                && Object.keys(gameplayResult).includes(rowThirdCell)) {

                if (gameplayResult[cell] === cpuPlayer
                    && gameplayResult[rowSecondCell] === cpuPlayer
                    && gameplayResult[rowThirdCell] === null) {
                    return ({cell: rowThirdCell, player: cpuPlayer})
                }
                if (gameplayResult[cell] === cpuPlayer
                    && gameplayResult[rowSecondCell] === null
                    && gameplayResult[rowThirdCell] === cpuPlayer) {
                    return ({cell: rowSecondCell, player: cpuPlayer})
                }

                if (gameplayResult[cell] === firstPlayer
                    && gameplayResult[rowSecondCell] === firstPlayer
                    && gameplayResult[rowThirdCell] === null) {
                    return ({cell: rowThirdCell, player: cpuPlayer})
                }
                if (gameplayResult[cell] === firstPlayer
                    && gameplayResult[rowSecondCell] === null
                    && gameplayResult[rowThirdCell] === firstPlayer) {
                    return ({cell: rowSecondCell, player: cpuPlayer})
                }

            }
            if (Object.keys(gameplayResult).includes(rowSecondCell)
                && Object.keys(gameplayResult).includes(rowPrevCell)) {

                if (gameplayResult[cell] === cpuPlayer
                    && gameplayResult[rowSecondCell] === cpuPlayer
                    && gameplayResult[rowPrevCell] === null) {
                    return ({cell: rowPrevCell, palyer: cpuPlayer})
                }

                if (gameplayResult[cell] === cpuPlayer
                    && gameplayResult[rowPrevCell] === cpuPlayer
                    && gameplayResult[rowSecondCell] === null) {
                    return ({cell: rowSecondCell, player: cpuPlayer})
                }

                if (gameplayResult[cell] === firstPlayer
                    && gameplayResult[rowSecondCell] === firstPlayer
                    && gameplayResult[rowPrevCell] === null) {
                    return ({cell: rowPrevCell, player: cpuPlayer})
                }

                if (gameplayResult[cell] === firstPlayer
                    && gameplayResult[rowPrevCell] === firstPlayer
                    && gameplayResult[rowSecondCell] === null) {
                    return ({cell: rowSecondCell, player: cpuPlayer})
                }

            }

            if (Object.keys(gameplayResult).includes(colSecondCell)
                && Object.keys(gameplayResult).includes(colThirdCell)) {
                if (gameplayResult[cell] === cpuPlayer
                    && gameplayResult[colSecondCell] === cpuPlayer
                    && gameplayResult[colThirdCell] === null) {
                    return ({cell: colThirdCell, player: cpuPlayer})
                }
                if (gameplayResult[cell] === cpuPlayer
                    && gameplayResult[colSecondCell] === null
                    && gameplayResult[colThirdCell] === cpuPlayer) {
                    return ({cell: colSecondCell, player: cpuPlayer})
                }

                if (gameplayResult[cell] === firstPlayer
                    && gameplayResult[colSecondCell] === firstPlayer
                    && gameplayResult[colThirdCell] === null) {
                    return ({cell: colSecondCell, player: cpuPlayer})
                }

                if (gameplayResult[cell] === firstPlayer
                    && gameplayResult[colSecondCell] === null
                    && gameplayResult[colThirdCell] === firstPlayer) {
                    return ({cell: colSecondCell, player: cpuPlayer})
                }
            }

            if (Object.keys(gameplayResult).includes(colSecondCell)
                && Object.keys(gameplayResult).includes(colPrevCell)) {

                if (gameplayResult[cell] === cpuPlayer
                    && gameplayResult[colSecondCell] === cpuPlayer
                    && gameplayResult[colPrevCell] === null) {
                    return ({cell: colPrevCell, player: cpuPlayer})
                }

                if (gameplayResult[cell] === cpuPlayer
                    && gameplayResult[colPrevCell] === cpuPlayer
                    && gameplayResult[colSecondCell] === null) {
                    return ({cell: colSecondCell, player: cpuPlayer})
                }

                if (gameplayResult[cell] === firstPlayer
                    && gameplayResult[colSecondCell] === firstPlayer
                    && gameplayResult[colPrevCell] === null) {
                    return ({cell: colPrevCell, player: cpuPlayer})
                }

                if (gameplayResult[cell] === firstPlayer
                    && gameplayResult[colPrevCell] === firstPlayer
                    && gameplayResult[colSecondCell] === null) {
                    return ({cell: colSecondCell, player: cpuPlayer})
                }

            }
            if (Object.keys(gameplayResult).includes(crossRSecondCell)
                && Object.keys(gameplayResult).includes(crossRThirdCell)) {

                if (gameplayResult[cell] === cpuPlayer
                    && gameplayResult[crossRSecondCell] === cpuPlayer
                    && gameplayResult[crossRThirdCell] === null) {
                    return ({cell: crossRThirdCell, player: cpuPlayer})
                }
                if (gameplayResult[cell] === cpuPlayer
                    && gameplayResult[crossRSecondCell] === null
                    && gameplayResult[crossRThirdCell] === cpuPlayer) {
                    return ({cell: crossRSecondCell, player: cpuPlayer})
                }

                if (gameplayResult[cell] === firstPlayer
                    && gameplayResult[crossRSecondCell] === firstPlayer
                    && gameplayResult[crossRThirdCell] === null) {
                    return ({cell: crossRThirdCell, player: cpuPlayer})
                }
                if (gameplayResult[cell] === firstPlayer
                    && gameplayResult[crossRSecondCell] === null
                    && gameplayResult[crossRThirdCell] === firstPlayer) {
                    return ({cell: crossRSecondCell, player: cpuPlayer})
                }

            }
            if (Object.keys(gameplayResult).includes(crossRSecondCell)
                && Object.keys(gameplayResult).includes(crossRPrevCell)) {

                if (gameplayResult[cell] === cpuPlayer
                    && gameplayResult[crossRSecondCell] === cpuPlayer
                    && gameplayResult[crossRPrevCell] === null) {
                    return ({cell: crossRPrevCell, player: cpuPlayer})
                }

                if (gameplayResult[cell] === cpuPlayer
                    && gameplayResult[crossRPrevCell] === cpuPlayer
                    && gameplayResult[crossRSecondCell] === null) {
                    return ({cell: crossRSecondCell, player: cpuPlayer})
                }

                if (gameplayResult[cell] === firstPlayer
                    && gameplayResult[crossRSecondCell] === firstPlayer
                    && gameplayResult[crossRPrevCell] === null) {
                    return ({cell: crossRPrevCell, player: cpuPlayer})
                }

                if (gameplayResult[cell] === firstPlayer
                    && gameplayResult[crossRPrevCell] === firstPlayer
                    && gameplayResult[crossRSecondCell] === null) {
                    return ({cell: crossRSecondCell, player: cpuPlayer})
                }

            }

            if (Object.keys(gameplayResult).includes(crossLSecondCell)
                && Object.keys(gameplayResult).includes(crossLThirdCell)) {

                if (gameplayResult[cell] === cpuPlayer
                    && gameplayResult[crossLSecondCell] === cpuPlayer
                    && gameplayResult[crossLThirdCell] === null) {
                    return ({cell: crossLThirdCell, player: cpuPlayer})
                }
                if (gameplayResult[cell] === cpuPlayer
                    && gameplayResult[crossLSecondCell] === null
                    && gameplayResult[crossLThirdCell] === cpuPlayer) {
                    return ({cell: crossLSecondCell, player: cpuPlayer})
                }

                if (gameplayResult[cell] === firstPlayer
                    && gameplayResult[crossLSecondCell] === firstPlayer
                    && gameplayResult[crossLThirdCell] === null) {
                    return ({cell: crossLThirdCell, player: cpuPlayer})
                }
                if (gameplayResult[cell] === firstPlayer
                    && gameplayResult[crossLSecondCell] === null
                    && gameplayResult[crossLThirdCell] === firstPlayer) {
                    return ({cell: crossLSecondCell, player: cpuPlayer})
                }

            }
            if (Object.keys(gameplayResult).includes(crossLSecondCell)
                && Object.keys(gameplayResult).includes(crossLPrevCell)) {

                if (gameplayResult[cell] === cpuPlayer
                    && gameplayResult[crossLSecondCell] === cpuPlayer
                    && gameplayResult[crossLPrevCell] === null) {
                    return ({cell: crossLPrevCell, player: cpuPlayer})
                }

                if (gameplayResult[cell] === cpuPlayer
                    && gameplayResult[crossLPrevCell] === cpuPlayer
                    && gameplayResult[crossLSecondCell] === null) {
                    return ({cell: crossLSecondCell, player: cpuPlayer})
                }

                if (gameplayResult[cell] === firstPlayer
                    && gameplayResult[crossLSecondCell] === firstPlayer
                    && gameplayResult[crossLPrevCell] === null) {
                    return ({cell: crossLPrevCell, player: cpuPlayer})
                }

                if (gameplayResult[cell] === firstPlayer
                    && gameplayResult[crossLPrevCell] === firstPlayer
                    && gameplayResult[crossLSecondCell] === null) {
                    return ({cell: crossLSecondCell, player: cpuPlayer})
                }
            }
            return ({cell: randomChoice(), player: cpuPlayer})
        }
    }
    console.log("game result from app", gameResult)

    return (
        <>
            <div className="container">
                <PickPlayer
                    choosePlayer={choosePlayer}
                    firstPlayer={firstPlayer}
                    playWithCpu={playWithCpu}/>
                { gameOver ?
                    <div>
                    <GameBoard
                        firstPlayer={firstPlayer}
                        cpuPlayerActive={cpuPlayerActive}
                        gameplayResult={gameplayResult}
                        changeGameResult={changeGameResult}
                        isXTurn={isXTurn}
                        restartBoard={restartBoard}
                        gameResult = {gameResult}
                    />
                    <Score/>
                    </div>:
                    <GameBoard
                        firstPlayer={firstPlayer}
                        cpuPlayerActive={cpuPlayerActive}
                        gameplayResult={gameplayResult}
                        changeGameResult={changeGameResult}
                        isXTurn={isXTurn}
                        restartBoard={restartBoard}
                        gameResult = {gameResult}
                    />
                }
            </div>
        </>
    )
}

export default App
