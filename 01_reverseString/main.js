const input = 'Hello World!';
setTimeout(()=>{
    let output = input.split('').reverse().join('');
    console.log(output);
},2000);