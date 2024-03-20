// Write your solution in this file!

/* function upperCaseCustomerName(name){
    return customerName = name.toUpperCase()
} */
var customerName = 'bob'
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
  } 
/* function upperCaseCustomerName(){
    return customerName.toUpperCase()
} */
//upperCaseCustomerName()
//console.log('this is new:', customerName)



/* function setBestCustomer(){
    var bestCustomer = 'not bob'
    return bestCustomer
}
setBestCustomer() */
function setBestCustomer() {
    bestCustomer = 'not bob';
  }

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'

}

const leastFavoriteCustomer = 'initial value';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'new value'; // This will throw an error
  }