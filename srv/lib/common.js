const cds = require('@sap/cds');
const json2Csv = require('json-2-csv');
const { Books } = cds.entities("my.bookshop");

async function data2csv(ID) {
    let jsonData = await cds.run(SELECT.from(Books).where`ID=${ID}`);
    const csvData = json2Csv.json2csv(jsonData, { keys: ['ID', 'title', 'author', 'price', 'review', 'stock'] });
    return csvData;
}

async function getBooksCount() {
    let totalStock = 0;
    await cds.run(SELECT.from(Books)).then((res, rej) => {
        for (var i = 0; i < res.length; i++) {
            totalStock += res[i].stock;
        }
    }).catch((err) => {
        console.log(err);
    });
    return totalStock;
}

module.exports = { data2csv, getBooksCount };