var title = GetValueByApiName("TSAProductInfoTitle");
var content = GetValueByApiName("TSAProductInfoContent");

var html = `
            <div style="display:flex; flex-direction: column; gap: var(--pep-spacing-lg)" ;>
                {{Title}}
                {{Content}}
            </div>
    `;

// var html = title + description + idAndPrice;

var res = html;
res = res.replace("{{Title}}", title);
res = res.replace("{{Content}}", content);

return res;