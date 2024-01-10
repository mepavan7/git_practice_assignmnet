function isprime(number){
    if(number <= 1)return false;
    for(let i = 0; i < number; i++){
        if(number % i === 0){
            return false;
        }
    }
    return true;
}
function checkAndLogPrime(number){
    if(isNaN(number)){
        return "Please enter a valid numer."
    }

return isprime(number)
?`${number} is a prime number.` 
: `${number} is not a prime number`;
}

let num = 13;
console.log(checkAndLogPrime(num));