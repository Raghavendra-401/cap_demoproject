sap.ui.define([
    'sap/ui/core/mvc/Controller',
], function (Controller) {
    'use strict';
    return Controller.extend("cap.demo.capdemoui.controller.DetailView", {
        onInit: function () {
            var oDataModel = new sap.ui.model.json.JSONModel({
                "editButton" : true,
                "saveButton" : false
            });
            this.getView().setModel(oDataModel,"oDataModel");
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("DetailView").attachPatternMatched(this._onObjectMatched,this);
        },
        _onObjectMatched : function(oEvent){
            var sID = oEvent.getParameters().arguments.ID;
            this.getView().bindElement("/Books(ID='"+sID+"')");
        },
        onEdit : function(oEvent){
            this.byId("pageDetail").removeAllContent();
            if(!this._editFragment){
                this._editFragment = sap.ui.xmlfragment("cap.demo.capdemoui.fragments.editfragment",this);
                this.getView().addDependent(this._editFragment);
            }
            this.byId("pageDetail").addContent(this._editFragment);
            
            this.getView().getModel("oDataModel").getData().editButton = false;
            this.getView().getModel("oDataModel").getData().saveButton = true;
            this.getView().getModel("oDataModel").refresh(true);
        },
        onSave : function(oEvent){
            if(this.getView().getModel().getPendingChanges()){
                 var oModel = this.getOwnerComponent().getModel();
                 oModel.submitChanges({
                    success : function(res){

                    },error : function(res){

                    }
                 }
                 );
            }
            this.getView().getModel("oDataModel").getData().editButton = true;
            this.getView().getModel("oDataModel").getData().saveButton = false;
            this.getView().getModel("oDataModel").refresh(true);

            this.byId("pageDetail").removeAllContent();
            if(!this._displayFragment){
                this._displayFragment = sap.ui.xmlfragment("cap.demo.capdemoui.fragments.display",this);
                this.getView().addDependent(this._displayFragment);
            }else{
                this._displayFragment.destroy();
                this._displayFragment = sap.ui.xmlfragment("cap.demo.capdemoui.fragments.display",this);
                this.getView().addDependent(this._displayFragment);
            }
            this.byId("pageDetail").addContent(this._displayFragment);
        }
    });
});