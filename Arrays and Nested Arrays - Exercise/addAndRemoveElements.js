function operateElements(instructions) {
    let numInstr = instructions.length;
    let start = 1;
    let printArr = [];
    for (let index = 0; index < instructions.length; index++) {
        const element = instructions[index];
        switch(element){
            case 'add':
                printArr.push(start);
                break;
                case 'remove':
                    printArr.pop();
                    break;
        }
        start++;

    }
    if(printArr.length===0){
        console.log('Empty')
    }else{
        printArr.forEach(element => {
            console.log(element);
        });
    }

}

operateElements(['remove', 
'remove', 
'remove']
);