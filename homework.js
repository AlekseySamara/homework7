function calculate () {
    let num1 = 1; 
    let num2 = 2; 
    //let num1 = 2;
    //let num2 = 3;
	return function() {
        return num1 + num2;
        //return num1 * num2;
	}
}
let func = calculate();
console.log (func());