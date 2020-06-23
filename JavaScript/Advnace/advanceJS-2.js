//1. ให้เขียนฟังก์ชัน random(min, max) ที่จะ random เลข float ตั้งแต่ min จนถึง max มาให้เรา (ไม่รวม max)

function random(min, max) {
    return Math.random() * (max - min) + min;
}
// เขียนฟังก์ชัน ucFirst(string) โดยทำคืนค่าเป็น string เดิม แต่ตัวแรกของ string กลายเป็นพิมพ์ใหญ่

function ucFirst(string) {
    return (string.substring(1, length)).toUpperCase() + string.substring(1);
}
// 2.	เขียนฟังก์ชันที่ checkSpam โดยถ้าข้อความดังกล่าวมีคำว่า “xxx” หรือ “viagra” ให้คืนค่าเป็น true ถ้าไม่มีให้คืนค่าเป็น false

function checkSpam(string) {
    if (string.includes("xxx") || string.includes("viagra")) return true;
    return false;
}

// เขียนฟังก์ชันที่ truncate(str, maxlength) โดยฟังก์ชันดังกล่าวจะเช็คว่า string ที่ถูกส่งเข้ามามีความยาวเกิน maxlength ไหม ถ้าเกินให้แทน ข้อความต่อจากนั้นด้วย “...”

function truncate(str, maxlength) {
    if (str.length > maxlength) return "...";
    return false;
}

// เขียนฟังก์ชันที่ extractCurrencyValue(string, rate) โดยที่ฟังก์ชันดังกล่าวจะแปลง string ที่เป็นค่าเงิน dollar ให้เป็น number ที่มีค่าเป็นเงินบาทไทย โดยอ้างอิง  rate จาก parameters ตัวที่สอง ที่ส่งมาให้

function extractCurrencyValue(string, rate) {
    return parseInt(string.replace(/[^0-9\.]/g, "")) * rate;
}

// 3.11.  แบบฝึกหัด
// 1. ผลลัพธ์ของความยาว array คืออะไร
let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;
shoppingCart.push("Banana");

//alert(fruits.length); // 4

// 2.	ให้ทำตามขั้นตอนต่อไปนี้
// สร้าง array ชื่อ styles ที่มี items ชื่อ “Jazz” และ “Blues”
// เพิ่ม “Rock-n-Roll” ต่อท้าย
// นำค่า Classics ไปทับค่าตรงกลางของ Array
// นำ items ตัวแรกออกมาและลบ items ตัวนั้นออกจาก array
// เพิ่ม “Rap” และ “Reggae” ไปข้างหน้าของ Array

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
// console.log(styles);
for (let key in styles) {
    if (key == Math.floor(styles.length / 2)) styles[key] = "Classic";
    //console.log(Math.floor(styles.length / 2));
}
// console.log(styles);
styles.shift();
// console.log(styles);
styles.unshift("Rap", "Reggae");
// console.log(styles);

// 3.	เขียนฟังก์ชัน sumInput() ที่
// ใช้ propmt รับ value มาเก็บใน array
// หยุดถามเมื่อเจอค่าที่ไม่ใช่ ตัวเลข
// คำนวณผลรวมของตัวเลขทั้งหมดใน Array

function sumInput() {
    let input = [];
    while (1) {
        let value = parseInt(prompt("Enter value (number only):"));
        if (isNaN(value)) {
            let sum = 0;
            for (let key in input) {
                sum = sum + input[key];
            }
            return sum;

        }
        input.push(value);
    }
}

// 4.	Maximal contiguous subarray (**Optional**) P.93
// ให้เขียนฟังก์ชัน getMaxSubSum(arr) ที่ return ผลรวมของ subarray ที่มากที่สุดที่ติดกัน
// watch this one https://www.youtube.com/watch?v=2MmGzdiKR9Y

