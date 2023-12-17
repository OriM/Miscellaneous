// get all varaiables
var Price =     GetValueByApiName('TSAPPMBaseUnitPriceAfter1');
var Sku =       GetValueByApiName('ItemExternalID');
var PriceVAT =  GetValueByApiName('TSAPPMTaxUnitPriceAfter1');
var Supplies =  GetValueByApiName('TSAInventory');
var Packaging = GetValueByApiName('ItemTSACSQuantity');
var LastOrder = GetValueByApiName('LastOrderItemDate');
var Delivered = GetValueByApiName('TSADeliveredQty');

var html = `
<div>
	<style>
		.nelt-card-ver {
			display: flex;
			flex-direction: column;
			width: 100%;
			text-align: left;
		}
		.nelt-one-liner {
			display: flex;
			flex-direction: row;
			gap: 0.25rem;
			gap: variables.$spacing-xs;
			width: 100%;
		}
	</style>

	<div class="nelt-one-liner">
        <p class="body-md title ng-star-inserted">SKU:</p>
        <p class="body-md value">{{Sku}}</p>
    </div>
    <div class="nelt-one-liner">
        <p class="body-md title ng-star-inserted">Cena:</p>
        <p class="body-md value">{{Price}}</p>
    </div>
    <div class="nelt-one-liner">
        <p class="body-md title ng-star-inserted">Cena sa PDV-om:</p>
        <p class="body-md value">{{PriceVAT}}</p>
    </div>
    <div class="nelt-one-liner">
        <p class="body-md title ng-star-inserted">Zalihe:</p>
        <p class="body-md value">{{Supplies}}</p>
    </div>
    <div class="nelt-one-liner">
        <p class="body-md title ng-star-inserted">Pakovanje:</p>
        <p class="body-md value">{{Packaging}}</p>
    </div>
    <div class="nelt-one-liner">
        <p class="body-md title ng-star-inserted">Poslednja porudzbina:</p>
        <p class="body-md value">{{LastOrder}}</p>
    </div>
    <div class="nelt-one-liner">
        <p class="body-md title ng-star-inserted">Isporuceno:</p>
        <p class="body-md value">{{Delivered}}</p>
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
