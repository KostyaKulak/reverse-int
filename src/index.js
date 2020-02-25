module.exports = function reverse(n) {
    var a = Math.abs(n), i = (Math.log(a) * Math.LOG10E + 1 | 0) - 1, res = 0;
    while (a != 0) {
        res += a % 10 * Math.pow(10, i);
        a = a / 10 >> 0;
        i--;
    }
    return res
}
