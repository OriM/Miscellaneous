var productTitle = GetValueByApiName("ItemTSAProductTitleParagraph");
var externlID = GetValueByApiName("ItemExternalID");
var content =
  "<h1 class ='MainHeader'>" +
  productTitle +
  "</h1>" + " <div class=\"pep-info-spacing\">" + externlID + " </div>";
return content;