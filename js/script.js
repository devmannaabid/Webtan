window.addEventListener('load', function () {
      var myModal = new bootstrap.Modal(document.getElementById('bannerModal'));
      myModal.show();
    });


    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
        
        // When the user scrolls down 200px from the top, show the button
        window.onscroll = function() {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                scrollToTopBtn.style.display = "block";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        };
        
        // When the user clicks on the button, scroll to the top of the document
        scrollToTopBtn.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });