$(document).ready(function(){
    $('#carrossel-imagens').slick({
        autoplay:true,
    })
})

$('.menu-hamburguer').click(function(){ 
    $('nav').slideToggle();
})

$('#telefone').mask('(00) 00000-0000') // Usamos para que o usuário coloque o telefone de forma correta

$('#identidade').mask('000.000.000-00') // Usamos para que o usuário coloque o CPF corretamente

$('#cep').mask('00000-000') // Usamos para que o usuário coloque o CEP corretamente

$('form').validate({ //Validação de formulário com JQuery
    rules: { // << Á baixo as regras do formulário
        nome: {
            required: true // Para que seja obrigatório o usuário colocar o nome.
        },
        email: {
            required: true, // email obrigatório
            email: true // email obrigatório
        },
        telefone: {
            required: true // telefone obrigatório
        },
        identidade: {
            required: true, // identidade obrigatório
        },
        cep: {
            required: true, // cep obrigatório 
        },
        mensagem: {
            required: false, // não é obrigatório preencher
        }
    }
})