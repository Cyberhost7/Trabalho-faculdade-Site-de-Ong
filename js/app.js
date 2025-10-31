function initMobileMenu() {
    const toggler = document.getElementById('navbar-toggler');
    const menu = document.getElementById('navbar-menu');

    if (toggler && menu) {
        toggler.addEventListener('click', () => {
            menu.classList.toggle('is-active');
            const isExpanded = menu.classList.contains('is-active');
            toggler.setAttribute('aria-expanded', isExpanded);
        });
    }
}

const templateHome = () => {
    return `
        <section class="hero-section">
            <div class="container row">
                <div class="col-lg-6 hero-content">
                    <span class="badge badge-secondary">Bem-vindo</span>
                    <h1>Transformando Vidas, Construindo Futuros</h1>
                    <p>Nossa missão é criar oportunidades e transformar realidades através da educação e apoio comunitário.</p>
                    <a href="#/projetos" class="btn btn-primary">Conheça os Projetos</a>
                    <a href="#/cadastro" class="btn btn-secondary">Seja Voluntário</a>
                </div>
                <div class="col-lg-6 hero-image">
                    <picture>
                        <source srcset="imagens/banner-home.webp" type="image/webp">
                        <img src="imagens/banner-home.jpg" alt="Crianças sorrindo em uma sala de aula de projeto social">
                    </picture>
                </div>
            </div>
        </section>
        <section class="container section-padding">
            <div class="row">
                <div class="col-md-6">
                    <h2>Nossa Missão</h2>
                    <p>Promover o desenvolvimento humano e social de comunidades em situação de vulnerabilidade, com foco na educação.</p>
                </div>
                <div class="col-md-6">
                    <h2>Visão e Valores</h2>
                    <p>Acreditamos em um futuro onde todos têm acesso a oportunidades justas, pautados pela ética, transparência e empatia.</p>
                </div>
            </div>
        </section>
    `;
};

const templateProjects = () => {
    return `
        <div class="container section-padding">
            <h1 class="text-center">Nossos Projetos e Como Ajudar</h1>
            <section aria-labelledby="projetos-titulo" class="section-padding">
                <h2 id="projetos-titulo">Conheça Nossas Iniciativas</h2>
                <div class="row">
                    <div class="col-md-6 col-lg-4">
                        <div class="card">
                            <img src="imagens/projeto-educacao.jpg" alt="Projeto Semente do Amanhã">
                            <div class="card-body">
                                <span class="badge badge-primary">Educação</span>
                                <h3 class="card-title">Semente do Amanhã</h3>
                                <p>Oferecemos reforço escolar e atividades culturais para crianças de 6 a 12 anos.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="card">
                            <img src="imagens/banner-voluntariado.jpg" alt="Projeto Mãos que Ajudam">
                            <div class="card-body">
                                <span class="badge badge-primary">Comunidade</span>
                                <h3 class="card-title">Mãos que Ajudam</h3>
                                <p>Distribuição de cestas básicas e itens de higiene para famílias em emergência.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    `;
};

const templateCadastro = () => {
    return `
        <div class="container section-padding">
            <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <h1>Formulário de Cadastro</h1>
                    <p>Preencha o formulário abaixo. Campos com * são obrigatórios.</p>
                    
                    <div id="form-feedback" role="alert" style="display: none;"></div>

                    <form id="registration-form" class="styled-form" novalidate>
                        
                        <fieldset>
                            <legend>Dados Pessoais</legend>
                            
                            <div>
                                <label for="nome">Nome Completo: *</label>
                                <input type="text" id="nome" name="nome_completo" required minlength="3">
                                <div class="form-error"></div>
                            </div>
                            
                            <div>
                                <label for="email">E-mail: *</label>
                                <input type="email" id="email" name="email" required>
                                <div class="form-error"></div>
                            </div>

                            <div>
                                <label for="cpf">CPF: *</label>
                                <input type="text" id="cpf" name="cpf" required placeholder="123.456.789-00">
                                <div class="form-error"></div>
                            </div>

                            <div>
                                <label for="telefone">Telefone: *</label>
                                <input type="tel" id="telefone" name="telefone" required placeholder="(21) 91234-5678">
                                <div class="form-error"></div>
                            </div>
                            
                            <div>
                                <label for="data_nasc">Data de Nascimento: *</label>
                                <input type="date" id="data_nasc" name="data_nascimento" required>
                                <div class="form-error"></div>
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend>Endereço</legend>

                            <div>
                                <label for="cep">CEP: *</label>
                                <input type="text" id="cep" name="cep" required placeholder="12345-678">
                                <div class="form-error"></div>
                            </div>
                        </fieldset>
                        
                        <button type="submit" class="btn btn-primary">Enviar Cadastro</button>
                    </form>
                </div>
            </div>
        </div>
    `;
};

