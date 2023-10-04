var disclaimer =
  "Dermalogica is dedicated to maintaining the accuracy of the ingredient lists on this website. However, because ingredients are subject we  cannot guarantee that these lists are complete, to change, up-to-date and/or  error-free. For an accurate listing of ingredients in each product, please refer to your product packaging.";

var res = "";

var html = `
            <div>
                <h3 style="font-family: Helvetica !important; font-weight: var(--pep-font-weight-bold)" class="title-3xl">Disclaimer</h3>
                <p style="font-family: Helvetica !important;" class="body-md">{{Disclaimer}}</p>
            </div>
    `;

res = html;
res = res.replace("{{Disclaimer}}", disclaimer);

return res;
