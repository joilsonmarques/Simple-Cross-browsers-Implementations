/*
 * addEvent.js: Cross-browser implementation of element.addEventListener()
 * 2013-08-13
 *
 * By Joilson Marques, http://joilsonmarques@github.com
 * Public Domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 *
 * Use: addEvent("event name", elem, func);
 */

/*! @source https://github.com/joilsonmarques/Simple-Cross-browsers-Implementations/blob/master/src/addEvent.js*/

function addEvent(evnt, elem, func) {
   if (elem.addEventListener)  // W3C DOM
      elem.addEventListener(evnt,func,false);
   else if (elem.attachEvent) { // IE DOM
      elem.attachEvent("on"+evnt, func);
   }
   else { // No much to do
      elem[evnt] = func;
   }
}
