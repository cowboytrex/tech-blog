document.addEventListener('DOMContentLoaded', () => {
    const newPostForm = document.querySelector('#new-post-form');
    if (newPostForm) {
      newPostForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const title = document.querySelector('#post-title').value.trim();
        const content = document.querySelector('#post-content').value.trim();
  
        if (title && content) {
          const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
          });
  
          if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            alert('Failed to create post.');
          }
        }
      });
    }
  });
  