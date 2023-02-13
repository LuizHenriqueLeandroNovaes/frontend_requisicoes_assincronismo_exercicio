const cartoes = document.querySelectorAll('.card') ;

async function loadUserData(){

    try{

        const resposta = await api.get('/users') ;

        const users = resposta.data;

        console.log(resposta);

        cartoes.forEach(( card , indice ) => {

            const h1 = card.querySelector('h1') ;
            const span = card.querySelector('span') ;
            const strong = card.querySelector('strong') ;

            h1.textContent = users[indice].name ;
            span.textContent = users[indice].email ;
            strong.textContent = users[indice].phone ;

        });

    } catch (errado) { 
        console.log(errado.resposta.data); }    
}


loadUserData();