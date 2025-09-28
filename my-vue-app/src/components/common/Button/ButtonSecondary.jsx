import styles from "./ButtonSecondary.module.css"

function ButtonSecondary({text = "CLICK ME", color = "silver", click_function}) {
    const colorPicker = () => {
        return styles[color]
    }
    return (
        <button className={`${styles.button_container} ${colorPicker()}`}>
            {text}
        </button>)
}
export default ButtonSecondary