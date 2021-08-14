//const btn = document.querySelector('.btn');
//const img = document.getElementById('img');

//btn.addEventListener('click', () =>{
//    img.classList.toggle('show')//
//})

//btn.addEventListener('click', (e) => {
//console.log(e);
const test = document.querySelector('.test')
const input = document.querySelector('.input')
const un = document.querySelector('.un');
const deux = document.querySelector('.deux');
const trois = document.querySelector('.trois');
const quatre = document.querySelector('.quatre');
const cinq = document.querySelector('.cinq');
const six = document.querySelector('.six');
const sept = document.querySelector('.sept');
const huit = document.querySelector('.huit');
const neuf = document.querySelector('.neuf');
const eff = document.querySelector('.eff');
const divi = document.querySelector('.divi');
const multi = document.querySelector('.multi');
const moins = document.querySelector('.moins');
const plus = document.querySelector('.plus');

const result = document.querySelector('.result');
const ecrans = document.querySelector('.test')
//const ecran = eval(test.textContent);
//test.textContent = ecran;


un.addEventListener('click' , (e) => {
    test.innerHTML += e.toElement.innerHTML;
})
deux.addEventListener('click' , (e) => {
    test.innerHTML += e.toElement.innerHTML;
})
trois.addEventListener('click' , (e) => {
    test.innerHTML += e.toElement.innerHTML;
})
quatre.addEventListener('click' , (e) => {
    test.innerHTML += e.toElement.innerHTML;
})
cinq.addEventListener('click' , (e) => {
    test.innerHTML += e.toElement.innerHTML;
})
six.addEventListener('click' , (e) => {
    test.innerHTML += e.toElement.innerHTML;
})
sept.addEventListener('click' , (e) => {
    test.innerHTML += e.toElement.innerHTML;
})
huit.addEventListener('click' , (e) => {
    test.innerHTML += e.toElement.innerHTML;
})
neuf.addEventListener('click' , (e) => {
    test.innerHTML += e.toElement.innerHTML;
})
eff.addEventListener('click' , (e) => {
    test.innerHTML += e.toElement.innerHTML;
})
divi.addEventListener('click' , (e) => {
    test.innerHTML += e.toElement.innerHTML;
})
multi.addEventListener('click' , (e) => {
    test.innerHTML += e.toElement.innerHTML;
})
moins.addEventListener('click' , (e) => {
    test.innerHTML += e.toElement.innerHTML;
})
plus.addEventListener('click' , (e) => {
    test.innerHTML += e.toElement.innerHTML;
})
 //touche quatre pour effacer 
       
 eff.addEventListener('click' , (e) => {
    test.textContent = "";
})
 //touche cinq pour resultat

 result.addEventListener('click' , () => {
   test.innerHTML = eval(test.textContent);
    
})
    

