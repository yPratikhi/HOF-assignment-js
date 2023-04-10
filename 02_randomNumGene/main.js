let delay = 3;

let countdown = setInterval(()=>{
    console.log(`Generating Random Number in ${delay} second....`);
    delay--;

    if(delay<0){
        clearInterval(countdown);
        console.log(`Random Number : ${Math.floor(Math.random()*100)}`);
    }
},1000);