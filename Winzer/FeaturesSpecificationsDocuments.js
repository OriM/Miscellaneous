var features = GetValueByApiName("ItemTSAFeaturesHTML");
var specifications = GetValueByApiName("ItemTSASpecificationsHTML");
var safetyDS = GetValueByApiName("ItemTSASDSText");
var techDS = GetValueByApiName("ItemTSATechSheetText");
var documents = "";
var html = "";

if (features != "") {
  html += "<h2 class ='LowerHeader'>Features</h2>" + features + "</ul>";
}
if (specifications != "") {
  html += "<h2 class ='LowerHeader'>Specifications</h2>" + specifications + "</ul>";
}

if (safetyDS != "") {
  documents += "<li><a href='" + safetyDS + "'>Safety Data Sheet</a></li>";
}
if (techDS != "") {
  documents += "<li><a href='" + techDS + "'>Tech Sheet</a></li>";
}
if (documents != "") {
  html += "<h2 class ='LowerHeader'>Documents</h2>" + "<ul>" + documents + "</ul>";
}

var res = html;
return res;