---
sidebar_position: 1
---

# 變數與賦值

## 變數：儲存值的容器
變數可以想像成一個「小盒子」，用來存放數據。

### 如何宣告變數？
JavaScript 中有三種方式宣告變數：`var`、`let`和`const`。
- `var` : 可以重新賦值（更改儲存的值），但因為 作用範圍不明確(即使是在 {} 內宣告的變數，仍然可以在區塊外使用) 和 提升(Hoisting)問題 ，所以不推薦使用。
  ```js
  console.log(message);  // 輸出 undefined（雖然尚未宣告，但因為提升沒有報錯）
  var message = "Hello";
  ```

- `let` : 可以重新賦值（更改儲存的值）。
  ```js
  let age = 25;  // 創建一個變數 age，並賦值為 25
  age = 26; // 將 age 的值改成 26
  ```

- `const` : 一旦賦值就不能更改，適合用來存放固定不變的資料。
  ```js
  const pi = 3.14; // 宣告一個不會改變的變數 pi，並賦值為 3.14
  pi = 3.14159;    // 嘗試重新賦值會報錯
  console.log(pi); // 輸出 TypeError: Assignment to constant variable.
  ```
> 如果 const 宣告的變數是物件或陣列，雖然這個物件本身不能被重新賦值為其他物件或陣列，  
但你仍然可以修改這個物件或陣列的內容。
>```js
  const person = { name: "Alice", age: 25 };
  person.age = 26; // 這是允許的，因為只是改變了物件的屬性值
  console.log(person); // 輸出 { name: "Alice", age: 26 }
  const numbers = [1, 2, 3]; // 宣告一個不會改變的陣列 numbers 
  // 可以更改陣列中的元素 
  numbers[0] = 10; // 將第一個元素改為 10 
  console.log(numbers); // 輸出 [10, 2, 3]
  // 可以添加新元素 
  numbers.push(4); // 在陣列末尾添加 4 
  console.log(numbers); // 輸出 [10, 2, 3, 4]
  // 可以刪除元素 
  numbers.pop(); // 刪除陣列末尾的元素 
  console.log(numbers); // 輸出 [10, 2, 3]
 ```

## 賦值：使用「等號」(=) 把一個值放進變數裡

`=`在 JavaScript 中不是「等於」，而是「賦值」，意思是「把右邊的值放進左邊的變數裡」。
```js
x=5, x=x+1
```
