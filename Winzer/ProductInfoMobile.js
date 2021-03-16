var description = GetValueByApiName("ItemTSATopTextHTML");
var attributes = GetValueByApiName("TSATopAttributesHTML");
var f_s_d = GetValueByApiName("TSAFeaturesSpecificationsDocuments");

var html = attributes + "</br></br>" + description + f_s_d;
return html;