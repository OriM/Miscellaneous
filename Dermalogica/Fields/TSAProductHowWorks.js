var howWorksTitle = GetValueByApiName("");
var howWorksDescription = GetValueByApiName("");

var html = `
            <div>
                <h3 class="title-3xl">{{HowWorksTitle}}</h3>
                <p class="body-md">{{HowWorksDescription}}</p>
            </div>
    `;

var res = html;
res = res.replace("{{HowWorksTitle}}", howWorksTitle);
res = res.replace("{{HowWorksDescription}}", howWorksDescription);

return res;





