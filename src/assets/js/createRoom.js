class ValidaCriacaoDeSala {
    constructor(){
        this.form = document.querySelector('.center');
        this.eventos();
    }

    eventos(){
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
    }

    camposSaoValidos(){
        let valid = true;

        for(let errorText of this.form.querySelectorAll('.error-text')){
            errorText.remove();
        }

        for(let campo of this.form.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;
            
            if(!campo.value) {
                this.criaErro(campo,`O campo "${label}" não pode estar em branco!`);
                valid = false;
            }

            if(campo.classList.contains('nome')){
                if(!this.validaNomeSala(campo)) valid = false;
            }

        }

        for(let campo1 of this.form.querySelectorAll('.validar-premiacao')) {
            const label = campo1.previousElementSibling.innerText;
            
            if(!campo1.value) {
                this.criaErro1(campo1,`O campo "${label}" não pode estar em branco!`);
                valid = false;
            }
        }
    }

    validaNomeSala(campo) {
        const nome = campo.value;
        let valid = true;

        if(nome.length < 3 || nome.length > 12){
            this.criaErro(campo, 'O nome da sala precisa ter entre 3 e 12 caracteres.');
            valid = false
        }

        if(!nome.match(/^[a-zA-Z0-9]+$/g)){
            this.criaErro(campo, 'O nome da sala precisa conter apenas letras e/ou números');
            valid = false
        }

        return valid;
    }

    criaErro(campo, msg) {
        const erros = document.querySelector('.errors');
        const erros1 = document.querySelector('.errors1');
        
        if(erros.classList.contains('errors')){
            const div = document.createElement('div');
            div.innerHTML = msg;
            div.classList.add('error-text');
            erros.insertAdjacentElement('afterend', div);
        }
    }
    criaErro1(campo1, msg) {
        const erros1 = document.querySelector('.errors1');
        
        if(erros1.classList.contains('errors1')){
            const div = document.createElement('div');
            div.innerHTML = msg;
            div.classList.add('error-text');
            erros1.insertAdjacentElement('afterend', div);
        }
    }

}

const inputSenha = document.querySelector('.input-senha-sala-privada');
const required = document.querySelector('.senha-privada');

function tipoOption(valor) {
    if(valor === '1'){
        inputSenha.style.display = 'flex';
        required.setAttribute("required", "required");
        console.log(valor)
    }

    if(valor === '0'){
        inputSenha.style.display = 'none';
        console.log(valor)
    }
}

const valida = new ValidaCriacaoDeSala();