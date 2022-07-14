class List {
    constructor() {
        this.arrList = [];
        this.size = this.arrList.length;
    };
    add(element) {
        this.arrList.push(element);
        this.arrList.sort((el1, el2) => el1 - el2);
        this.size = this.arrList.length;
    };
    remove(index) {
        if (index >= 0 && index <= this.size - 1) {
            this.arrList.splice(index, 1);
            this.arrList.sort((el1, el2) => el1 - el2);
            this.size = this.arrList.length;
        }
    };
    get(index) {
        if (index >= 0 && index <= this.size - 1) {
           return this.arrList[index];
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
