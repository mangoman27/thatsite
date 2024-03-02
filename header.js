class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      
		

	  
	  	<div class="header">
	<div class="headerlinks">
	
	
		  	  <a  class="a2" >Pages:</a>

	  <a  class="a"  href="index.html">Home</a>
	  <a  class="a"  href="blog.html">Blog</a>
	  <a  class="a"  href="gallery.html">Gallery</a>
	  
	  <a  style="float:right" class="a2"> Site Updated: 02/03/24 </a>
			  
	
	
	
	</div>
	</div>

	
		

	
	
	<br>

	  
	  
	  



	  
	  
	  

	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
    `;
  }
}

customElements.define('header-component', Header);

