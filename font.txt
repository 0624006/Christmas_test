
/*for (let i = 0; i < logo.length; i++) {
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}*/

const logo = document.querySelectorAll("#logo path");
var logo_len = 14;
var logo_detime = 0.0;
function init() {
    for (let j = 2; j <= logo_len + 1; j++) {
        $(`#logo path:nth-child(${j})`).css("stroke-dasharray", `${logo[j - 2].getTotalLength()}`);
        $(`#logo path:nth-child(${j})`).css("stroke-dashoffset", `${logo[j - 2].getTotalLength()}`);
        $(`#logo path:nth-child(${j})`).css("animation", `line-anim 2s ease forwards ${logo_detime.toFixed(1)}s`);
        logo_detime+=0.3;
    }
}
init();