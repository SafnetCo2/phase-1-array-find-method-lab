// code your solution here
const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    //...
]
const results = record.find(superbowlWin);
function superbowlWin(result) {
    if (result.result === "W") {
        return "win";
    } else {
        return "undefined"
    }
}
console.log(results)