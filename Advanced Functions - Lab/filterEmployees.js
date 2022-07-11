function filterEmployee(data, criteria){
let arr = JSON.parse(data);
let criteriaArr = criteria.split('-');
let key = criteriaArr[0];
let value = criteriaArr[1];
let filteredArr = arr.filter(empl => empl[key] === value);

let counter = 0;
filteredArr.forEach(e => console.log(`${counter++}. ${e.first_name} ${e.last_name} - ${e.email}`));
}

filterEmployee(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female'
);