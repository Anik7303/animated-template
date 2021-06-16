// Navigation Script
function toggleNavbar(collapseID) {
    document.getElementById(collapseID).classList.toggle('hidden')
    document.getElementById(collapseID).classList.toggle('block')
}

// on AOS load
AOS.init({
    delay: 0,
    duration: 1000,
    easing: 'ease',
    once: false,
    mirror: true,
})
