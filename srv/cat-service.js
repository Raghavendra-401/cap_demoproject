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

  this.on("READ", "SFPersonal", async (req) => {
    const sfExternalAPI = await cds.connect.to('ECPersonalInformation');

    let extData = await sfExternalAPI.tx(req).send({
      query: req.query,
      headers: {
        APIKey: process.env.APIKey,
      },
    });
    return extData;
  });

  this.on("READ", "PersonDetails", async (req, res) => {
    const northwindDest = await cds.connect.to('Northwind');

    let personDetails = await northwindDest.send({
      query: req.query
    });
  });

});