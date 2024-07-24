document.addEventListener("DOMContentLoaded", () => {
    // Get the navbar element
    const navbar = document.getElementById('sections');
    
    // Get all section elements
    const sections = document.querySelectorAll('section');
    
    // Get the back-to-top button element
    const clickButton = document.getElementById('butt');
    
    // Create a new unordered list element for the navigation
    const navList = document.createElement('ul');
    
    // Create a string to hold the navigation links
    let navLinks = '';
    
    // Loop through each section and create a navigation item for it
    sections.forEach(section => {
      navLinks += `<li><a href="#${section.id}" data-nav="${section.dataset.nav}">${section.dataset.nav}</a></li>`;
    });
    
    // Set the innerHTML of the navigation list
    navList.innerHTML = navLinks;
    
    // Add event listeners to the navigation links
    navList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default link behavior
        const targetSection = document.getElementById(link.getAttribute('href').slice(1));
        targetSection.scrollIntoView({ // Scroll to the section
          behavior: 'smooth'
        });
      });
    });
    
    // Add the navigation list to the navbar
    navbar.appendChild(navList);
    
    // Function to check if a section is in the viewport
    const isInViewport = (section) => {
      const rect = section.getBoundingClientRect(); // Get the section's bounding rectangle
      return rect.top >= 0 && rect.top < window.innerHeight / 2; // Check if the section is in the viewport
    };
    
    // Function to set the active section and navigation link
    const setActiveSection = () => {
      sections.forEach(section => {
        if (isInViewport(section)) {
          section.classList.add('active'); // Add the active class to the section
          document.querySelector(`a[href="#${section.id}"]`).classList.add('active'); // Add the active class to the corresponding navigation link
        } else {
          section.classList.remove('active'); // Remove the active class from the section
          document.querySelector(`a[href="#${section.id}"]`).classList.remove('active'); // Remove the active class from the corresponding navigation link
        }
      });
    };
    
    // Function to toggle the back-to-top button
    const toggleclickButton = () => {
      if (window.scrollY > window.innerHeight) {
        clickButton.style.display = 'block'; // Show the back-to-top button
      } else {
        clickButton.style.display = 'none'; // Hide the back-to-top button
      }
    };
    
    // Add event listener to the back-to-top button
    clickButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page
    });
    
    // Add event listener to the window scroll event
    window.addEventListener('scroll', () => {
      setActiveSection(); // Update the active section and navigation link
      toggleclickButton(); // Toggle the back-to-top button
    });
    
    // Initialize the active section and navigation link
    setActiveSection();
  });