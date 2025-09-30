import styles from "./Score.module.css"
import {checkWin} from "../../utils/checkWin.js";
import {isFullBoard} from "../../utils/isFullBoard.js";
import {ReactSVG} from "react-svg";
import xIcon from "../../assets/icon-x.svg"
import oIcon from "../../assets/icon-o.svg"
import Button from "../common/Button/ButtonSecondary.jsx"


function Score({firstPlayer, gameplayResult, restartBoard, restartGame}) {
    const whoWon = checkWin(gameplayResult)
    const isTied = isFullBoard(gameplayResult)

    return (
        <div className={styles.score_background}>
            <div className={styles.conteiner_score}>
                <div className={styles.who_won}>
                    {isTied ? (<p className={styles.body_text}></p>) : (whoWon === firstPlayer) ? (
                            <p className={styles.body_text}>YOU WON!</p>) :
                        (<p className={styles.body_text}>OH NO, YOU LOST…</p>)}
                </div>
                <div className={styles.score_content}>
                    {firstPlayer === "x" ? (
                        <div className={styles.take_round}>
                            <ReactSVG src={xIcon} className={styles.take_round_x_icon}/>
                            <p className={styles.take_round_x_text}>TAKES THE ROUND</p>
                        </div>) : (
                        <div className={styles.take_round}>
                            <ReactSVG src={oIcon} className={styles.take_round_o_icon}/>
                            <p className={styles.take_round_o_text}>TAKES THE ROUND</p>
                        </div>)}
                    <div className={styles.restart_buttons}>
                        <div className={styles.restart_button_one}>
                            <Button text="QUIT" color="silver" clickFunction={restartGame}/>
                        </div>
                        <div className={styles.restart_button_two}>
                            <Button text="NEW ROUND" color="yellow" clickFunction={restartBoard}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default Score