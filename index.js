const passbox=document.getElementById('passbox')
const btn=document.getElementById('btn')

function randompass(length,upperCase,lowerCase,numbers,symbols){

    const upperCaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars="abcdefghijklmnopqrstuv";
    const numbersChars='0123456789'
    const symbolsChars='!@#$%^&'

    let allowedchar='';
    let password='';

    allowedchar+=upperCase? upperCaseChars :"";
    allowedchar+=lowerCase? lowerCaseChars :"";
    allowedchar+=numbers? numbersChars :"";
    allowedchar+=symbols? symbolsChars :"";

    if(length<1){
        console.log('length must be atleast one')
    }
    if(allowedchar.length===0){
        console.log('you need to choose atleast a set of characters')
    }

    for(let i =0;i<length;i++){
        const randomIndex=Math.floor(Math.random()*allowedchar.length)
        password+=allowedchar[randomIndex];


    }
    

    return password
}


const passlength=12;
const upperCase=true;
const lowerCase=true;
const numbers=true;
const symbols=true;

const password=randompass(passlength,upperCase,lowerCase,numbers,symbols)

console.log(password);

btn.addEventListener('click',()=>{
    passbox.value=password
})