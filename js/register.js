const form=document.getElementById("form");
const inputs=document.querySelectorAll("#form input");
const expresiones={
    name:/^[a-zA-ZÀ-ÿ\s]{1,25}$/,
    ci: /^\d{5,9}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{6,12}$/
}
const validarform=(v)=>{
    switch(v.target.name){
        case 'name':
            if(expresiones.name.test(v.target.value)){
                
            }
        break;
    }
}
inputs.forEach((input)=>{
    input.addEventListener('keyup',validarform);
    input.addEventListener('listener',validarform);
});