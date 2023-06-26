//@ui5-bundle cap/demo/capdemoui/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"cap/demo/capdemoui/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","cap/demo/capdemoui/model/models"],function(e,i,t){"use strict";return e.extend("cap.demo.capdemoui.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(t.createDeviceModel(),"device")}})});
},
	"cap/demo/capdemoui/controller/App.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("cap.demo.capdemoui.controller.App",{onInit(){}})});
},
	"cap/demo/capdemoui/controller/DetailView.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("cap.demo.capdemoui.controller.DetailView",{onInit:function(){var e=new sap.ui.model.json.JSONModel({editButton:true,saveButton:false});this.getView().setModel(e,"oDataModel");var t=this.getOwnerComponent().getRouter();t.getRoute("DetailView").attachPatternMatched(this._onObjectMatched,this)},_onObjectMatched:function(e){var t=e.getParameters().arguments.ID;this.getView().bindElement("/Books(ID='"+t+"')")},onEdit:function(e){this.byId("pageDetail").removeAllContent();if(!this._editFragment){this._editFragment=sap.ui.xmlfragment("cap.demo.capdemoui.fragments.editfragment",this);this.getView().addDependent(this._editFragment)}this.byId("pageDetail").addContent(this._editFragment);this.getView().getModel("oDataModel").getData().editButton=false;this.getView().getModel("oDataModel").getData().saveButton=true;this.getView().getModel("oDataModel").refresh(true)},onSave:function(e){if(this.getView().getModel().getPendingChanges()){var t=this.getOwnerComponent().getModel();t.submitChanges({success:function(e){},error:function(e){}})}this.getView().getModel("oDataModel").getData().editButton=true;this.getView().getModel("oDataModel").getData().saveButton=false;this.getView().getModel("oDataModel").refresh(true);this.byId("pageDetail").removeAllContent();if(!this._displayFragment){this._displayFragment=sap.ui.xmlfragment("cap.demo.capdemoui.fragments.display",this);this.getView().addDependent(this._displayFragment)}else{this._displayFragment.destroy();this._displayFragment=sap.ui.xmlfragment("cap.demo.capdemoui.fragments.display",this);this.getView().addDependent(this._displayFragment)}this.byId("pageDetail").addContent(this._displayFragment)}})});
},
	"cap/demo/capdemoui/controller/View1.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("cap.demo.capdemoui.controller.View1",{onInit:function(){},onNavigationPress:function(e){var t=this.getOwnerComponent().getRouter();t.navTo("DetailView",{ID:e.getSource().getBindingContext().getObject().ID})}})});
},
	"cap/demo/capdemoui/fragments/display.fragment.xml":'<core:FragmentDefinition xmlns="sap.m"\n\txmlns:l="sap.ui.layout"\n\txmlns:f="sap.ui.layout.form"\n\txmlns:core="sap.ui.core"><VBox class="sapUiSmallMargin"><f:SimpleForm id="displaySimpleform" editable="false" layout="ResponsiveGridLayout" title="Book Details" labelSpanXL="4" labelSpanL="3" labelSpanM="4" labelSpanS="12" adjustLabelSpan="false" emptySpanXL="0" emptySpanL="4" emptySpanM="0" emptySpanS="0" columnsXL="2" columnsL="1" columnsM="1" singleContainerFullSize="false"><f:content><Label id="_IDGenLabel1" text="ID"/><Text id="_IDGenText1" text="{ID}"/><Label id="_IDGenLabel2" text="Title"/><Text id="_IDGenText2" text="{title}"/><Label id="_IDGenLabel3" text="Author"/><Text id="_IDGenText3" text="{author}"/><Label id="_IDGenLabel4" text="Price"/><Text id="_IDGenText4" text="{price}"/></f:content></f:SimpleForm></VBox></core:FragmentDefinition>',
	"cap/demo/capdemoui/fragments/editfragment.fragment.xml":'<core:FragmentDefinition xmlns="sap.m"\n    xmlns:core="sap.ui.core"\n    xmlns:l="sap.ui.layout"\n    xmlns:f="sap.ui.layout.form"><VBox class="sapUiSmallMargin"><f:SimpleForm id="idEditForm" editable="true" layout="ResponsiveGridLayout" title="Book Details" labelSpanXL="3" labelSpanL="3" labelSpanM="3" labelSpanS="12" adjustLabelSpan="false" emptySpanXL="4" emptySpanL="4" emptySpanM="4" emptySpanS="0" columnsXL="1" columnsL="1" columnsM="1" singleContainerFullSize="false"><f:content><Label  text="ID"/><Input  value="{ID}" editable="{oDataModel>/saveButton}"/><Label  text="Title"/><Input  value="{title}" editable="{oDataModel>/saveButton}"/><Label  text="Author"/><Input  value="{author}" editable="{oDataModel>/saveButton}"/><Label  text="Price"/><Input  value="{price}" editable="{oDataModel>/saveButton}"/></f:content></f:SimpleForm></VBox></core:FragmentDefinition>',
	"cap/demo/capdemoui/i18n/i18n.properties":'# This is the resource bundle for cap.demo.capdemoui\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=CAP Demo\n\n#YDES: Application description\nappDescription=A Simple CAPM Application.\n#XTIT: Main view title\ntitle=CAP Demo\nappSubTitle=Simple CAPM Application',
	"cap/demo/capdemoui/manifest.json":'{"_version":"1.49.0","sap.app":{"id":"cap.demo.capdemoui","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.9.7","toolsId":"c140ffd2-daa6-4197-853d-d4912f0f5059"},"dataSources":{"mainService":{"uri":"v2/catalog/","type":"OData","settings":{"annotations":[],"localUri":"localService/metadata.xml","odataVersion":"2.0"}}},"crossNavigation":{"inbounds":{"intent1":{"signature":{"parameters":{},"additionalParameters":"allowed"},"semanticObject":"Books","action":"display","title":"{{appTitle}}","info":"{{appTitle}}","subTitle":"{{appSubTitle}}","icon":"sap-icon://visits"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.114.0","libs":{"sap.m":{},"sap.ui.core":{},"sap.f":{},"sap.suite.ui.generic.template":{},"sap.ui.comp":{},"sap.ui.generic.app":{},"sap.ui.table":{},"sap.ushell":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"cap.demo.capdemoui.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true,"defaultBindingMode":"TwoWay"}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"cap.demo.capdemoui.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteView1","pattern":":?query:","target":["TargetView1"]},{"name":"DetailView","pattern":"DetailView/{ID}","target":"TargetView2"}],"targets":{"TargetView1":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"View1","viewName":"View1"},"TargetView2":{"viewType":"XML","viewId":"View2","viewName":"DetailView","transition":"slide","clearControlAggregation":false}}},"rootView":{"viewName":"cap.demo.capdemoui.view.App","type":"XML","async":true,"id":"App"}},"sap.cloud":{"public":true,"service":"capdemo_approuter"}}',
	"cap/demo/capdemoui/model/models.js":function(){sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"cap/demo/capdemoui/view/App.view.xml":'<mvc:View controllerName="cap.demo.capdemoui.controller.App"\n    xmlns:html="http://www.w3.org/1999/xhtml"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><App id="app"></App></mvc:View>\n',
	"cap/demo/capdemoui/view/DetailView.view.xml":'<mvc:View controllerName="cap.demo.capdemoui.controller.DetailView"\n    xmlns:mvc="sap.ui.core.mvc"\n    xmlns="sap.m"\n    xmlns:core="sap.ui.core" displayBlock="true"><Page id="pageDetail" title="Details"><content><core:Fragment id="displayFragment" fragmentName="cap.demo.capdemoui.fragments.display" type="XML"/></content><footer><Toolbar><ToolbarSpacer/><Button text="Edit" press="onEdit" visible="{oDataModel>/editButton}"/><Button text="Save" press="onSave" visible="{oDataModel>/saveButton}"/></Toolbar></footer></Page></mvc:View>',
	"cap/demo/capdemoui/view/View1.view.xml":'<mvc:View controllerName="cap.demo.capdemoui.controller.View1"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"\n    xmlns:smartFilterBar="sap.ui.comp.smartfilterbar"\n    xmlns:smartTable="sap.ui.comp.smarttable"\n    xmlns:html="http://www.w3.org/1999/xhtml"><Page id="page" title="{i18n>title}"><content ><smartFilterBar:SmartFilterBar id="smartFilterBar" entitySet="Books" persistencyKey="SmartFilter_Explored"/><smartTable:SmartTable id="_IDGenSmartTable1" entitySet="Books" smartFilterId="smartFilterBar" tableType="ResponsiveTable" useExportToExcel="true" beforeExport="onBeforeExport" useVariantManagement="true" useTablePersonalisation="true" header="Books" showRowCount="true" persistencyKey="SmartTableAnalytical_Explored" enableAutoBinding="true" demandPopin="true" class="sapUiResponsiveContentPadding" enableAutoColumnWidth="true" editTogglable="true"><Table id="_IDGenTable1"><ColumnListItem id="_IDGenColumnListItem1" type="Navigation" press="onNavigationPress"/></Table></smartTable:SmartTable></content></Page></mvc:View>\n'
}});
