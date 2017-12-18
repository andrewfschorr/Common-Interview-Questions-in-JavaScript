/*
 * Time: N^2
 */
function rotateMatrix(mtx) {
    const height = mtx.length - 1;
    const width = mtx[0].length - 1;
    for (let i = 0; i < mtx.length / 2; i++) {
        for (let j = i; j < mtx.length - i - 1; j++) {
            let tmp = mtx[i][j];
            mtx[i][j] = mtx[height - j][i];
            mtx[height - j][i] = mtx[height - i][width - j];
            mtx[height - i][width - j] = mtx[j][width - i];
            mtx[j][width - i] = tmp;
        }
    }
    return mtx;
}

module.exports = rotateMatrix;