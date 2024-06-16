class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      
	

	  
	  	<div class="header">
	<div class="headerlinks">
	
	
		  	  <a  class="a2" >Pages:</a>

	  <a  class="a"  href="/index.html">Home</a>
	  <a  class="a"  href="/about/index.html">About</a>
	  <a  class="a"  href="/blog/pages/mar-24.html">Blog</a>
	  <a  class="a"  href="/gallery/pages/23d-24j-Istanbul-Turkey.html">Photo's</a>
	  <a  style="float:right" class="a2 bob"> Site Updated: 09/03/24 </a>

			  
	
	
	
	</div>
	</div>

		      <span class="gap"></span> 

		

	
	

	  
	  
	  



	  
	  
	  

	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
    `;
  }
}

customElements.define('header-component', Header);

