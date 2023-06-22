const cds = require('@sap/cds');

module.exports = cds.service.impl(async function(){
    this.after('READ','Books',req => {
        for(var i=0;i<req.length;i++){
            if(req[i].stock <= 250){
                req[i].status = 1;
            }else{
                req[i].status = 3;
            }
        }
    })
});