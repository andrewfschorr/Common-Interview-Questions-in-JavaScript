/*
 * Time: MN (MSN * 2)
 * Space : M + N
 * Alternate pace: N(1) - since we're using the first row and col as DS to store zero locations
 */
function zeroMatrix(m) {
    const colZeros = [];
    const rowZeros = [];
    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m[i].length; j++) {
            if (m[i][j] === 0) {
                rowZeros[i] = true;
                colZeros[j] = true;;
            }
        }
    }
    for (let i = 0; i < rowZeros.length; i++) {
        if (rowZeros[i]) {
            nullifyRow(i, m);
        }
    }
    for (let i = 0; i < colZeros.length; i++) {
        if (colZeros[i]) {
            nullifyCol(i, m);
        }
    }
    return m;
}

function nullifyRow(rowI, m) {
    const row = m[rowI];
    for(let i = 0; i < row.length; i++) {
        row[i] = 0;
    }
}

function nullifyCol(colI, m) {
    for (let i = 0; i < m.length; i++) {
        m[i][colI] = 0;
    }
}

module.exports = zeroMatrix;