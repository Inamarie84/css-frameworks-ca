document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#menu-btn')
  const menu = document.querySelector('#mobile-menu')

  if (btn && menu) {
    btn.addEventListener('click', () => {
      const nowHidden = menu.classList.toggle('hidden')
      // if menu is hidden, expanded=false; if visible, expanded=true
      btn.setAttribute('aria-expanded', String(!nowHidden))
    })
  }

  function toggleForms(showFormId, hideFormId) {
    const showForm = document.getElementById(showFormId)
    const hideForm = document.getElementById(hideFormId)
    if (showForm && hideForm) {
      showForm.classList.remove('hidden')
      hideForm.classList.add('hidden')
    }
  }

  const showRegisterBtn = document.getElementById('show-register')
  if (showRegisterBtn) {
    showRegisterBtn.addEventListener('click', () => {
      toggleForms('register-form', 'login-form')
    })
  }

  const showLoginBtn = document.getElementById('show-login')
  if (showLoginBtn) {
    showLoginBtn.addEventListener('click', () => {
      toggleForms('login-form', 'register-form')
    })
  }

  function handleSkeletonLoader(loaderId, contentWrapperId, delay) {
    setTimeout(() => {
      const loader = document.getElementById(loaderId)
      const contentWrapper = document.getElementById(contentWrapperId)
      if (loader && contentWrapper) {
        loader.classList.add('hidden')
        contentWrapper.classList.remove('hidden')
      }
    }, delay)
  }

  handleSkeletonLoader('skeleton-loader', 'content-feed-wrapper', 1500)

  handleSkeletonLoader('skeleton-loader-profile', 'profile-content', 1500)

  // New Post Form Toggle
  const createPostBtn = document.getElementById('create-post-btn')
  const postFormWrapper = document.getElementById('new-post-form-wrapper')

  if (createPostBtn && postFormWrapper) {
    createPostBtn.addEventListener('click', () => {
      postFormWrapper.classList.toggle('hidden')
    })
  }
})
