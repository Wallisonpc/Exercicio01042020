function carregadoS(){
document.getElementById("paragrafo").innerHTML= "Carregado com sucesso";
}

function carregar(){
    document.getElementById("paragrafo").innerHTML="<img src= 'https://1.bp.blogspot.com/-VuByMx_42lM/WbHgA9-4-QI/AAAAAAAAMBU/dUeW413Mv7YNll8Fo1C2DU5ma3ySbWJkgCLcBGAs/s280/Loading.gif'";
    setTimeout (carregadoS, 3000);
}