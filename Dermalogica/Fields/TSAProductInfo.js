var howWorks = GetValueByApiName("TSAProductHowWorks");
var ingredients = GetValueByApiName("TSAProductIngredients");

var html = `
    <style>
        .slipt-two-even {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
        }
        @media (max-width: 720px) {
            .slipt-two-even {
                grid-template-columns: 1fr;
            }
        }
        </style>
    <section id="" class="slipt-two-even">
        <div>
            {{HowWorks}}
        </div>
        <div>
            {{Ingredients}}
        </div>
    </section>
    `;

var res = html;
res = res.replace("{{HowWorks}}", howWorks);
res = res.replace("{{Ingredients}}", ingredients);
return res;