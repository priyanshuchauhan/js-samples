
/**
    Write a program in any language that prints the numbers from 1 to 100. But for multiples of
    three print “Bizz” ” instead of the number and for the multiples of five print “ “Appz
    Appz”. For numbers
    which are multiples of both three and five print “ “BizzAppz”
**/

export function bizzApp() {
    const resultArray = [];
    for (let count = 1; count <= 100; count++) {
        const isMultipleOfThree = (count % 3 === 0);
        const isMultipleOfFive = (count % 5 === 0);
        if (isMultipleOfThree && isMultipleOfFive) {
            resultArray.push('BizzAppz');
        } else if (isMultipleOfThree) {
            resultArray.push('Bizz');
        } else if (isMultipleOfFive) {
            resultArray.push('Appz');
        } else {
            resultArray.push(count);
        }
    }
    console.log(resultArray.join(', '));
    return resultArray;
};