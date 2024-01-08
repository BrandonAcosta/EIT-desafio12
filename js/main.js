const tematica = '<span style="color:lightblue">Temática elegida: videojuegos</span>';

document.getElementsByTagName("h1")[0].innerHTML += " :"+tematica;
const clr = ['#1a2b3f','#171d25','#336d9e','#539ac4'];

function colorLoader() {
    const selector = document.getElementsByTagName("select")[0];
    const opt = document.getElementsByTagName("select")[0].children;
    for (let i = 0; i < clr.length; i++) {
        selector.appendChild(document.createElement("option"));
        opt[i].value = clr[i];
        opt[i].textContent = `Color ${i+1}`;
    }
    //console.log(opt);
}
colorLoader();