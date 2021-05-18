/*
1.  Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius.
        - Round up your answers to 4 decimal places (hint: use the toFixed method)
        - C = (F - 32) x 5/9; (e.g 0deg F = -17.7778 deg C)
        - if the parameter passed is not a number or a string that can be converted to a valid number, return a string with the format below:
            `${parameter} is not a valid number but a/an ${parameter's type}.`

    You can use the following cases as guides:
        - convertFahrToCelsius(0) should return `-17.7778`
        - convertFahrToCelsius("0") should return `-17.7778`
        - convertFahrToCelsius([1,2,3]) should return `[1,2,3] is not a valid number but a/an array.`
        - convertFahrToCelsius({temp: 0}) should return `{temp: 0} is not a valid number but a/an object.`
*/

let convertFormula = (Fahr) => {
    return C = (Fahr - 32) * 5/9;
}

let convertFahrToCelsius = (temperature) => {
    let answer;
    
    if ( Array.isArray(temperature)  ) {
        return `[${temperature}] is not a valid number but an Array `
    } else {
        if ( isNaN(temperature) ) {
            return `${temperature} is not a valid number but a/an ${typeof temperature}`
        } else {
            answer = convertFormula(temperature);
            return `${answer.toFixed(4)} deg C`;
        }
    }
}
convertFahrToCelsius( 0 )
