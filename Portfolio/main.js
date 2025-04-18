 // Botao tema Escuro e branco
    document.addEventListener('DOMContentLoaded', function () {
        const toggle = document.getElementById('toggle-theme');
    
        // Aplica o tema salvo (se houver)
        if (localStorage.getItem('theme') === 'dark') {
          document.body.classList.add('dark-mode');
          toggle.checked = true;
        }
    
        // Troca o tema ao clicar
        toggle.addEventListener('change', function () {
          if (this.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
          } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
          }
        });
      });


      'use strict';

'use strict';


document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("[data-nav-link]");
    const pages = document.querySelectorAll("[data-page]");
  
    navLinks.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        // Remover classe .active de todos os botões e artigos
        navLinks.forEach(link => link.classList.remove("active"));
        pages.forEach(page => page.classList.remove("active"));
  
        // Adicionar classe .active no botão clicado e respetivo artigo
        btn.classList.add("active");
        pages[index].classList.add("active");
      });
    });
  });

//Opening or closing side bar

const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function() {elementToggleFunc(sidebar); })

// Get modal elements
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".modal-close");

// Get all project images
const projectImages = document.querySelectorAll(".project-img img");

// Add click event to each image
projectImages.forEach(img => {
  img.addEventListener("click", function (e) {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
  });
});

// Close modal on close button click
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// Optional: close modal when clicking outside the image
modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Enabling Contact Form

const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener('input', function () {
        if (form.checkValidity()) {
            formBtn.removeAttribute('disabled');
        } else {
            formBtn.setAttribute('disabled', '');
        }
    });
}

// Enabling Page Navigation 

const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

for(let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener('click', function() {
        
        for(let i = 0; i < pages.length; i++) {
            if(this.innerHTML.toLowerCase() == pages[i].dataset.page) {
                pages[i].classList.add('active');
                navigationLinks[i].classList.add('active');
                window.scrollTo(0, 0);
            } else {
                pages[i].classList.remove('active');
                navigationLinks[i]. classList.remove('active');
            }
        }
    });
}