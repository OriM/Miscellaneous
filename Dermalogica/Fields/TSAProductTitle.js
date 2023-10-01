var productDescription = GetValueByApiName("");
var html = '<h2 class=".color-user-primary title-4xl">{{ProductName}}</h2>';

var res = html;
res = res.replace("{{ProductName}}", productDescription);
return res;
