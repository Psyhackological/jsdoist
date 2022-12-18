function make_hyperlink(title, baseURI, id_value) {
    return "[" + title + "](" + baseURI + "#" + id_value + ")";
}

function showHWrapDivs(hWrapDivs) {
    for (let i = 0; i < hWrapDivs.length; i++) {
        var title = hWrapDivs[i].firstElementChild.childNodes[1].data;
        var baseURI = hWrapDivs[i].baseURI;
        var id_value = hWrapDivs[i].firstElementChild.attributes["id"].nodeValue;
        var hyperlink = make_hyperlink(title, baseURI, id_value);
        console.log(hyperlink);
    }
}

var h2WrapDivs = document.getElementsByClassName('h2-wrap');
var h3WrapDivs = document.getElementsByClassName('h3-wrap');

console.log("h2 Wraps Divs:")
showHWrapDivs(h2WrapDivs)

console.log("h3 Wraps Divs:")
showHWrapDivs(h3WrapDivs)
