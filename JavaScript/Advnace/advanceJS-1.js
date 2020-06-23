//// p. 53 Advanced JavaScript - Part 1
////  ให้สร้าง Object แบบ Object Iteral โดยให้กำหนดตัวแปรชื่อ human โดยมี Properties ทั้ง 5 อย่าง ชื่อของผู้เรียน เป็น String อายุของผู้เรียนเป็น number บ้านของตัวเองเป็น String โสดหรือไม่โสดเป็น boolean คะแนนความฉลาดของตัวเองเป็น number (เต็ม 10)
// let human = {
//     name: "IQ",
//     age: "99",
//     address: "Thailand",
//     isSingle: true,
//     smart: 50
// };
//// p.56 4.7.  Computed Properties - แบบฝึกหัด
////	1.	ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง จนกว่าจะเจอคำว่า stop และนำค่าเหล่านั้นมาสร้าง Object หลังจากนั้น console.log() object นั้นออกมา
// let obj = {};
// while (1) {
//     let key = prompt("Enter Key (stop = exit!):");
//     if (key == "stop" || key == "") {
//         break;
//     }
//     let value = prompt(`Enter Value of ${key} :`);
//     obj[key] = value;
// }
// console.log(obj);

//// 4.7.  Computed Properties - แบบฝึกหัด
////	2.	ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง โดยให้ key เป็นชื่อของผลไม้ และ value เป็นจำนวนของผลไม้ (number) โดยถ้า ผลไม้ชนิดไหนที่มีมากกว่า 1 ผล ให้เติม s ไปหลัง key นั้นด้วย
// let fruit = {};
// while (1) {
//     let key = prompt("Enter Key (stop = exit!):");
//     if (key == "stop" || key == "") {
//         break;
//     }
//     let value = prompt(`Enter Value of ${key} :`);
//     if (value > 1) key = key + "s";
//     fruit[key] = value;
// }
// console.log(fruit);
//// p 87 4.18.  แบบฝึกหัด
//// ให้ทำตามคำสั่งต่อไปนี้
//// สร้าง Object เปล่าขึ้นมา
//// เพิ่ม properties name เข้าไปและให้ value เป็น “Sonter”
//// เพิ่ม properties surname เข้าไปและให้ value เป็น “Pakorn”
//// เปลี่ยน properties name เป็น “Boy”
//// ลบ properties name ออกจาก Object

// let obj = new Object();
// obj["name"] = "Sonter";
// obj["surname"] = "Pakorn";
// obj.name = "Boy";
// delete obj.name;
// console.log(obj);


////2.	ให้เขียนฟังก์ชันชื่อ isEmpty(obj) โดยจะมี parameters เป็น obj และ ฟังก์ชันนี้จะเช็คว่า obj นี้มี properties ไหม ถ้ามีให้คืนค่า true ถ้าไม่มีให้คืนค่า false

// function isEmpty(obj) {
//     for (let key in obj) {
//         return true;
//     }
//     return false;
// }
// console.log(isEmpty({ ant: 10 }));

// 3. การเขียนข้ างล่ างต่ อไปนี้ Error ไหม

//Answer ไม่ Error


////4.	จงเขียนฟังก์ชัน sum(obj) ที่รับ obj ที่เก็บ properties โดยมี key เป็นชื่อพนักงานและมี value เป็นเงินเดือน ให้ฟังก์ชันคืนค่าเป็นผลรวมของเงินเดือนพนักงานทั้งหมด

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// function sum(obj) {
//     sum = 0;
//     for (let key in obj) {
//         sum = sum + obj[key]
//     }
//     return sum;
// }
// console.log(sum(salaries));

////5.	จงเขียนฟังก์ชัน multiplyNumeric(obj, times) โดยถ้า properties นั้นมี value เป็น number ให้คุณ value นั้นด้วย times ถ้าข้อมูลเเป็นอย่างอื่นไม่ต้องทำอะไร

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// function multiplyNumeric(obj, times) {
//     for (let key in obj) {
//         if (!isNaN(obj[key])) {
//             obj[key] = obj[key] * times;
//         }
//     }
// }
// multiplyNumeric(menu, 10);
// console.log(menu);

//// P.100 6.6.  แบบฝึกหัด
//1.การทำงานของ code ดังกล่าวจะได้อะไรออกมา

// let user = {
//     name: "John",
//     go: function() { alert(this.name) }
// }

//(user.go)() //// >>>> have to be user.go()
//2.	การทำงานของ code ดังกล่าวจะได้อะไรออกมา
// function makeUser() {
//     return {
//         name: "John",
//         ref: this
//     };
// };

// let user = makeUser();

//alert(user.ref.name); // What's the result? >> Nothing !

// 3. สร้าง object calculator จาก 3 methods นี้:
// read() ใช้ prompts สำหรับรับค่ามา 2 ค่าและเก็บเป็น object properties.
// sum() คืนค่าผลบวกของ 2 ค่านั้น.
// mul() คืนค่าผลคูณของ 2 ค่านั้น.

// let calculator = {
//     value1: 0,
//     value2: 0,
//     read() {
//         value1 = parseInt(prompt("Enter first value1 :"));
//         value2 = parseInt(prompt("Enter first value2 :"));
//     },
//     sum() { return (value1 + value2) },
//     mul() { return (value1 * value2) }
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// 4.	ให้ Object ชื่อ ladder มี	method ขึ้น และ ลง

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep() {
//         console.log(this.step);
//     }
// }

// สร้าง constructor function ที่ใช้สำหรับสร้าง Calculator โดยต้องมี 3 Methods นี้
//read(): รับค่าจาก propmt สองตัว
//sum(): ให้คืนค่าจากการบวกกันของตัวแปรสองตัว
//mul(): ให้คืนค่าจากการคูณกันของตัวแปรสองตัว

// function calculator() {
//     this.value1 = 0;
//     this.value2 = 0;
//     this.read = function() {
//         value1 = parseInt(prompt("Enter first value1 :"));
//         value2 = parseInt(prompt("Enter first value2 :"));
//     };
//     this.sum() = function() { return (value1 + value2) };
//     this.mul() = function() { return (value1 * value2) };
// };

// แก้ไขการเขียนโค้ดต่อไปนี้
// function pow(x, n) {
//     let result = 1;
//     for (let i = 0; i < n; i++) { result *= x; }
//     return result;
// }
// let x = prompt("x?", ''),
//     n = prompt("n?", '')
// if (n <= 0) {
//     alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
// } else {
//     alert(pow(x, n))
// }