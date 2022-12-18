document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(header => console.log("[" + header.outerText + "](" + document.URL + header.firstChild.hash +")"))
