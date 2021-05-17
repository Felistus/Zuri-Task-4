/*
2.  Write a function named "checkYuGiOh" that takes a number, n, as an argument, 
        creates an array of numbers from 1 to n and replaces factors of 2, 3, and 5 with 
        "yu", "gi" and "oh", logs the resulting array to the console then returns the resulting array.

        - for strings that have multiple factors, use hyphens as separators: e.g 10 === "yu-oh", 30 === "yu-gi-oh"
        - perform checks on your input and return `invalid parameter: ${parameter}` if an invalid parameter - i.e. a string that can't be converted to a number or another data type - is passed. 
    Use the following cases as guides:

        - checkYuGiOh(10) should return [1, "yu", "gi", "yu", "oh", "yu-gi", 7, "yu", "gi", "yu-oh"]
        - checkYuGiOh("5") should return [1, "yu", "gi", "yu", "oh"]
        - checkYuGiOh("fizzbuzz is meh") should return `invalid parameter: "fizzbuzz is meh"`
*/
let checkYuGiOh = (n) => {

    let numberRange = [];
    let checkYuGiOh_Array = [];
    let response; 

    if ( isNaN(n) ) {
        response = ` invalid parameter: '${n}' `
    } else {
        for ( let i = 1; i <= n; i++ ){
           numberRange.push(i);
        }
        numberRange.forEach(element =>  {
            if ( (element % 5 === 0 ) && (element % 3 === 0 ) && (element % 2 === 0 ) ) {
                element = "yu-gi-oh";
            } else if ( (element % 5 === 0) && (element % 3 === 0) ){
                element = "gi-oh"
            } else if ( ( element % 5 === 0 ) && ( element % 2 === 0 ) ) {
                element = "yu-oh";
            } else if ( (element % 3 === 0) && (element % 2 === 0) ){
                element = "yu-gi";
            } else if ( element % 5 === 0 ){
                element = "oh";
            } else if ( element % 3 === 0 ){
                element = "gi"
            } else if ( element % 2 === 0 ){
                element = "yu";
            }
            checkYuGiOh_Array.push(element);
        });
         response = checkYuGiOh_Array;
    }
    return response;
}
checkYuGiOh(40);