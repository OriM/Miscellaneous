(function() {
    
 
    var pepItemDetails = {  
		    __proto__: window.pepComponents,        
		    itemUUID: null,            
            elSearch : 	null,            
            elMenu : null,
            elForm: null, 
			elSizeDetect: null,			
		
            init(){ 	
					 super.init({ 
					 	objectName: pepItemDetails, components: [
					 		{propName:'elSearch', htmName:'pep-web-search', events: [{eventName:'stateChange',eventCallback: window.PepOpenCatalogUtils.changeTopbarElements}, {eventName:'search', eventCallback:pepItemDetails.search}]},
							{ propName:'elMenu', htmName:'pep-web-menu', events: [{eventName:'menuItemClick' ,eventCallback:pepItemDetails.menuClick }]},
							{ propName:'elSizeDetect', htmName:'pep-size-detect', events: [{eventName: 'sizeChange',eventCallback: pepItemDetails.setScreenSize}]},
						    { propName:'elForm', htmName:'pep-web-form',  events: null}
				            ]
				 		  });	
				
    			this.itemUUID = PepOpenCatalogUtils.getQueryParameterByName("uuid");
				this.screenSize = this.elSizeDetect.getCurrentSize().name;		
				if(this.itemUUID != null && this.itemUUID != ''){					
                	this.getItemDetails(pepItemDetails.getItemDetailsCallback, this.itemUUID);   
				}				
				pepItemDetails.initComponents();
            },	           

            initComponents(){            
                
				PepOpenCatalogUtils.setScreenSize(this.elSizeDetect.getCurrentSize().name);				
				super.initComponents({Object_name:pepItemDetails , components:[{componentName:'pep-web-menu', iconName:'arrow_down', type:'action-select', styleType: 'regular'}]});       
				var selectedCategory = JSON.parse(window.sessionStorage.getItem("ItemsParams"));													
                pepItemDetails.elMenu.selectedItem = selectedCategory == null ? {children: [], key: "", path: [""], text: "Categories"}  : selectedCategory.CategoryUUID;    										
				/*
				var control = PepOpenCatalogUtils.getControlByScreenSize(pepItemDetails.output.data_configuration.DataViews,"OrderCenterItemDetails", pepItemDetails.screenSize),
		            res = PepOpenCatalogUtils.dataConvertor(control,{Products : [pepItemDetails.output.data]});				
				this.elForm.layout = res.data_view;            									                				                
				this.elForm.data = res.data[0];						
				this.elForm.canEditObject = false;
				*/
            },        
        
         getItemDetails(callback, itemUUID){                			 			 
			  PepOpenCatalogUtils.pepApiCall([ 
		 {pep_url:pepItemDetails.papiApiDomain + '/open_catalog/items/' + itemUUID, pep_data_url: {}, pep_request_type: 'GET', pep_request_callback:callback, pep_request_headers: function (xhr) {
                                        xhr.setRequestHeader('Authorization', 'Bearer ' + pepItemDetails.pepperi_token)}
		 }], 'pep-open-catalog');  
                
         },
		
		buidlForm(){
			var control = PepOpenCatalogUtils.getControlByScreenSize(pepItemDetails.output.data_configuration.DataViews,"OrderCenterItemDetails", pepItemDetails.screenSize),
		            res = PepOpenCatalogUtils.dataConvertor(control,{Products : [pepItemDetails.output.data]});				
			pepItemDetails.elForm.layoutType = 'form';
			pepItemDetails.elForm.layout = res.data_view;            									                				                
			pepItemDetails.elForm.data = res.data[0];						
			pepItemDetails.elForm.canEditObject = false;
		},
		
		search(event){
			if(event.detail.value == '')							  																				
				return;						
			pepItemDetails.elSearch.value = event.detail.value;  
			window.sessionStorage.setItem("ItemsParams",  JSON.stringify({CategoryUUID: {children: [],key: "",path: [],text: "Categories"}, search_string: event.detail.value}));
			window.location.href =  pepItemDetails.output.pluginSettings.pages.pep_opencatalog_page_url; 
		},
        
		menuClick(event){
			if(pepItemDetails.output.pluginSettings.pages.pep_categories_behavior !== 'all_categories' && event.detail.source.children.length > 0)								   									return;
			pepItemDetails.elMenu.selectedItem = event.detail.source;	                                            
			window.sessionStorage.setItem("ItemsParams",  JSON.stringify({CategoryUUID: pepItemDetails.elMenu.selectedItem, search_string: ''}));
			window.location.href =  pepItemDetails.output.pluginSettings.pages.pep_opencatalog_page_url; 	
		},
		
		setScreenSize(event){
				PepOpenCatalogUtils.setScreenSize(event.detail.name);	
		},
		
        getItemDetailsCallback(data)	{	
            pepItemDetails.output.data = data;
			pepItemDetails.buidlForm();
           //pepItemDetails.initComponents();
        },    	
        
        getTokenCallback(data){               
             if(data.success){
                    pepItemDetails.output.pluginSettings = PepOpenCatalogUtils.getPluginSettings();
                    pepItemDetails.output.data = JSON.parse(data.output);                                                             
				 	pepItemDetails.pepperi_token = data.token.access_token; 
                    pepItemDetails.output.data_configuration = data.configuation;                            
	    		  	window.sessionStorage.setItem("pep_config",  JSON.stringify({pepperi_token: pepItemDetails.pepperi_token , output: pepItemDetails.output}));
					pepItemDetails.init();				
                }
                else{
                    //todo
                    var result = confirm( data.error.message + " .Click Ok to reload or Cancel to Continue." );
					if ( result ) {
					   window.location.reload();
					} 
                }
         },
     
    };    	
	
    // leak into global namespace
    window.pepItemDetails = pepItemDetails;
	window.pepItemDetails.start(window.pepItemDetails);	
    
    })();