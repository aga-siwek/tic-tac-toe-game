import styles from "./MainBoard.module.css"
import MainBoardFile from "./MainBoardFile.jsx";

function MainBoard({
                       firstPlayer,
                       cpuPlayerActive,
                       gameplayResult,
                       changeGameResult,
                       isXTurn,
                       board,
                       makeMove
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
    console.log("main board, game board", board);
    const showGameCells = () => {
        return board.map((row, rowIndex) =>
            row.map((column, columnIndex) => (
                <MainBoardFile
                    key={`${rowIndex}.${columnIndex}`}
                    player={column}
                    isXTurn={isXTurn}
                    changeGameResult={changeGameResult}
                    rowIndex={rowIndex}
                    columnIndex={columnIndex}
                    makeMove={makeMove}
                />
            ))
        );
    }

    return (
        <div className={styles.main_board_conteiner}>
            {showGameCells()}
        </div>)
}

export default MainBoard