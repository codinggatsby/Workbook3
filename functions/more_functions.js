function displayMailingLabel(name,address,city,state,zip) {
   console.log(name)
   console.log(address)
   console.log(city, state, zip)
}
displayMailingLabel("Gariel","2260 White Bluff Way", "buford,", "ga", "300519");

function addnumbers(num1,num2) {
    console.log (`${num1} + ${num2} = ${num1 + num2}`)
}

addnumbers(5,50);


function displayReceipt(totalDue,amountPaid) {
    console.log(`${totalDue} ${amountPaid}`);
}
displayReceipt(59.30 - 32.10);