// MarkerSync 1.0.1
// Sync time markers with an auto-updating array of frame numbers.

// Write icon to temp folder
var iconFilePath = api.getTempFolder() + "/markersync_assets/";
var iconFileName = "markersync_icon_sync.png";
var currentComp = api.getActiveComp();

if (api.isFile(iconFilePath + iconFileName) == false) {
  if (api.isDirectory(iconFilePath) == false) {
    api.makeFolder(iconFilePath);
  }
  var watchImage =
    "iVBORw0KGgoAAAANSUhEUgAAACwAAAAcCAMAAAAtIK2eAAAAMFBMVEVHcEz///////////////////////////////////////////////////////////9EPuwCAAAAEHRSTlMACBAYIDA4QEhQWGBocHiAzITh8gAAAPtJREFUeNqVlFGOgCAMRKelKCjY+992EyDZgaDZfZ/Ni4VOESsSc3ncn5Kj4hu7nbjjl1p8ob7pevuGS7HheEbv0xQQO4t3DqzI5Y1s1CqPmmBCa/9q7ykahPWqIEJzn2NMhCYR62qHdtzSK8kHiXo+YXazkEs2Etva3BON6IShcTZbex9yMScIsqsCMrniE8J2ESR2EXxCwXZaZPWJsMhS/nqMKv+64Do6cyJOo+NQEl5CybsI6z7uwm4Php5F7ItktOU1bFY0jxUNKvR4Wk9GspPesVG7BCuHd8ppAqidtztt+YJevuFW7InVF4rhnTgnaPhGf39f673wA2VvH3AJ7PcjAAAAAElFTkSuQmCC";
  var linkImage = 
  "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";
  var stopImage =
    "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";
    api.writeEncodedToBinaryFile(iconFilePath + iconFileName, linkImage);
  api.writeEncodedToBinaryFile(
    iconFilePath + "markersync_icon_watch.png",
    watchImage,
  );
  api.writeEncodedToBinaryFile(
    iconFilePath + "markersync_icon_stop.png",
    stopImage,
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

function stopSync() {
  syncing = false;
    watchLabel.setText(watchLabelStandby);
    linkButton.setImage(iconFilePath + iconFileName);
    watchIcon.setSize(0, 7);
    watchIcon.setContentsMargins(0, 0, 0, 0);
}

function syncMarkers() {
  if (syncing == true && api.layerExists(valueArrayId) == false || syncing == true && api.getActiveComp() != currentComp) {
    stopSync();
    return;
  }

  currentComp = api.getActiveComp();
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
      layerId.includes("timeMarkerFolder") &&
      attrId.includes("needUpdate")
    ) {
      syncMarkers();
    }
    return;
  };
}

var callbackObj = new Callbacks();

ui.addCallbackObject(callbackObj);

linkButton.onClick = function () {
  if (syncing == true) {
    stopSync();
    return;
  }
  init();
  syncMarkers();
  syncing = true;
  watchIcon.setSize(11, 7);
  watchIcon.setContentsMargins(0, 0, 4, 0);
  watchLabel.setText("Watching...");
  linkButton.setImage(iconFilePath + "markersync_icon_stop.png");
};

ui.show();
