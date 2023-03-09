"use strict"
//exersize 1
// {
//     for (let i = 1; i < 50; i++){
//         console.log(i);
//     } 

// }
// {
//     for (let i = 35; i >8; i--){
//         console.log(i);
//     }
// }
//exersize 2
// {
//     let i = 89;
//     while(i > 11){
//         document.write(`${i}<br>`);
//         i--;
//     }
// }
//exersize 3
// {
//     let sum = 0;
//     for(let i = 0; i <= 100; i++){
//         sum += i;
//         console.log(sum);
//     }
// }
//exersize 4
// {
//     let a = 5;
//     let sum = 0;
//     for(let i = 1; i<=a; i++){
//         sum=0;
//         for(let j =1; j<=i;j++){
//             sum +=j;
//         }
//         console.log('sum '+ i + '=' + sum);
//     }
// }
//exersize 5
// {
//     for(let i = 8; i < 56; i++){
//         if(i % 2 == 1)
//             continue;
//             console.log(i);
//     }
// }
//exersize 6
// {

//     for (let i = 2; i <= 10; i = i + 1) {
//         for (let j = 1; j <= 10; j = j + 1) {
//             let num = i * j;
//             console.log(i + "*" + j + "=" + num);
//         }

//     }
// }
//exersize 7
// {
//     let iteration = 0;
//     let n = 1000;
//     for(let i = n; i>=50; i = i / 2){
//             console.log(i);
//             iteration++;
//             console.log("iteration"+iteration);
//         }

// }
//exersize 8
// {
//     let total = 0;
//     let count = 0;

//     while(true){
//         let num = +prompt("Введите число");

//         if (num === 0) break;
        
//         if (isFinite(num)){
//             total += num;
//             count++
//         }else{
//             alert("это не число")
//         }
//         console.log(total);
//         console.log(total/count);
//     }
// }
//exersize 9
// {
//     let arr = [4, 98, 4, 6, 1, 32, 4, 65, 4, 3, 5, 7, 89, 7, 10, 1, 36];
//     console.log(arr);
//     console.log(Math.min.apply(null,[4, 98, 4, 6, 1, 32, 4, 65, 4, 3, 5, 7, 89, 7, 10, 1, 36]));
//     console.log(Math.max.apply(null,[4, 98, 4, 6, 1, 32, 4, 65, 4, 3, 5, 7, 89, 7, 10, 1, 36]))
// }
//exersize 10
{
    let n = "123";
    console.log(n);
    console.log(n.length + " количество цифр в числе");
    let sum = 0;
    let rev = "";
    for (let i = 0; i < n.length; i++) {
        let a = n[i];
        console.log("состоит из " + a);
        sum += +a;
        console.log(`Сумма цифр = ${sum}`);
        // как перевернуть я не знаю(((
    }
}