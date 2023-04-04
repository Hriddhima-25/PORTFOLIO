document.querySelector(".rem").style.display="none";
document.querySelector(".hamburger").addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(document.querySelector('.sidebar').classList.contains('sidebargo'))
    {
        document.querySelector('.ham').style.display='inline';
        document.querySelector('.rem').style.display='none';
    }
    else{
        document.querySelector('.rem').style.display='inline';
        document.querySelector('.ham').style.display='none';
    }
})
// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});