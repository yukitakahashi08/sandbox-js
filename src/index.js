/**
 * const,let等の変数宣言
//  */
// var val1 = "var変数";
// console.log(val1);

// val1 = "var変数上書き;";
// console.log(val1);

// var val1 = "再上書き";

// let val2 = "let変数";
// console.log(val2);

// const val3 = "const変数";
// console.log(val3);

// const val4 = {
//   name: "ゆうき",
//   age: 43
// };

// console.log(val4);
// val4.name = "ゆうじろう";
// val4.address = "Tokyo";

// const val5 = ["dog", "cat"];
// console.log(val5);
// val5[0] = "bird";
// val5.push("monkey");

// const name = "ゆうき";
// const age = 43;

// const massage1 = "私の名前は" + name + "です。年齢は" + age + "です";
// console.log(massage1);

// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);
// function func1(str) {
//   return str;
// }

// const str = "";
// const func2 = (srt) => str;

// console.log(func2("func1です。"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(11, 33));

// const myProfile = {
//   name: "ゆうき",
//   age: 43
// };
// const message1 = `私の名前は${myProfile.name}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `私の名前は${name}です。`;

// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello();

// const arr1 = [1, 2, 3, 4, 5];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// //sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);
// const [num1, num2, ...arr3] = arr1;
// console.log(num1);
// console.log(num2);
// console.log(arr3);
// console.log(arr1);

const nameArr = ["田中", "山田", "ゆうき"];

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "ゆうき") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);
