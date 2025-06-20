// Formatting functions
    function formatText(command, value = null) {
      document.execCommand(command, false, value);
      updateActiveButtons();
      document.getElementById('editor').focus();
    }

    function setFontSize(size) {
      document.execCommand("fontSize", false, size);
      updateActiveButtons();
    }

    function setFontFamily(font) {
      document.execCommand("fontName", false, font);
      updateActiveButtons();
    }

    function setColor(color) {
      document.execCommand("foreColor", false, color);
      updateActiveButtons();
    }

    function setBgColor(color) {
      document.execCommand("hiliteColor", false, color);
      updateActiveButtons();
    }

    function insertLink() {
      const selection = window.getSelection();
      if (selection.toString().trim() === '') {
        alert("Please select some text to link");
        return;
      }
      
      const url = prompt("Enter URL:", "https://");
      if (url) {
        document.execCommand("createLink", false, url);
      }
      updateActiveButtons();
    }

    // Update active buttons based on current selection
    function updateActiveButtons() {
      const commands = ['bold', 'italic', 'underline', 'strikeThrough'];
      commands.forEach(cmd => {
        const isActive = document.queryCommandState(cmd);
        const buttons = document.querySelectorAll(`[onclick*="${cmd}"]`);
        buttons.forEach(btn => {
          isActive ? btn.classList.add('active') : btn.classList.remove('active');
        });
      });
    }

    // Handle keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      // Ctrl+B for bold
      if (e.ctrlKey && e.key === 'b') {
        e.preventDefault();
        formatText('bold');
      }
      // Ctrl+I for italic
      if (e.ctrlKey && e.key === 'i') {
        e.preventDefault();
        formatText('italic');
      }
      // Ctrl+U for underline
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        formatText('underline');
      }
      // Ctrl+K for link
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        insertLink();
      }
    });

    // Update button states when selection changes
    document.getElementById('editor').addEventListener('mouseup', updateActiveButtons);
    document.getElementById('editor').addEventListener('keyup', updateActiveButtons);

    // Placeholder functionality
    const editor = document.getElementById('editor');
    editor.addEventListener('focus', function() {
      if (this.textContent === '') {
        this.setAttribute('data-placeholder-active', 'true');
      }
    });
    
    editor.addEventListener('blur', function() {
      if (this.textContent === '') {
        this.removeAttribute('data-placeholder-active');
      }
    });
    
    // Initial focus
    editor.focus();