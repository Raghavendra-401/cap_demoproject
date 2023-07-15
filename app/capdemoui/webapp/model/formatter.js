sap.ui.define(function () {
    return {
          reviewStatus: function (review) {
                 if (review == "Excellent") {
                       return sap.ui.core.ValueState.Success;
                  } else {
                        return sap.ui.core.ValueState.Error;
                }
           }
   };
});