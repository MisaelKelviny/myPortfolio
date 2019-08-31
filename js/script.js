
function translatePt() {

    document.getElementById("home").innerHTML = "Inicio";
    document.getElementById("about").innerHTML = "Sobre";
    document.getElementById("project").innerHTML = "Projetos";
    document.getElementById("contact").innerHTML = "Contato";
    document.getElementsByClassName("subtitlePortfolio").item(0).innerHTML = "Desenvolvedor Front-End";
    document.getElementById("aboutMe").innerHTML = "Sobre Mim";
    document.getElementById("aboutMeText").innerHTML = "Olá, eu sou Misael Kelviny. Estudante de Sistemas de Informação pela UNIVAS - Universidade do Vale do Sapucaí. Sou desenvolvedor Front-End a alguns anos e já possuo experiência na área, trabalhando com sites e aplicações mobile. Tenho um grande forte pelo design em sistemas e aplicações. Gosto muito da área de UX e UI e todos esses conceitos mais visuais. Ganho Conhecimento a cada novo projeto desenvolvido."
    document.getElementById("year").innerHTML = "22 Anos";
    document.getElementsByClassName("projectTitle").item(0).innerHTML = "Meus Projetos";
    document.getElementById("projectSubTitle").innerHTML = "Alguns projetos que trabalhei recentemente"
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

}