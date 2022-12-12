
$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').on('click', function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const url = $('#url').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src='${url}' />`).appendTo(novoItem);
        $(`
            <div class='overlay-imagem-link'>
                <a href="${url}" title="Ver imagem em tamanho real" target="_blank">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#url').val('');
    })
})

