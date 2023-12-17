var title = GetValueByApiName("TSAProductTitle");
var description = GetValueByApiName("TSAProductDescription");
var idAndPrice = GetValueByApiName("TSAProductIdPrice");


var html = `
            <div style="display:flex; flex-direction: column; gap: var(--pep-spacing-lg)" ;>
                {{Title}}
                {{Description}}
                <div>
                    {{ID_Price}}
                </div>
            </div>
    `;

// var html = title + description + idAndPrice;

var res = html;
res = res.replace("{{Title}}", title);
res = res.replace("{{Description}}", description);
res = res.replace("{{ID_Price}}", idAndPrice);

return res;