let nav_Data = {
	logo_nav:'assets/img/logos/joystick.png',
	nav_items:'<li class="nav-item"><a class="nav-link" href="#services">Servicios</a></li>'+
              '<li class="nav-item"><a class="nav-link" href="#portfolio">PC gamers</a></li>'+
              '<li class="nav-item"><a class="nav-link" href="#clientes">Equipo de trabajo</a></li>'+
              '<li class="nav-item"><a class="nav-link" href="#contact">Conctato</a></li>',
    nav_logo_text:'MUNDOGAME'
}
let masthead_data ={
	styles_masthead:'position: absolute;bottom: 250px;left: 132px;right: 132px;padding: 30px;background: #1c1c1e7d;',
	img_carousel:{
		0:'assets/img/img1.jpg',
		1:'assets/img/img2.png',
		2:'assets/img/img3.jpg'
	},
	text_subhead:'Bienvenido a <span id="nav-logo-text">MUNDOGAME</span>',
	text_head:"Lleva a otro nivel tu experiencia gaming",
	service_button:'Saber más',
	styles_masthead_button:'color: #fff;background-color: #e75020;border-color: #212529;',
	height:'789'
}
let services_data = {
	tittle:'Servicios',
	subtittle:'Venta de componentes de pc gamers',
	img_service:{
		0:'assets/img/services/player.png',
		1:'assets/img/services/computer-game.png',
		2:'assets/img/services/keyboard-and-mouse.png'
	},
	text_head:{
		0:"Ensamblado de Pc Gamer",
		1:"Venta de componentes para tu pc",
		2:"Venta de accesorios Gamer"
	},
	text_subhead:{
		0:'Contruiremos la pc que mejor se adapte a tus necesidades y gustos',
		1:'Contamos con equipos de ultima generacion que mejoraran el rendimiento de tu pc a otro nivel',
		2:'Desde Mouses hasta audifonos todo lo que haga de tu experiencia mas placentera y unica, te lo tenemos'
	},
	styles_services:'display:flex; justify-Content:center'
}

let pcs_data = {
	tittle:'Pc Gamers',
	img_pc:{
		0:'assets/img/portfolio/1.jpg',
		1:'assets/img/portfolio/2.jpg',
		2:'assets/img/portfolio/3.jpg',
		3:'assets/img/portfolio/4.jpg',
		4:'assets/img/portfolio/5.jpg',
		5:'assets/img/portfolio/6.jpg'
		
	},
	titlePCs:{
		0:'PC Gamer Delios 70i',
		1:'PC Gamer Delios 60i',
		2:'PC Gamer Stelios 70i',
		3:'PC Gamer Stelios 80i X',
		4:'PC Gamer Telios IX',
		5:'PC Gamer Hyperion 90i X'
	},
	styles_pc:'display:flex;justify-Content:center',
	styles_hover_mouseover:'flex-direction:column;color:#fff;background:#212529;opacity:0.8',
	styles_hover_mouseout:'background:#fff; color:#fff',
	content_hover:'<i class="fas fa-plus fa-3x"></i> <p>Ver detalles</p>',
	description_pc:'<li><strong>Tarjeta de video</strong>: Quadro RTX A4000</li>'+
		' <li><strong>Procesador:</strong> Intel i7 11th Gen</li>'+
		'<li><strong>RAM:</strong> 32GB DDR4</li>'+
		' <li><strong>Almacenamiento:</strong> 1TB + 250GB NMVE SSD</li>'+
		'<li><strong>Enfriamiento:</strong> Líquido de 240mm</li>'
}
let clientes_data = {
	bg_clients:'background:black',
	clientes_img:{
		0:'assets/img/clientes/Kingston-FURY-261x237.jpg',
		1:'assets/img/clientes/ZONA-ALIENWARE.jpg',
		2:'assets/img/clientes/ZONA-cooler-master.jpg',
		3:'assets/img/clientes/ZONA-corsair.jpg'
	},
	clientes_img_styles:'height:7.75rem'
}

let contacto = {
	title_contact:'Contacto',
	btn_contact:'background: #fff;color: black;border: 1px solid;',
	style_Form:'row-gap: 15px;flex-direction: column;align-content: center;',
	bg_form:'background:url("assets/img/clientes/fondo.jpg");background-size:cover;background-attachment: fixed;'
} 

let footer_Data = {
	text_pagos:'<h3 style = "font-size: 16px;color: #fff;">Recuerda que puedes pagar con</h3>'+
			   '<h4 style = "font-size: 12px;">Cualquiera de los siguentes métodos de pago</h4>',
	imagesPago:{
		0:'assets/img/clientes/bbva-f.svg',
		1:'assets/img/clientes/bitcoin-f.svg',
		2:'assets/img/clientes/mp-f.svg',
		3:'assets/img/clientes/paypal-f.svg',
		4:'assets/img/clientes/visa-f.svg',
	},
	class_contenedor:'col-lg-4',
	class_nav_Bottom:'col-md-8 ',
	styles_nav_Bottom:'padding: 0;list-style: none;text-align: right;color: #e9e7e4;',
	styles_contenedor:'text-align: left;'

}