const navItems = document.querySelector('.nav_items');
const openNavBtn = document.querySelector('#open_navbtn');
const closeNavBtn = document.querySelector('#close_navbtn');


const openNav = () =>{
    navItems.style.display = 'Flex';
    openNavBtn.style.display = 'none'; 
    closeNavBtn.style.display = 'inline-block';
}

const closeNav = () =>{
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline-block'; 
    closeNavBtn.style.display = 'none';
}



openNavBtn.addEventListener('click',openNav);
closeNavBtn.addEventListener('click',closeNav);