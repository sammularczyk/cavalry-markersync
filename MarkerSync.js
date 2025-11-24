// MarkerSync 1.0.0
// Sync time markers with an auto-updating array of frame numbers.

// Write icon to temp folder
var iconFilePath = api.getTempFolder() + "/markersync_assets/";
var iconFileName = "markersync_icon_link.png";

if (api.isFile(iconFilePath + iconFileName) == false) {
  if (api.isDirectory(iconFilePath) == false) {
    api.makeFolder(iconFilePath);
  }
  var watchImage =
    "iVBORw0KGgoAAAANSUhEUgAAACwAAAAcCAMAAAAtIK2eAAAAMFBMVEVHcEz///////////////////////////////////////////////////////////9EPuwCAAAAEHRSTlMACBAYIDA4QEhQWGBocHiAzITh8gAAAPtJREFUeNqVlFGOgCAMRKelKCjY+992EyDZgaDZfZ/Ni4VOESsSc3ncn5Kj4hu7nbjjl1p8ob7pevuGS7HheEbv0xQQO4t3DqzI5Y1s1CqPmmBCa/9q7ykahPWqIEJzn2NMhCYR62qHdtzSK8kHiXo+YXazkEs2Etva3BON6IShcTZbex9yMScIsqsCMrniE8J2ESR2EXxCwXZaZPWJsMhS/nqMKv+64Do6cyJOo+NQEl5CybsI6z7uwm4Php5F7ItktOU1bFY0jxUNKvR4Wk9GspPesVG7BCuHd8ppAqidtztt+YJevuFW7InVF4rhnTgnaPhGf39f673wA2VvH3AJ7PcjAAAAAElFTkSuQmCC";
  var linkImage =
    "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";
  api.writeEncodedToBinaryFile(iconFilePath + iconFileName, linkImage);
  api.writeEncodedToBinaryFile(
    iconFilePath + "markersync_icon_watch.png",
    watchImage,
  );
  console.log("Link array to sync time markers.");
}

ui.setTitle("MarkerSync");

var syncName = "MarkerSync Array";

var markers = api.getTimeMarkers();
var markerTimes = [];
var valueArrayId = "";
var syncing = false;

// UI
var vLayout = new ui.VLayout();

var linkButton = new ui.ImageButton(iconFilePath + iconFileName);
linkButton.setImageSize(114, 18);
linkButton.setMinimumHeight(36);

linkButton.setToolTip("Link MarkerSync Array");

var watchLayout = new ui.HLayout();
var watchLayoutWrapper = new ui.HLayout();
var watchColor = "#BBBBBB";
var watchLabel = new ui.Label("");
var watchLabelStandby = "Array not linked";
watchLabel.setText(watchLabelStandby);
watchLabel.setTextColor(watchColor);
watchLabel.setAlignment(1);

var watchIcon = new ui.ImageButton(iconFilePath + "markersync_icon_watch.png");
watchIcon.setImageSize(11, 7);
watchIcon.setBackgroundColor(ui.getThemeColor("Base"));
watchIcon.setSize(0, 7);
watchIcon.setDrawStroke(false);
watchIcon.setTransparentForMouseEvents(true);
watchIcon.setContentsMargins(0, 0, 0, 0);

watchLayout.add(watchIcon);
watchLayout.add(watchLabel);

watchLayoutWrapper.addStretch();
watchLayoutWrapper.add(watchLayout);
watchLayoutWrapper.addStretch();

linkButton.onClick = function () {
  init();
  syncMarkers();
  syncing = true;
  watchIcon.setSize(11, 7);
  watchIcon.setContentsMargins(0, 0, 4, 0);
  watchLabel.setText("Watching...");
};

vLayout.add(linkButton);
vLayout.addSpacing(0);
vLayout.add(watchLayoutWrapper);

ui.add(vLayout);
ui.addStretch();

ui.setMinimumHeight(80);

// Check if sync layer exists

function init() {
  var arrayLayers = api.getCompLayersOfType(false, "valueArray");
  var found = false;

  for (var layer of arrayLayers) {
    if (api.getNiceName(layer) == syncName) {
      valueArrayId = layer;
      found = true;
      break;
    }
  }

  if (found != true) {
    valueArrayId = api.create("valueArray", syncName, false);
  }
}

function syncMarkers() {
  if (api.layerExists(valueArrayId) == false) {
    syncing = false;
    watchLabel.setText(watchLabelStandby);
    watchIcon.setSize(0, 7);
    watchIcon.setContentsMargins(0, 0, 0, 0);
    return;
  }

  markerTimes = [];
  markers = api.getTimeMarkers();
  arrayLength = api.getArrayCount(valueArrayId, "array");
  diff = markers.length - arrayLength;

  if (markers != 0) {
    if (diff > 0) {
      for (let a = 0; a < diff; a++) {
        api.addArrayIndex(valueArrayId, "array");
      }
    } else {
      for (let r = 0; r < -diff; r++) {
        api.removeArrayIndex(valueArrayId, "array.0");
      }
    }
  }

  for (let i = 0; i < markers.length; i++) {
    let markerId = markers[i];
    markerTimes[i] = api.get(markerId, "absTime");
  }

  markerTimes.sort((a, b) => a - b);

  const result = markerTimes.reduce((acc, val, index) => {
    acc[`array.${index}`] = val;
    return acc;
  }, {});

  api.set(valueArrayId, result);
}

// Sync object

function Callbacks() {
  this.onAttrChanged = function (layerId, attrId) {
    if (
      syncing == true &&
      layerId.includes("timeMarker") &&
      attrId.includes("absTime")
    ) {
      syncMarkers();
    }
    return;
  };
}

var callbackObj = new Callbacks();

ui.addCallbackObject(callbackObj);

ui.show();
