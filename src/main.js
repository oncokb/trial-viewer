var jsonViewer = new JSONViewer();
document.querySelector("#json").appendChild(jsonViewer.getContainer());

var refPath = "Trials";
var currentUrl = window.location.href;
if (currentUrl.indexOf("NCT") >= 0) {
    var nctId = currentUrl.split('?').pop();
    refPath += "/" + nctId;
}

var getTrialPromise = new Promise(function(resolve, reject) {
    var trialRef = firebase.database().ref(refPath);
    trialRef.on('value', function(snapshot) {
        resolve(snapshot.val());
    });
});

getTrialPromise.then(function(value) {
    jsonViewer.showJSON(value);
});