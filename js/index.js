/**
 * Created by flo on 14/04/16.
 * For the menu
 * http://codepen.io/chorijan/pen/aqDpo
 */

const DELAY = 50;
const ELEMENT = 'idxTtl';
const COEF_RGB = [1, 2, 1];
var rgb = [255, 192, 203];
var sensRgb = [1, 1, 1];
var navigation = responsiveNav(".nav-collapse", {
    animate: true,                    // Boolean: Use CSS3 transitions, true or false
    transition: 284,                  // Integer: Speed of the transition, in milliseconds
    label: "Menu",                    // String: Label for the navigation toggle
    insert: "before",                  // String: Insert the toggle before or after the navigation
    customToggle: "",                 // Selector: Specify the ID of a custom toggle
    closeOnNavClick: false,           // Boolean: Close the navigation when one of the links are clicked
    openPos: "relative",              // String: Position of the opened nav, relative or static
    navClass: "nav-collapse",         // String: Default CSS class. If changed, you need to edit the CSS too!
    navActiveClass: "js-nav-active",  // String: Class that is added to <html> element when nav is active
    jsClass: "js",                    // String: 'JS enabled' class which is added to <html> element
    init: function(){},               // Function: Init callback
    open: function(){},               // Function: Open callback
    close: function(){}               // Function: Close callback
});

function changeColor(){
    if (rgb[2] == 255 || rgb[2] == 0){
        sensRgb[2] = -1 * sensRgb[2];
        rgb[2] += sensRgb[2] * COEF_RGB[2];
    }else if (rgb[2] < 255 && rgb[2] > 0){
        rgb[2] += sensRgb[2]  * COEF_RGB[2];
    } else {
        rgb[2] = 203;
    }

    if (rgb[1] >= 254 || rgb[1] <= 1){
        sensRgb[1] = -1 * sensRgb[1];
        rgb[1] += (sensRgb[1] * COEF_RGB[1]);
    }else if (rgb[1] < 254 && rgb[1] > 1){
        rgb[1] += (sensRgb[1] * COEF_RGB[1]);
    } else {
        rgb[1] = 192;
    }

    if (rgb[0] == 255 || rgb[0] == 0){
        sensRgb[0] = -1 * sensRgb[0];
        rgb[0] += sensRgb[0] * COEF_RGB[0];
    }else if (rgb[0] < 255 && rgb[0] > 0){
        rgb[0] += sensRgb[0] * COEF_RGB[0];
    } else {
        rgb[0] = 255;
    }
    document.getElementById(ELEMENT).style.color = "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
    setTimeout(changeColor, DELAY);
}

function initPage(){
    document.getElementById(ELEMENT).style.color = "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
    setTimeout(changeColor, DELAY);
}

