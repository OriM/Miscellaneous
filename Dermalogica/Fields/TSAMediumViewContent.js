// Medium card

// the currency symbol is trimmed of whitespaces
function currencyFormat(num, currency) {
    return currency.trim()+ num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  

// get all varaiables
var fieldTop = GetValueByApiName("ItemName");
var fieldMiddle = GetValueByApiName("ItemProp1");
var fieldBottom = GetValueByApiName("TSAInventoryDescription");
var itemCode = GetValueByApiName("ItemExternalID");
var itemUnitPrice = GetValueByApiName("TSADisplayUnitPrice");
var currency = GetValueByApiName("Transaction.Currency");
var formattedPrice = currencyFormat(itemUnitPrice, currency);


var html = `<div>
  <style>
      .derm-card-view {
          display: flex;
          flex-direction: column;
          width: 100%;
          text-align: center;
      }
      .derm-card-view-box {
          display: flex;
          justify-content: space-between;
      }
  </style>
  <div class="derm-card-view">
      <p class="title-lg">{{Name}}</p>
      <p class="body-md">{{Type}}</p>
      <p class="body-md">{{Stock}}</p>
      <span class="derm-card-view-box">
          <p class="body-md">{{ID}}</p>
          <p class="body-md">{{Price}}</p>
      </span>
  </div>
</div>
`;

var res = html;
res = res.replace("{{Name}}", fieldTop);
res = res.replace("{{Type}}", fieldMiddle);
res = res.replace("{{Stock}}", fieldBottom);
res = res.replace("{{ID}}", itemCode);
res = res.replace("{{Price}}", formattedPrice);

return res;
