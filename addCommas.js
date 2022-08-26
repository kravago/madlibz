function addCommas(inputNum) {
    let result = '';

    // handle negatives
    let parsedNum = inputNum;
    if (inputNum < 0) {
        parsedNum *= -1;
        result += "-";
    }
    const inputStr = String(parsedNum);

    // find indexes of where to add commas
    const commaIdx = [];
    if (inputStr.length > 3) {
        commaIdx.push((inputStr.length % 3) - 1);  // calculate first idx to place comma
    }

    // add additional commas
    const remainingCommas = Math.floor(inputStr.length / 3);
    for (let i = 0; i < remainingCommas - 1; i++) {
        commaIdx.push((i + 1) * 3);
    }

    // construct the result string
    for (let i = 0; i < inputStr.length; i++) {
        result += inputStr[i];
        if (commaIdx.includes(i)) {
            result += ',';
        }
    }

    return result;

}

module.exports = addCommas;