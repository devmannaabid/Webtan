function handleSubmit(event) {
    event.preventDefault();
    const submitButton = document.getElementById('submitButton');
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    // Mock submission (replace with real logic)
    setTimeout(() => {
      alert('Message sent successfully!');
      submitButton.textContent = 'Send Message';
      submitButton.disabled = false;
    }, 2000);
  }