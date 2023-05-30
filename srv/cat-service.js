const cds = require('@sap/cds');

module.exports = cds.service.impl(async function(){
    this.after('READ','Books',req => {
        req.forEach(ID => {
            if(ID.stock >= 200){
                ID.status = 3;
            }else{
                ID.status = 2;
            }
        });;
    })
});