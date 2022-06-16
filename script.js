const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];

let passwordEl = document.getElementById("password-el");
let passwordTwoEl = document.getElementById("passwordTwo-el")
let generatePassword = document.getElementById("btn");
let copyOne = document.getElementById("copy-pass");
let copyTwo = document.getElementById("copy-passTwo");
let noSymEl = document.getElementById("no-Symbol");


let passwordLength = 16;

generatePassword.addEventListener("click", function() {
    function getRandomNum() {
            let randomChar = Math.floor(Math.random() * characters.length);
            return characters[randomChar];
        }

        function generateRandomPass() {
            let randomPass = ""
            for(let i = 0; i < passwordLength; i++ ){
                randomPass += getRandomNum()
            }
            return randomPass;
        }

        let newPassOne = generateRandomPass();
        let newPassTwo = generateRandomPass();


        passwordEl.textContent = newPassOne;
        passwordTwoEl.textContent = newPassTwo;
});


copyOne.onclick = function() {
    navigator.clipboard.writeText(passwordEl.textContent);
    copyOne.textContent = "Copied";
};

copyTwo.onclick = function() {
    navigator.clipboard.writeText(passwordTwoEl.textContent);
    copyTwo.textContent = "Copied";
};

