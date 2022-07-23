function solve() {
   let buttons = Array.from(document.getElementsByClassName('add-product'));
   let output = document.getElementsByTagName('textarea')[0];
   let arrProducts = [];
   let shopList = '';
   let total = 0;
   let str = '';

   buttons.forEach(button => {
      button.addEventListener('click', added);
   });
   document.querySelector('.checkout').addEventListener('click', checkout);

   function added(event) {
      let parent = event.target.parentElement.parentElement;
      let prodName = parent.querySelector('.product-title').textContent;
      let price = Number(parent.querySelector('.product-line-price').textContent);
      str = `Added ${prodName} for ${price.toFixed(2)} to the cart.\n`
      total += price;
      arrProducts.push(prodName);
      output.textContent += str;

   }
   function checkout(event) {
      let finalList = '';
      for (const product of arrProducts) {
         if (!finalList.includes(product)) {
            finalList += product + ', ';
         }
      }
      finalList = finalList.substring(0, finalList.length - 2);
      shopList =  finalResult = `You bought ${finalList} for ${total.toFixed(2)}.`
      output.textContent += shopList;
      Array.from(document.querySelectorAll('.product .product-add .add-product')).forEach(el => el.removeEventListener('click', added));
      document.querySelector('.checkout').removeEventListener('click', checkout);
   }


}