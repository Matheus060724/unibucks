// Garante que o arquivo html vai rodar primeiro
document.addEventListener('DOMContentLoaded', () => {
   
    // ele busca executar o codigo na classe especificada
    const header = document.querySelector('.header-nav');
  
    // isso aplica uma adapatção referente a rolagem da pagina
    window.addEventListener('scroll', () => {

        // Controle a refernte a tamnho da rolagem
      if (window.scrollY > 50) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    });
  });
  