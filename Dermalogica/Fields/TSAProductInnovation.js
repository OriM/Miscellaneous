var innovationTitle = "Innovations"; //GetValueByApiName("");
var innovationDescription = GetValueByApiName("ItemTSALongDescription");

var res = "";

if (innovationDescription && innovationDescription.length > 0) {
  var html = `
            <div>
                <h3 style="font-family: Helvetica !important;" class="title-3xl">{{InnovationTitle}}</h3>
                <p style="font-family: Helvetica !important;" class="body-md">{{InnovationDescription}}</p>
            </div>
    `;

  res = html;
  res = res.replace("{{InnovationTitle}}", innovationTitle);
  res = res.replace("{{InnovationDescription}}", innovationDescription);
}

return res;
