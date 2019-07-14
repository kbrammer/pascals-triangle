# pascals-triangle
A function to return n lines of Pascal's Triangle.

## Usage

`pascalsTriangle(numberOfRows)`: Return n lines of Pascal's Triangle as a multi-dimensional array.

```js
let triangle = pascalsTriangle(5);
console.log(triangle);

[ [ 1 ],
  [ 1, 1 ],
  [ 1, 2, 1 ],
  [ 1, 3, 3, 1 ],
  [ 1, 4, 6, 4, 1 ],
  [ 1, 5, 10, 10, 5, 1 ] ]
```


`printRightTriangle(triangle, numberOfSpaces, paddingCharacter)`: Format array as a right triangle with equally spaced columns.
```js
let triangle = pascalsTriangle(10);
let str = printRightTriangle(triangle, 2, ' ');
console.log(str);

1
1    1
1    2    1
1    3    3    1
1    4    6    4    1
1    5    10   10   5    1
1    6    15   20   15   6    1
1    7    21   35   35   21   7    1
1    8    28   56   70   56   28   8    1
1    9    36   84   126  126  84   36   9    1
1    10   45   120  210  252  210  120  45   10   1
```

`nChooseK(n,k)`: return the value from any place in Pascal's Triangle using combinations: n choose k( n = row, k = term ). 

```js
// log all values k for row 5
console.log(nChooseK(5,0));
1

console.log(nChooseK(5,1));
5

console.log(nChooseK(5,2));
10

console.log(nChooseK(5,3));
10

console.log(nChooseK(5,4));
5

console.log(nChooseK(5,5));
1
```


`format(triangle, preRow, postRow, preColumn, postColumn)`: wraps individual elements and rows with provided values. 

For example, to create an HTML table:
```js
let triangle = pascalsTriangle(15);
// make all rows the same length, so they have the same number of columns
let nTriangle = normalizeRows(triangle,'');
let html = [];
html.push('<table>');
html.push('<tbody>');
html.push(format(nTriangle, '<tr>', '</tr>', '<td>', '</td>'));
html.push('</tbody>');
html.push('</table>');
console.log(html.join('\n'));
```

<table>
<tbody>
<tr><td>1</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>1</td><td>1</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>1</td><td>2</td><td>1</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>1</td><td>3</td><td>3</td><td>1</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>1</td><td>4</td><td>6</td><td>4</td><td>1</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>1</td><td>5</td><td>10</td><td>10</td><td>5</td><td>1</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>1</td><td>6</td><td>15</td><td>20</td><td>15</td><td>6</td><td>1</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>1</td><td>7</td><td>21</td><td>35</td><td>35</td><td>21</td><td>7</td><td>1</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>1</td><td>8</td><td>28</td><td>56</td><td>70</td><td>56</td><td>28</td><td>8</td><td>1</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>1</td><td>9</td><td>36</td><td>84</td><td>126</td><td>126</td><td>84</td><td>36</td><td>9</td><td>1</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>1</td><td>10</td><td>45</td><td>120</td><td>210</td><td>252</td><td>210</td><td>120</td><td>45</td><td>10</td><td>1</td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>1</td><td>11</td><td>55</td><td>165</td><td>330</td><td>462</td><td>462</td><td>330</td><td>165</td><td>55</td><td>11</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>1</td><td>12</td><td>66</td><td>220</td><td>495</td><td>792</td><td>924</td><td>792</td><td>495</td><td>220</td><td>66</td><td>12</td><td>1</td><td></td><td></td><td></td></tr>
<tr><td>1</td><td>13</td><td>78</td><td>286</td><td>715</td><td>1287</td><td>1716</td><td>1716</td><td>1287</td><td>715</td><td>286</td><td>78</td><td>13</td><td>1</td><td></td><td></td></tr>
<tr><td>1</td><td>14</td><td>91</td><td>364</td><td>1001</td><td>2002</td><td>3003</td><td>3432</td><td>3003</td><td>2002</td><td>1001</td><td>364</td><td>91</td><td>14</td><td>1</td><td></td></tr>
<tr><td>1</td><td>15</td><td>105</td><td>455</td><td>1365</td><td>3003</td><td>5005</td><td>6435</td><td>6435</td><td>5005</td><td>3003</td><td>1365</td><td>455</td><td>105</td><td>15</td><td>1</td></tr>
</tbody>
</table>
