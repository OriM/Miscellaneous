// the currency symbol is trimmed of whitespaces
function currencyFormat(num, currency) {
  return (
    currency.trim() + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
  );
}

var itemCode = GetValueByApiName("ItemExternalID");
var itemUnitPrice = GetValueByApiName("TSADisplayUnitPrice");
var currency = GetValueByApiName("Transaction.Currency");
var formattedPrice = currencyFormat(itemUnitPrice, currency);

var html = `
        <p style="font-family: Helvetica;" class="body-lg">{{ID}}</p>
        <p style="font-family: Helvetica;" class="body-lg">{{Price}}</p>
    `;

var res = html;
res = res.replace("{{ID}}", itemCode);
res = res.replace("{{Price}}", formattedPrice);
return res;
