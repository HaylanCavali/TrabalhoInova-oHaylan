
/* =========================================
   CONECTA - IDENTIDADE VISUAL
   ========================================= */

@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap');

:root {
    --bg: #0d1025;
    --panel: #171b38;
    --panel2: #1d2244;
    --text: #f7f7ff;
    --muted: #a5a9c8;
    --purple: #9b78ff;
    --blue: #48c8ff;
    --pink: #ff76b7;
    --line: rgba(255,255,255,.09);
}

/* =========================================
   CONFIGURAÇÕES GERAIS
   ========================================= */

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    background:
        radial-gradient(
            circle at 50% -10%,
            #28215c 0,
            transparent 38%
        ),
        var(--bg);

    color: var(--text);
    font-family: 'DM Sans', sans-serif;
    min-height: 100vh;
    padding: 22px 14px;
}

.app-shell {
    width: 100%;
    max-width: 425px;
    margin: 0 auto;
    overflow: hidden;
}

/* =========================================
   CABEÇALHO
   ========================================= */

.topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 3px 22px;
}

.brand {
    display: flex;
    align-items: center;
    gap: 9px;

    color: white;
    text-decoration: none;

    font: 700 23px 'Space Grotesk', sans-serif;
    letter-spacing: -1px;
}

.brand-mark {
    display: grid;
    place-items: center;

    width: 32px;
    height: 32px;

    border-radius: 11px;

    background: linear-gradient(
        135deg,
        #9d79ff,
        #4acbff
    );

    color: #10132d;
    font-size: 20px;
}

.brand-dot {
    color: var(--blue);
}

.status-pill {
    font-size: 10px;
    color: #b7f6db;

    background: #173c3b;

    padding: 7px 10px;
    border-radius: 30px;
}

.status-pill i {
    display: inline-block;

    width: 6px;
    height: 6px;

    background: #48e0a4;
    border-radius: 50%;

    margin-right: 5px;
}

/* =========================================
   DESTAQUE INICIAL
   ========================================= */

.hero {
    position: relative;

    min-height: 250px;

    padding: 24px 20px;

    border: 1px solid rgba(161,128,255,.23);
    border-radius: 25px;

    background: linear-gradient(
        115deg,
        #27205a 0%,
        #20244d 54%,
        #123a58 100%
    );

    overflow: hidden;
}

.hero-copy {
    position: relative;
    z-index: 2;
    max-width: 265px;
}

.eyebrow {
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 1.5px;
    color: var(--blue);
}

h1 {
    font: 700 30px/1.08 'Space Grotesk', sans-serif;
    letter-spacing: -1.2px;
    margin: 12px 0;
}

