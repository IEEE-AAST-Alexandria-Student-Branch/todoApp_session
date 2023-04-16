// async and await and promises

/**
 *  async and await
 * - async function
 * - await
 * - try and catch
 * - promise
 * - fetch
 * - json
 * - arrow function
 * - destructuring
 * - spread operator
 * - rest operator
 * - template literals
 *
 *
 */

console.log("start");
// without callback
// function getData() {
//   setTimeout(() => {
//     console.log("fetching data...");
//     const data = { name: "john" };
//     return data;
//   }, 1000);
// }

//with callback

// function getData(callback) {
//   setTimeout(() => {
//     console.log("fetching data...");
//     const data = { name: "john" };
//     callback(data);
//   }, 1000);
// }

// getData(data => {
//   console.log(data);
// });

// const data = getData();
// console.log("end");

// async function

// async function myFunc() {}

// const myFunc = async () => {}

// await

// const response = await fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json())

// try and catch

// try {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos')

//   const data = await response.json()

//   console.log(data)

// } catch (err) {

//   console.log(err)

// }

// promise

// const promise = new Promise((resolve, reject) => {

//   setTimeout(() => resolve('Hello'), 1000)

// })

// promise.all([promise1, promise2, promise3])

// promise.then(res => console.log(res))

// fetch

// fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response => response.json())
//       .then(json => console.log(json))

// async function getUsers() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");

//   const data = await response.json();

//   return data;
// }
