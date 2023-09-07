window.addEventListener("scroll", function(){
   let hearder =  document.querySelector('.cabecalho')
   hearder.classList.toggle('rolagem' ,window.scrollY > 0)
})

const btn = document.querySelector('button');

btn.addEventListener('click', function(){
   alert('obrigado pelo contato em breve o retornaremos!!!')
});

