
function myFunction() {
  
  //NÚMERO DE CONTROL
  
  let x1 = document.getElementById("nc").value;
 // const regex = /^(p|s).+(o|a)$/i;
 const regex = /^(m|c)?[0-9]{2}(120|121)[0-9]{3}$/i;
 const valNC = regex.exec(x1); 
 
  if (regex.test(x1)) {
    text="Número de control valido";
   console.log(""+valNC);}
  else {
    text="Número de control no valido";
  }

  document.getElementById("valida_numeroc").innerHTML = text;
  //CORREO
  let x2 = document.getElementById("correo").value;
  const regex2 = /^(l)((m|c)?[0-9]{2}(120|121)[0-9]{3})(@morelia.tecnm.mx)$/i;

  if (regex2.test(x2)) {
    const Correo = regex2.exec(x2); 
    console.log(""+Correo);
    console.log("Correo: "+Correo[2]);
    console.log("Número de control: "+valNC[0]);


    if(Correo[2] == valNC[0]){
    text="Correo valido";
    console.log("CHIDO");
    text ="Correo válido";
    document.getElementById("Correo_valido").innerHTML = text;
    
  
  }else{
      
      console.log("NOT CHIDO")
      text ="Correo NO válido";
      document.getElementById("Correo_valido").innerHTML = text;
      text="El correo no coincide con el número de control";
    document.getElementById("valida_correo").innerHTML = text;
    }
    
  }
  
    //RFC
    
    let x3 = document.getElementById("RFC").value;
    // const regex = /^(p|s).+(o|a)$/i;
    const regex3 = /^[A-Z]{4}([0-9]{6})\w{3}$/i;
    const FechaNac = regex3.exec(x3); 
     if (regex3.test(x3)) {
       text="RFC valido";
       console.log("Fecha de nacimiento: "+FechaNac)
     }
     else {
       text="RFC no valido";
     }
   
     document.getElementById("valida_RFC").innerHTML = text;

     //NÚMERO CELULAR
     
    let x4 = document.getElementById("numero").value;
    // const regex = /^(p|s).+(o|a)$/i;
    const regex4 = /(443)[0-9]{7}$/i;
    const NoC = regex4.exec(x4); 

     if (regex4.test(x4)) {
       text="Número valido";
     }
     else {
       text="Número no valido";
     }
     document.getElementById("valida_numero").innerHTML = text;

     let x5 = document.getElementById("nombre").value;
     const regex5 = /[A-Z a-z]*[a-z]*/i;
     const nombre = regex5.exec(x5); 
     console.log("Nombre: "+nombre);
     const Concatenados = "Usuario verificado: "+nombre+" nacido el "+FechaNac[1];
     document.getElementById("Datos_Generados").innerHTML = Concatenados;

}
