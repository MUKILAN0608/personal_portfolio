export const observeSections = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, observerOptions)

  const sections = document.querySelectorAll('section:not(#home)')
  sections.forEach(section => {
    observer.observe(section)
  })

  return () => {
    sections.forEach(section => observer.unobserve(section))
  }
}
