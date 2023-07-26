const cds = require('@sap/cds');
const common = require('./lib/common');
const { Books } = cds.entities("my.bookshop");

module.exports = cds.service.impl(async function (srv) {
    const { PerPersonal } = srv.entities;
    const extAPI = await cds.connect.to("ECpersonalInformation");

    srv.on("READ", PerPersonal, async (req) => {

        /*
        let PerPersonalQuery = SELECT.from(req.query.SELECT.from).limit(
          req.query.SELECT.limit
        );
        if (req.query.SELECT.where) {
          PerPersonalQuery.where(req.query.SELECT.where);
        }
        if (req.query.SELECT.orderBy) {
          PerPersonalQuery.orderBy(req.query.SELECT.orderBy);
        }
        */

        let extData = await extAPI.tx(req).send({
          query: req.query,
          headers: {
            APIKey: process.env.APIKey,
          },
        });
        return extData;
      });

    srv.on("getTotalCount", async function () {
        let totalStock = await common.getBooksCount();
        console.log(`Total Books Count is ${totalStock}`);
        return `Total Books Count is ${totalStock}`;
    });

    srv.on("getBooksCsvData", async function () {
        let csvData = await common.data2csv();
        return csvData;
    });


});