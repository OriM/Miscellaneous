// Line View

// get all varaiables
var paidQty = GetValueByApiName("TSAPaidQuantity");
var freeQty = GetValueByApiName("TSAGWPFreeLaunchAddFreeItems");

var html = `
    <div>
        <span style="font-family: Helvetica !important" class="body-xs title ng-star-inserted">Paid Qty</span>
        <span style="font-family: Helvetica !important" class="body-sm value">{{PaidQty}}</span>
    </div>
    <div>
        <span style="font-family: Helvetica !important" class="body-xs title ng-star-inserted">Free Qty</span>
        <span style="font-family: Helvetica !important" class="body-sm value">{{FreeQty}}</span>
    </div>
`;

var res = html;
res = res.replace("{{PaidQty}}", paidQty);
res = res.replace("{{FreeQty}}", freeQty);

return res;
