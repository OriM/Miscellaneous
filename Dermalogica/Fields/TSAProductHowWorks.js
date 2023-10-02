var howWorksTitle = "How It Works";//GetValueByApiName("");
var howWorksDescription = GetValueByApiName("ItemTSAHowItWorks");

var html = `
            <div>
                <h3 style="font-family: Helvetica !important;" class="title-3xl">{{HowWorksTitle}}</h3>
                <p style="font-family: Helvetica !important;" class="body-md">{{HowWorksDescription}}</p>
            </div>
    `;

var res = html;
res = res.replace("{{HowWorksTitle}}", howWorksTitle);
res = res.replace("{{HowWorksDescription}}", howWorksDescription);

return res;





