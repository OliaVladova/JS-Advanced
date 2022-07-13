function findNeighbors(matrix){
    let pairs = 0;
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            let currElement = matrix[i][j];
            if(currElement === matrix[i][j + 1]){
                pairs++;
            }
            if(i !== matrix.length - 1 && currElement === matrix[i + 1][j]){
                pairs++;
            }
        }
    }
    return pairs;
}

findNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
);