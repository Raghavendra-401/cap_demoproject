const cds = require('@sap/cds');
const common = require('./lib/common');
const { Books } = cds.entities("my.bookshop");

module.exports = cds.service.impl(async function () {
    this.on("getTotalCount", async function () {
        let totalStock = await common.getBooksCount();
        console.log(`Total Books Count is ${totalStock}`);
        return `Total Books Count is ${totalStock}`;
    });

    this.on("getBooksCsvData", async function () {
        let csvData = await common.data2csv();
        return csvData;
    });
});