h1 span {
    background: linear-gradient(
        90deg,
        #b69aff,
        #60d9ff
    );

    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.hero p {
    font-size: 11px;
    line-height: 1.6;

    color: #c5c8e3;

    max-width: 245px;
    margin: 0 0 17px;
}

/* =========================================
   BOTÕES PRINCIPAIS
   ========================================= */

.primary-btn {
    border: 0;
    border-radius: 12px;

    padding: 12px 16px;

    background: linear-gradient(
        100deg,
        #9c78ff,
        #4bcaff
    );

    color: #11142d;

    font: 800 11px 'DM Sans';

    cursor: pointer;

    box-shadow: 0 7px 20px #795dff33;

    transition: transform .2s, filter .2s;
}

.primary-btn:hover {
    transform: translateY(-2px);
    filter: brightness(1.1);
}

.primary-btn:active {
    transform: scale(.97);
}

.full {
    width: 100%;
    margin-top: 2px;
}

.secondary-btn {
    border: 1px solid #5c568a;

    background: transparent;
    color: #c8c4e8;

    padding: 11px;

    border-radius: 10px;

    font: 700 10px 'DM Sans';

    cursor: pointer;
}

.secondary-btn:disabled {
    opacity: .35;
    cursor: not-allowed;
}

/* =========================================
   ELEMENTOS DECORATIVOS
   ========================================= */

.hero-art {
    position: absolute;

    right: -8px;
    top: 37px;

    width: 155px;
    height: 170px;
}

.orbit {
    position: absolute;

    border: 1px solid #b9a5ff55;
    border-radius: 50%;

    transform: rotate(-25deg);
}

.orbit-one {
    width: 150px;
    height: 90px;

    top: 35px;
    left: 0;
}

.orbit-two {
    width: 125px;
    height: 155px;

    top: 3px;
    left: 13px;

    transform: rotate(35deg);
}

.book {
    position: absolute;

    top: 47px;
    left: 48px;

    width: 65px;
    height: 65px;

    border-radius: 20px;

    display: grid;
    place-items: center;

    font-size: 40px;
    color: #151735;

    background: linear-gradient(
        140deg,
        #d0baff,
        #56d6ff
    );

    box-shadow: 0 0 45px #8b76ff88;

    transform: rotate(-12deg);
}

.float {
    position: absolute;
    color: #c8baff;
}

.f1 {
    top: 14px;
    right: 20px;
    font-size: 25px;
}

.f2 {
    bottom: 20px;
    left: 10px;
    font-size: 20px;
}

.f3 {
    right: 12px;
    bottom: 32px;

    color: #55d5ff;
    font-size: 13px;
}

/* =========================================
   MENU DE NAVEGAÇÃO
   ========================================= */

.tabs {
    display: flex;
    gap: 5px;

    padding: 6px;
    margin: 17px 0 22px;

    background: #171a35;
    border: 1px solid var(--line);
    border-radius: 15px;
}

.tab {
    flex: 1;

    border: 0;
    background: transparent;

    color: #a7abc9;

    padding: 10px 2px;

    border-radius: 10px;

    font: 700 9px 'DM Sans';

    cursor: pointer;
    white-space: nowrap;

    transition: .2s;
}

.tab span {
    font-size: 14px;
    margin-right: 3px;
}

.tab.active {
    background: linear-gradient(
        100deg,
        #8f6cff,
        #4abff4
    );

    color: #10132b;
}

/* =========================================
   TROCA ENTRE TELAS
   ========================================= */

.view {
    display: none;
    animation: fade .25s ease;
}

.view.active {
    display: block;
}

@keyframes fade {
    from {
        opacity: .3;
        transform: translateY(5px);
    }

    to {
        opacity: 1;
        transform: none;
    }
}

/* =========================================
   TÍTULOS DAS SEÇÕES
   ========================================= */

.section-heading {
    display: flex;
    align-items: end;
    justify-content: space-between;

    margin: 0 2px 14px;
}

.section-heading h2 {
    font: 700 21px 'Space Grotesk';
    margin: 5px 0 0;
    letter-spacing: -.5px;
}

.count,
.live-label {
    font-size: 9px;
    color: var(--muted);
    padding-bottom: 4px;
}

.live-label {
    color: #78e5ba;
    font-weight: 700;
}

/* =========================================
   CARTÕES DE GRUPOS
   ========================================= */

.group-list {
    display: grid;
    gap: 10px;
}

.group-card {
    display: flex;
    align-items: center;
    gap: 11px;

    padding: 13px 11px;

    background: linear-gradient(
        135deg,
        #1a1e3d,
        #171a34
    );

    border: 1px solid var(--line);
    border-radius: 16px;
}

.subject-icon {
    width: 43px;
    height: 43px;

    flex-shrink: 0;

    display: grid;
    place-items: center;

    border-radius: 13px;

    font: 700 17px 'Space Grotesk';
}

.purple {
    background: #33275d;
    color: #bca7ff;
}

.blue {
    background: #163d54;
    color: #69d9ff;
}

.pink {
    background: #512943;
    color: #ff9aca;
}

.group-info {
    min-width: 0;
    flex: 1;
}

.tag {
    font-size: 8px;
    letter-spacing: 1px;

    color: var(--blue);
    font-weight: 800;
}

.group-info h3 {
    font-size: 12px;
    margin: 3px 0 4px;
}

.group-info p {
    font-size: 9px;
    color: var(--muted);

    margin: 0 0 7px;
    line-height: 1.4;
}

.meta {
    font-size: 8px;
    color: #c2c5df;
}

.meta span {
    margin-left: 8px;
    color: #8f94b6;
}

.join-btn {
    width: 27px;
    height: 27px;

    flex-shrink: 0;

    border: 1px solid #8e76ff66;
    border-radius: 9px;

    background: #29234e;
    color: #bca7ff;

    font-size: 17px;
    cursor: pointer;
}

/* =========================================
   CARTÃO DE DICA
   ========================================= */

.tip-card {
    display: flex;
    gap: 11px;

    margin-top: 13px;
    padding: 13px;

    background: linear-gradient(
        110deg,
        #20284a,
        #1c2842
    );

    border-radius: 14px;
    border: 1px solid #5d9ac533;
}

.tip-icon {
    color: #6bd7ff;
    font-size: 19px;
}

.tip-card strong {
    font-size: 10px;
}

.tip-card p {
    font-size: 9px;
    color: var(--muted);

    margin: 4px 0 0;
    line-height: 1.5;
}

/* =========================================
   ASSISTENTE DE IA
   ========================================= */

.ai-badge {
    font-size: 10px;
    font-weight: 800;

    color: #d0c0ff;

    background: #302655;
    border: 1px solid #8e72ff55;

    padding: 6px 9px;
    border-radius: 20px;
}

.form-card {
    padding: 17px;

    background: #171b38;
    border: 1px solid var(--line);

    border-radius: 18px;
}

label {
    display: block;

    font-size: 10px;
    font-weight: 700;

    margin: 0 0 7px;
    color: #e5e6f7;
}

input,
select {
    width: 100%;

    padding: 12px 11px;
    margin-bottom: 15px;

    border: 1px solid #34395f;
    border-radius: 10px;

    background: #10142d;
    color: white;

    font: 11px 'DM Sans';

    outline: none;
}

input:focus,
select:focus {
    border-color: #9b78ff;
}

input::placeholder {
    color: #73799d;
}

/* RESULTADO DA IA */

.ai-result {
    margin: 13px 0 11px;

    padding: 14px;

    border: 1px dashed #6f62a7;
    border-radius: 13px;

    background: #1d2040;
    min-height: 118px;
}

.result-placeholder {
    text-align: center;
    color: #a5a9c8;
}

.result-placeholder span {
    font-size: 22px;
    color: #b99dff;
}

.result-placeholder strong {
    display: block;

    font-size: 10px;
    color: #e8e6ff;

    margin: 5px;
}

.result-placeholder p {
    font-size: 9px;
    line-height: 1.5;
    margin: 0;
}

.result-content .result-title {
    font-size: 11px;
    font-weight: 800;

    color: #c7b4ff;
    margin-bottom: 9px;
}

.suggestion {
    display: flex;
    gap: 8px;

    margin: 8px 0;

    color: #e4e6f8;

    font-size: 10px;
    line-height: 1.4;
}

.suggestion b {
    color: #67d7ff;
}

.disclaimer {
    font-size: 9px;
    line-height: 1.5;

    color: #858bad;

    margin: 12px 3px;
}

/* =========================================
   PAINEL DE SUSTENTABILIDADE
   ========================================= */

.revenue-hero {
    position: relative;
    overflow: hidden;

    padding: 18px;

    border-radius: 18px;

    background: linear-gradient(
        120deg,
        #45327f,
        #174e68
    );

    min-height: 154px;
}

.revenue-hero > span {
    display: block;

    font-size: 8px;
    letter-spacing: 1.2px;

    color: #d1c8ff;
    font-weight: 800;
}

.revenue-hero strong {
    display: block;

    font: 700 29px 'Space Grotesk';

    margin: 8px 0 2px;
}

.revenue-hero strong span {
    font-size: 16px;
}

.revenue-hero small {
    font-size: 9px;
    color: #c5c9e8;
}

/* GRÁFICO DE BARRAS */

.revenue-bars {
    position: absolute;

    right: 16px;
    bottom: 17px;

    height: 72px;

    display: flex;
    align-items: end;
    gap: 5px;
}

.revenue-bars i {
    width: 9px;

    border-radius: 5px 5px 2px 2px;

    background: linear-gradient(
        #76e0ff,
        #a58aff
    );

    opacity: .8;
}

/* INDICADORES FINANCEIROS */

.metric-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;

    gap: 9px;
    margin: 11px 0 20px;
}

