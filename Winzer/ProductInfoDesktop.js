var title = GetValueByApiName("TSAProductTitle");
var attributes = GetValueByApiName("TSATopAttributesHTML");
var description = GetValueByApiName("ItemTSATopTextHTML");
var f_s_d = GetValueByApiName("TSAFeaturesSpecificationsDocuments");

var html = title + "</br></br>" + description + "</br></br>" + attributes + f_s_d;
return html;