var description = GetValueByApiName("TSAProductDescription");
var idAndPrice = GetValueByApiName("TSAProductIdPrice");
var icons = GetValueByApiName("TSAProductIcons");
var info = GetValueByApiName("TSAProductInfo");

var html = `
    


        <div style="display:flex; flex-direction: column; gap: var(--pep-spacing-lg)" ;>
                {{Description}}
                <div>
                    {{ID_Price}}
                </div>
        </div>
        {{Icons}}
        {{Info}}

    `;

var res = html;
res = res.replace("{{Description}}", description);
res = res.replace("{{ID_Price}}", idAndPrice);
res = res.replace("{{Icons}}", icons);
res = res.replace("{{Info}}", info);
return res;