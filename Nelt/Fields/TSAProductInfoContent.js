var ProductDescription = GetValueByApiName('');
var Id = GetValueByApiName('');
var Price = GetValueByApiName('');

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
	<p class="body-lg color-dimmed">{{ProductDescription}}</p>
	<div class="nelt-one-liner">
		<p class="body-lg title ng-star-inserted">Id:</p>
		<p class="body-lg value">{{Id}}</p>
	</div>
	<div class="nelt-one-liner">
		<p class="body-lg title ng-star-inserted">Cena:</p>
		<p class="body-lg value">{{Price}}</p>
	</div>
</div>
`;

var res = html;
res = res.replace('{{ProductDescription}}', ProductDescription);
res = res.replace('{{Id}}', Id);
res = res.replace('{{Price}}', Price);

return res;
