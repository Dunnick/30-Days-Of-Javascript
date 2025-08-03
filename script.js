//DAY ONE
// comments can make code readable
// Welcome to 30DaysOfJavaScript

/* 
comments can make code readable, 
easy to reuse and informative 
*/

// Declaring variables with different data types
let firstName = "Nicholas";       // String
let isStudent = true;             // Boolean
let unassigned;                   // Undefined
let emptyValue = null;           // Null

// Four variables without assigning values
let a, b, c, d;

// Four variables with assigned values
let n = 10, i = "Hello", k = false, o = null;

// Multiple lines
let myFirstName = "Nicholas";
let myLastName = "Duniah";
let isMarried = false;
let myCountry = "Ghana";
let myAge = 25;

// Single line
let fName = "Nicholas", lName = "Duniah", married = false, country = "Ghana", age = 25;

// myAge and yourAge
let myAgeNow = 25;
let yourAgeNow = 30;
console.log("My age is", myAgeNow);
console.log("Your age is", yourAgeNow);

// Check data types using typeof
console.log(typeof firstName);     // string
console.log(typeof isStudent);     // boolean
console.log(typeof unassigned);    // undefined
console.log(typeof emptyValue);    // object (this is a known quirk in JS)
console.log(typeof x);             // number
console.log(typeof y);             // string
console.log(typeof z);             // boolean
console.log(typeof u);             // object




//DAY TWO   
//Data types
/* 30-Day-Of-Javascript - Day Two */
let challenge = "30 Days Of JavaScript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(0, 2));
console.log(challenge.substring(3));
console.log(challenge.includes('Script'));
console.log(challenge.split());
console.log(challenge.split(','));
console.log(challenge.replace('Javascript', 'Python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(11));
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));
let string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(string.split(', '));

let string1 = 'You cannot end a sentence with because because because is a conjunction';
console.log(string1.indexOf('because'));
console.log(string1.lastIndexOf('because'));
console.log(string1.search('because'));

let string2 = '30';
console.log(string2.concat(' ','Days of',' ','Javascript'));
console.log(challenge.trim());
console.log(' 30 Days Of JavaScript '.trim());
console.log(challenge.startsWith('30'));
console.log(challenge.startsWith('Java'));
console.log(challenge.endsWith("Days"));
console.log(challenge.endsWith("JavaScript"));
console.log(challenge.match(/a/gi));
console.log(challenge.repeat(2));



//DAY THREE
//Boolean, Constant & Assignment Operators
// This code is from VS Code but will run in browser console


// Variable declaration and typeof checks
let firstName = "Duniah";
let lastName = "Nicholas";
let country = "Ghana";
let city = "Kumasi";
let age = 25;
let isMarried = false;
let year = 2025;

console.log(typeof firstName); // string
console.log(typeof lastName); // string
console.log(typeof country); // string
console.log(typeof city); // string
console.log(typeof age);       // number
console.log(typeof isMarried); // boolean
console.log(typeof year);      // number

// Type comparison
console.log(typeof '10' == typeof 10); 
console.log(parseInt('9.8') == 10);    

// Truthy values
console.log(Boolean(1));           
console.log(Boolean('Hello'));    
console.log(Boolean(true));       

// Falsy values
console.log(Boolean(0));          
console.log(Boolean(""));         
console.log(Boolean(undefined));  

// Comparison expressions
console.log(4 > 3);          
console.log(4 >= 3);         
console.log(4 < 3);          
console.log(4 <= 3);         
console.log(4 == 4);         
console.log(4 === 4);        
console.log(4 != 4);         
console.log(4 !== 4);        
console.log(4 != '4');       
console.log(4 == '4');      
console.log(4 === '4');      

// Length comparison
let python = "python";
let jargon = "jargon";
console.log(python.length != jargon.length);  

// Logical operations
console.log(4 > 3 && 10 < 12);   
console.log(4 > 3 && 10 > 12);    
console.log(4 > 3 || 10 < 12);    
console.log(4 > 3 || 10 > 12);    
console.log(!(4 > 3));            
console.log(!(4 < 3));            
console.log(!false);             
console.log(!(4 > 3 && 10 < 12)); 
console.log(!(4 > 3 && 10 > 12)); 
console.log(!(4 === '4'));        

// 'on' in both dragon and python
let dragon = "dragon";
console.log(dragon.includes("on") && python.includes("on")); // true

// Date object operations
let now = new Date();
console.log("Year:", now.getFullYear());         // current year
console.log("Month:", now.getMonth() + 1);       // month (0-based, so +1)
console.log("Date:", now.getDate());             // day of the month
console.log("Day:", now.getDay());               // day of the week (0=Sunday)
console.log("Hours:", now.getHours());           // current hour
console.log("Minutes:", now.getMinutes());       // current minutes
console.log("Seconds since Jan 1, 1970:", Math.floor(now.getTime() / 1000));