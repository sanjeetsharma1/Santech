// Get a reference to the "Our Services" link
const servicesLink = document.querySelector('a[href="#services"]');

// Add a click event listener to the link
servicesLink.addEventListener('click', function(event) {
  // Prevent the default link behavior
  event.preventDefault();

  // Get a reference to the target section element
  const servicesSection = document.querySelector('#services');

  // Use the `scrollIntoView` method to scroll to the section element
  servicesSection.scrollIntoView({
    behavior: 'smooth'
  });
});
const servicesLink = document.querySelector('a[href="#why-choose-us"]');
servicesLink.addEventListener('click', function(event) {
  // Prevent the default link behavior
  event.preventDefault();
    const why-choose-usSection = document.querySelector('#why-choose-us');

    // Use the `scrollIntoView` method to scroll to the section element
    servicesSection.scrollIntoView({
      behavior: 'smooth'

      const servicesLink = document.querySelector('a[href="#contact"]');
      servicesLink.addEventListener('click', function(event) {
        // Prevent the default link behavior
        event.preventDefault();
          const contactSection = document.querySelector('#contact');

          // Use the `scrollIntoView` method to scroll to the section element
          servicesSection.scrollIntoView({
            behavior: 'smooth'
            