const routes = {
    '/': templateHome,
    '/projetos': templateProjects,
    '/cadastro': templateCadastro
};

const pageContent = document.getElementById('page-content');

function router() {
    const path = window.location.hash.substring(1) || '/';
    const template = routes[path];

    if (template) {
        pageContent.innerHTML = template();
        
        if (path === '/cadastro') {
            initFormValidation();
        }
    } else {
        pageContent.innerHTML = '<div class="container section-padding"><h1 class="text-center">Erro 404: Página Não Encontrada</h1></div>';
    }

    document.getElementById('navbar-menu').classList.remove('is-active');
    document.getElementById('navbar-toggler').setAttribute('aria-expanded', 'false');
    
    window.scrollTo(0, 0);
}

function initFormValidation() {
    const form = document.getElementById('registration-form');
    if (!form) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        
        const isValid = validateForm(form);
        const feedback = document.getElementById('form-feedback');

        if (isValid) {
            feedback.className = 'alert alert-success';
            feedback.textContent = 'Cadastro enviado com sucesso! (Simulação)';
            feedback.style.display = 'block';
            form.reset();
        } else {
            feedback.className = 'alert alert-danger';
            feedback.textContent = 'Por favor, corrija os erros no formulário.';
            feedback.style.display = 'block';
        }
    });
}

function validateForm(form) {
    let allValid = true;
    
    form.querySelectorAll('.form-error').forEach(el => el.textContent = '');

    const requiredInputs = form.querySelectorAll('input[required]');
    requiredInputs.forEach(input => {
        if (!input.value.trim()) {
            showError(input, 'Este campo é obrigatório.');
            allValid = false;
        }
    });

    const email = form.querySelector('#email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value && !emailRegex.test(email.value)) {
        showError(email, 'Por favor, insira um e-mail válido.');
        allValid = false;
    }

    const cpf = form.querySelector('#cpf');
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (cpf.value && !cpfRegex.test(cpf.value)) {
        showError(cpf, 'Formato inválido. Use: 123.456.789-00');
        allValid = false;
    }

    const telefone = form.querySelector('#telefone');
    const telRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
    if (telefone.value && !telRegex.test(telefone.value)) {
        showError(telefone, 'Formato inválido. Use: (XX) XXXXX-XXXX');
        allValid = false;
    }
    
    const cep = form.querySelector('#cep');
    const cepRegex = /^\d{5}-\d{3}$/;
    if (cep.value && !cepRegex.test(cep.value)) {
        showError(cep, 'Formato inválido. Use: 12345-678');
        allValid = false;
    }

    return allValid;
}

function showError(inputElement, message) {
    const errorDiv = inputElement.nextElementSibling;
    if (errorDiv) {
        errorDiv.textContent = message;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    router();
});

window.addEventListener('hashchange', router);

function initThemeSwitcher() {
    const toggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            let theme = 'light';
            if (document.body.classList.contains('dark-mode')) {
                theme = 'dark';
            }
            localStorage.setItem('theme', theme);
        });
    }
}


window.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();   
    initThemeSwitcher();  
    router();            
});
window.addEventListener('hashchange', router);