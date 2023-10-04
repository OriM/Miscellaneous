var howWorks = GetValueByApiName("TSAProductHowWorks");
var howToUse = GetValueByApiName("TSAProductHowToUse");
var ingredients = GetValueByApiName("TSAProductIngredients");
var innovation = GetValueByApiName("TSAProductInnovation");
var disclaimer = GetValueByApiName("TSAProductDisclaimer");

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
        <div>
            {{HowToUse}}
        </div>
        <div>
            {{Innovation}}
        </div>
    </section>
    <div style="display:flex; flex-direction: column; gap: var(--pep-spacing-lg)">
        {{Disclaimer}}
    </div>
    `;

var res = html;
res = res.replace("{{HowWorks}}", howWorks);
res = res.replace("{{HowToUse}}", howToUse);
res = res.replace("{{Ingredients}}", ingredients);
res = res.replace("{{Innovation}}", innovation);
res = res.replace("{{Disclaimer}}", disclaimer);
return res;