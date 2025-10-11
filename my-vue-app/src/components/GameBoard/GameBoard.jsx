import styles from "./GameBoard.module.css"
import GameHeader from "./GameHeader.jsx";
import MainBoard from "./MainBoard.jsx";
import GameScore from "./GameScore.jsx";

function GameBoard({
                       firstPlayer,
                       cpuPlayerActive,
                       isXTurn,
                       restartBoard,
                       gameResult,
                       board,
                       makeMove

                   }) {
    return (
        <div className={styles.game_container}>
            <GameHeader isXTurn={isXTurn} restartBoard={restartBoard}/>
            <div className={styles.game_content}>
                <MainBoard
                    firstPlayer={firstPlayer}
                    cpuPlayerActive={cpuPlayerActive}
                    isXTurn={isXTurn}
                    board={board}
                    makeMove={makeMove}
                />
                <GameScore
                    gameResult={gameResult}
                    firstPlayer={firstPlayer}
                    cpuPlayerActive={cpuPlayerActive}/>
            </div>
        </div>)
}

export default GameBoard
