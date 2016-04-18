/**
 * Created by flo on 14/04/16.
 */

const DELAY = 100;
const ELEMENT = 'idxTtl';
const COEF_RGB = [1, 2, 1];
var rgb = [255, 192, 203];
var sensRgb = [1, 1, 1];

function changeColor(){
    console.log("changeColor::STARTING\n\t" + sensRgb.toString());
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
    // document.getElementById(ELEMENT).style.color = rgb;
    setTimeout(changeColor, DELAY);
}

function init(){
    console.log("init::STARTING");
    console.log("rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")");
    document.getElementById(ELEMENT).style.color = "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
    setTimeout(changeColor, DELAY);
}