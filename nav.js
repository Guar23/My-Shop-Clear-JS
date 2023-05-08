const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `<div class="nav">
	<div class="nav-menu">
	  <div class="nav-leftBar">
	    <a href="#">
		  <img class="navIconsImg" src="assets/icons/shop-white.png" alt="Homepage">
	    </a>
	    <div class="menuBurger">
		    <div class="navBurgerBtn">
		      <img class="navIconsImg" src="assets/icons/hamburger-menu-white.png" alt="Menu">
		    </div>
		    <div class="menu ">
		      <ul class="menuList">
		       <li><a href="#">Для Кошечек</a></li>
		       <li><a href="#">Для Котиков</a></li>
		       <li><a href="./find-a-match/index.html">Игры</a></li>
		       <li><a href="#">О нас</a></li>
		      </ul>
		    </div>
        </div>
	  </div>
	 <div>
		  <a href="#">
			  <img class="navIconsImg" src="./assets/img/logo.png" alt="Cats & Clothes. Cutiest shop ever!">
		  </a>
	 </div>
	 <div class="logIn">
		  <img class="navIconsImg" src="./assets/icons/user-white.png" alt="Log In">
	 </div>
	 </div>
     <div class="nav-search">
	   <form class="search-input">
		  <input class="search-field" type="search" name="text" required placeholder="Поиск по сайту">
		  <img class="search-icon" src="./assets/icons/search.png" alt="search icon">
	    </form>
     </div>
	 </div>
   ` ;
}

createNav();

let menuBtn = document.querySelector('.navBurgerBtn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
})