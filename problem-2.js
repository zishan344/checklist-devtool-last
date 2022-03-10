/* ২. জাভাস্ক্রিপ্ট এর কোন কোন জিনিস asynchronous সেটার একটা লিষ্ট গুগলে সার্চ দিয়ে বের করে ফেলো। এবং এই asynchronous বলতে কি বুঝায় সেটাও দেখে রাখো। */
/* js asynchronous function list */
/* 1. fetch
2. async await
3. setTimeout
4. setInterval
5. getUserMedia()
6. showOpenFilePicker()
7.  */
function isPrime(num) {
  for (let i = 2; i * i <= num; i++) if (num % i === 0) return false;
  return num > 1;
}
console.log(isPrime(9));
console.log("hello world");
