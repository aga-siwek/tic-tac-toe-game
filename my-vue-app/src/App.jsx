import './App.css'
import {useState, useEffect} from 'react'
import GameBoard from "./components/GameBoard/GameBoard.jsx";
import PickPlayer from "./components/PickPlayer/PickPlayer.jsx";
import Score from "./components/Score/Score.jsx";
import {checkWhoWin} from "./utils/checkWhoWin.js";
import {checkIsFullBoard} from "./utils/checkIsFullBoard.js";
import {makeCpuMove} from "./utils/makeCpuMove.js";

function App() {
    const playerX = "x"
    const playerO = "o"

    const [firstPlayer, setFirstPlayer] = useState(playerO);
    const [cpuPlayerActive, setCpuPlayerActive] = useState(false);
    const [isXTurn, setIsXTurn] = useState(true);
    const [board, setBoard] = useState(
        [
            [null, null, null],
            [null, null, null],
            [null, null, null]])

    const [gameResult, setGameResult] = useState({
        "x": 0,
        "o": 0,
        "Ties": 0
    })
    const [gameOver, setGameOver] = useState(false);
    const [start, setStart] = useState(false);
    const restartBoard = () => {
        setBoard([
            [null, null, null],
            [null, null, null],
            [null, null, null]])
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
        setStart(true);
    }

    const choosePlayer = (user) => {
        setFirstPlayer(user)
        return firstPlayer
    }

    const makeMove = (rowIndex, columnIndex, player) => {
        setBoard(prev => {
            const newBoard = prev.map(row => [...row]);
            newBoard[rowIndex][columnIndex] = player;
            return newBoard;
        })
        setIsXTurn(!isXTurn)
    }

    useEffect(() => {
        const winResult = checkWhoWin(board);
        const isFull = checkIsFullBoard(board)

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
    }, [board])

    useEffect(() => {
        if (cpuPlayerActive) {
            const cpuPlayer = firstPlayer === "o" ? "x" : "o";
            const isCpuMove = (firstPlayer === "o" && isXTurn) || (firstPlayer === "x" && !isXTurn)
            if (isCpuMove) {
                const move = makeCpuMove(board, cpuPlayer)
                if (move === null) {
                    return
                }
                const [rowIndex, colIndex] = move
                makeMove(rowIndex, colIndex, cpuPlayer)
                setIsXTurn(!isXTurn)
            }
        }
    }, [isXTurn, cpuPlayerActive]);

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
                                isXTurn={isXTurn}
                                restartBoard={restartBoard}
                                gameResult={gameResult}
                                board={board}
                                makeMove={makeMove}
                            />
                            <Score
                                firstPlayer={firstPlayer}
                                board={board}
                                restartBoard={restartBoard}
                                restartGame={restartGame}
                                cpuPlayerActive={cpuPlayerActive}
                            />
                        </div>) : (
                        <GameBoard
                            firstPlayer={firstPlayer}
                            cpuPlayerActive={cpuPlayerActive}
                            isXTurn={isXTurn}
                            restartBoard={restartBoard}
                            gameResult={gameResult}
                            board={board}
                            makeMove={makeMove}
                        />)
                }
            </div>
        </>
    )
}

export default App
