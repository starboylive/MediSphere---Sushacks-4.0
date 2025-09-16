let 
    function toggleContact(element) {
            element.classList.toggle('active');
            
           
            const sign = element.querySelector('.contact-header span');
            sign.textContent = element.classList.contains('active') ? '-' : '+';
        }
        
       
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelectorAll('nav a').forEach(l => l.style.fontWeight = 'normal');
                this.style.fontWeight = 'bold';
            });
        });