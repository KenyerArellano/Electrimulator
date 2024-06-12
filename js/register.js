const form=document.getElementById("form");
const inputs=document.querySelectorAll("#form input");
const expresiones={
    name:/^[a-zA-ZÀ-ÿ\s]{1,25}$/,
    ci: /^\d{5,9}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{6,12}$/,
}
const validarform=(v)=>{
    switch(v.target.name){
        case 'name':
            validarCampo(expresiones.name,v.target,v.target.name);
        break;
        case 'last-name':
            validarCampo(expresiones.name,v.target,v.target.name);
        break;
        case 'CI':
            validarCampo(expresiones.ci,v.target,v.target.name);
        break;
        case 'email':
            validarCampo(expresiones.email,v.target,v.target.name);
        break;
        case 'password':
            validarCampo(expresiones.password,v.target,v.target.name);
            validarPassword2();
        break;
        case 'confirm-password':
            validarPassword2();
        break;
    }
}
function validarCampo(expresion,input,campo){
    if(expresion.test(input.value)){
        document.getElementById(`check-valid-${campo}`).innerText="check_circle";
        document.getElementById(`check-invalid-${campo}`).innerText=" ";
        document.getElementById(`group-input__${campo}`).classList.remove("invalid");
        document.getElementById(`invalid-paragraph__${campo}`).classList.add("no-visible");
    }else{
        document.getElementById(`check-invalid-${campo}`).innerText="unpublished";
        document.getElementById(`check-valid-${campo}`).innerText=" ";
        document.getElementById(`group-input__${campo}`).classList.add("invalid");
        document.getElementById(`invalid-paragraph__${campo}`).classList.remove("no-visible");
    }
}
function validarPassword2(){
    const pass1=document.getElementById("password");
    const pass2=document.getElementById("confirm-password");
    if(pass1.value==pass2.value){
        document.getElementById("check-valid-confirm-password").innerText="check_circle";
        document.getElementById("check-invalid-confirm-password").innerText=" ";
        document.getElementById("group-input__confirm-password").classList.remove("invalid");
        document.getElementById("invalid-paragraph__confirm-password").classList.add("no-visible");
    }else{
        document.getElementById("check-invalid-confirm-password").innerText="unpublished";
        document.getElementById("check-valid-confirm-password").innerText=" ";
        document.getElementById("group-input__confirm-password").classList.add("invalid");
        document.getElementById("invalid-paragraph__confirm-password").classList.remove("no-visible");
    }
}
inputs.forEach((input)=>{
    input.addEventListener('keyup',validarform);
    input.addEventListener('blur',validarform);
});