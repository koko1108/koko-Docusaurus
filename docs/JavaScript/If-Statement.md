---
sidebar_position: 5
---

# if 語句
if 語句是用來根據條件執行特定程式碼的一種控制流程語句。  
在 JavaScript 中，if 語句可以幫助我們做出決策，當條件為 true 時執行一段代碼，否則忽略。

## 語法
```js
if (條件) {
  // 當條件為 true 時執行這段代碼
} else { 
	// 當條件為 false 時執行這段代碼
}
```

## 基本使用
```js
let temperature = 30;
if (temperature > 25) {
  console.log("天氣很熱！");
}
// 輸出：天氣很熱！
```

## else 語句
```js
let temperature = 15;
if (temperature > 25) {
  console.log("天氣很熱！");
} else {
  console.log("天氣涼爽！");
}
// 輸出：天氣涼爽！
```
## else if 語句
當有多個條件需要檢查時，可以使用 else if 來處理多個情況。
```js
let temperature = 15;
if (temperature > 25) {
  console.log("天氣很熱！");
} else if (temperature > 20 ) {
  console.log("天氣涼爽！");
} else {
  console.log("天氣寒冷！");
}
// 輸出：天氣寒冷！
```

## 巢狀 if 語句
可以在一個 if 語句內嵌套另一個 if 語句，以進行更複雜的判斷。
```js
let age = 20;
let hasID = true;
if (age >= 18) {
  if (hasID) {
    console.log("可以進入俱樂部！");
  } else {
    console.log("請出示身份證！");
  }
} else {
  console.log("未滿 18 歲，禁止進入！");
}
// 輸出：可以進入俱樂部！
```
## 注意
* 條件的布林值
    if 語句中的條件會被轉換為布林值（true 或 false）。  
    例如：
    數字 0、空字串 ""、null、undefined、NaN 會被視為 false。
    非零數字、非空字串會被視為 true。
* 條件是按順序檢查 
    當第一個條件成立後，後面的條件就不會再被檢查。
    ```js
    let temperature = 30;
    if (temperature > 20) {
    console.log("天氣涼爽！");
    } else if (temperature > 25) {
    console.log("天氣很熱！");
    } else {
    console.log("天氣寒冷！");
    }
    // 輸出：天氣涼爽！
    ```
* 可搭配邏輯運算符
    可以使用邏輯運算符如 &&、||來組合多個條件。
    ```js
    let isMember = true;
    let purchaseAmount = 500;
    if (isMember && purchaseAmount > 300) {
    console.log("符合會員折扣！");
    }
    // 輸出：符合會員折扣！
    ```
