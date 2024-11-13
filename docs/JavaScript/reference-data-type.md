---
sidebar_label: '引用資料型別'
sidebar_position: 8
---

# 引用資料型別（Reference Data Type）
在 JavaScript 中，資料型別主要分為**原始型（Primitive Type）**和**引用型（Reference Type）**。

## 原始型（Primitive Type）
* 定義：是儲存實際數據值的變數。它們在記憶體中直接存儲值，並且每個原始型變數都有自己的記憶體空間。
* 資料型別：`String`、`Number`、`Boolean`、`Null`、`Undefined`、`Symbol`、`BigInt`
* 特點：
    * 值比較：當比較兩個原始型變數時，比較的是它們的值。
    ```js
    let x = 10; 
    let y = 10; 
    console.log(x == y); // 輸出：true
    ```
    * 獨立性：原始型變數之間的複製不會互相影響。修改其中一個不會影響另一個。
    ```js
    let a = 10;
    let b = a; // 將 a 的值複製到 b
    b = 20;    // 修改 b 不會影響 a
    console.log(a); // 輸出：10
    console.log(b); // 輸出：20
    ```

## 引用型（Reference Type）
* 定義：儲存的是對象在記憶體中的地址，而不是實際的數據。這意味著多個變數可以指向同一個對象，並影響同一個記憶體位置。
* 資料型別：`Object`、`Array`、`Function`
* 特點：
    * 引用比較：當比較兩個引用型變數時，比較的是它們的記憶體位置。
    ```js
    let Array1 = [1, 2, 3]; 
    let Array2 = [1, 2, 3]; 
    console.log(Array1 == Array2); // 輸出：false ，因為其實是指向不同的記憶體位置
    ```
    ```js
    let Array1 = [1, 2, 3];
    let Array2 = Array1;
    console.log(Array1 == Array2); // 輸出：true ，因為指向相同的記憶體位置
    ```
    * 共享記憶體：如果兩個變數指向同一個對象，對該對象的任何更改都會影響這兩個變數。
    ```js
    let arr1 = [1, 2, 3];
    let arr2 = arr1; // 將 arr1 的引用複製給 arr2
    arr2[0] = 99;    // 修改 arr2 的內容
    console.log(arr1); // 輸出：[99, 2, 3]，因為 arr1 和 arr2 指向同一個陣列
    ```
## 比較表格
|        | 儲存方式 | 複製行為 |比較行為|
| ------ | -------- |--------- |------- |
| 原始型 | 儲存值|賦值會複製其值，兩者相互獨立|比較的是值本身|
| 引用型 | 儲存對象的地址（引用）|賦值會複製其引用，兩者指向相同的對象，修改一個會影響到另一個|比較的是記憶體地址，只有在指向同一個對象時才相等|

