//binomial coefficient, indexed by n and k
function binomialCoefficient(n, k) {
    if (k < 0 || k > n) {
        return 0;
    } else if (k === 0 || k === n) {
        return 1;
    } else {
        var c = 1;
        for (var x = 0; x < k; x++) {
            c = c * (n - x) / (x + 1);
        }
        return c;
    }
}

function pascalsTriangle(rowCount) {
    // enumerated rows, starting with 0 
    for (var n = 0; n <= rowCount; n++) {
        var row = [];
        // columns in each row, numbered from the left starting with 0 
        for (var k = 0; k <= n; k++) {
            // binomial coefficient for nth row, kth column
            var c = binomialCoefficient(n, k);
            row.push(c);
        }
        console.log(row.join(' '));
    }
}
