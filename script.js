const curEl_one = document.getElementsByClassName("left");
const amountEl_one = document.getElementById("amount-one");
const curEl_two = document.querySelectorAll("#currency-two .right");
const amountEl_two = document.getElementById("amount-two");

const active = document.querySelectorAll(".active");

const rateEl = document.getElementById("rate");

console.log(curEl_one);


for(let i=0; i < curEl_one.length; i++){

    curEl_one[i].addEventListener('click', function(event) {

            if(curEl_one[i].includes(active)){
            const curOneVal = curEl_one[i].innerText;
            const curTwoVal = curEl_two[i].innerText;
            fetch(`https://api.exchangerate.host/latest?base=${curOneVal}&symbols=${curTwoVal} `) 
            .then((res) => res.json())
            .then((data) =>{
                console.log(data);
            })
        
    }
    else{
        console.log("hsgdjj");
    }
    })


}


// for(let i=0; i < curEl_one.length; i++){
//     curEl_one[i].addEventListener('click', function (event) {
//                 const curOneVal = curEl_one[i].innerText; 
//                 let curTwoVal = curEl_two[i].innerText; 
//         fetch(`https://api.exchangerate.host/latest?base=${curOneVal}`)
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log(data);
//                 document.getElementById("amount-one").innerHTML = data;
//                 const rate = data.rates[curTwoVal];

//                 rateEl.innerText = `1 ${curOneVal} = ${rate.toFixed(4)} ${curTwoVal}`;
//                 amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
//     })
// })
// }










// for(let i=0; i < curEl_one.length; i++){
//     curEl_two[i].addEventListener('click', function (event) {
//                 const curOneVal = curEl_two[i].innerText; 
//                 let curTwoVal = curEl_two[i].innerText; 
//         fetch(`https://api.exchangerate.host/latest?base=${curOneVal}&symbol=${curTwoVal}`)
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log(data);
//                 document.getElementById("amount-one").innerHTML = data;
//                 const rate = data.rates[curTwoVal];
                
//                 rateEl.innerText = `1 ${curOneVal} = ${rate.toFixed(4)} ${curTwoVal}`;
//                 amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
//     })
// })
// }









// console.log(curEl_one);
// const rateEl = document.getElementById("rate");
// for (let i = 0; i < curEl_one.length; i++) {
//     curEl_one[i].addEventListener('click', function (event) { 
//         const curOneVal = curEl_one[i].innerText; 
//         let curTwoVal = curEl_two[i].innerText; 
//         fetch(`https://api.exchangerate.host/latest?base=${curOneVal}&symbol=${curTwoVal}`)
//             .then((res) => res.json())
//             .then((data) => {
//                 const rate = data.rates[curTwoVal];
//                 console.log(curTwoVal);
//             });
//     });
// }



