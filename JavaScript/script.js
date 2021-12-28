let push = document.querySelector('.push')
let div = document.querySelector('.div')
let input = document.querySelector('.input')
let p = document.querySelector('.p')


// push.onclick = () => {
//   let text = input.value;
//   let string = text.split(" ").join("");
//   console.log(string)
//   let arr = string.split("");
//   console.log(arr)
//   let set = new Set(arr);
//   console.log(set)
//   let obj = {};
//   for (let i of set) {
//     let count = 0;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] == i) {
//         count++;
//       }
//     }
//     obj[i] = count;
//   }
//   console.log(obj);
// };

// push.onclick = function () {
//   let text = input.value;
//   console.log(text);
//   // ---------------------------------find text
//   let textArr = [];
//   for (let i = 0; i < text.length; i++) {
//     textArr.push(text.charAt(i));
//   }
//   console.log(textArr);
//   // ----------------------- create new array
//   let textSet = new Set(textArr);
//   console.log(textSet);
//   // ------------------------create set
//   let textObj = {}
//   // ----------------------create object

//   for (let key of textSet) {
//     count = 0;
//     // -----------------------create count of elements
//     for (let i = 0; i < textArr.length; i++) {
//       if (textArr[i] === key) {
//         //  if word of array === word in set
//         count++;
//       }
//     }
//     textObj[key] = count;
//   }
//   console.log(textObj);
// }

// -----------------------------------------test 


// let arr = [...input.value.split(' ')];



// // -все
// // for (let i = 0; i < arr.length; i++) {
// //   console.log(arr[i])
// // }
// // индекс -ключь
// // for (let key in arr) {
// //   console.log(key)
// // }
// // значение обдж
// for (let item of arr) {
//   console.log(item)
// }


// ----------------------------------------task 1
// push.onclick = (i) => {
//   let text = []
//   for (i = 0; i < arr.length; i++) {
//     text += `${arr[i]} `;
//   }
//   div.textContent = text;
// }

// ----------------------------------------task2

// push.addEventListener('click', (i) => {
//   let text = [];
//   for (i = 0; i < arr.length; i++) {
//     text += `${[i]}: ${arr[i]} ${arr[i].length} <br>`;
//   }
//   div.innerHTML = text;
// })

// 
let divs = document.getElementsByClassName('div');
push.onclick = function () {
  for (let key of divs) {
    key.innerHTML = input.value;
  }
  console.log(input.value)
}