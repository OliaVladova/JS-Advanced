function solve(arr){
    let juices = {};
    let bottles = {};
    for (const inputLine of arr) {
        let info = inputLine.split(' => ');
        let juiceName = info[0];
        let quantity = Number(info[1]);
        if (!juices[juiceName] == true) {
            juices[juiceName] = Number(quantity);
        } else {
            juices[juiceName] += Number(quantity);
        }
        while(juices[juiceName]>= 1000){
            let counter = 0;
            if(!bottles[juiceName]==true){
                counter++;
                bottles[juiceName] = Number(counter);
            } else {
                counter++;
                bottles[juiceName] += Number(counter);
            }
            juices[juiceName] -= 1000;
        }
        
    }
    for (const bottle in bottles) {
        console.log(`${bottle} => ${bottles[bottle]}`);
    }
}

solve(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']
);