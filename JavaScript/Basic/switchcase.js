//// 1. แปลง Code ดังกล่าวเป็น if-else statement slide-56 Basic JavaScript 2
// let browser = prompt("What browser do you use?");
// if (browser == 'Edge') {
//     alert("You've got the Edge!");
// } else if (browser == "Chrome" || browser == "Firefox" || browser == "Safari" || browser == "Opera") {
//     alert("Okay we support these browsers too");
// } else {
//     alert("we hope this page looks ok!");
// }
//// or
// alert((browser == "Edge") ? ("You've got the Edge!") : (browser == "Chrome" || browser == "Firefox" || browser == "Safari" || browser == "Opera") ? ("Okay we support these browsers too") : ("we hope this page looks ok!"));

//// 2. แปลง Code ดังกล่าวเป็นSwitch cases
// let a = +prompt('a?', '');
// switch (a) {
//     case 0:
//         alert(0);
//         break;
//     case 1:
//         alert(1);
//         break;
//     case 2:
//     case 3:
//         alert('2,3');
//         break;
// }