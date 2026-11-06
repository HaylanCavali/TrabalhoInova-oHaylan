
/* =========================================
   CONECTA - JAVASCRIPT
   Funcionalidades e interatividade
   ========================================= */


/* =========================================
   1. NAVEGAÇÃO ENTRE AS TELAS
   ========================================= */

const tabs = document.querySelectorAll('.tab');
const views = document.querySelectorAll('.view');

function showTab(name) {

    // Ativa a opção selecionada no menu
    tabs.forEach(tab => {
        tab.classList.toggle(
            'active',
            tab.dataset.tab === name
        );
    });

    // Exibe somente a tela selecionada
    views.forEach(view => {
        view.classList.toggle(
            'active',
            view.id === name
        );
    });

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Eventos dos botões do menu
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        showTab(tab.dataset.tab);
    });
});

// Botão de criar grupo da tela inicial
document.querySelectorAll('[data-go]').forEach(button => {

    button.addEventListener('click', () => {
        showTab(button.dataset.go);
    });

});


/* =========================================
   2. ASSISTENTE SIMULADO DE INTELIGÊNCIA
      ARTIFICIAL
   ========================================= */

let currentSuggestion = null;

const disciplineInput =
    document.getElementById('discipline');

const result =
    document.getElementById('aiResult');

const publishBtn =
    document.getElementById('publishBtn');


/* FUNÇÃO PARA GERAR SUGESTÕES */

function createSuggestion() {

    const discipline = disciplineInput.value.trim();

    // Verifica se o usuário informou uma disciplina
    if (!discipline) {

        disciplineInput.focus();

        disciplineInput.placeholder =
            'Digite uma disciplina para continuar!';

        return;
    }

    // Obtém as informações selecionadas
    const level =
        document.getElementById('level').value;

    const goal =
        document.getElementById('goal').value;


    // Valores iniciais das recomendações
    let day = 'Terça-feira e quinta-feira';

    let time = '18h às 19h';

    let monitor =
        'Monitor voluntário da comunidade';

    let room =
        'Sala virtual Conecta 01';


    // Identifica a disciplina informada
    const normalized = discipline.toLowerCase();


    /* REGRAS DE RECOMENDAÇÃO */

    // MATEMÁTICA, FÍSICA E QUÍMICA
    if (
        /(matem|física|química)/.test(normalized)
    ) {

        day = 'Segunda-feira e quarta-feira';

        time = '17h30 às 18h30';

        monitor = 'Monitor de Ciências Exatas';

    }

    // PROGRAMAÇÃO E TECNOLOGIA
    else if (
        /(program|javascript|java|html|css|informática)/.test(normalized)
    ) {

        day = 'Terça-feira e sexta-feira';

        time = '19h às 20h';

        monitor = 'Monitor de Tecnologia';

    }

    // PORTUGUÊS E IDIOMAS
    else if (
        /(portugu|reda|literatura|inglês|espanhol)/.test(normalized)
    ) {

        day = 'Quarta-feira e sábado';

        time = '14h às 15h';

        monitor = 'Monitor de Linguagens';

    }

    // CIÊNCIAS HUMANAS E NATURAIS
    else if (
        /(biolog|história|geografia|filosofia|sociologia)/.test(normalized)
    ) {

        day = 'Terça-feira e quinta-feira';

        time = '16h às 17h';

        monitor =
            'Monitor de Ciências Humanas e Naturais';

    }


    // Armazena as informações geradas
    currentSuggestion = {

        discipline,
        level,
        goal,
        day,
        time,
        monitor,
        room

    };


    // Exibe o resultado na tela
    result.innerHTML = `

        <div class="result-content">

            <div class="result-title">
                ✧ Sugestão gerada para
                ${escapeHTML(discipline)}
            </div>

            <div class="suggestion">
                ◷
                <span>
                    <b>Melhor horário:</b>
                    ${day}, ${time}
                </span>
            </div>

            <div class="suggestion">
                ♙
                <span>
                    <b>Monitor sugerido:</b>
                    ${monitor}
                </span>
            </div>

            <div class="suggestion">
                ▣
                <span>
                    <b>Local:</b>
                    ${room}
                </span>
            </div>

            <div class="suggestion">
                ✦
                <span>
                    <b>Plano:</b>
                    ${goal.toLowerCase()}
                    · nível ${level.toLowerCase()}
                </span>
            </div>

        </div>

    `;


    // Libera o botão para publicar o grupo
    publishBtn.disabled = false;

}


/* =========================================
   3. PROTEÇÃO DE TEXTO HTML
   ========================================= */

function escapeHTML(value) {

    return value.replace(/[&<>"']/g, char => ({

        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'

    })[char]);

}


/* =========================================
   4. BOTÃO DE GERAR SUGESTÃO
   ========================================= */

document
    .getElementById('generateBtn')
    .addEventListener('click', createSuggestion);


/* =========================================
   5. PUBLICAÇÃO DE NOVOS GRUPOS
   ========================================= */

publishBtn.addEventListener('click', () => {

    // Verifica se existe uma sugestão
    if (!currentSuggestion) {
        return;
    }

    // Cria um novo cartão
    const item = document.createElement('article');

    item.className = 'group-card';

    const safe =
        escapeHTML(currentSuggestion.discipline);


    // Define o conteúdo do novo grupo
    item.innerHTML = `

        <div class="subject-icon blue">
            ✧
        </div>

        <div class="group-info">

            <span class="tag">
                ${safe.toUpperCase()}
            </span>

            <h3>
                ${safe} em grupo
            </h3>

            <p>
                ${escapeHTML(currentSuggestion.goal)}.
            </p>

            <div class="meta">

                ◷ ${escapeHTML(currentSuggestion.day)}
                · ${escapeHTML(currentSuggestion.time)}

                <span>
                    ♙ novo grupo
                </span>

            </div>

        </div>

        <span class="ai-badge">
            NOVO
        </span>

    `;


    // Adiciona o grupo no início da lista
    document
        .getElementById('groupList')
        .prepend(item);


    // Limpa o formulário
    disciplineInput.value = '';

    currentSuggestion = null;

    publishBtn.disabled = true;


    // Exibe mensagem de confirmação
    result.innerHTML = `

        <div class="result-placeholder">

            <span>✓</span>

            <strong>
                Grupo publicado!
            </strong>

            <p>
                Seu grupo foi adicionado
                à lista de grupos em destaque.
            </p>

        </div>

    `;


    // Volta para a tela inicial
    showTab('inicio');

});


/* =========================================
   6. PARTICIPAÇÃO NOS GRUPOS
   ========================================= */

function activateJoinButtons() {

    document.querySelectorAll('.join-btn').forEach(button => {

        // Evita adicionar o mesmo evento mais de uma vez
        if (button.dataset.initialized === 'true') {
            return;
        }

        button.dataset.initialized = 'true';

        button.addEventListener('click', () => {

            // Atualiza o botão após a participação
            button.textContent = '✓';

            button.disabled = true;

            button.style.color = '#75e5bc';

            button.style.borderColor = '#75e5bc';

            button.setAttribute(
                'aria-label',
                'Você está participando deste grupo'
            );

        });

    });

}


// Ativa os botões dos grupos existentes
activateJoinButtons();


/* =========================================
   7. MENSAGEM INICIAL NO CONSOLE
   ========================================= */

console.log(
    '✦ Conecta iniciado com sucesso!'
);

console.log(
    'Sistema de grupos de estudo carregado.'
);