function getMaxSubSum(arr) {
    let sum = 0;
    let start = 0;
    let end = 0;
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        let compare = Math.max(sum, arr[i]);
        //console.log(`sum : ${sum},array:${arr[i]},choose:${compare}`);
        if (compare != sum) {
            sum = arr[i];
            start = i;
        }
        if (sum > max) {
            end = i;
            max = sum;
        }
    }
    return [start, end, max];
}
let number = [-2, -5, 6, -2, -3, 1, 5, -6];
let [start, end, sum] = getMaxSubSum(number);
//console.log(`number is [${number}]`);
//console.log(`[${number.slice(start, end + 1)}] total : ${sum}`);

// P.125 ให้สร้าง array2 จาก array1 ตามที่โจทย์กำหนด โดยใช้ฟังก์ชัน Array.map()

//1.1
array1 = [1, 2, 30, 400]
array2 = array1.map(item => item * 2);
//console.log(`Array 1 = [${array1}] => Array 2 = [${array2}]`);

//1.2
array1 = [1, 2, 3, 4]
array2 = array1.map(item => (`"${item}"`));
//console.log(`Array 1 = [${array1}] => Array 2 = [${array2}]`);

//1.3
array1 = [1, "1", 2, {}]
array2 = array1.map(item => typeof(item));
//console.log(`Array 1 = [${array1}] => Array 2 = [${array2}]`);

//1.4
array1 = ["apple", "banana", "orange"]
array2 = array1.map(item => item.toUpperCase());
//console.log(`Array 1 = [${array1}] => Array 2 = [${array2}]`);

//1.5 and 1.6
array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
]
array2 = array1.map(item => item.name);
array3 = array1.map(item => item.age);
//console.log(`Array 1 = [${array1}] => Array 2 = [${array2}], Array 3 = [${array3}]`);

//1.7
array1 = [
    { name: "apple", surname: "London" },
    { name: "banana", surname: "Bangkok" },
    { name: "watermelon", surname: "Singapore" },
]
array2 = array1.map(item => `"${item.name} ${item.surname}"`);
//console.log(`Array 1 = [${array1}] => Array 2 = [${array2}]`);

//1.8
array1 = [1, 3, 4, 5, 6, 7, 8]
array2 = array1.map(item => {
        if (item % 2 == 0) {
            return "even";
        } else return "odd";
    })
    //console.log(`Array 1 = [${array1}] => Array 2 = [${array2}]`);

//1.9
array1 = [1, -3, 2, 8, -4, 5]
array2 = array1.map(item => {
        if (item < 0) {
            return item * (-1);
        } else return item;
    })
    //console.log(`Array 1 = [${array1}] => Array 2 = [${array2}]`);

//1.10
array1 = [100, 200.25, 300.84, 400.3]
array2 = array1.map(item => (`"${item.toFixed(2)}"`));
//console.log(`Array 1 = [${array1}] => Array 2 = [${array2}]`);

//1.11
array1 = [
    { name: "apple", birth: "2000-01-01" },
    { name: "banana", birth: "1990-10-01" },
    { name: "watermelon", birth: "1985-12-01" },
]
array2 = array1.map(item => {
    let birth = item.birth.split("-");
    let today = new Date();
    let date = today.getDate();
    let month = (today.getMonth() + 1);
    let year = today.getFullYear() - birth[0];
    if (month < birth[1] || (date < birth[2 && month < birth[1]])) year--;
    return `name : "${item.name}",birth : "${item.birth}",age : ${year}`;
});
//console.log(`Array 1 = [${array1}] => Array 2 = [${array2}]`);

//1.12
array2 = array1.map(item => {
    let birth = item.birth.split("-");
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `"<tr><td>${item.name}</td><td>${birth[2]} ${months[birth[1] - 1]} ${birth[0]}</td></tr>",`;
});
//console.log(`Array 1 = [${array1}] => Array 2 = [${array2}]`);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ให้สร้าง array2 จาก array1 ตามที่โจทย์กำหนด โดยใช้ฟังก์ชัน Array.filter()
// 2.1
array1 = [1, 2, 30, 400];
array2 = array1.filter(item => item > 10);
//console.log(array2);

