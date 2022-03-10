সেশন স্টোরেজে একটা অবজেক্ট স্টোর করো। আবার সেই অবজেক্ট কে নিয়ে এসে অবজেক্ট হিসেবে কনসোল লগ করো
.
const obj = { name: "marouf", age: 24 };
const objStr = JSON.stringify(obj);
console.log(objStr);
localStorage.setItem("Name-List", objStr);
const loc = localStorage.getItem("Name-List");
console.log(JSON.parse(loc));
