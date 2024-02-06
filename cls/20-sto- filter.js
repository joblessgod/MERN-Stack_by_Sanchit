
let wholeNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = wholeNumbers.filter(element => element % 2 == 0);  /// Using Filter method
let oddNumbers = wholeNumbers.filter(element => element % 2 !== 0);
// oddNumbers = wholeNumbers.filter(function (element) { element % 2 !== 0 }); // function way has a problem

// ################################################
// let evenNumbers = []
// let oddNumbers = []
// wholeNumbers.forEach(element => {       /// using forech method
//     if (element % 2 == 0) {
//         evenNumbers.push(element)
//     } else {
//         oddNumbers.push(element)
//     }
// });

console.log(evenNumbers); // using filter method
console.log(oddNumbers); // using filter method



let countries = [
    {
        "code": "af",
        "name": "Afghanistan",
        "path": "afghanistan"
    },
    {
        "code": "jp",
        "name": "Japan",
        "path": "japan"
    },
    {
        "code": "zm",
        "name": "Zambia",
        "path": "zambia"
    },
    {
        "code": "zw",
        "name": "Zimbabwe",
        "path": "zimbabwe"
    }
]


let  findCountryCode = "jp"
let foundCountry = countries.find(countries.code == findCountryCode)
    if (foundCountry) {
        console.log(countries.name);
    }



// Example: Find a country by code
let countryCodeToFind = "jp";
let foundCountry = countries.find(country => country.code === countryCodeToFind);

if (foundCountry) {
    console.log("Found country:", foundCountry);
} else {
    console.log("Country not found");
}



// do hw with find function


/* setTimeOut - asyncronous 
    - do not block other codes
    - runs in background
 */
setTimeout(() => {
    console.log(`Sanchit`);
}, 5000);

setTimeout(() => {
    console.log(`Never`);
}, 5100);

setTimeout(() => {
    console.log(`Dies`);
}, 5200);
