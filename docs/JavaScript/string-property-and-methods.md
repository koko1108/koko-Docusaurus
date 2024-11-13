---
sidebar_label: '字串屬性與方法'
sidebar_position: 3
---

# String 屬性與方法
JavaScript 提供多種方法和屬性來操作和格式化字串。  
理解這些屬性與方法，能讓我們更靈活地處理文字資料。

## `length`  
返回字串的長度（字元數）
```js
let text = "Hello, world!";
console.log(text.length); // 輸出: 13

let text2 = "";
console.log(text2.length); // 輸出: 0
```

## `索引存取 ([n])`
用於存取字串中第 n 個字元（n 從 0 開始）。
```js
let text = "Hello, world!";
console.log(text[0]);  // 輸出: "H"
console.log(text[7]);  // 輸出: "w"
console.log(text[14]); // 輸出: undefined ，索引超出字串的範圍
```

## `charAt(index)`
返回指定索引位置的字元。
```js
let text = "Hello";
console.log(text.charAt(1)); // 輸出: "e"
```

## `charCodeAt(index)`
返回指定索引位置的字元的 Unicode 編碼（數值）。
```js
let text = "Hello";
console.log(text.charCodeAt(1)); // 輸出: 101 (Unicode 編碼 for "e")
```

## `indexOf(substring)`
返回子字串首次出現的索引，若未找到則返回 -1。
```js
let text = "Hello, world!";
console.log(text.indexOf("world")); // 輸出: 7
console.log(text.indexOf("apple")); // 輸出: -1
```

## `toUpperCase()`
將字串轉為全大寫。
```js
let text = "hello";
console.log(text.toUpperCase()); // 輸出: "HELLO"
```

## `toLowerCase()`
將字串轉為全小寫。
```js
let text = "HELLO";
console.log(text.toLowerCase()); // 輸出: "hello"
```

## `slice(start, end)`
擷取字串的部分，從 start 到 end（不包括 end）。
```js
let text = "Hello, world!";
console.log(text.slice(0, 5)); // 輸出: "Hello"
```

## `split(separator)`
將字串拆分成陣列，使用指定的分隔符。
```js
let text = "apple,banana,cherry";
console.log(text.split(",")); // 輸出: ["apple", "banana", "cherry"]
```

## `includes(substring)`
檢查字串是否包含子字串，返回布林值 true 或 false。
```js
let text = "JavaScript is fun!";
console.log(text.includes("fun")); // 輸出: true
```

## `trim()`
移除字串開頭和結尾的空白字元。
```js
let text = "   Hello, world!   ";
console.log(text.trim()); // 輸出: "Hello, world!"
```

## `replace(searchValue, newValue)`
替換字串中的特定部分（僅替換第一次匹配到的）。
```js
let text = "Hello, world! Hello, everyone!";
let newText = text.replace("Hello", "Hi");
console.log(newText); // 輸出: "Hi, world! Hello, everyone!"
```
> String 方法都不會改變原始字串  
String 方法不會改變原始字串，而是返回一個新的字串。如果想要更新變數的值，需要將返回結果重新賦值。
```js
let text = "hello";
text.toUpperCase();
console.log(text); // 輸出: "hello"
let text = "hello"; 
text = text.toUpperCase(); // 必須重新賦值 
console.log(text); // 輸出: "HELLO"
```
