var style= document.getElementById("style");
var selectUser= style.options[style.selectedIndex].value;
var quantityPerdz= document.getElementById("quantityPerdz");
var dzPerbox= document.getElementById("dzPerbox");



function capturarInfo(){
    console.log(style.value)
    console.log(quantityPerdz.value)
    console.log(dzPerbox.value)


    if (style.value == 'BSH' && dzPerbox.value == 2){
        var bsh2dz = (0.026316/dzPerbox.value)*quantityPerdz.value
        bsh2dz.type = "number";
        swal({text: "CBM = " + bsh2dz});
    } 

    // if (style.value == 'BSH' && dzPerbox.value == 2){
    //     alert( (0.026316/dzPerbox.value)*quantityPerdz.value )
    // } 

    // else if (style.value == 'BSH' && dzPerbox.value == 3) { 
    //     var bsh3dz = (0.03655/dzPerbox.value)*quantityPerdz.value;
    //     bsh3dz.type = "number";
    //     swal({content: bsh3dz})
        
        
    // }

                    // VESTIDOS DE BAÑO

    else if (style.value == 'BSH' && dzPerbox.value == 3) { 
        var bsh3dz = (0.03655/dzPerbox.value)*quantityPerdz.value;
        bsh3dz.type = "number";
        swal({text: "CBM = " + bsh3dz});
           
    }

                    // T-SHIRTS Y CAMISETAS IMPRESAS JC

    else if (style.value == 'NTS_NPS' && dzPerbox.value == 2) { 
        var ntsNps2dz = (0.01536/dzPerbox.value)*quantityPerdz.value;
        ntsNps2dz.type = "number";
        swal({text: "CBM = " + ntsNps2dz});
           
    }

                        // TERRRY

    else if (style.value == 'TJ' && dzPerbox.value == 2) { 
        var tj2dz = (0.05488/dzPerbox.value)*quantityPerdz.value;
        tj2dz.type = "number";
        swal({text: "CBM = " + tj2dz});
           
    }

    else if (style.value == 'TP' && dzPerbox.value == 2) { 
        var tp2dz = (0.0408/dzPerbox.value)*quantityPerdz.value;
        tp2dz.type = "number";
        swal({text: "CBM = " + tp2dz});
           
    }

    else if (style.value == 'TS' && dzPerbox.value == 2) { 
        var ts2dz = (0.0255/dzPerbox.value)*quantityPerdz.value;
        ts2dz.type = "number";
        swal({text: "CBM = " + ts2dz});
           
    }

                    // T-SHIRT LISOS

    else if (style.value == 'CS_VS' && dzPerbox.value == 1) { 
        var csVs1dz = (0.0084/dzPerbox.value)*quantityPerdz.value;
        csVs1dz.type = "number";
        swal({text: "CBM = " + csVs1dz});
           
    }

    else if (style.value == 'CSL' && dzPerbox.value == 1) { 
        var csl1dz = (0.00945/dzPerbox.value)*quantityPerdz.value;
        csl1dz.type = "number";
        swal({text: "CBM = " + csl1dz});
           
    }

    else if (style.value == 'HSL' && dzPerbox.value == 1) { 
        var hsl1dz = (0.0126/dzPerbox.value)*quantityPerdz.value;
        hsl1dz.type = "number";
        swal({text: "CBM = " + hsl1dz});
           
    }




    // else if (style.value == 'BSH' && dzPerbox.value == 3) { 
    //     var bsh3dz = (0.03655/dzPerbox.value)*quantityPerdz.value;
    //     bsh3dz.type = "number";
    //     alert(bsh3dz)
    // }

    // else if (style.value == 'BSH' && dzPerbox.value == 3) { 
    //     swal( (0.03655/dzPerbox.value)*quantityPerdz.value )
    // } 
    
    else {
        swal('LOS VALORES NO CONCUERDAN')
    }
;}











