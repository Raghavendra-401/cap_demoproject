sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("cap.demo.capdemoui.controller.View1", {
            onInit: function () {

            },
            onNavigationPress: function (oEvent) {
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("DetailView",{ID :oEvent.getSource().getBindingContext().getObject().ID});
            }
        });
    });
