function generatePassword(len){
    let password = "";

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    
    for(let i=0; i<len; i++){
        let random = Math.floor(Math.random()*str.length);
        password += str[random];
    }

    return password;
}

const password = generatePassword(8);
console.log(`Generated password: ${password}`);