var title = GetValueByApiName("TSAProductInfoTitle");
var content = GetValueByApiName("TSAProductInfoContent");

var html = `
            ???
    `;

// var html = title + description + idAndPrice;

var res = html;
res = res.replace("{{Title}}", title);
res = res.replace("{{Content}}", content);

return res;