function scrollToCardapio() {
    document.getElementById("cardapio").scrollIntoView({ behavior: "smooth" });
}

const destaquesSemana = {
    1: {
        titulo: "Segunda-feira — Tradições Brasileiras",
        pratos: [
            { nome: "Feijoada Completa", descricao: "Nossa tradicional feijoada com feijão preto, carnes selecionadas, arroz branco, farofa crocante e couve refogada. Servida com laranja.", img: "https://www.jornaldafranca.com.br/wp-content/uploads/2023/04/feijoada-freepik-1-scaled.jpg" },
            { nome: "Bife Acebolado", descricao: "Bife caseiro grelhado com cebolas, arroz, feijão e fritas.", img: "https://cdn.vnda.com.br/950x/brubins/2025/03/27/10_21_03_760_10_3_3_389_1204bifeaceboladosuculentotradicionalportoalegre2jpg.jpg?v=1743081674" },
            { nome: "Pudim", descricao: "Pudim tradicional de leite.", img: "https://assets.unileversolutions.com/recipes-v2/236947.jpg" }
        ]
    },
    2: {
        titulo: "Terça-feira — Fechado",
        fechado: true,
        mensagem: "Dia dedicado ao descanso e ao preparo artesanal dos ingredientes da semana."
    },
    3: {
        titulo: "Quarta-feira — Sabores do Mar",
        pratos: [
            { nome: "Moqueca Capixaba", descricao: "Autêntica moqueca de peixe com leite de coco, azeite de dendê e pimentões. Acompanha arroz e pirão.", img: "https://receitadaboa.com.br/wp-content/uploads/2024/03/iStock-1049400734.jpg" },
            { nome: "Tilápia Grelhada", descricao: "Tilápia ao limão siciliano com legumes salteados.", img: "https://www.pescadosriovivo.com.br/uploads/4c534dc3b2/_redactor_59e7abafd55d0.png" },
            { nome: "Cocada cremosa", descricao: "Doce tradicional preparado com coco fresco e leite condensado, textura macia e sabor caseiro.", img: "https://facabonito.com.br/wp-content/uploads/2025/07/Cocada-de-Forno-Cremosa-e-Facil-com-Coco-Ralado-Grosso.webp" }
        ]
    },
    4: {
        titulo: "Quinta-feira — Noite Italiana",
        pratos: [
            { nome: "Lasanha Bolonhesa", descricao: "Massa fresca artesanal, carne ao molho pomodoro e gratinado de queijo.", img: "https://partyborn.de/wp-content/uploads/2021/10/lasagne-scaled.jpg" },
            { nome: "Nhoque de Batata", descricao: "Ao molho sugo fresco com manjericão.", img: "https://www.4oito.com.br/media/noticias/nhoque-de-batata-share_101422.jpg" },
            { nome: "Tiramisù Rústico", descricao: "Clássico italiano em versão artesanal, com camadas de mascarpone e café intenso.", img: "https://italianismo.com.br/wp-content/uploads/2020/03/tiramisu.jpg" }
        ]
    },
    5: {
        titulo: "Sexta-feira — Sabores da Várzea",
        pratos: [
            { nome: "Filé de Peixe Empanado", descricao: "Servido com purê de batatas caseiro e arroz à grega.", img: "https://www.ricettasprint.it/wp-content/uploads/2024/08/Merluzzo-fritto-a-casa-mia-si-fa-cosi-zero-schizzi-di-olio-e-niente-frittura-ti-garantisco-che-e-croccantissimo20240810Ricettasprint.jpg" },
            { nome: "Frango Grelhado da Casa", descricao: "Molho de ervas, arroz integral e legumes.", img: "https://www.ljepotaizdravlje.ba/wp-content/uploads/2024/06/GettyImages-622185412.jpg" },
            { nome: "Mousse de Maracujá", descricao: "Leve e aerado, com o equilíbrio perfeito entre o doce e o ácido da fruta fresca.", img: "https://static.itdg.com.br/images/1200-630/8231acb174ba2e6a4b4a61145e48eea7/249008-shutterstock-1907121220.jpg" }
        ]
    },
    6: {
        titulo: "Sábado — Churrasco da Vila",
        pratos: [
            { nome: "Churrasco Misto", descricao: "Carnes selecionadas, linguiça artesanal, pão de alho, arroz, farofa e vinagrete.", img: "https://s2-ge.glbimg.com/-JJBrktOT9mNqOHG2re16PkHrRc=/0x0:1600x1067/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/w/q/XCghbdRpu7MgOAMSgawg/canva-aurora-18-pao-de-alho.png" },
            { nome: "Costelinha Suína", descricao: "Glaceada ao mel e especiarias.", img: "https://rodrigocolombo.com.br/wp-content/uploads/2025/03/costela-suina.webp" },
            { nome: "Doce de Abóbora com Coco", descricao: "Receita da roça, cremosa e aromática, feita com abóbora cozida lentamente e lascas de coco.", img: "https://receitasmais.com.br/wp-content/uploads/2015/06/Doce-de-ab%C3%B3bora-com-coco-1200x675.jpg" }
        ]
    },
    0: {
        titulo: "Domingo — Comfort Food da Casa",
        pratos: [
            { nome: "Frango Caipira", descricao: "Cozido no molho da casa com açafrão e ervas, arroz e polenta cremosa.", img: "https://areademulher.r7.com/wp-content/uploads/2023/02/3-11.jpg" },
            { nome: "Carne na Panela", descricao: "Cozida lentamente com batatas e cenoura.", img: "https://www.comidaereceitas.com.br/wp-content/uploads/2013/05/Crispy-Delight-Saborosas-Batatas-e-Prato-de-Carne.jpg" },
            { nome: "Manjar com Calda de Ameixa", descricao: "Sobremesa delicada de coco com calda artesanal de ameixas em calda espessa.", img: "https://i.ytimg.com/vi/00mExFilKik/maxresdefault.jpg" }
        ]
    }
};

function exibirDestaquesDoDia() {
    const container = document.getElementById("menuDoDia");
    const hoje = new Date().getDay();
    const destaque = destaquesSemana[hoje];

    if (!destaque || !container) return;

    if (destaque.fechado) {
        container.innerHTML = `
            <div class="card" style="text-align:center; padding:40px;">
                <h4>${destaque.titulo}</h4>
                <p>${destaque.mensagem}</p>
            </div>
        `;
        return;
    }

    container.innerHTML = destaque.pratos.map(prato => `
        <div class="card">
            <div style="position:relative;">
                <img src="${prato.img}" alt="${prato.nome}">
                <div class="badge">Destaque</div>
            </div>
            <div class="card-content">
                <h4>${prato.nome}</span></h4>
                <p>${prato.descricao}</p>
            </div>
        </div>
    `).join("");
}

document.addEventListener("DOMContentLoaded", exibirDestaquesDoDia);

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        tab.classList.add("active");
        document.getElementById(tab.dataset.tab).classList.add("active");
    });
});
