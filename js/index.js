/**
 * Created by flo on 14/04/16.
 */

const DELAY = 100;
const ELEMENT = 'idxTtl';
var rgb = [255, 192, 203];

function changeColor(){
    console.log("changeColor");
    if (rgb[2]<255){
        rgb[2]++;
    } else {
        if (rgb[1]<255) {
            rgb[1]++;
        } else {
            if (rgb[0]<255){
                rgb[0]++;
            }else {
                rgb = [0, 0, 0];
            }
        }
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