// 2.2
array1 = [1, 2, 3, 4];
array2 = array1.filter(item => (item % 2 != 0));
// console.log(array2);

// 2.3
array1 = [1, "1", 2, {}];
array2 = array1.filter(item => (typeof(item) == typeof(1)));
// console.log(array2);

// 2.4
array1 = ["apple", "banana", "orange", "pineapple", "watermeon"]
array2 = array1.filter(item => (item.length > 6));
// console.log(array2);

//2.5
array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
    { name: "pineapple", age: 16 },
    { name: "peach", age: 24 },
]
array2 = array1.filter(item => (item.age < 18));
// console.log(array2);

//2.6
array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
    { name: "pineapple", age: 16 },
    { name: "peach", age: 24 },
];
array2 = array1.filter(item => (item.age != 32));
// console.log(array2);

//2.7
array1 = [1, -3, 2, 8, -4, 5];
array2 = array1.filter(item => (item > 0));
// console.log(array2);

//2.8
array1 = [1, 3, 4, 5, 6, 7, 8];
array2 = array1.filter(item => (item % 3 == 0));
// console.log(array2);

//2.9
array1 = ["peach", 1, -3, "2", {},
    []
]
array2 = array1.filter(item => (typeof(item) == typeof("1")));
//console.log(array2);

// 2.10
array1 = ["APPLE", "appLE", "PEACH", "PEach"];
array2 = array1.filter(item => (item == item.toUpperCase()));
// console.log(array2);

//2.11
array1 = [
    { name: "apple", birth: "2001-01-01" },
    { name: "banana", birth: "1990-10-10" },
    { name: "watermelon", birth: "1985-12-30" },
    { name: "peach", birth: "2002-10-13" },
];
array2 = array1.filter(item => {
    let birth = item.birth.split("-");
    return (birth[1] == 10);
});
// console.log(array2);

//2.12
array2 = array1.filter(item => {
    let birth = item.birth.split("-");
    return (birth[0] < 2000);
});
// console.log(array2);

// ให้ arr เป็น Array สร้าง function ชื่อ unique(arr) ให้คืนค่าเป็น unique items ของ arr 
function unique(arr) {
    let set = new Set(arr);
    return set
}

let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
// console.log(unique(values));
// alert(unique(values)); // Hare, Krishna, :-O

//2.Anagram เป็นตัวอักษรที่มีจำนวนตัวอักษรแต่ละตัวที่เท่ากัน แต่เรียงไม่เหมือนกัน ( Optional )
// ไม่เข้าใจเลยไม่ทำ

// 3.	เราได้ array จาก map.keys() แต่ไม่สามารถใช้ push ได้เราจะทำยังไงให้ keys.push สามารถทำงานได้
let map = new Map();

map.set("name", "John");
// console.log(map);
let keys = map.keys();
keys = Array.from(keys);

// Error: keys.push is not a function
keys.push("more");
// console.log(keys);

// กำหนดให้ salaries เป็น Object ให้เขียนฟังก์ชัน sumSalaries(salaries) ที่คืนค่าเป็นผลผมรวมของเงินเดือน ถ้า salaries ไม่มีสมาชิก ให้คืนค่าเป็น 0

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

// console.log(sumSalaries(salaries)); // 650
function sumSalaries(salaries) {
    let sum = 0;
    for (let value in salaries) {
        sum += salaries[value];
        // console.log(salaries[value]);
    }
    return sum;
}

// ให้เขียนฟังก์ชัน count(obj) ที่คืนค่าเป็นจำนวน properties ใน object
let user = {
    name: 'John',
    age: 30
};

alert(count(user)); // 2
function count(user) {
    let number = 0;
    for (let key in user) {
        number++;
    }
    // return number;
    return Object.keys(user).length;
}