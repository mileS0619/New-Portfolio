window.addEventListener('DOMContentLoaded', function() {
    // Read More modal functionality removed as requested

    document.querySelectorAll('.bigp').forEach(el => {
        const target = parseInt(el.textContent, 10);
        let current = 0;
        el.textContent = '0';
        if (isNaN(target) || target === 0) return;
        const duration = 1200; // ms
        const stepTime = Math.max(Math.floor(duration / target), 30);
        const step = () => {
            current++;
            el.textContent = current;
            if (current < target) {
                setTimeout(step, stepTime);
            }
        };
        setTimeout(step, stepTime);
    });


    document.querySelectorAll('.dropdown-skill').forEach(box => {
        box.addEventListener('click', function(e) {           
            if (box.classList.contains('loading')) return;
            if (box.classList.contains('open')) {
                box.classList.remove('open');
                return;
            }
            box.classList.add('loading');
            
            const bar = box.querySelector('.loading-bar');
            if (bar) {
                bar.style.animation = 'none';
        
                void bar.offsetWidth;
                bar.style.animation = null;
            }
            setTimeout(() => {
                box.classList.remove('loading');
                box.classList.add('open');
            }, 100);
        });
    });
});
window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.button1[data-offer]').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const offer = btn.getAttribute('data-offer');
            const modal = document.querySelector(.offer-modal-bg[data-offer="${offer}"]);

            document.querySelectorAll('.offer-modal-bg').forEach(m => m.classList.remove('active'));
            document.body.classList.remove('blur');

            if (modal) {
                modal.classList.add('active');
                document.body.classList.add('blur');
            }
        });
    });


    document.querySelectorAll('.offer-modal-bg').forEach(function(bg) {
        bg.addEventListener('click', function(e) {
            if (e.target === bg) {
                bg.classList.remove('active');
                document.body.classList.remove('blur');
            }
        });

    
        const closeBtn = bg.querySelector('.offer-modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                bg.classList.remove('active');
                document.body.classList.remove('blur');
            });
        }
    });

    document.querySelectorAll('.bigp').forEach(el => {
        const target = parseInt(el.textContent, 10);
        let current = 0;
        el.textContent = '0';
        if (isNaN(target) || target === 0) return;
        const duration = 1200; // ms
        const stepTime = Math.max(Math.floor(duration / target), 30);
        const step = () => {
            current++;
            el.textContent = current;
            if (current < target) {
                setTimeout(step, stepTime);
            }
        };
        setTimeout(step, stepTime);
    });


    document.querySelectorAll('.dropdown-skill').forEach(box => {
        box.addEventListener('click', function(e) {           
            if (box.classList.contains('loading')) return;
            if (box.classList.contains('open')) {
                box.classList.remove('open');
                return;
            }
            box.classList.add('loading');
            
            const bar = box.querySelector('.loading-bar');
            if (bar) {
                bar.style.animation = 'none';
        
                void bar.offsetWidth;
                bar.style.animation = null;
            }
            setTimeout(() => {
                box.classList.remove('loading');
                box.classList.add('open');
            }, 100);
        });
    });
});