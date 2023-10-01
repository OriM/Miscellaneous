var title = GetValueByApiName("TSAProductTitle");
var description = GetValueByApiName("TSAProductDescription");
var idAndPrice = GetValueByApiName("TSAProductIdPrice");


var html = `
        <div>
            {{Title}}
            {{Description}}
            {{ID_Price}}
        </div>
    `;

// var html = title + description + idAndPrice;

var res = html;
res = res.replace("{{Title}}", title);
res = res.replace("{{Description}}", description);
res = res.replace("{{ID_Price}}", idAndPrice);

return res;