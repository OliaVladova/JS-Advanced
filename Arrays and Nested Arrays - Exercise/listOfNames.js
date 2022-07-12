function sortNames(array){
    array.sort((a,b)=> a.localeCompare(b));

    for (let index = 0; index < array.length; index++) {
        console.log((index + 1) + '.' + array[index]);
        
    }
}

sortNames(["John", "Bob", "Christina", "Ema"])