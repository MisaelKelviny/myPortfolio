window.onload = rssFeed()

function translatePt() {

    document.getElementById("home").innerHTML = "Inicio";
    document.getElementById("about").innerHTML = "Sobre";
    document.getElementById("project").innerHTML = "Projetos";
    document.getElementById("contact").innerHTML = "Contato";
    document.getElementsByClassName("subtitlePortfolio").item(0).innerHTML = "Desenvolvedor Front-End";
    document.getElementById("aboutMe").innerHTML = "Sobre mim";
    document.getElementById("aboutMeText").innerHTML = "Olá, eu sou Misael Kelviny. Estudante de Sistemas de Informação pela UNIVAS - Universidade do Vale do Sapucaí. Sou desenvolvedor Front-End a alguns anos e já possuo experiência na área, trabalhando com sites e aplicações mobile. Tenho um grande forte pelo design em sistemas e aplicações. Gosto muito da área de UX e UI e todos esses conceitos mais visuais. Ganho Conhecimento a cada novo projeto desenvolvido."
    document.getElementById("year").innerHTML = "22 Anos";
    document.getElementsByClassName("projectTitle").item(0).innerHTML = "Meus Projetos";
    document.getElementById("projectSubTitle").innerHTML = "Alguns projetos que trabalhei recentemente"
    document.getElementsByClassName("abilities").item(0).innerHTML = "Habilidades";
    document.getElementById("graduation").innerHTML = "Formação"
    document.getElementsByClassName("myContact").item(0).innerHTML = "Meus Contatos";
    document.getElementsByClassName("myPodcastTitle").item(0).innerHTML = "meu PodCast";
    document.getElementById("podcastProjectSubTitle").innerHTML = "Esse é o Nave Sem Controle podcast o podcast onde falamos diversos assuntos sem o mínimo de comprometimento, discutimos de tudo um pouco. Projeto realizado entre amigos o que torna tudo mais engraçado e espontâneo."
    document.getElementById("episodio").innerHTML = "Episódios"
}

function translateEn() {

    document.getElementById("home").innerHTML = "Home";
    document.getElementById("about").innerHTML = "About";
    document.getElementById("project").innerHTML = "Project";
    document.getElementById("contact").innerHTML = "Contact";
    document.getElementsByClassName("subtitlePortfolio").item(0).innerHTML = "Front-end Developer";
    document.getElementById("aboutMe").innerHTML = "About Me";
    document.getElementById("aboutMeText").innerHTML = "Hello, my name is Misael and I am undergraduate studant of Information System. Working hard with ionic framework application development, CSS, HTML and JavaScript web development. Also i like a lot of Front End, mobile aplications and UX and UI. Needing gain experience in several areas. Knowledge is always welcome in my life"
    document.getElementById("year").innerHTML = "22 years old";
    document.getElementsByClassName("projectTitle").item(0).innerHTML = "Some of My Projects";
    document.getElementById("projectSubTitle").innerHTML = "Project's that i work recently.";
    document.getElementsByClassName("abilities").item(0).innerHTML = "Abilities";
    document.getElementById("graduation").innerHTML = "Graduation"
    document.getElementsByClassName("myContact").item(0).innerHTML = "My Contacts";
    document.getElementsByClassName("myPodcastTitle").item(0).innerHTML = "my PodCast";
    document.getElementById("podcastProjectSubTitle").innerHTML = "This is Nave Sem Controle podcast the podcast where we talk about different things without the minimum sense, we discussed everything. Project carried out between friends and that is what makes everything funnier and spontaneous."
    document.getElementById("episodio").innerHTML = "Episode"
}

function rssFeed() {
    var itemFeedTitle = document.getElementsByClassName("feed-item-title")
    var itemFeedDesc = document.getElementsByClassName("feed-item-desc")
    var itemImage = document.getElementsByClassName("feed-title-image")
    var rssFeedContainer = document.getElementById("rssFeedContainer")
    var rssFeedImage = document.getElementById("rssFeedImage")
    var rssFeedImageStyle = document.getElementsByClassName("feed-title-image")

    rssFeedImage.insertAdjacentElement("beforebegin", itemImage[0])
    rssFeedImageStyle.item(0).classList.add("img-fluid", "d-block", "mx-auto", "feed-title-image-thumb")

    console.log(rssFeedImageStyle)

    for (let i = 0; i < itemFeedTitle.length; i++) {
        rssFeedContainer.insertAdjacentHTML("afterbegin",
            "<div> \
            <div class='item' style=> \
                 \
                 <div class='cardPortfolioPodcastImage'></div>\
                <div class='cardPortfolioPodcast'>\
                    <div class='rssTitle'> \
                        " + itemFeedTitle[i].innerHTML + "    \
                    </div> \
                    \
                    <div class='rssDescription'>\
                        " + itemFeedDesc[i].innerHTML + " \
                    <div> \
            </div> \
        </div>")
    }
}