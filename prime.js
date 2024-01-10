function isprime(number){
    if(number <= 1)return false;
    for(let i = 0; i < number; i++){
        if(number % i === 0){
            return false;
        }
    }
    return true;
}

