var ingredientsTitle = "Ingredients"; //GetValueByApiName("");
var ingredientsDescription = GetValueByApiName("ItemTSAIngredients");

var html = `
        <div>
            <h3 class="title-3xl">{{IngredientsTitle}}</h3>
            <p class="body-md">{{IngredientsDescription}}</p>
        </div>
    `;

var res = html;
res = res.replace("{{IngredientsTitle}}", ingredientsTitle);
res = res.replace("{{IngredientsDescription}}", ingredientsDescription);
return res;





