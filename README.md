# TrialViewer
TrialViewer is a vanilla JavaScript tool for visualising trial JSON data. It is inspired from [JSONViewer].

## Development
1. Create new instance of JSONViewer object.
    ```javascript
    var jsonViewer = new JSONViewer();
    ```
2. Append instance container to the DOM using "getContainer()" method.
    ```javascript
    document.querySelector("#json").appendChild(jsonViewer.getContainer());
    ```
3. Visualise json using "showJSON()" method, which accepts 3 arguments - json file, optional: visualise to max level (-1 unlimited, 0..n), optional: collapse all at level (-1 unlimited, 0..n).
    ```javascript
    jsonViewer.showJSON(jsonObj); // visualize the whole json structure.
    jsonViewer.showJSON(jsonObj, 1); // visualise json to max level 1.
    jsonViewer.showJSON(jsonObj, null, 1); // collapse all at level 1.
    ```

[JSONViewer]: https://github.com/LorDOniX/json-viewer