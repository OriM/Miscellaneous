// Line View

// get all varaiables
var fieldTop = GetValueByApiName("ItemName");
var fieldMiddle = GetValueByApiName("ItemProp1");
var itemCode = GetValueByApiName("ItemExternalID");
var fieldBottom = GetValueByApiName("TSAInventoryDescription");

var html = `
<div>
	<p class="title-md">{{Name}}</p>
	<p class="body-md">{{Type}}</p>
	<p class="body-md">{{ID}}</p>
	<p class="body-md">{{Stock}}</p>
</div>
`;

var res = html;
res = res.replace("{{Name}}", fieldTop);
res = res.replace("{{Type}}", fieldMiddle);
res = res.replace("{{ID}}", itemCode);
res = res.replace("{{Stock}}", fieldBottom);

return res;
