module.exports = function toReadable (number) {
    let numerals = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number == 0) return 'zero';
    if (number < 100) return twoDigit(number);
    if (number < 1000) {
        if (number % 100 == 0) {
            return numerals[Math.trunc(number / 100)] + ' hundred';
        } else {
            return numerals[Math.trunc(number / 100)] + ' hundred ' + twoDigit(number % 100);
        }
    }

    function twoDigit(a) {
        if (a < 20) {
            return numerals[a];
        } else if (a % 10 == 0) {
            return tens[Math.trunc(a / 10)]
        } else {
            return tens[Math.trunc(a / 10)] + ' ' + numerals[a % 10];
        }

    }
}
