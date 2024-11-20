---
sidebar_position: 12
---

# Math 物件
JavaScript 的 `Math` 是一個內建物件，提供基本的數學常數和函數，幫助進行數值計算。

---

## Math 常數
| 常數名稱           | 描述                              | 值                      |
|--------------------|-----------------------------------|-------------------------|
| `Math.PI`          | 圓周率 π                          | ≈ 3.14159              |
| `Math.E`           | 自然對數的底數 e                  | ≈ 2.71828              |
| `Math.LN2`         | 2 的自然對數                      | ≈ 0.69314              |
| `Math.LN10`        | 10 的自然對數                     | ≈ 2.30258              |
| `Math.LOG2E`       | 以 2 為底的 e 的對數              | ≈ 1.44269              |
| `Math.LOG10E`      | 以 10 為底的 e 的對數             | ≈ 0.43429              |
| `Math.SQRT2`       | 2 的平方根                        | ≈ 1.41421              |
| `Math.SQRT1_2`     | 1/2 的平方根                      | ≈ 0.70711              |

---

## Math 方法
| 方法               | 描述                                    | 範例                           | 輸出       |
|--------------------|----------------------------------------|-------------------------------|------------|
| `Math.abs(x)`      | 返回絕對值                              | `Math.abs(-5)`                 | `5`        |
| `Math.ceil(x)`     | 向上取整                                | `Math.ceil(4.2)`               | `5`        |
| `Math.floor(x)`    | 向下取整                                | `Math.floor(4.7)`              | `4`        |
| `Math.round(x)`    | 四捨五入                                | `Math.round(4.5)`              | `5`        |
| `Math.trunc(x)`    | 去除小數部分，只保留整數部分             | `Math.trunc(4.7)`              | `4`        |
| `Math.max(a, b, ...)` | 返回多個數字中的最大值                | `Math.max(1, 5, 3)`            | `5`        |
| `Math.min(a, b, ...)` | 返回多個數字中的最小值                | `Math.min(1, 5, 3)`            | `1`        |
| `Math.pow(x, y)`   | 返回 x 的 y 次方                        | `Math.pow(2, 3)`               | `8`        |
| `Math.sqrt(x)`     | 返回 x 的平方根                          | `Math.sqrt(9)`                | `3`        |
| `Math.cbrt(x)`     | 返回 x 的立方根                          | `Math.cbrt(8)`                | `2`        |
| `Math.random()`    | 返回 0 至 1 的隨機數（不含 1）            | `Math.random()`               | 例：`0.456`|
| `Math.sin(x)`      | 返回 x 的正弦值（弧度）                  | `Math.sin(Math.PI / 2)`        | `1`        |
| `Math.cos(x)`      | 返回 x 的餘弦值（弧度）                  | `Math.cos(0)`                  | `1`        |
| `Math.tan(x)`      | 返回 x 的正切值（弧度）                  | `Math.tan(Math.PI / 4)`        | `1`        |
| `Math.asin(x)`     | 返回 x 的反正弦值（範圍：-π/2 到 π/2）    | `Math.asin(1)`                 | `1.5708`   |
| `Math.acos(x)`     | 返回 x 的反餘弦值（範圍：0 到 π）         | `Math.acos(1)`                 | `0`        |
| `Math.atan(x)`     | 返回 x 的反正切值（範圍：-π/2 到 π/2）    | `Math.atan(1)`                 | `0.7854`   |
| `Math.atan2(y, x)` | 返回從 (x, y) 到原點的角度（範圍：-π 到 π）| `Math.atan2(1, 1)`            | `0.7854`   |
| `Math.log(x)`      | 返回 x 的自然對數（以 e 為底）           | `Math.log(Math.E)`              | `1`        |
| `Math.log10(x)`    | 返回 x 的以 10 為底的對數                | `Math.log10(1000)`              | `3`        |
| `Math.log2(x)`     | 返回 x 的以 2 為底的對數                 | `Math.log2(8)`                  | `3`        |
| `Math.exp(x)`      | 返回 e 的 x 次方                         | `Math.exp(1)`                   | `2.7183`   |

---

## 範例
* **隨機數生成**
    生成 1 到 10 之間的隨機整數：
    ```javascript
    let randomNum = Math.floor(Math.random() * 10) + 1;
    console.log(randomNum); // 輸出：1~10 的隨機整數
    ```

* **計算圓的面積**
    ```javascript
    function calculateCircleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
    }
    console.log(calculateCircleArea(5)); // 輸出：78.5398
    ```

* **找出最大與最小值**
    ```javascript
    let nums = [4, 7, 1, 9];
    let max = Math.max(...nums); // 使用展開運算符
    let min = Math.min(...nums);
    console.log(`最大值: ${max}, 最小值: ${min}`); // 輸出：最大值: 9, 最小值: 1
    ```