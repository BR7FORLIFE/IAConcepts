type Matrix = number[][];

export function sumMatrix(matrix1: Matrix, matrix2: Matrix): Matrix {
    let result: Matrix = [];

    for (let i = 0; i < matrix1.length; i++) {
        let row: number[] = []
        for (let j = 0; j < matrix1[i].length; j++) {
            row.push(matrix1[i][j] + matrix2[i][j])
        }
        result.push(row)
    }

    return result;
}

console.log(
    sumMatrix(
        [   
            [1, 2],
            [3, 4],
        ],
        [
            [5, 6],
            [7, 8],
        ]
    )
);
