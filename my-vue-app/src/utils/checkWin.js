export function checkWin(board) {
    if (board["1.1"] === board["1.2"]
        && board["1.2"] === board["1.3"]
        && board["1.1"] !== null
    ) {
        return board["1.1"]

    } else if (board["2.1"] === board["2.2"]
        && board["2.2"] === board["2.3"]
        && board["2.1"] !== null) {
        return board["2.1"]

    } else if (board["3.1"] === board["3.2"]
        && board["3.2"] === board["3.3"]
        && board["3.1"] !== null) {
        return board["3.1"]

    } else if (board["1.1"] === board["2.1"]
        && board["2.1"] === board["3.1"]
        && board["1.1"] !== null) {
        return board["1.1"]

    } else if (board["1.2"] === board["2.2"]
        && board["2.2"] === board["3.2"]
        && board["1.2"] !== null) {
        return board["1.2"]

    } else if (board["1.3"] === board["2.3"]
        && board["2.3"] === board["3.3"]
        && board["1.3"] !== null) {
        return board["1.3"]

    } else if (board["1.1"] === board["2.2"]
        && board["2.2"] === board["3.3"]
        && board["1.1"] !== null) {
        return board["1.1"]

    } else if (board["1.3"] === board["2.2"]
        && board["2.2"] === board["3.1"]
        && board["1.3"] !== null) {
        return board["1.3"]
    } else {
        return null;
    }
}