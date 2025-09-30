import './App.css'
import {useState, useEffect} from 'react'
import GameBoard from "./components/GameBoard/GameBoard.jsx";
import PickPlayer from "./components/PickPlayer/PickPlayer.jsx";
import Score from "./components/Score/Score.jsx";
import {checkWin} from "./utils/checkWin.js";
import {isFullBoard} from "./utils/isFullBoard.js";
import {cpuMove} from "./utils/cpuMove.js";

function App() {
    const playerX = "x"
    const playerO = "o"

    const [firstPlayer, setFirstPlayer] = useState(playerO);
    const [cpuPlayerActive, setCpuPlayerActive] = useState(false);
    const [isXTurn, setIsXTurn] = useState(true);
    const [gameplayRoundsResult, setGameplayRoundsResult] = useState([[null, null, null], [null, null, null], [null, null, null]])
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
    const [start, setStart] = useState(false);
    const restartBoard = () => {
        setGameplayResult({
            "1.1": null, "1.2": null, "1.3": null,
            "2.1": null, "2.2": null, "2.3": null,
            "3.1": null, "3.2": null, "3.3": null,
        })
        setIsXTurn((prevState) => true)
        setGameOver((prevState) => false)
    }
    const restartGame = () => {
        restartBoard()
        setGameResult({
            "x": 0,
            "o": 0,
            "Ties": 0
        })
        setStart(false)

    }
    const playWithCpu = (boolResult) => {
        setCpuPlayerActive(boolResult)
        console.log("play with cpu", cpuPlayerActive)
        setStart(true);
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
        const winResult = checkWin(gameplayResult);
        const isFull = isFullBoard(gameplayResult);

        if (winResult != null) {
            setGameOver(true);
            setGameResult((prevGameResult) => ({...prevGameResult, [`${winResult}`]: prevGameResult[winResult] + 1}));
            return;
        }

        if (isFull) {
            setGameOver(true);
            setGameResult((prevGameResult) => ({...prevGameResult, ["Ties"]: prevGameResult["Ties"] + 1}));
            return;
        }
    }, [gameplayResult])

    useEffect(() => {
        if(cpuPlayerActive) {
            const cpuPlayer = firstPlayer === "o" ? "x" : "o";
            const isCpuMove = (firstPlayer === "o" && isXTurn) || (firstPlayer === "x" && !isXTurn)

            if(isCpuMove) {
                setGameplayResult((prevPlayer) => ({...prevPlayer, ["1.1"]: cpuPlayer}))
                setIsXTurn(!isXTurn)
            }
        }
    }, [isXTurn]);


    const avaliableFile = Object.keys(gameplayResult).filter(
        (key) => gameplayResult[key] === null);

    console.log("game result from app", gameResult)

    return (
        <>
            <div className="container">
                {!start ? (
                        <PickPlayer
                            choosePlayer={choosePlayer}
                            firstPlayer={firstPlayer}
                            playWithCpu={playWithCpu}/>) :

                    gameOver ? (
                        <div>
                            <GameBoard
                                firstPlayer={firstPlayer}
                                cpuPlayerActive={cpuPlayerActive}
                                gameplayResult={gameplayResult}
                                changeGameResult={changeGameResult}
                                isXTurn={isXTurn}
                                restartBoard={restartBoard}
                                gameResult={gameResult}
                            />
                            <Score
                                firstPlayer={firstPlayer}
                                gameplayResult={gameplayResult}
                                restartBoard={restartBoard}
                                restartGame={restartGame}
                            />
                        </div>) : (
                        <GameBoard
                            firstPlayer={firstPlayer}
                            cpuPlayerActive={cpuPlayerActive}
                            gameplayResult={gameplayResult}
                            changeGameResult={changeGameResult}
                            isXTurn={isXTurn}
                            restartBoard={restartBoard}
                            gameResult={gameResult}
                        />)
                }
            </div>
        </>
    )
}

export default App
