
function financial(x) {
    var nbr = x.toFixed(3);
    nbr = nbr.split("");
    if (nbr[nbr.length -1] < 5 && nbr[nbr.length -2]< 5){
        nbr[nbr.length -2] = "0";
        //nbr =  nbr.join('');
    }
    else{
        if ((nbr[nbr.length -1]  >=5 && nbr[nbr.length -2]>= 5) ||
            (nbr[nbr.length -2]  >=5 && nbr[nbr.length -3]>= 5)){
            nbr[nbr.length -3] = (Number.parseInt(nbr[nbr.length -3]) +1).toString();
            if (nbr[nbr.length -3]== "10"){
                 return(nbr = Math.trunc(x) + 1);
                
            }
            else{
                nbr[nbr.length -2] = '0';
                nbr[nbr.length -1] = '0';
                //nbr =  nbr.join('');
            }
        }
        else{
            if ((nbr[nbr.length -1]  >=5 && nbr[nbr.length -2] < 5)){
                nbr[nbr.length -1] = '0';
            nbr[nbr.length -2] = '0';
            //nbr =  nbr.join('');
            }
        }
        
    }
    nbr =  nbr.join('');
  return Number.parseFloat(nbr).toFixed(2);
  
  
 
}
function IRG_2022(Type_IRG, Soumis){
    var rIrg;
    var p = Math.trunc((Math.trunc(Soumis))/10)*10;
    if (Soumis <= 30000 ){
        rIrg = 0;
        return rIrg
    }    
    else {
        
            if (Soumis >= 20000 &&  Soumis <= 40000){
                rIrg = (p - 20000) * 0.23
            }
            else {
                if (Soumis >= 40000 && Soumis <= 80000){
                    rIrg = 4600 + (p - 40000) * 0.27
                }
                else {
                    if (Soumis>= 80000 && Soumis <= 160000){
                        rIrg = 15400 + (p - 80000) * 0.3
                    }
                    else{
                        if (Soumis>= 160000 && Soumis <= 320000){
                            rIrg = 39400 + (p - 160000) * 0.33
                        }
                        else{
                            rIrg = 92200 + (p - 320000) * 0.35
                        }
                    }
                }
            }
            
            
        
    }
    
    var Abat = (0.4 * rIrg); 
    if (Abat < 1000) {
        Abat = 1000
    } 
    if (Abat > 1500) {
        Abat = 1500
    }
    rIrg    = rIrg - Abat;
    // 1= Normal 2= Handicape
    if  (Type_IRG ==1) {
            if (Soumis <= 35000) 
                rIrg = rIrg * (137/51)-(27925/8)
    }
    else{//---->Handicape
            if (Soumis < 42500) 
                rIrg = rIrg * (93/61)-(81213/41)
        }    

return financial(rIrg)
}


var dataSoumis = document.getElementById("soumis");
var dataResult = document.getElementById("result");
var getSelectedValue = document.querySelector( 'input[name="irg-type"]:checked');
var soumisValue = localStorage.getItem("soumisValue");
var irgValue = localStorage.getItem("irgValue");
var typeIrg = localStorage.getItem("typeIrg");

if (soumisValue !== null && irgValue !== null && typeIrg !== null){
    soumisValue = parseFloat(soumisValue);
    irgValue = parseFloat(irgValue);
    dataSoumis.value = parseFloat(soumisValue);
    dataResult.value = parseFloat(irgValue);
    if (typeIrg == "1"){
        document.getElementById("type1").checked = true
    }
    else {
        document.getElementById("type2").checked = true
    }
    localStorage.removeItem("soumisValue");
    localStorage.removeItem("irgValue");
    localStorage.removeItem("typeIrg");
}

function putResult(){
    localStorage.setItem("soumisValue", dataSoumis.value);
 
    var getSelectedValue = document.querySelector( 'input[name="irg-type"]:checked');
    console.log(getSelectedValue.value);
    if(getSelectedValue.value === "1") {
        var info = IRG_2022(1, parseFloat(dataSoumis.value));
    }
    else {
        var info = IRG_2022(2, parseFloat(dataSoumis.value));
    }

    
    localStorage.setItem("irgValue", info);
    localStorage.setItem("typeIrg", getSelectedValue.value);
}
