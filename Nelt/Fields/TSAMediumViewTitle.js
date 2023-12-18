var CardTitle = GetValueByApiName('ItemName');
var html = `
<span style="height: 100%; display: flex; align-items: center">
	<h3
		style="
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-overflow: ellipsis;
			margin: 0;
		"
		class="color-user-primary title-3xl"
	>
		{{CardTitle}}
	</h3>
</span>
`;

var res = html;
res = res.replace('{{CardTitle}}', CardTitle);
return res;
