---
sidebar_label: '資料型態'
sidebar_position: 2
---

# 資料型態 data type

原生值是 JavaScript 中基本的資料類型，它們不具有物件的特性，且是不可變的。

## `String` (字串)
代表文字資料，可以用單引號或雙引號包裹。
```javascript
let name = 'Alice'; 
let message = "Hello, " + name; 
console.log(message); // 輸出：Hello, Alice

let x = 10; 
let y = "10"; 
console.log(x + y); // 輸出：1010
```

## `Boolean` (布林值)
代表真 (`true`) 或假 (`false`) 的值，常用於邏輯運算。  
可以透過 ! 來「反轉」 true 和 false 的狀態。

```javascript
const isActive = true;
console.log(isActive); // 輸出: true
console.log(!isActive); // 輸出: false
```

## `Boolean` (布林值)
代表真 (`true`) 或假 (`false`) 的值，常用於邏輯運算。  
可以透過 ! 來「反轉」 true 和 false 的狀態。

```javascript
const isActive = true;
console.log(isActive); // 輸出: true
console.log(!isActive); // 輸出: false
```

## `Number` (數值)
可以是整數或浮點數。
精確度是介於 2<sup>-53</sup> − 1 與 2<sup>53</sup> − 1 之間。

```javascript
let num1 = 10; // 整數 
let num2 = 3.14; // 浮點數 
let result = num1 + num2; 
console.log(result); // 輸出：13.14
```
> 要注意浮點數的精度問題，例如 0.1 + 0.2 可能不會等於 0.3。
```javascript
const result = 0.1 + 0.2;
console.log(result); // 輸出 0.30000000000000004，因為浮點數精度問題
```  
 解決方案
```javascript
const result1 = (0.1 * 10 + 0.2 * 10) / 10; // 先將小數轉為整數運算 
console.log(result1); // 輸出 0.3
const result2 = (0.1 + 0.2).toFixed(1); // 限制為 1 位小數
console.log(result2); // 輸出 "0.3"（注意是字串）
```

## `BigInt`（大數值）
用於表示超出 Number類型所能表示的整數範圍的數值，使用n後綴來表示。

```javascript
const bigNumber = 1234567890123456789012345678901234567890n;
```

## `Null`（空值）
表示「無值」或「空值」，用於明確指定變數沒有任何資料。

```javascript
const value = null;
```

## `Undefined`（未定義）
表示變數已宣告但尚未賦值，或一個物件的屬性不存在。

```javascript
let name; // 此時 name 是 undefined
```

## `Symbol`（符號）
- 唯一性：即使不同的 Symbol 描述相同，它們的值也不會相同，因此不會產生屬性名的衝突。
- 隱藏屬性：Symbol 鍵的屬性不會被 for...in 或 Object.keys() 等迴圈方法列出，這讓你可以創建一些私有屬性。

```javascript
// 創建一個 Symbol
const uniqueId = Symbol("id"); // 描述為 "id"
// 創建一個物件，使用 Symbol 作為屬性名
const user = {
    name: "Alice",
    [uniqueId]: 12345 // 使用 Symbol 作為屬性鍵
};
// 存取屬性
console.log(user.name); // 輸出 "Alice"
console.log(user[uniqueId]); // 輸出 12345
// 使用另一個 Symbol，雖然描述相同，但仍然是不同的 Symbol
const anotherId = Symbol("id");
console.log(anotherId === uniqueId); // 輸出 false，因為每個 Symbol 都是唯一的
```
```javascript
const secret = Symbol("secret");
const data = {
publicInfo: "這是公共資料",
[secret]: "這是私密資料"
};
console.log(data.publicInfo); // 輸出 "這是公共資料"
console.log(data[secret]); // 輸出 "這是私密資料"
// 這裡不會列出私密資料
for (let key in data) {
console.log(key); // 只會輸出 "publicInfo"
}
console.log(Object.keys(data)); // 只會輸出 ["publicInfo"]
```

## `objects` (物件)
除了上述的七個原生值以外的存在，在 JavaScript 當中都是物件。例如 : Objects(物件)、Array (陣列) 、 Function (函式)。

### 如何辨別資料型別?
1. **使用 typeof 運算符**
  ```javascript
  let num = 42;
  console.log(typeof num); // 輸出 "number"

  let text = "Hello";
  console.log(typeof text); // 輸出 "string"

  let isAvailable = true;
  console.log(typeof isAvailable); // 輸出 "boolean"

  let obj = { name: "John" };
  console.log(typeof obj); // 輸出 "object"

  let arr = [ 1, 2, 3];
  console.log(typeof arr); // 輸出 "object"

  let notDefined;
  console.log(typeof notDefined); // 輸出 "undefined"

  console.log(typeof function() {}); // 輸出 "function"

  // 例外
  console.log(typeof null); // object
  ```

2. **使用 Array.isArray() 檢查陣列**
  ```javascript
  let arr = [1, 2, 3];
  console.log(Array.isArray(arr)); // 輸出 true

  let notArr = { name: "John" };
  console.log(Array.isArray(notArr)); // 輸出 false
  ```  
3. **使用 Object.prototype.toString.call()**
  ```javascript
  console.log(Object.prototype.toString.call(42));           // "[object Number]"
  console.log(Object.prototype.toString.call("Hello"));      // "[object String]"
  console.log(Object.prototype.toString.call(true));         // "[object Boolean]"
  console.log(Object.prototype.toString.call(null));         // "[object Null]"
  console.log(Object.prototype.toString.call(undefined));    // "[object Undefined]"
  console.log(Object.prototype.toString.call([1, 2, 3]));    // "[object Array]"
  console.log(Object.prototype.toString.call({ name: "John" })); // "[object Object]"
  ```

