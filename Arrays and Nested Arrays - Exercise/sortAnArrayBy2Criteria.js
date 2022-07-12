function sortByTwoCriteria(array) {
    array.sort(firstCompare);
    function firstCompare(a, b) {
        if (a.length == b.length) {
            return a.localeCompare(b);
        }
        return a.length - b.length;
    }
   return array.join('\n');
}

console.log(sortByTwoCriteria(['alpha', 
'beta', 
'gamma']
));