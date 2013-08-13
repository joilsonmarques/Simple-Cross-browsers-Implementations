/*
 * getDocHeight.js: Cross-browser implementation of document.body.offsetHeight
 * 2013-08-13
 *
 * This function will return any document’s height. 
 * It’s been tested in IE6/7, FF2/3, Safari (Windows), Google Chrome and Opera 9.5.
 * If the actual document’s body height is less than the viewport height then it will 
 * return the viewport height instead
 *
 * By JAMES PADOLSEY, http://james.padolsey.com/javascript/get-document-height-cross-browser/
 *
 * Usage: getDocHeight();
 */

/*! @source https://github.com/joilsonmarques/Simple-Cross-browsers-Implementations/blob/master/src/getDocHeight.js*/

/**
 * Get total height of the document
 * @return {Int}
 */
function getDocHeight() {
    var doc = document;

    return Math.max(
        doc.body.scrollHeight, doc.documentElement.scrollHeight,
        doc.body.offsetHeight, doc.documentElement.offsetHeight,
        doc.body.clientHeight, doc.documentElement.clientHeight
    );
}