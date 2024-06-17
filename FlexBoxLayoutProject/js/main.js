// const isOpen =false; //const value cannot be changed

let isOpen =false;// let variable value can be changed
console.log(isOpen)

const showMenu=()=>{
    document.querySelector('.mobileMenu').style.visibility='visible'
        document.querySelector('.mobileMenu').style.display='flex'
        document.querySelector('.mobileMenuIcon').classList.remove('fa-bars')
        document.querySelector('.mobileMenuIcon').classList.add('fa-times')
}

const hideMenu=()=>{
    document.querySelector('.mobileMenu').style.visibility='hidden'
        document.querySelector('.mobileMenu').style.display='none'
        document.querySelector('.mobileMenuIcon').classList.remove('fa-times')
        document.querySelector('.mobileMenuIcon ').classList.add('fa-bars')
}

const toggleNav=() =>{
    isOpen= !isOpen

    if(isOpen){
        showMenu()
    }
    else{
        hideMenu()
    }
}

const btn =document.querySelector('.mobileMenuIcon');
btn.addEventListener('click', (e)=>{
    e.preventDefault();
    // console.log('Button is clikced')
    // isOpen =true;
    // isOpen= !isOpen // Now handled by a function
    toggleNav()
    console.log(isOpen)

})

const mainWrapper = document.querySelector('.main-wrapper')
mainWrapper.addEventListener('click', (e)=>{
    e.preventDefault();
    // console.log('Button is clikced')
    // isOpen =true;
    // isOpen= !isOpen // Now handled by a function
    // console.log(isOpen)
    hideMenu()
    console.log(isOpen)
    if(document.querySelector('.mobileMenu').style.visibility='visible'){// and (document.querySelector('.mobileMenu').style.display='flex') { 
       isOpen=false;
        // isOpen= !isOpen
        // console.log('TT')
        // console.log(document.querySelector('.mobileMenu').style.visibility)
        // console.log(document.querySelector('.mobileMenu').style.display)
    }
})