class class_Object {
   constructor(app) {
      this.app = app
   }

   init() {
   }
}
class class_Header extends class_Object{
   constructor(app){
      super(app)
      this.logo_nav = document.getElementById('nav_logo')
      this.nav_list = document.getElementById('nav_list')
      this.logo_text = document.getElementById('nav-logo-text')
   }
   init(){
      this.logo_nav.src = nav_Data.logo_nav;
      this.nav_list.innerHTML = nav_Data.nav_items;
      this.logo_text.innerHTML = nav_Data.nav_logo_text;
   }
}
class class_masthead extends class_Object{
   constructor(app){
      super(app)
      this.text_masthead = document.getElementById('text-masthead')
      this.text_subhead = document.getElementById('text_subhead')
      this.text_head = document.getElementById('text_head')
      this.service_button = document.getElementById('service_button')
      this.img_masthead = document.querySelectorAll('.carousel-item img')
     
   }
   init(){
      this.text_masthead.style = masthead_data.styles_masthead;
      this.text_subhead.innerHTML = masthead_data.text_subhead;
      this.text_head.innerHTML = masthead_data.text_head;
      this.service_button.innerHTML = masthead_data.service_button
      this.service_button.style= masthead_data.styles_masthead_button

      for (var i = 0; i <= this.img_masthead.length - 1; i++) {
         this.img_masthead[i].src =  masthead_data.img_carousel[i]
         this.img_masthead[i].height = masthead_data.height
      }


   }
}

class class_services extends class_Object{
   constructor(app){
      super(app)
      this.tituloService = document.getElementById('titulo_Service')
      this.subtituloService = document.getElementById('subtitulo_service')
      this.images = document.querySelectorAll('#services img')
      this.titulos = document.querySelectorAll('#services h4')
      this.subtitulos = document.querySelectorAll('#services p')

   }
   init(){
      this.tituloService.innerHTML = services_data.tittle
      this.subtituloService.innerHTML = services_data.subtittle
      for (var i = 0; i <= this.images.length - 1; i++) {
         this.images[i].src = services_data.img_service[i]
         this.images[i].style += services_data.styles_services
         this.titulos[i].innerHTML = services_data.text_head[i]
         this.subtitulos[i].innerHTML = services_data.text_subhead[i]
      }
   }
}

class class_pcGamers extends class_Object{
   constructor(app){
      super(app)
      this.titulo_PcGamers = document.getElementById('titulo_pcGamers')
      this.imagesPc = document.querySelectorAll('#portfolio img')
      this.Pcs = document.querySelectorAll('#portfolio a')
      this.hover = document.querySelectorAll('.portfolio-hover')
      this.titulosPC = document.querySelectorAll('.portfolio-caption-heading')
      this.modal = document.querySelectorAll('.modal-body')
      this.modalTitle = document.querySelectorAll('.modal-body h2')

   
   }
   init(){
      this.titulo_PcGamers.innerHTML = pcs_data.tittle
      
      for (var i = 0; i <= this.imagesPc.length - 1; i++) {
         this.imagesPc[i].src = pcs_data.img_pc[i]
         this.Pcs[i].style = pcs_data.styles_pc


         this.hover[i].addEventListener("mouseover", function(e){
            this.style = pcs_data.styles_hover_mouseover
            this.innerHTML = pcs_data.content_hover
         });
         
         // Creamos el evento mouseout para cada imagen
         this.hover[i].addEventListener("mouseout", function(e){
          this.style = pcs_data.styles_hover_mouseout
         });

         this.titulosPC[i].innerHTML = pcs_data.titlePCs[i]
         this.modalTitle[i].innerHTML = pcs_data.titlePCs[i]

        
      }
   }
}
class class_modal extends class_Object{
   constructor(app){
      super(app)
      this.modals = document.querySelectorAll('.modal-body ')
      this.modals_img = document.querySelectorAll('.modal-body img')
      this.lista_modal = document.querySelectorAll('.modal-body ul')
   }
   init(){
      for (var i = 0; i <= this.modals_img.length - 1; i++) {
         this.modals_img[i].src = pcs_data.img_pc[i]
         this.lista_modal[i].innerHTML = pcs_data.description_pc
        
      }
   }
}
class class_Clientes extends class_Object{
   constructor(app){
      super(app)
      this.clients =  document.getElementById('clientes')
      this.imgClients =  document.querySelectorAll('#clientes img')
   }
   init(){
      this.clients.style = clientes_data.bg_clients
      for (var i = 0; i <= this.imgClients.length - 1; i++) {
         this.imgClients[i].src =  clientes_data.clientes_img[i]
         this.imgClients[i].style = clientes_data.clientes_img_styles
      }
   }
}
class class_contact extends class_Object{
   constructor(app){
      super(app)
      this.form = document.getElementById('contact')
      this.btn_Contact = document.getElementById('submitButton')
      this.titleContact = document.querySelector('#contact h2')
      this.formContact = document.getElementById('form')
   }
   init(){
      this.titleContact.innerHTML = contacto.title_contact 
      this.form.style = contacto.bg_form
      this.formContact.style = contacto.style_Form
      this.btn_Contact.style = contacto.btn_contact
   }
}
class class_Footer extends class_Object{
   constructor(app){
      super(app)
      this.footer = document.getElementById('footer')
      this.contenedor =  document.createElement('div')
      this.nav_Bottom = document.createElement('section')
      
   }
   init(){
      this.contenedor.className = footer_Data.class_contenedor;
      this.nav_Bottom.className = footer_Data.class_nav_Bottom;
      this.nav_Bottom.style = footer_Data.styles_nav_Bottom;
      this.contenedor.style = footer_Data.styles_contenedor;
      

      this.contenedor.innerHTML += `
         ${footer_Data.text_pagos}
      `
      for (var i = 0; i <= 5-1; i++) {
         var images = document.createElement('img')
         images.src = footer_Data.imagesPago[i]
         this.contenedor.appendChild(images) 
      }
      this.nav_Bottom.innerHTML = nav_Data.nav_items;
      this.footer.appendChild(this.contenedor)
      this.footer.appendChild(this.nav_Bottom) 

   }

}
class class_WebSite {
   constructor() {
      this.header = new class_Header(this)
      this.masthead = new class_masthead(this)
      this.services =  new class_services(this)
      this.pcGamer = new class_pcGamers(this)
      this.modal = new class_modal(this)
      this.clients = new class_Clientes(this)
      this.contact = new class_contact(this)
      this.footer = new class_Footer(this)
      document.onreadystatechange = () => {
         if (document.readyState === 'complete') {
            webSite.init()
         }
      }
   }

   init() {
      for (let obj in this)
         this[obj].init()
   }
}

let webSite = new class_WebSite()