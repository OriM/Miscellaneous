var title = GetValueByApiName("TSAProductTitle");
var description = GetValueByApiName("TSAProductDescription");
var idAndPrice = GetValueByApiName("TSAProductsIdPrice");

var html = title + description + idAndPrice;
return html;