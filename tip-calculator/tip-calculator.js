const form = document.querySelector('form');

form.addEventListener('submit', function() {
 event.preventDefault();
 //getting form controls
 const billInput = this.elements[0];
 const serviceInput = this.elements[1];
 const howManyPeapleInput = this.elements[2];
 //getting form controls values and parsing to integers, so Math function wuld work.
 const billInputValue = parseInt(billInput.value);
 const serviceInputValue = parseInt(serviceInput.value);
 const howManyPeapleInputValue = parseInt(howManyPeapleInput.value);
 let  tipFromEach = billInputValue * (serviceInputValue / 100) / howManyPeapleInputValue;
 tipFromEach = tipFromEach.toFixed(2);
 const output = `
 <span>TIP AMOUNT</span>
 <br>
 <span>$</span><span>${tipFromEach}</span>
 <br>
 <span>each</span>
 `;
 const placeholder = document.querySelector("#calculatePlaceholder");
 placeholder.innerHTML = output;
 
 console.log(billInputValue, serviceInputValue, howManyPeapleInputValue, tipFromEach);
})
