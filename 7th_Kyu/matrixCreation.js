/*
Create an identity matrix of the specified size ( >= 0 ).

Some examples:

(1)  =>  [[1]]

(2) => [ [1,0],
         [0,1] ]

       [ [1,0,0,0,0],
         [0,1,0,0,0],
(5) =>   [0,0,1,0,0],
         [0,0,0,1,0],
         [0,0,0,0,1] ]   

*/

function getMatrix(number) {
  let tempArr = Array.from({ length: number }, () => Array(number).fill(0));

  for (let i = 0; i < tempArr.length; i++) {
    tempArr[i][i] = 1;
  }

  return tempArr;
}

console.log(getMatrix(1)); // [ [1] ]
console.log(getMatrix(2)); // [ [1,0], [0,1] ]
console.log(getMatrix(5)); /* [
    [ 1, 0, 0, 0, 0 ],
    [ 0, 1, 0, 0, 0 ],
    [ 0, 0, 1, 0, 0 ],
    [ 0, 0, 0, 1, 0 ],
    [ 0, 0, 0, 0, 1 ]
]

*/
