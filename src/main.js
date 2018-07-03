/***
 * This is an example to show how to use JsonViewer to display json data.
 * @author Jing Su
 */
var jsonObj = {};
var filePath = "data-example/NCT001.json";
loadJSON(filePath, function(response) {
    // Parse JSON string into object. You can assign you own json data to jsonObj directly if you don't need to read file.
    jsonObj = JSON.parse(response);
    var jsonViewer = new JSONViewer();
    document.querySelector("#json").appendChild(jsonViewer.getContainer());
    jsonViewer.showJSON(jsonObj);
});

function loadJSON(file, callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType('application/json');
    xhr.open('GET', file, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.responseText);
        }
    };
    xhr.send(null);
}