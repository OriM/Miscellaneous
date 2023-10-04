var ingredientsTitle = "Ingredients"; //GetValueByApiName("");
var ingredientsDescription = GetValueByApiName("ItemTSAIngredients");

var res = "";
if (ingredientsDescription && ingredientsDescription.length > 0) {
  var html = `
        <div>
            <h3 style="font-family: Helvetica !important" class="title-3xl">{{IngredientsTitle}}</h3>
            <p style="font-family: Helvetica !important" class="body-md">{{IngredientsDescription}}</p>
        </div>
    `;

  res = html;
  res = res.replace("{{IngredientsTitle}}", ingredientsTitle);
  res = res.replace("{{IngredientsDescription}}", ingredientsDescription);
}

return res;