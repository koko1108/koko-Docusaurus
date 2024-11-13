---
sidebar_label: '函式'
sidebar_position: 6
---

# 函式（Function）
## 什麼是函式？
函式（Function）是一段可以重複執行的程式碼，用來完成特定的任務或計算。
想像函式是一個機器，接受輸入（參數），進行處理，然後產生一個輸出。

## 建立函式的方法
* 函式宣告 (Function Declaration)
    ```js
    function greet() {
    console.log("你好！");
    }
    ```
* 函式表達式 (Function Expression)
    ```js
    const greet = function() {
    console.log("你好！");
    };
    ```
* 箭頭函式 (Arrow Function)
    ```js
    const greet = () => {
    console.log("你好！");
    };
    ```

## 參數與回傳值
* 參數 (Parameters)
    ```js
    function greet(name) {
    console.log("你好，" + name + "！");
    }
    greet("小明"); // 輸出：你好，小明！
    ```
    - 函式可以接受參數（輸入值），用來傳遞資訊。
    - 在這裡，name 是函式的參數，呼叫時可以提供不同的值。
* 回傳值 (Return Value)
    ```js
    function add(a, b) {
    return a + b;
    }
    let sum = add(5, 3); // sum 的值為 8
    ```
    - 函式可以回傳一個值，供外部使用。
    - return 關鍵字用來結束函式並回傳結果。

## 函式的好處
* 重複使用：可以將常用的邏輯封裝在函式中，避免重複撰寫代碼。
* 易於維護：代碼變得更易讀、結構清晰，方便維護與更新。
* 模組化：將程式碼分成多個小函式，讓程式更有組織性。

## 注意事項
使用 return 後，函式會立即結束，後面的代碼不會執行。  
如果函式沒有 return，則回傳值是 undefined。
