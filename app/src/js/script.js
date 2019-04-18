const leftKey = {
  key: 'ArrowLeft',
};
const rightKey = {
  key: 'ArrowRight'
};
document.querySelector('.days').focus();

const monthNumbers = [
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"10",
"11",
"12",
"13",
"14",
"15",
"16",
"17",
"18",
"19",
"20",
"21",
"22",
"23",
"24",
"25",
"26",
"27",
"28",
"29",
"30",
"31"
]

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const weekdays = [
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday",
"Sunday",
]

let daysb = 0;
let yearsb = new Date().getFullYear();
let montb = new Date().getMonth() + 1;

let days = 0;
let years = new Date().getFullYear();
let mont = new Date().getMonth() + 1;

const dagb = document.getElementById("dayb")
const monfb = document.getElementById("monthb")
const yeerb = document.getElementById("yearb")

const dag = document.getElementById("day")
const monf = document.getElementById("month")
const yeer = document.getElementById("year")

yeer.value = years;
monf.value = mont

yeerb.value = yearsb;
monfb.value = montb

function addDay() {
if(days <= 30){
    days += 1;
    dag.value = days;
document.querySelector('.da').textContent = dag.value
}else{console.log("can't go any higher chief")}
};
function minDay() {
    if(days >= 2){
    days -= 1;
    dag.value = days;
document.querySelector('.da').textContent = dag.value
}else{console.log('The bar is too low!!')}
};

function addM() {
if(mont <= 11){
  mont += 1;
  monf.value = mont;
document.querySelector('.mo').textContent = months[monf.value-1]
}else{console.log('max months')
}
};
function minM() {
if(mont >= 2){
  mont -= 1;
  monf.value = mont;
document.querySelector('.mo').textContent = months[monf.value-1]
}else{console.log('The bar is too low!!')}
};

function addY() {
  years += 1;
  yeer.value = years;
document.querySelector('.ye').textContent = yeer.value
};
function minY() {
  years -= 1;
  yeer.value = years;
document.querySelector('.ye').textContent = yeer.value
};


///////////////

function addBDay() {
if(daysb <= 30){
    daysb += 1;
    dagb.value = daysb;
}else{console.log("can't go any higher chief")}
};
function minBDay() {
    if(daysb >= 2){
    daysb -= 1;
    dagb.value = daysb;

}else{console.log('The bar is too low!!')}
};

function addMb() {
if(montb <= 11){
  montb += 1;
  monfb.value = montb;
document.querySelector('.mob').textContent = months[monfb.value-1]
}else{console.log('max months')
}
};
function minMb() {
if(montb >= 2){
  montb -= 1;
  monfb.value = montb;
document.querySelector('.mo').textContent = montbhs[monfb.value-1]
}else{console.log('The bar is too low!!')}
};

function addYb() {
  yearsb += 1;
  yeerb.value = yearsb;
document.querySelector('.ye').textContent = yeerb.value
};
function minYb() {
  yearsb -= 1;
  yeerb.value = yearsb;
document.querySelector('.ye').textContent = yeerb.value
};

// function createNumbers(){
const container = document.querySelector(".container");
monthNumbers.forEach((numb) => {
const elemet =
`
<p>${numb}</p>
`
container.insertAdjacentHTML('beforeend', elemet)
})
// }

function hilight(){
document.querySelectorAll('.container p').forEach(function(pees) {
if(pees.textContent == dag.value){
pees.classList.add("selectet")
console.log(pees.textContent)
}else {
  pees.classList.remove("selectet")
  console.log("not the same")
}
})
}

function hi2light(){
document.querySelectorAll('.container p').forEach(function(pees) {
if(pees.textContent == dagb.value){
pees.classList.add("selected")
console.log(pees.textContent)
}else {
  pees.classList.remove("selected")
  console.log("not the same")
}
})
}



function MCheck(){
if(monf.value == 2){
container.classList.add("feb");
}else if(monf.value == 4||monf.value == 6||monf.value == 9||monf.value == 11){
container.classList.add("lowEnd");
container.classList.remove("feb");
}else{
container.classList.remove("feb");
container.classList.remove("lowEnd");
}
}
MCheck()

document.querySelector('.days').addEventListener("keydown", function(e) {
if(e.key == 'a'||e.key == 'q'||e.key == 'w'||e.key == 'e'||e.key == 's'||e.key == 'd'||e.key == 'c'||e.key == 'x'||e.key == 'z'){
minDay()
hilight()
}else if (e.key == 'r' ||e.key == 't'||e.key == 'y'||e.key == 'f'|| e.key == 'g'||e.key == 'h'||e.key == 'v'||e.key == 'b'||e.key == 'n'){
addDay()
hilight()
}else if(e.key == 'Tab'||e.code == 'Space'){
e.preventDefault()
document.querySelector('.months').focus();
}
})

