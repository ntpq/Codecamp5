// Basic JavaScript Slide 25

// alert(null || 2 || undefined);          // 2
// alert(alert(1) || 2 || alert(3));        // 1 2
// alert(1 && null && 2);                  // null
// alert(alert(1) && alert(2));                // 1 undefined
// alert(null || 2 && 3 || 4);             // 3


// let age = prompt("How old are you ?");

// //เขียนคำสั่ง if ที่เช็คอายุว่าอยู่ระหว่าง 18 - 60
// if (age >= 18 && age <= 60) {
//     alert("Right your age is between 18 to 60 years old.");
// }
// //เขียนคำสั่ง if ที่เช็คอายุว่าไม่อยู่ระหว่าง 18 - 60
// else if (age < 18 || age > 60) { //// or (!(age >= 18 && age <= 60))
//     alert("Right your age is not between 18 to 60 years old.");
// }
//// คำสั่ง alert ไหนที่จะถูกรันบ้าง
// if (-1 || 0) alert( 'first' );               //// Run
// if (-1 && 0) alert( 'second' );              //// Not Run
// if (null || -1 && 0) alert( 'third' );       //// Not Run

//// ให้เขียนระบบ login
// let name = prompt("How are you ?");
// if (name === "Admin") {
//     let password = prompt("What is the Password ?");
//     alert((password === "codecamp#5") ? ("ยินดีต้อนรับ") : ((password !== "codecamp#5") && (password || 0)) ? ("Wrong Password") : ("ยกเลิก"));
// } else if (name || 0) {
//     alert("ผมไม่รู้จักคุณ");
// } else {
//     alert("ยกเลิก");
// }