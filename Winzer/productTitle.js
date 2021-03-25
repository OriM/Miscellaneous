var productTitle = GetValueByApiName("ItemTSAProductTitleParagraph");
var externlID = GetValueByApiName("ItemExternalID");
var content =
  "<h1 class ='pep-info-title'>" +
  productTitle +
  "</h1>" + " <div class=\"pep-info-spacing\">" + externlID + " </div>";
return content;