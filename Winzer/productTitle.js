var productTitle = GetValueByApiName("ItemTSAProductTitleParagraph");
var externlID = GetValueByApiName("ItemExternalID");
var content =
  "<h1 class ='MainHeader'>" +
  productTitle +
  "</h1>" +
  externlID +
  "<br/><br/>";
return content;