

const checkScore = (score) => {

    const validScore = Number(score)
    if (isNaN(validScore) || validScore < 0 || validScore > 100) {
        console.log("Invalid score")
        return
    }
    return validScore >= 50 ? "Passed" : "Failed"

}

console.log(checkScore(70))



