var setTitle = function(tabTitle){
    chrome.tabs.getSelected( function(tab){ 
        var script = "document.title="+"'"+tabTitle+"'";
        chrome.tabs.executeScript(tab.id, { code: script }); 
    });
};

var changeTitle = function(){
    var input = document.getElementById("input");
    var tabTitle = input.value;
    setTitle(tabTitle);
};

document.getElementById("btnChange").addEventListener("click", changeTitle);
