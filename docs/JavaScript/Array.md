---
sidebar_label: '陣列'
sidebar_position: 7
---

# 陣列（Array）
陣列（Array）是 JavaScript 中用來儲存一組有序資料的集合。  
陣列可以包含各種資料型別的值，例如數字、字串、布林值，甚至其他陣列或物件。

## 1. 宣告陣列的方法
* 使用中括號 `[ ]`
    ```js
    let fruits = ["蘋果", "香蕉", "橘子"];
    ```
* 使用 Array 建構函式
    ```js
    let numbers = new Array(1, 2, 3);
    ```

## 2. 陣列的特性
* 有序性：陣列中的每個元素都有一個索引，從 0 開始計數。例如: 第一個元素的索引是 0，第二個是 1，依此類推。
* 長度屬性`length`：可以取得陣列的長度。
    ```js
    let items = [1, 2, 3, 4];
    console.log(items.length); // 輸出：4
    ```

## 3. 訪問與修改陣列元素
* 訪問元素：使用中括號和索引。
    ```js
    let colors = ["紅", "藍", "綠"];
    console.log(colors[0]); // 輸出："紅"
    ```
* 修改元素：直接使用索引賦新值。
    ```js
    let colors = ["紅", "藍", "綠"];
    colors[1] = "黃色"; // 將 "藍" 修改為 "黃色"
    console.log(colors); // 輸出：["紅", "黃色", "綠"]
    ```

## 4. 陣列方法
* `push()`：將元素加到陣列末端。
    ```js
    let arr = ['a', 'b', 'c'];
    const count = arr.push('d');
    console.log(count); // 返回：4
    console.log(arr);   // ["a", "b", "c", "d"]
    ```
* `unshift()`：將元素加到陣列開頭。
    ```js
    let arr = ['a', 'b', 'c'];
    console.log(arr.unshift('d', 'f')); // 返回：5
    console.log(arr);  // 輸出：["d", "f", "a", "b", "c"]
    ```
* `pop()`：移除並回傳陣列最後一個元素。
    ```js
    let arr = ['a', 'b', 'c'];
    console.log(arr.pop());  // 輸出："c"
    console.log(arr);        // 輸出：["a", "b"]
    ```
* `shift()`：移除並回傳陣列第一個元素。
    ```js
    let arr = ['a', 'b', 'c'];
    const firstElement = arr.shift();
    console.log(firstElement);  // 輸出："a"
    console.log(arr);           // 輸出：["b", "c"]
    ```
* `forEach()`：對陣列中的每個元素執行提供的函式。
    ```js
    let numbers = [1, 2, 3]; 
    numbers.forEach(num => console.log(num)); 
    // 輸出：1 
    // 輸出：2 
    // 輸出：3
    ```
* `map()`：對陣列中的每個元素執行提供的函式並回傳一個新陣列。
    ```js
    let numbers = [1, 2, 3];
    let doubled = numbers.map(num => num * 2);
    console.log(numbers) // [1,2,3]
    console.log(doubled) // [2, 4, 6]
    ```
* `filter()`：根據條件過濾元素並回傳一個新陣列。
    ```js
    let numbers = [1, 2, 3];
    let evenNumbers = numbers.filter(num => num % 2 === 0);
    console.log(numbers) // [1,2,3]
    console.log(evenNumbers) // [2]
    ```
* `concat()`：合併陣列。
    ```js
    let arr1 = [1, 2];
    let arr2 = [3, 4];
    let combined = arr1.concat(arr2); 
    console.log(combined) // [1, 2, 3, 4]
    ```
* `includes()`：檢查陣列中是否包含指定元素，回傳 true 或 false。
    ```js
    const pets = ['cat', 'dog', 'bat'];
    console.log(pets.includes("cat")); // 輸出：true
    ```
