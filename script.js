 const track = document.querySelector('.carousel-track');
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    const items = Array.from(document.querySelectorAll('.carousel-item'));

    let currentIndex = 0;

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });


    const dataInicio = new Date('2021-02-12');

    function atualizarContador() {
      const agora = new Date();
      

      const anos = agora.getFullYear() - dataInicio.getFullYear();
      const meses = agora.getMonth() - dataInicio.getMonth();
      const dias = agora.getDate() - dataInicio.getDate();
    

      let totalMeses = meses;
      if (totalMeses < 0) {
        totalMeses += 12;
      }
    

      let totalDias = dias;
      if (totalDias < 0) {
        const lastMonth = new Date(agora.getFullYear(), agora.getMonth(), 0); 
        totalDias += lastMonth.getDate();
      }
    
      document.getElementById('anos-num').innerText = anos;
      document.getElementById('meses-num').innerText = totalMeses;
      document.getElementById('dias-num').innerText = totalDias;
    }
    
    setInterval(atualizarContador, 1000);
    