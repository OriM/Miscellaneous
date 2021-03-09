var apiNames = [
  { title: "Diameter", apiName: "ItemTSADiameter" },
  { title: "Drive Type", apiName: "ItemTSADriveType" },
  { title: "Finish", apiName: "ItemTSAFinish" },
  { title: "Head Style", apiName: "ItemTSAHeadStyle" },
  { title: "Length", apiName: "ItemTSALength" },
  { title: "Material", apiName: "ItemTSAMaterial" },
  { title: "Measurement", apiName: "ItemTSAMeasurement" },
  { title: "Origin", apiName: "ItemTSAOrigin" },
  { title: "Point Type", apiName: "ItemTSAPointType" },
  { title: "Thread Type", apiName: "ItemTSAThreadType" },
];

var max = 5;
var apiNamesLenth = apiNames.length;
var attributesFound = 0;
var content = "";
var i;
for (i = 0; i < apiNamesLenth && attributesFound < max; i++) {
  var apiName = apiNames[i].apiName;
  var attirbuteValue = GetValueByApiName(apiName);
  if (attirbuteValue != "") {
    var attirbuteTitle = apiNames[i].title;
    content += "<b>" + attirbuteTitle + ":</b> " + attirbuteValue + "<br/>";
    attributesFound++;
  }
}

return content;
