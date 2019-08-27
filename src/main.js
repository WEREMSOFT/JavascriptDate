console.log('%cinit...', 'background: #000000; color: #ff0000');

var reISO = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/;
var reMsAjax = /^\/Date\((d|-|.*)\)[\/|\\]$/;

function dateParser(key, value) {
    if (typeof value === 'string') {
        var a = reISO.exec(value);
        if (a)
            return new Date(value);
        a = reMsAjax.exec(value);
        if (a) {
            var b = a[1].split(/[-+,.]/);
            return new Date(b[0] ? +b[0] : 0 - +b[1]);
        }
    }
    return value;
};


let objWithDates = {
    name: 'Pablo',
    lastName: 'Weremczuk',
    fromDate: new Date('2014-01-01T23:28:56.782Z'),
    toDate: new Date('2014-01-03T23:28:56.782Z')
}

let jsonWithDates = JSON.stringify(objWithDates);
let rebuiltObjWithDates = JSON.parse(jsonWithDates, dateParser);

console.log(objWithDates);
// console.log(jsonWithDates);
console.log(rebuiltObjWithDates);
