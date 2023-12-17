var ProductName = GetValueByApiName('');
var html =
	'<h2 style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis;" class="color-user-primary title-4xl">{{ProductName}}</h2>';

var res = html;
res = res.replace('{{ProductName}}', ProductName);
return res;
