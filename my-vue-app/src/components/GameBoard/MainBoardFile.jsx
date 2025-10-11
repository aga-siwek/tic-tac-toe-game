import styles from "./MainBoardFile.module.css"
import iconX from "../../assets/icon-x.svg"
import iconO from "../../assets/icon-o.svg"
import iconX_outline from "../../assets/icon-x-outline.svg"
import iconO_outline from "../../assets/icon-o-outline.svg"

import {ReactSVG} from "react-svg";

function MainBoardFile({
                           player = null,
                           isXTurn,
                           rowIndex,
                           columnIndex,
                           makeMove,
                       }) {

    const clickCell = () => {
        if (isXTurn) {
            makeMove(rowIndex, columnIndex, "x")
        } else {
            makeMove(rowIndex, columnIndex, "o")
        }
    }
    const showCell = () => {
        if (player === null)
            return (
                <div className={styles.main_board_file_conteiner}>
                    {isXTurn ? (
                        <div className={styles.icon_x_hover_svg}
                             onClick={clickCell}>
                            <ReactSVG
                                src={iconX_outline}
                                className={styles.icon_x_outline_svg}/>
                        </div>) : (
                        <div className={styles.icon_hover_o_svg}
                             onClick={clickCell}>
                            <ReactSVG src={iconO_outline}
                                      className={styles.icon_o_outline_svg}/>
                        </div>)}

                </div>
            )
        if (player === "x") {
            return (
                <div className={styles.main_board_file_conteiner}>
                    <ReactSVG src={iconX} className={styles.icon_x_svg}/>
                </div>)
        }
        if (player === "o") {
            return (
                <div className={styles.main_board_file_conteiner}>
                    <ReactSVG src={iconO} className={styles.icon_o_svg}/>
                </div>)
        }
    }

    return (showCell())
}

export default MainBoardFile