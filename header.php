   <?php 
$pg = basename(substr($_SERVER['PHP_SELF'],0,strrpos($_SERVER['PHP_SELF'],'.'))); // get file name from url and strip extension
?>
    <!-- Header START -->
    <header class="navbar-light navbar-sticky">
        <!-- Logo Nav START -->
         

        <nav class="navbar navbar-expand-xl">
            <div class="container">
                <!-- Logo START -->
                <a class="navbar-brand" href=""
                    style="padding-top: 10px !important;padding-bottom: 10px !important;">
                    <img class="light-mode-item navbar-brand-item" style="width:300px;height:100px" src="decocon_logo.png"
                        style="width: 150px;height:50px" alt="logo" />
                    <img class="dark-mode-item navbar-brand-item" src="assets/images/logo-light.svg" alt="logo" />
                </a>
                <!-- Logo END -->

                <!-- Responsive navbar toggler -->
                <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-animation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>

<style>
.active1{
    color:white !important;
    background-color: #3168b2;
}
</style>
                <!-- Main navbar START -->
                <div class="navbar-collapse w-100 collapse" id="navbarCollapse">
                    <!-- Nav Main menu START -->
      <ul class="navbar-nav navbar-nav-scroll mx-auto">

                        <li class="nav-item mx-2">
                            <a class="nav-link headerfont   <?php if($pg=='index'){?>active1<?php }?>" href="index.php" >HOME</a>
                        </li>

                        
                        <li class="nav-item mx-2">
                            <a class="nav-link headerfont <?php if($pg=='about'){?>active1<?php }?>" " href="about.php"  >ABOUT</a>
                        </li>
                        
                        
                     
                     
<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle headerfont <?php if($pg=='http://decocon.in//product/'){?>active1<?php }?>"  href="#" id="demoMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >PRODUCTS</a>
						<ul class="dropdown-menu" aria-labelledby="demoMenu">
							<li> <a class="dropdown-item" href="http://decocon.in/product/bespoke-terrazzo.php">Bespoke In-Situ Terrazzo Flooring</a></li>
							<li> <a class="dropdown-item " href="http://decocon.in/product/cementitious-terrazzo-cast-in-situ-flooring.php">Cementitious Terrazzo In-Situ System- FANE’IA</a></li>
							<li> <a class="dropdown-item" href="http://decocon.in/product/terrazzo-slab.php">Cementitious Terrazzo Slabs- KWAD’RA</a></li>
							<li> <a class="dropdown-item" href="http://decocon.in/product/terrazzo-tiles.php">Cementitious Terrazzo Tiles- TERR’AV</a></li>
							<li> <a class="dropdown-item" href="http://decocon.in/product/epoxy-terrazzo-cast-in-situ-flooring.php">Epoxy Terrazzo In-Situ system- FORM’AX</a></li>
							<li> <a class="dropdown-item" href="http://decocon.in/product/microtopping-concrete-flooring.php">Micro Topping</a></li>
							<li> <a class="dropdown-item" href="http://decocon.in/product/polished-concrete-screed.php">Polishable Screed In-Situ Flow-ps- FLUS’SO</a></li>
							<li> <a class="dropdown-item" href="http://decocon.in/product/polyurethane-terrazzo.php">PU Concrete In-Situ System- INIC’IO</a></li>
						
						
						</ul>
					</li>

                    <li class="nav-item mx-2">
                            <a class="nav-link headerfont <?php if($pg=='faq'){?>active1<?php }?>" " href="faq.php" >FAQ's</a>
                        </li>

                        <!-- Nav item 4 Component-->
                        <li class="nav-item mx-2">
                            <a class="nav-link headerfont <?php if($pg=='contact'){?>active1<?php }?>" " href="contact.php">CONTACT</a>
                        </li>
                    </ul>
                    <!-- Nav Main menu END -->


                </div>
                <!-- Main navbar END -->


            </div>
        </nav>
        <!-- Logo Nav END -->
    </header>
    <!-- Header END -->