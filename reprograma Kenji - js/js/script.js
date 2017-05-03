var botaoMenuHamburguer = document.querySelector(".botao.menuHamburguer");
function abrirMenu(){
	// declarar uma variavel, pegar navegacaoPrimaria
	var menu = document.querySelector("#navegacaoPrimaria");
	
	// se estiver com o classname "menuHorizontal visivel" fecha o dropdown
	if(menu.className == "menuHorizontal visivel"){
		// Fechar o menuHorizontal
		menu.className = "menuHorizontal";
	}else{
		// Abrir o menuHorizontal
		// tornar a navegacaoPrimaria Visivel, adicionar a classe visivel
		menu.className = "menuHorizontal visivel";
	}
}
botaoMenuHamburguer.onclick = abrirMenu;

// Botão amei 
// Retorna um Array de Botao
var botoesAmei = document.querySelectorAll(".botao.amei");
function amar(){
	this.className = "botao amei vermelho";
}
botoesAmei[0].onclick = amar;
botoesAmei[1].onclick = amar;
botoesAmei[2].onclick = amar;


// var botaoAmei = document.querySelector(".botao.amei");
// function amar(){
// 	this.className = "botao amei vermelho";
// }
// botaoAmei.onclick = amar;


// SLIDER

// todo o array tem .lenght

function criarUmBullet{
	// Pegando o ul que vai inserir o li
	var bulletUl = document.querySelector(".bullets ul");
	// Criando um novo li
	var li = document.createElement("li");
	// Criando um button para inserir no li
	var button = document.createElement("button");
	button.className = "bullet"; 

	li.appendChild(button);
	// Inserindo o li no ul dos bullets
	bulletUl.appendChild(li);
}

function criarBulletsNoslider(){
 // pegando todos os slides que estão dentro da #slider
 	var slides = document.querySelectorAll("#slider .slide");
 	var quantidadeSlides = slides.lenght;

 	// Criar os bullets
 	for(var i = 0; i < quantidadeSlides; i++){
 		// Criar um bullet
 		criarUmBullet();

 	}
}

function adicionarOnClickNosBotoes(){

}

function alternarSlidesAutomaticamente(){

}
// Se o slide existe
// Se o slider é diferente de null ele xiste


//var slider = document.querySelector("slider");
//if(slider != null){
	// NADA
//}else{
	// CRIAR OS BULLETS de acordo com a quantidade de slides
//}
