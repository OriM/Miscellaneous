// Medium card

// the currency symbol is trimmed of whitespaces
function currencyFormat(num, currency) {
	return currency.trim() + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

// get all varaiables
var Price =     GetValueByApiName('TSAPPMBaseUnitPriceAfter1');
var Sku =       GetValueByApiName('ItemExternalID');
var PriceVAT =  GetValueByApiName('TSAPPMTaxUnitPriceAfter1');
var Supplies =  GetValueByApiName('TSAInventory');
var Packaging = GetValueByApiName('ItemTSACSQuantity');
var LastOrder = GetValueByApiName('LastOrderItemDate');
var Delivered = GetValueByApiName('TSADeliveredQty');


var style = `<style>
.nelt-card-ver {
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: left;
    gap: 0.5rem;
}
.nelt-one-liner {
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
    width: 100%;
    padding-inline-start: 0.125rem;
}
</style>`;

const div = `<div class="nelt-one-liner">
                <p style="margin: 0;" class="body-md title ng-star-inserted">{{TITLE}}</p>
                <p style="margin: 0;" class="body-md bold">{{REPLACE}}</p>
            </div>`;

var accHtml = '<div>' + style + '<div class="nelt-card-ver">';

accHtml += `<div class="nelt-one-liner">
<p style="margin: 0;" class="body-md title ng-star-inserted">SKU:</p>
<p style="margin: 0;" class="body-md bold">{{Sku}}</p>
</div>`;

if (Price != '0') {
    var newDiv = div;
    newDiv = newDiv.replace('{{REPLACE}}', '{{Price}}');
    newDiv = newDiv.replace('{{TITLE}}', 'Cena:');
    accHtml += newDiv;
}
if (PriceVAT != '0') {
    var newDiv = div;
    newDiv = newDiv.replace('{{REPLACE}}', '{{PriceVAT}}');
    newDiv = newDiv.replace('{{TITLE}}', 'Cena sa PDV-om:');
    accHtml += newDiv;
}
if (Supplies != '0') {
    var newDiv = div;
    newDiv = newDiv.replace('{{REPLACE}}', '{{Supplies}}');
    newDiv = newDiv.replace('{{TITLE}}', 'Zalihe:');
    accHtml += newDiv;
}

accHtml += `<div class="nelt-one-liner">
<p style="margin: 0;" class="body-md title ng-star-inserted">Pakovanje:</p>
<p style="margin: 0;" class="body-md bold">{{Packaging}}</p>
</div>`;

if (LastOrder != '0') {
    var newDiv = div;
    newDiv = newDiv.replace('{{REPLACE}}', '{{LastOrder}}');
    newDiv = newDiv.replace('{{TITLE}}', 'Poslednja porudzbina:');
    accHtml += newDiv;
}
if (Delivered != '0') {
    var newDiv = div;
    newDiv = newDiv.replace('{{REPLACE}}', '{{Delivered}}');
    newDiv = newDiv.replace('{{TITLE}}', 'Isporuceno:');
    accHtml += newDiv;
}

accHtml += '</div></div>';


var html = `<div>
<style>
    .nelt-card-ver {
        display: flex;
        flex-direction: column;
        width: 100%;
        text-align: left;
        gap: 0.5rem;
    }
    .nelt-one-liner {
        display: flex;
        flex-direction: row;
        gap: 0.25rem;
        width: 100%;
        padding-inline-start: 0.125rem;
    }
</style>
<div class="nelt-card-ver">
    <div class="nelt-one-liner">
        <p style="margin: 0;" class="body-md title ng-star-inserted">SKU:</p>
        <p style="margin: 0;" class="body-md bold">{{Sku}}</p>
    </div>
    <div class="nelt-one-liner">
        <p style="margin: 0;" class="body-md title ng-star-inserted">Cena:</p>
        <p style="margin: 0;" class="body-md bold">{{Price}}</p>
    </div>
    <div class="nelt-one-liner">
        <p style="margin: 0;" class="body-md title ng-star-inserted">Cena sa PDV-om:</p>
        <p style="margin: 0;" class="body-md bold">{{PriceVAT}}</p>
    </div>
    <div class="nelt-one-liner">
        <p style="margin: 0;" class="body-md title ng-star-inserted">Zalihe:</p>
        <p style="margin: 0;" class="body-md bold">{{Supplies}}</p>
    </div>
    <div class="nelt-one-liner">
        <p style="margin: 0;" class="body-md title ng-star-inserted">Pakovanje:</p>
        <p style="margin: 0;" class="body-md bold">{{Packaging}}</p>
    </div>
    <div class="nelt-one-liner">
        <p style="margin: 0;" class="body-md title ng-star-inserted">Poslednja porudzbina:</p>
        <p style="margin: 0;" class="body-md bold">{{LastOrder}}</p>
    </div>
    <div class="nelt-one-liner">
        <p style="margin: 0;" class="body-md title ng-star-inserted">Isporuceno:</p>
        <p style="margin: 0;" class="body-md bold">{{Delivered}}</p>
    </div>
</div>
</div>
`;

var res = accHtml;// html;
res = res.replace('{{Price}}', Price );
res = res.replace('{{Sku}}', Sku );
res = res.replace('{{PriceVAT}}', PriceVAT );
res = res.replace('{{Supplies}}', Supplies );
res = res.replace('{{Packaging}}', Packaging );
res = res.replace('{{LastOrder}}', LastOrder );
res = res.replace('{{Delivered}}', Delivered );

return res;