document.querySelector('.months').addEventListener("keydown", function(e) {
if(e.key == 'a'||e.key == 'q'||e.key == 'w'||e.key == 'e'||e.key == 's'||e.key == 'd'||e.key == 'c'||e.key == 'x'||e.key == 'z'){
minM()
MCheck()
}else if (e.key == 'r' ||e.key == 't'||e.key == 'y'||e.key == 'f'|| e.key == 'g'||e.key == 'h'||e.key == 'v'||e.key == 'b'||e.key == 'n'){
addM()
MCheck()
}else if(e.key == 'Tab'||e.code == 'Space'){
e.preventDefault()
document.querySelector('.years').focus();
}
})

document.querySelector('.years').addEventListener("keydown", function(e) {
if(e.key == 'a'||e.key == 'q'||e.key == 'w'||e.key == 'e'||e.key == 's'||e.key == 'd'||e.key == 'c'||e.key == 'x'||e.key == 'z'){
minY()
}else if (e.key == 'r' ||e.key == 't'||e.key == 'y'||e.key == 'f'|| e.key == 'g'||e.key == 'h'||e.key == 'v'||e.key == 'b'||e.key == 'n'){
addY()
}else if(e.key == 'Tab'||e.code == 'Space'){
e.preventDefault()
document.querySelector('.daysb').focus();
}
})
///////////////////////////
document.querySelector('.daysb').addEventListener("keydown", function(e) {
if(e.key == 'a'||e.key == 'q'||e.key == 'w'||e.key == 'e'||e.key == 's'||e.key == 'd'||e.key == 'c'||e.key == 'x'||e.key == 'z'){
minBDay()
hi2light()
}else if (e.key == 'r' ||e.key == 't'||e.key == 'y'||e.key == 'f'|| e.key == 'g'||e.key == 'h'||e.key == 'v'||e.key == 'b'||e.key == 'n'){
addBDay()
hi2light()
}else if(e.key == 'Tab'||e.code == 'Space'){
e.preventDefault()
document.querySelector('.monthsb').focus();
}
})

document.querySelector('.monthsb').addEventListener("keydown", function(e) {
if(e.key == 'a'||e.key == 'q'||e.key == 'w'||e.key == 'e'||e.key == 's'||e.key == 'd'||e.key == 'c'||e.key == 'x'||e.key == 'z'){
minMb()
MCheck()
}else if (e.key == 'r' ||e.key == 't'||e.key == 'y'||e.key == 'f'|| e.key == 'g'||e.key == 'h'||e.key == 'v'||e.key == 'b'||e.key == 'n'){
addMb()
MCheck()
}else if(e.key == 'Tab'||e.code == 'Space'){
e.preventDefault()
document.querySelector('.yearsb').focus();
}
})

document.querySelector('.yearsb').addEventListener("keydown", function(e) {
if(e.key == 'a'||e.key == 'q'||e.key == 'w'||e.key == 'e'||e.key == 's'||e.key == 'd'||e.key == 'c'||e.key == 'x'||e.key == 'z'){
minYb()
}else if (e.key == 'r' ||e.key == 't'||e.key == 'y'||e.key == 'f'|| e.key == 'g'||e.key == 'h'||e.key == 'v'||e.key == 'b'||e.key == 'n'){
addYb()
}else if(e.key == 'Tab'||e.code == 'Space'){
e.preventDefault()
document.querySelector('button').focus();
}
})


document.addEventListener("keydown", function(event) {
  let presst = "."+event.code;
const bpres = document.querySelector(`${presst}`);
bpres.classList.add("test");
setTimeout(remover, 1000);
function remover(){
bpres.classList.remove("test");
}
})



// // document.querySelector('input[type=date]').
// document.querySelector('body').addEventListener("keydown", function(e) {
//     if(e.key == 'a'||e.key == 'q'||e.key == 'w'||e.key == 'e'||e.key == 's'||e.key == 'd'||e.key == 'c'||e.key == 'x'||e.key == 'z'){
//       const event = new KeyboardEvent('keydown', leftKey);
//       console.log(event);
//       addDay()
//       e.srcElement.dispatchEvent(event);
//     } else if (e.key == 'Space'){
//       console.log('space');
//     } else if (e.key == 'r' ||e.key == 't'||e.key == 'y'||e.key == 'f'|| e.key == 'g'||e.key == 'h'||e.key == 'v'||e.key == 'b'||e.key == 'n'){
//       const event = new KeyboardEvent('keydown', rightKey);
//       console.log(event);
//       e.srcElement.dispatchEvent(event);
//       minDay()
//     } else {
//       console.log('nee')
//     }
// })




// document.querySelector('input').addEventListener('keydown', function(x){
// if(x.key == 'ArrowLeft'){
// console.log('lijknks')
// }else if(x.key == 'ArrowRight'){
// console.log('rightssd')
// }else if(x.key == 'ArrowDown'){
// console.log('downt')
// }else if(x.key == 'ArrowUp'){
// console.log('up')
// }
// })
