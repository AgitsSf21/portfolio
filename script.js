document.addEventListener('DOMContentLoaded', () => {
    // Typing Effect Array
    const roles = ["Junior Web Developer", "Junior Mobile Developer", "IT Enthusiast"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingElement = document.querySelector('.typing-text');
    
    function typeEffect() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            // Hapus karakter
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Ketik karakter
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        // Kecepatan ketik vs hapus
        let typingSpeed = isDeleting ? 50 : 100;

        // Logika perpindahan kata
        if (!isDeleting && charIndex === currentRole.length) {
            typingSpeed = 2000; // Jeda sebelum menghapus
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500; // Jeda sebelum mengetik kata baru
        }

        setTimeout(typeEffect, typingSpeed);
    }

    // Mulai animasi mengetik
    setTimeout(typeEffect, 1000);
});
