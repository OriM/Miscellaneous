var productDescription = GetValueByApiName("ItemName");
var html = '<h2 style="font-family: Helvetica !important;" class="color-user-primary title-4xl">{{ProductName}}</h2>';

var res = html;
res = res.replace("{{ProductName}}", productDescription);
return res;
