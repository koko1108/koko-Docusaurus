---
sidebar_position: 10
---

# 物件

## 1. 什麼是物件？
物件（Object）是 JavaScript 中一種複雜的資料型別，用於儲存多組關聯資料和方法。  

每個物件都有屬性（properties）和方法（methods）:
- 屬性：代表物件的特徵，由鍵值對（key-value pair）組成。
  - 鍵: 字串型別。
  - 值: 任意型別（數字、字串、布林值、函式、物件）。
- 方法：物件的功能，實際上是屬性中儲存的函式。

## 2. 宣告物件
### 物件字面值（Object Literal）
```js
let person = {
  name: "John",          // 屬性：鍵是 name，值是 "John"
  age: 30,               // 屬性：鍵是 age，值是 30
  greet: function() {    // 方法：一個函式
    console.log("Hello!");
  }
};
```
### `new Object()`
```js
let car = new Object();
car.brand = "Toyota";  // 新增屬性
car.model = "Corolla";
car.drive = function() {
  console.log("Vroom!");
};
```
### 建構函式
```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}
let person1 = new Person("Bob", 30);
```

## 3. 訪問與操作屬性
### 存取屬性
* 使用點符號
  ```js
  console.log(person.name); // 輸出：John
  person.age = 31;          // 修改屬性值
  ```
* 中括號記法
  ```js
  console.log(person["name"]); // 輸出：John
  person["age"] = 32;          // 修改屬性值
  ```
### 新增/修改/刪除屬性
* 新增/修改
  ```js
  person.gender = "female"; // 新增
  person.age = 26;         // 修改
  ```
* 刪除屬性
  ```js
  delete person.age;         // 刪除屬性
  ```
### 檢查屬性是否存在
* 使用`in`運算符
  ```js
  console.log("name" in person); // true
  ```
* `hasOwnProperty()` 
  ```js
  console.log(person.hasOwnProperty("age")); // true
  ```
## 4. this 關鍵字
this 指向當前物件本身，用於方法中訪問物件的屬性。
```js
let person = {
  name: "John",
  greet() {
    console.log(`Hi, I'm ${this.name}!`);
  }
};
person.greet(); // 輸出：Hi, I'm John!
```
> 當某function沒有調用該function的物件，則`this`關鍵字會指向window物件。

## 5. 物件的方法
###  `for...in`
用於遍歷物件的可列舉屬性。
```js
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
```
### `Object.keys()`
取得所有屬性名稱（鍵）。
```js
console.log(Object.keys(person)); // ["name", "age", "gender"]
```
### `Object.values()`
取得所有屬性值。
```js
console.log(Object.values(person)); // ["Alice", 26, "female"]
```
### `Object.entries()`
取得屬性名稱與值的陣列。
```js
console.log(Object.entries(person)); 
// [["name", "Alice"], ["age", 26], ["gender", "female"]]
```
### `Object.assign()`
合併物件。
```js
let target = { a: 1 };
let source = { b: 2 };
Object.assign(target, source); // target 變成 { a: 1, b: 2 }
```
### `Object.freeze()`
凍結物件，禁止修改。
```js
let obj = { a: 1 };
Object.freeze(obj);
obj.a = 2; // 無法修改
console.log(obj.a); // 1
```

### `Object.seal()`
禁止新增或刪除屬性，但允許修改現有屬性。
```js
let obj = { a: 1 };
Object.seal(obj);
obj.b = 2; // 無法新增屬性
obj.a = 3; // 可以修改
console.log(obj.a); // 3
```

## 6. 物件的複製
### 淺拷貝
*  展開運算符（Spread Operator）
  ```js
  let copy = { ...person };
  ```
*  `Object.assign()`
  ```js
  let copy = Object.assign({}, person);
  ```
### 深拷貝
*  `JSON.parse`、`JSON.stringify`
  ```js
  let deepCopy = JSON.parse(JSON.stringify(person));
  ```