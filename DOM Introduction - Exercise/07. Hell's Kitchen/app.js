function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      let average = 0;
      let total = 0;
      let currentAvg = 0;
      let name = '';
      let obj = {};
      for (const element of input) {
         let info = element.split(' - ');
         let restaurant = info[0];
         let workersInfo = info[1].split(', ');

         for (const worker of workersInfo) {
            let [name, salary] = worker.split(' ');

            if (!obj.hasOwnProperty(restaurant)) {
               obj[restaurant] = {};
            }
            if (obj.hasOwnProperty(restaurant)) {
               obj[restaurant][name] = Number(salary);
            }
         }
      }
      let entries = Object.entries(obj);

      for (const entry of entries) {
         let key = entry[0];
         let values = Object.entries(entry[1]);
         for (let [name, salary] of values) {
            total += salary;
         }
         average = total / values.length;

         if (average > currentAvg) {
            currentAvg = average;
            name = key;
            total = 0;
         }
      }

      let result = Object.entries(obj[name]).sort((a, b) => b[1] - a[1]);
      let print = '';
      result.forEach(w=> print+=`Name: ${w[0]} With Salary: ${w[1]} `);

      document.querySelector('#bestRestaurant p').textContent = `Name: ${name} Average Salary: ${currentAvg.toFixed(2)} Best Salary: ${result[0][1].toFixed(2)}`;

      document.querySelector('#workers p').textContent = print;
   }
}