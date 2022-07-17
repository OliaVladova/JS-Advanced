function generateReport() {
    let checked = Array.from(document.querySelectorAll('thead tr th input'));
    let rows = Array.from(document.querySelectorAll('tbody tr'));
    let output = document.getElementById('output');
    let result = [];

    rows.forEach( row =>{
        const obj = {};

        Array.from(row.querySelectorAll('td')).forEach((x, i) =>{
            if(checked[i].checked){
                obj[checked[i].name] = x.textContent;
            }
        });
        result.push(obj);
    })

    output.value = JSON.stringify(result);
}