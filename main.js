
        // Mobile Menu Toggle
        document.getElementById('menuToggle').addEventListener('click', function() {
            document.getElementById('navLinks').classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                document.getElementById('navLinks').classList.remove('active');
            });
        });
        
        // Header background on scroll
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Menu Category Filtering
        document.querySelectorAll('.category-btn').forEach(button => {
            button.addEventListener('click', function() {

                document.querySelectorAll('.category-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                

                this.classList.add('active');
                

                const category = this.getAttribute('data-category');
                
            
                document.querySelectorAll('.menu-item').forEach(item => {
                    if (category === 'all' || item.getAttribute('data-category') === category) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
        