function makeSequence(n, k) {
    let array = [];
    array.push(1);
    for (let i = 1; i < n; i++) {
        let newNum = 0;
        if (i == 1) {
            newNum = 1;
        } else {
         
            for (let j = k-1; j >= 0; j--) {
                let num = array[(array.length-1)-j];
                if(num === undefined){
                    num = 0;
                }
                newNum += num;
            }
        }
        array.push(newNum);
    }
    return array;
}

makeSequence(8, 2);