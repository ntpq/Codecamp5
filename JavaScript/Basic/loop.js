////                        เลขที่ถูก alert เป็นลำดับสุดท้ายคือเลขอะไร ====> Answer is 1
// let i = 3;
// while (i) {
//     alert(i--);
// }

/////                       code ทั้งสองอันนี้จะแสดง alert ออกมาเหมือนกันทั้งหมดหรือไม่ //// 
// let i = 0;
// while (++i < 5) alert(i);            //// 1,2,3,4
/////
// let i = 0;
// while (i++ < 5) alert(i);            //// 1,2,3,4,5

////
// for (let i = 0; i < 5; i++) alert( i ); //// 0,1,2,3,4
// for (let i = 0; i < 5; ++i) alert( i ); //// 0,1,2,3,4

/////                       ให้เขียน loop ทั้งแสดงเลข 2 ถึง 10 ออกมา
// let i = 1;
// while (i++ < 10) console.log(i);
// for (let i = 2; i <= 10; i++) {
//     console.log(i);
// }
////                        เปลี่ยน code for loop ด้านล่างนี้ให้เป็น while loop โดยที่ผลลัพธ์ยังเหมือนเดิม
//// for (let i = 0; i < 3; i++) {
////     alert( `number ${i}!` );
////   }
// let i = 0;
// while (i < 3) {
//     console.log(`number ${i}!`);
//     i++;
// };

//// ให้เขียนเกมส์ทายตัวเลขสำหรับเล่นสองคน 
// let answer = prompt("Player 1 : Put your Number !");
// count = 0;
// while (1) {
//     let number = prompt("Player 2 : Guess what is a number that Player 1 put ?")
//     if (number === answer) {
//         alert(`Yes ! that's right the number is ${answer} you have been guessed ${count} times.`);
//         break;
//     } else {
//         count++
//         alert((number < answer) ? "Lower !" : ("Too High !"));
//     }
// }