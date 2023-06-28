const cds = require('@sap/cds');
const { Books } = cds.entities("my.bookshop");

module.exports = cds.service.impl(async function () {
    this.on("getTotalCount", async function () {
        let totalStock = 0;
        await cds.run(SELECT.from(Books)).then((res, rej) => {
            for (var i = 0; i < res.length; i++) {
                totalStock += res[i].stock;
            }
        }).catch((err) => {

        });
        console.log("total Books Count is " + totalStock);
        return `Total Books Count is ` + totalStock;
    });
});