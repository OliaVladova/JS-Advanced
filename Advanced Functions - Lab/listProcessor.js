function listProcessor(commands) {
    let result = [];
    let commandObj = {
        add(string) {
            result.push(string);
        },
        remove(string) {
            result = result.filter(el => el !== string);
        },
        print() {
            console.log(result.join(','));
        }
    }
    commands.forEach(element => {
        let [key, value] = element.split(' ');
        commandObj[key](value);
    });
    
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);