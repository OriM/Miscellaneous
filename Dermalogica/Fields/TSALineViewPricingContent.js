// Line View

function currencyFormat(num, currency) {
    return currency.trim()+ num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

function percentageFormat(num) {
    return "%" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  
var currency = GetValueByApiName("Transaction.Currency");  

// get all varaiables
var unitPrice = currencyFormat(GetValueByApiName("UnitPriceAfterDiscount"),currency);
var extPrice = currencyFormat(GetValueByApiName("TotalUnitsPriceAfterDiscount"),currency);
var tax = percentageFormat(GetValueByApiName("TSATaxTaxRate"));
var taxAmount = currencyFormat(GetValueByApiName("TSATaxAmount"),currency);
var extPriceTax = currencyFormat(GetValueByApiName("TSATotalPricePerLineTaxIncl"),currency);

var html = `
<style>
.derm-line-view {
    display: flex;
    gap: 1rem;
    width: 100%;
}
.derm-line-view-box {
    width: max-content;
    text-align: center;
}
</style>

<div class="derm-line-view">
<div class="derm-line-view-box">
    <div class="body-sm title ng-star-inserted">Unit Price</div>
    <div class="body-md value">{{UnitPrice}}</div>
</div>
<div class="derm-line-view-box">
    <div class="body-sm title ng-star-inserted">Ext. Price</div>
    <div class="body-md value">{{ExtPrice}}</div>
</div>
<div class="derm-line-view-box">
    <div class="body-sm title ng-star-inserted">Tax</div>
    <div class="body-md value">{{Tax}}</div>
</div>
<div class="derm-line-view-box">
    <div class="body-sm title ng-star-inserted">Tax Amount</div>
    <div class="body-md value">{{TaxAmount}}</div>
</div>
<div class="derm-line-view-box">
    <div class="body-sm title ng-star-inserted">Ext. Price w/ Tax</div>
    <div class="body-md value">{{ExtPriceTax}}</div>
</div>
</div>
`;

var res = html;
res = res.replace("{{UnitPrice}}", unitPrice);
res = res.replace("{{ExtPrice}}", extPrice);
res = res.replace("{{Tax}}", tax);
res = res.replace("{{TaxAmount}}", taxAmount);
res = res.replace("{{ExtPriceTax}}", extPriceTax);

return res;
