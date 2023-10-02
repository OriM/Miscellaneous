var productDescription = GetValueByApiName("ItemTSAShortDescription");
var html = '<p style="font-family: Helvetica !important" class="body-md color-dimmed">{{ProductDescription}}</p>';

var res = html;
res = res.replace("{{ProductDescription}}", productDescription);
return res;
