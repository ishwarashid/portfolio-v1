function loadFile(file, elementId) {
  return fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(elementId).innerHTML = data 
    }) 
}

Promise.all([
  loadFile('header.html', 'header'),
  loadFile('footer.html', 'footer')
]).then(() => {
  initNavLinks()
  initHomePage()
}) 

function initNavLinks() {

  const currentPage = window.location.pathname.split('/').pop() 
  const navLinks = document.querySelectorAll('nav a') 

  navLinks.forEach(link => {
    const href = link.getAttribute('href') 
    if (href === currentPage) {
      link.classList.add('active') 
    } else {
      link.classList.remove('active') 
    }
  }) 
}

