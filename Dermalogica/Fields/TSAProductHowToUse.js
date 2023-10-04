var howToUseTitle = "How To Use"; //GetValueByApiName("");
var howToUseDescription = GetValueByApiName("ItemTSAHowToUse");

var res = "";

if (howToUseDescription && howToUseDescription.length > 0) {
  var html = `
            <div>
                <h3 style="font-family: Helvetica !important;" class="title-3xl">{{HowToUseTitle}}</h3>
                <p style="font-family: Helvetica !important;" class="body-md">{{HowToUseDescription}}</p>
            </div>
    `;

  res = html;
  res = res.replace("{{HowToUseTitle}}", howToUseTitle);
  res = res.replace("{{HowToUseDescription}}", howToUseDescription);
}

return res;
