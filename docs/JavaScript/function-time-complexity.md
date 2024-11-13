---
sidebar_label: '時間複雜度'
sidebar_position: 9
---

# 時間複雜度（Time Complexity）
時間複雜度是指一個演算法在執行時所需要的時間，通常是根據輸入數據的大小𝑛來評估。  
時間複雜度的高低直接影響演算法在面對大量數據時的效率，因此理解時間複雜度有助於評估不同解法的性能。

## Big O 表示法
Big O 表示法是用來描述演算法在輸入量無限增長時的運行時間趨勢。  
它幫助我們了解演算法的效率，並比較不同演算法在面對大量數據時的表現。
* 不包含低階項:
    Big O 表示法只保留運行時間的「主導項」（dominant term），也就是對增長趨勢影響最大的一項。例如: n2 + n 的複雜度在 Big O 中表達為 O(n²)。

* 不包含首項系數：
    Big O 表示法忽略主導項前的常數系數，因為系數不改變增長的速度。例如: 5n2 和 3n2 的 Big O 表示都記為 O(n²)。

### `O(1)` - 常數時間複雜度
這類演算法的執行時間不會隨著輸入的大小變化。
```js
// 取出數組中的第一個元素
function getFirstElement(arr) {
  return arr[0];  // 執行固定動作，不管 arr 的長度
}
```
|輸入長度 (n) |執行時間 (假設為毫秒)|
| :----------:| :----------------: |
| 1           |1                   |
|10           |1                   |
|100          |1                   |
即便 n 增加，執行時間仍然不變。

### `O(n)` - 線性時間複雜度
這類演算法的執行時間隨著輸入的大小而成比例地增加。
```js
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
```
|輸入長度 (n) |執行時間 (假設為毫秒)|
| :----------:| :----------------: |
| 1           |1                   |
|10           |10                  |
|100          |100                 |
當 n 增加，執行時間成比例增加。

### `O(n²)` - 平方時間複雜度
這類演算法的執行時間隨著輸入量平方增長。
```js
function printAllPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}
```
|輸入長度 (n) |執行時間 (假設為毫秒)|
| :----------:| :----------------: |
| 1           |1                   |
|10           |100                 |
|100          |10,000              |
當 n 增加，執行時間呈 n² 增長，即平方增長。

### `O(2ⁿ)` - 指數時間複雜度
這種複雜度的演算法執行時間隨著輸入量指數增加，比如斐波那契數列的遞迴解法：
```js
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```
|輸入長度 (n) |執行時間 (假設為毫秒)|
| :----------:| :----------------: |
| 1           |1                   |
|10           |1024                |
|20           |1,048,576           |
指數時間的增長非常快。當 n 增加，執行時間呈 2ⁿ 增長，導致非常高的運算量。

### `O(log n)` - 對數時間複雜度
O(log n) 時間複雜度通常出現在每次只處理一半輸入的演算法中。  
二分搜尋（Binary Search）就是一個典型的例子。  
這樣的演算法每次操作會將問題的範圍縮小一半，執行時間增長很慢，即使輸入量很大。
```js
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
```
|輸入長度 (n) |執行時間 (假設為步驟數)|
| :----------:| :------------------: |
|1	          |1                     |
|10	          |4                     |
|100          |7                     |
|1,000        |10                    |
當 n 增長時，O(log n) 演算法的執行時間增長非常慢，是非常高效的。

### `O(n log n)` - 線性對數時間複雜度
O(n log n) 通常出現在排序演算法中，例如合併排序（Merge Sort）和快速排序（Quick Sort）。  
這種複雜度表示，對每個元素都需要進行對數次的處理，所以隨著 n 增長，執行時間會比 O(n) 快，但比 O(n²) 慢。
```js
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) result.push(left.shift());
    else result.push(right.shift());
  }
  return result.concat(left, right);
}
```
|輸入長度 (n) |執行時間 (假設為步驟數)|
| :----------:| :------------------: |
|1            |1                     |
|10           |33                    |
|100          |664                   |
|1,000        |9,966                 |
O(n log n) 是排序演算法的最佳複雜度，隨著 n 增加，執行時間比 O(n²) 的增長更慢。

### `O(n!)` - 階乘時間複雜度
O(n!) 是一種非常高的時間複雜度，通常出現在「排列組合」類問題中，比如「找出所有可能的排列組合」。  
這類演算法隨著輸入量增長，執行時間增長非常快，所以在 n 較大時幾乎無法運行。
```js
function permute(arr) {
  if (arr.length <= 1) return [arr];
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const rest = arr.slice(0, i).concat(arr.slice(i + 1));
    const permutations = permute(rest);
    for (const perm of permutations) {
      result.push([arr[i]].concat(perm));
    }
  }
  return result;
}
```
|輸入長度 (n) |執行時間 (假設為步驟數)|
| :----------:| :------------------: |
|1            |1                     |
|5	          |120                   |
|10	          |3,628,800             |
|15	          |1,307,674,368,000     |
O(n!) 隨著 n 增長呈現階乘速度增長，因此當 n 達到 10 或以上時就已經非常龐大，對效能的要求很高。

## 總結
|時間複雜度  |說明	                           |範例             |
|:---------- | :-----------------------------  |:--------------- |
|O(1)	     |常數時間，與 n 無關	            |直接取出一個元素 |
|O(log n)	 |對數時間，通常是二分法處理        |二分搜尋         |
|O(n)	     |線性時間，遍歷所有元素	        |簡單遍歷陣列     |
|O(n log n)	 |線性對數時間，常見於高效排序演算法|合併排序、快速排序|
|O(n²)	     |平方時間，兩層嵌套迴圈	        |嵌套遍歷所有配對  |
|O(2ⁿ)	     |指數時間，增長非常快	            |遞迴解斐波那契數列|
|O(n!)	     |階乘時間，所有排列組合情況	    |找出所有排列組合  |

這些範例展示了不同時間複雜度如何影響演算法的效率。  
Big O 表示法能幫助我們判斷不同演算法隨著輸入量增長的效率，對優化程式效能至關重要。