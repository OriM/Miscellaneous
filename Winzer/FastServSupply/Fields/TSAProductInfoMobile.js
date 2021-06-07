var description = GetValueByApiName("ItemTSATopTextHTML");
var attributes = GetValueByApiName("TSATopAttributesHTML");
var f_s_d = GetValueByApiName("TSAFeaturesSpecificationsDocuments");

var html = attributes + description + f_s_d;
return html;