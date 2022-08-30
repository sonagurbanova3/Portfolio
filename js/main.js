/* ================= MOBILE NAV ========================= */
const mobileNavButton = document.querySelector('.header-burger');
const mobileNavIcon = document.querySelector('.burger-line');
const mobileNavOpen = document.querySelector('.nav');

mobileNavButton.addEventListener('click', function () {
	mobileNavIcon.classList.toggle('active');
	mobileNavOpen.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
});
// Skrolling website
function scrollTo(element){
    window.scroll({
        left:0,
        top:element.offsetTop,
        behavior: 'smooth'
    })
}
function removing(){
    mobileNavIcon.classList.remove('active');
    mobileNavOpen.classList.remove('open');
    document.body.classList.remove('no-scroll');
}
const linkServices = document.querySelector('.nav-link-services')
const services =document.querySelector('.services')
linkServices.addEventListener('click', ()=>{
    scrollTo(services);
   removing();
})
const linkProjects = document.querySelector('.nav-link-projects')
const projects =document.querySelector('.portfolio')
linkProjects.addEventListener('click', ()=>{
    scrollTo(projects);
    removing();
})
const linkContacts = document.querySelector('.nav-link-contacts')
const contacts =document.querySelector('.contacts')
linkContacts.addEventListener('click', ()=>{
    scrollTo(contacts);
    removing();
})