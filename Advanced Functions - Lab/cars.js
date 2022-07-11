function carsFunction(input) {
    let result = {};

    let obj = {
        create(name, inherits, parentName) {
            result[name] = inherits ? Object.create(result[parentName]) : {};
        },
        set(name, key, value){
            result[name][key] = value;
        },
        print(name){
            let output = [];

            for (const key in result[name]) {
                output.push(`${key}:${result[name][key]}`);
            }
            console.log(output.join(','));
        }
    };
    input.forEach(element => {
        let arr = element.split(" ");
        let car = arr[0];
        let name = arr[1];
        let key = arr[2];
        let value = arr[3];
        obj[car](name,key,value);
    });
}

carsFunction(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);