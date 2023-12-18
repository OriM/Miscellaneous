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

var res = html;
res = res.replace('{{Price}}', Price );
res = res.replace('{{Sku}}', Sku );
res = res.replace('{{PriceVAT}}', PriceVAT );
res = res.replace('{{Supplies}}', Supplies );
res = res.replace('{{Packaging}}', Packaging );
res = res.replace('{{LastOrder}}', LastOrder );
res = res.replace('{{Delivered}}', Delivered );

return res;
