/*  PROMO Config before 1/1/21
//twofer item
if (  TSATwoferItemValid > 0 )
  return  TransactionTSATwoferdescription;

//QTY break item
if (   TSAQTYBreakItemValid > 0 )
  return   TransactionTSAQTYBreakDescription;

// prof discount
if ( ( TransactionTSAProfDiscountValid > 0 ) && (  ItemProp1 == "Professional") && ( ItemExternalID !="211394")) 
  return  TransactionTSAProfDiscountDescription;

//no promo on the item
return "";

*/

var promo = "";

//Config for 20% Discount
// prof discount
if (TransactionTSAProfDiscountValid > 0) {
  var item_qualifies = 0;
  var prof_excluded_list = [
    "211222",
    "211225",
    "211394",
    "5839",
    "100038K",
    "100039K",
    "100040K",
    "211476",
  ];
  var prof_included_list = ["111352", "111347", "110542", "811439"];
  var is_inclusion = 0;

  if (TransactionAccountTSAPriceListProperty == "HANDSTON") {
    prof_excluded_list = [
      "211222",
      "211225",
      "211394",
      "5839",
      "100038K",
      "100039K",
      "100040K",
      "211476",
      "100051K",
      "100052K",
    ];
    prof_included_list = ["711439", "710541", "710545", "711393"];
  } else if (TransactionAccountTSAPriceListProperty == "MASSHGTS") {
    prof_included_list = [""];
  }

  //Professional items qualify by default
  if (ItemProp1 == "Professional") {
    item_qualifies = 1;
  }
  //check for non-Professional item that qualifies
  else {
    var i = 0;
    for (i = 0; i < prof_included_list.length; i += 1) {
      if (ItemExternalID == prof_included_list[i]) {
        item_qualifies = 1;
        break;
      }
    }
  }

  //check for items that are excluded, possibly Professional
  for (i = 0; i < prof_excluded_list.length; i += 1) {
    if (ItemExternalID == prof_excluded_list[i]) {
      item_qualifies = 0;
      break;
    }
  }

  var prop2 = ItemProp2.toLowerCase();
  if (prop2 == "student kit" || prop2 == "pro pen") {
    item_qualifies = 0;
  }

  if (item_qualifies == 1) {
    promo = TransactionTSAProfDiscountDescription;
    // return TransactionTSAProfDiscountDescription;
  }
}

var html = `
        <div>
            <p style="font-family: Helvetica !important" class="color-user-primary body-md derm-card-view">{{Promo}}</p>
        </div>
`;

var res = html;
res = res.replace("{{Promo}}", promo);
return res;
