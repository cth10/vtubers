<template>
  <footer class="site-footer">
    <div class="container">
      <p>Criado com <i class="fas fa-heart" style="color: #ff4081;"></i> por um entusiasta de VTubers.</p>
      <div class="social-links">
        <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
        <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
        <a href="#" aria-label="Twitch"><i class="fab fa-twitch"></i></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter'
}
</script>

<style scoped>
.site-footer {
  background-color: #121222;
  color: #ccc;
  padding: 40px 20px;
  text-align: center;
}

.site-footer p {
  margin-bottom: 10px;
  font-size: 0.95rem;
}

.social-links {
  margin-top: 20px;
}

.social-links a {
  color: #ccc;
  margin: 0 10px;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #ff4081;
}

@media (max-width: 768px) {
  .site-footer {
    padding: 30px 15px;
  }

  .site-footer p {
    font-size: 0.9rem;
  }

  .social-links a {
    font-size: 1.3rem;
    margin: 0 8px;
  }
}

/* Adicione Font Awesome se não estiver globalmente */
/* @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'); */
</style> 