function argInfo(...input) {
    let arr = Array.from(input);
    let typeMap = new Map();

    for (const item of arr) {
        let type = typeof item;

        if (typeMap.has(type)) {
            typeMap.set(type, typeMap.get(type) + 1);
        } else {
            typeMap.set(type, 1);
        }

        console.log(`${type}: ${item}`);
    }

    let arrOutput = Array.from(typeMap.entries()).sort((a, b) => b[1] - a[1]);
    arrOutput.forEach(element => {
        console.log(`${element[0]} = ${element[1]}`);
    });
}

argInfo('cat', 42, function () { console.log('Hello world!'); });