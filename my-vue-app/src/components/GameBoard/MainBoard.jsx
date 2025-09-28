import styles from "./MainBoard.module.css"
import MainBoardFile from "./MainBoardFile.jsx";

function MainBoard({
                           firstPlayer,
                           cpuPlayerActive,
                           gameplayResult,
                           changeGameResult,
                           isXTurn,
                   }) {
    const showCells = () => {
        return Object.entries(gameplayResult).map(([cell, player]) => (
            <MainBoardFile
                key={cell} cell={cell}
                player={player}
                isXTurn={isXTurn}
                changeGameResult={changeGameResult}
            />
        ));
    }

    return (
        <div className={styles.main_board_conteiner}>
                {showCells()}
        </div>)
}

export default MainBoard