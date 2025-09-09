/**
 * Contact Page JavaScript for Haidi Fathur Rahman Portfolio
 */

document.addEventListener('DOMContentLoaded', function() {
    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    const formSuccessMessage = document.createElement('div');
    formSuccessMessage.className = 'form-success-message';
    formSuccessMessage.innerText = 'Pesan Anda telah berhasil dikirim. Saya akan segera menghubungi Anda!';
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Remove any existing validation messages
            clearFormErrors();
            
            // Validate form
            let isValid = validateForm();
            
            if (isValid) {
                // Simulate form submission (in a real project, you would send data to server)
                const submitBtn = contactForm.querySelector('.submit-btn');
                const btnText = submitBtn.querySelector('.btn-text');
                const btnIcon = submitBtn.querySelector('.btn-icon');
                const originalText = btnText.innerText;
                
                // Disable button and show loading state
                submitBtn.disabled = true;
                btnText.innerText = 'Mengirim...';
                btnIcon.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
                
                // Simulate API call delay
                setTimeout(() => {
                    // Reset button state
                    submitBtn.disabled = false;
                    btnText.innerText = originalText;
                    btnIcon.innerHTML = '<i class="fas fa-paper-plane"></i>';
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Show success message
                    if (!document.querySelector('.form-success-message')) {
                        contactForm.parentNode.appendChild(formSuccessMessage);
                    }
                    formSuccessMessage.classList.add('show');
                    
                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        formSuccessMessage.classList.remove('show');
                    }, 5000);
                }, 1500);
            }
        });
    }
    
    // Form Validation
    function validateForm() {
        let isValid = true;
        
        // Name validation
        const nameInput = document.getElementById('name');
        if (!nameInput.value.trim()) {
            showError(nameInput, 'Nama tidak boleh kosong');
            isValid = false;
        }
        
        // Email validation
        const emailInput = document.getElementById('email');
        if (!emailInput.value.trim()) {
            showError(emailInput, 'Email tidak boleh kosong');
            isValid = false;
        } else if (!isValidEmail(emailInput.value)) {
            showError(emailInput, 'Masukkan alamat email yang valid');
            isValid = false;
        }
        
        // Subject validation
        const subjectInput = document.getElementById('subject');
        if (!subjectInput.value.trim()) {
            showError(subjectInput, 'Subjek tidak boleh kosong');
            isValid = false;
        }
        
        // Message validation
        const messageInput = document.getElementById('message');
        if (!messageInput.value.trim()) {
            showError(messageInput, 'Pesan tidak boleh kosong');
            isValid = false;
        }
        
        return isValid;
    }
    
    // Show error message
    function showError(input, message) {
        const formGroup = input.parentElement;
        formGroup.classList.add('error');
        
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.innerText = message;
        
        formGroup.appendChild(errorMessage);
    }
    
    // Clear all form errors
    function clearFormErrors() {
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(element => element.remove());
        
        const errorFields = document.querySelectorAll('.form-group.error');
        errorFields.forEach(field => field.classList.remove('error'));
        
        // Remove success message if exists
        const successMessage = document.querySelector('.form-success-message');
        if (successMessage) {
            successMessage.classList.remove('show');
        }
    }
    
    // Validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close other open items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // Update form labels based on selected language
    function updateFormLabels(lang) {
        const langKey = lang === 'en' ? 'en' : 'id';
        const labels = {
            id: {
                name: 'Nama Lengkap',
                email: 'Email',
                subject: 'Subjek',
                message: 'Pesan',
                submit: 'Kirim Pesan',
                success: 'Pesan Anda telah berhasil dikirim. Saya akan segera menghubungi Anda!'
            },
            en: {
                name: 'Full Name',
                email: 'Email',
                subject: 'Subject',
                message: 'Message',
                submit: 'Send Message',
                success: 'Your message has been successfully sent. I will contact you soon!'
            }
        };
        
        // Update form labels
        document.querySelector('label[for="name"]').innerText = labels[langKey].name;
        document.querySelector('label[for="email"]').innerText = labels[langKey].email;
        document.querySelector('label[for="subject"]').innerText = labels[langKey].subject;
        document.querySelector('label[for="message"]').innerText = labels[langKey].message;
        
        // Update submit button text
        const submitBtn = document.querySelector('.submit-btn .btn-text');
        if (submitBtn) {
            submitBtn.innerText = labels[langKey].submit;
        }
        
        // Update success message
        formSuccessMessage.innerText = labels[langKey].success;
    }
    
    // Listen for language change event
    document.addEventListener('languageChanged', function(e) {
        updateFormLabels(e.detail.language);
    });
});