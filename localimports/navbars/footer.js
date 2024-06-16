class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
	
	      <span class="gap"></span> 

	<link id="sitebirthday" rel="stylesheet" href="">
	<link id="october" rel="stylesheet" href="">
	<link id="christmas" rel="stylesheet" href="">
	<link id="newyear" rel="stylesheet" href="">
	<link id="normal" rel="stylesheet" href="">

	
	
      <div class="header" alt="this is actuall an footer but looks like an header due to the css class" >
	<center>	<p>©2023-2024 Lusitania.eu.org</p>
		</center>
	</div>
	
	
	
	
    `;
  }
}

customElements.define('footer-component', Footer);