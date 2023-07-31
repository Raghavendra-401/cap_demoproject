const cds = require('@sap/cds');
const common = require('./lib/common');
const { Books } = cds.entities("my.bookshop");

module.exports = cds.service.impl(async function () {

  this.on("getTotalCount", async function () {
    let totalStock = await common.getBooksCount();
    console.log(`Total Books Count is ${totalStock}`);
    return `Total Books Count is ${totalStock}`;
  });

  this.on("getBooksCsvData", async req => {
    let csvData = await common.data2csv(req.data.ID);
    return csvData;
  });

  this.on("READ", "SFPersonal", async (req) => {
    try {
      const sfExternalAPI = await cds.connect.to('ECPersonalInformation');
      let extData = await sfExternalAPI.tx(req).send({
        query: req.query,
        headers: {
          APIKey: process.env.APIKey,
        },
      });
      return extData;
    } catch (error) {
      req.error('500', error);
    }
  });

  this.on("READ", "Customers", async (req, res) => {
    try {
      const northwindDest = await cds.connect.to('Northwind');

      let customers = await northwindDest.send({
        query: req.query
      });
      return customers;
    } catch (error) {
      req.error('500', error);
    }
  });
});