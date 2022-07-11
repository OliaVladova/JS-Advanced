function solve(area, vol, input) {
    let objectsInput = JSON.parse(input);

    function calcRes(object) {
        let areaCalc = Math.abs(area.call(object));
        let volume = Math.abs(vol.call(object));
        return {area:areaCalc, volume};
    }
    return objectsInput.map(calcRes);
}


function area() {
    return Math.abs(this.x * this.y);
}
function vol() {
    return Math.abs(this.x * this.y * this.z);
}

console.log(solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
    ));