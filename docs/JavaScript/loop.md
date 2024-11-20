---
sidebar_position: 11
---

# 迴圈

## 什麼是迴圈？

迴圈是一種控制流程結構，用來反覆執行一段程式碼，直到某個條件不再成立。

## 迴圈種類

### 1. `for` 迴圈
用於已知確切執行次數的情況。

**語法：**
```javascript
for (初始化; 條件; 更新) {
  // 執行的程式碼
}
```
**範例：**
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i); // 輸出：0, 1, 2, 3, 4
}
```

---

### 2. `while` 迴圈
用於在條件為 `true` 時持續執行的情況。

**語法：**
```javascript
while (條件) {
  // 執行的程式碼
}
```

**範例：**
```javascript
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}
// 輸出：0, 1, 2, 3, 4
```

---

### 3. `do...while` 迴圈
至少執行一次，然後根據條件判斷是否繼續執行。

**語法：**
```javascript
do {
  // 執行的程式碼
} while (條件);
```

**範例：**
```javascript
let count = 0;
do {
  console.log(count);
  count++;
} while (count < 5);
// 輸出：0, 1, 2, 3, 4
```

---

### 4. `for...of` 迴圈
用於迭代「可迭代物件」，例如陣列、字串。

**語法：**
```javascript
for (變數 of 可迭代物件) {
  // 執行的程式碼
}
```

**範例：**
```javascript
let fruits = ["蘋果", "香蕉", "橘子"];
for (let fruit of fruits) {
  console.log(fruit);
}
// 輸出：蘋果, 香蕉, 橘子
```

---

### 5. `for...in` 迴圈
用於迭代物件的可列舉屬性（建議不要用於陣列）。

**語法：**
```javascript
for (變數 in 物件) {
  // 執行的程式碼
}
```

**範例：**
```javascript
let person = { name: "John", age: 30 };
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
// 輸出：
// name: John
// age: 30
```

---

## 控制迴圈的語句

### 1. `break`
結束當前的迴圈，繼續執行後續程式碼。
**範例：**
```javascript
function testLoopWithBreak() {
  for (let i = 0; i < 5; i++) {
    if (i === 3) break;
    console.log(i);
  }
  console.log("迴圈結束");
}
// 輸出：
// 0
// 1
// 2
// 迴圈結束
```

---

### 2. `return `
立即結束整個函式，包括迴圈和函式的後續程式碼都不再執行。

**範例：**
```javascript
function testLoopWithReturn() {
  for (let i = 0; i < 5; i++) {
    if (i === 3) return;
    console.log(i);
  }
  console.log("這段不會執行");
}
// 輸出：
// 0
// 1
// 2
```

---

### 3. `continue`
跳過本次迴圈的剩餘程式，直接進入下一次迴圈。

**範例：**
```javascript
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}
// 輸出：0, 1, 3, 4
```

---

## **巢狀迴圈（Nested Loops）**
迴圈中包含另一個迴圈。

**範例：**
```javascript
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}
// 輸出：
// i=1, j=1
// i=1, j=2
// i=2, j=1
// i=2, j=2
// i=3, j=1
// i=3, j=2
```

---

## 注意事項
1. **避免無窮迴圈**  
   確保迴圈條件會在某一時刻變成 `false`，避免程式無限執行。
   ```javascript
   while (true) {
     // 這將導致無窮迴圈
   }
   ```

2. **`for...in` 不適合陣列**  
   容易意外訪問陣列的非數字屬性。
   ```javascript
   let arr = [1, 2, 3];
   arr.customProp = "test";
   for (let key in arr) {
     console.log(key); // 輸出：0, 1, 2, customProp
   }
   ```

3. **使用適當的迴圈**  
   根據資料結構與需求，選擇最合適的迴圈類型。例如，對陣列使用 `for...of` 或 `forEach`。

4. **盡量減少巢狀迴圈的層數**  
  過多層巢狀會降低可讀性和效率。

---

## 總結
迴圈讓程式可以自動執行重複任務，選擇適合的迴圈結構與語法可以提升程式效率與可讀性。
