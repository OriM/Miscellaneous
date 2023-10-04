var howWorksTitle = "How It Works"; //GetValueByApiName("");
var howWorksDescription = GetValueByApiName("ItemTSAHowItWorks");

var res = "";
if (howWorksDescription && howWorksDescription.length > 0) {
  var html = `
            <div>
                <h3 style="font-family: Helvetica !important;" class="title-3xl">{{HowWorksTitle}}</h3>
                <p style="font-family: Helvetica !important;" class="body-md">{{HowWorksDescription}}</p>
            </div>
    `;

  res = html;
  res = res.replace("{{HowWorksTitle}}", howWorksTitle);
  res = res.replace("{{HowWorksDescription}}", howWorksDescription);
}

return res;