.metric {
    padding: 13px;

    background: #191d3a;
    border: 1px solid var(--line);

    border-radius: 13px;
}

.metric span {
    display: block;
    font-size: 15px;
    margin-bottom: 6px;
}

.metric strong {
    display: block;
    font: 700 17px 'Space Grotesk';
}

.metric small {
    display: block;

    color: var(--muted);
    font-size: 8px;

    margin-top: 3px;
}

/* FONTES DE RECEITA */

.compact {
    margin-bottom: 9px;
}

.compact h2 {
    font-size: 16px;
}

.revenue-row {
    display: flex;
    align-items: center;
    gap: 10px;

    padding: 11px 2px;

    border-bottom: 1px solid var(--line);
}

.revenue-icon {
    width: 34px;
    height: 34px;

    display: grid;
    place-items: center;

    border-radius: 10px;
}

.revenue-row div {
    flex: 1;
}

.revenue-row strong {
    display: block;
    font-size: 10px;
}

.revenue-row small {
    display: block;

    font-size: 8px;
    color: var(--muted);

    margin-top: 3px;
}

.revenue-row b {
    font-size: 10px;
    color: #8ce5d0;
}

/* =========================================
   RODAPÉ
   ========================================= */

footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-top: 1px solid var(--line);

    margin-top: 25px;
    padding: 15px 3px;

    color: #777d9e;
    font-size: 8px;
}

.brand-mini {
    font: 700 11px 'Space Grotesk';
    color: #c0b0ff;
}

/* =========================================
   RESPONSIVIDADE
   ========================================= */

@media (min-width: 500px) {

    body {
        padding-top: 35px;
    }

    .app-shell {
        border: 1px solid #303456;
        border-radius: 27px;

        padding: 0 18px 12px;

        background: #10132b;

        box-shadow: 0 25px 90px #0008;
    }

    .topbar {
        padding-top: 15px;
    }

}
