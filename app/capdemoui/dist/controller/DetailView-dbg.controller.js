sap.ui.define([
    'sap/ui/core/mvc/Controller',
], function (Controller) {
    'use strict';
    return Controller.extend("cap.demo.capdemoui.controller.DetailView", {
        onInit: function () {
             var oRouter = this.getOwnerComponent().getRouter();
             oRouter.getRoute("DetailView").attachPatternMatched(this._onObjectMatched,this);
        },
        _onObjectMatched : function(oEvent){
            var sID = oEvent.getParameters().arguments.ID;
            this.getView().bindElement("/Books(ID='"+sID+"')");
        }
    });
});