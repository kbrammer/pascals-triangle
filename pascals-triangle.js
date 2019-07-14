const factorial = (n) => {
    let result = n * 1;
    let i = n - 1;
    while (i > 0) {
        result = result * i;
        i--;
    }
    return result;
};

const sum = (arr) => {
    return arr.reduce((acc, a) => { return acc + a }, 0);
};


//binomial coefficient, indexed by n and k
const binomialCoefficient = (n, k) => {
    if (k < 0 || k > n) {
        return 0;
    } else if (k === 0 || k === n) {
        return 1;
    } else {
        let c = 1;
        for (let x = 0; x < k; x++) {
            c = c * (n - x) / (x + 1);
        }
        return c;
    }
};

// get a value from any place in the triangle using combinations: n choose k( n = row, k = term )
const nChooseK = (n, k) => {
    if (k < 0 || k > n) {
        return 0;
    } else if (k === 0 || k === n) {
        return 1;
    } else {
        return factorial(n) / (factorial(k) * factorial(n - k));
    }
};

// return n lines of Pascal's Triangle as a multi-dimensional array
const pascalsTriangle = (rowCount) => {
    let results = [];
    for (let n = 0; n <= rowCount; n++) {
        let row = [];
        for (let k = 0; k <= n; k++) {
            let c = binomialCoefficient(n, k);
            row.push(c);
        }
        results.push(row);
    }
    return results;
};

// format array as a right triangle with equally spaced columns 
const printRightTriangle = (t, padCount, padValue) => {
    let rowCount = t.length - 1;
    // let maxValue = nChooseK(rowCount, Math.round(rowCount / 2));
    let maxValue = t[rowCount][Math.round(rowCount / 2)];
    let maxWidth = maxValue.toString().length + padCount + 1;
    return t.map((n) => {
        return n.map((c) => {
            let padResult = c.toString();
            if (padResult.length < maxWidth) {
                let count = maxWidth - padResult.length;
                for (let j = 1; j < count; j++) {
                    padResult = `${padResult}${padValue}`;
                }
            }
            return padResult;
        })
            .join('');
    }).join('\n');
};

// wraps each value and each row with provided values and returns a string
const format = (t, preRow, postRow, preCol, postCol) => {
    return t.map((n) => {
        return `${preRow}${n.map((k) => {
            return `${preCol}${k}${postCol}`;
        }).join('')}${postRow}`;
    }).join('\n');
};


// adds empty values as needed to make all rows the same length
let normalizeRows = (t, emptyValue) => {
    let maxRowLength = t[t.length - 1].length;
    return t.map((n) => {
        let nlen = n.length;
        if (nlen < maxRowLength) {
            for (let i = 0; i < (maxRowLength - nlen); i++) {
                n.push(emptyValue);
            };
        }
        return n;
    });
}
