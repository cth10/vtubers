<template>
  <nav class="navbar">
    <div class="container">
      <a href="#" class="navbar-brand">VTuber World</a>
      <ul class="navbar-nav">
        <li><a href="#about">O que são?</a></li>
        <li><a href="#popular">VTubers Populares</a></li>
        <li><a href="#howtobecome">Como se Tornar</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'SiteNavbar'
}
</script>

<style scoped>
.navbar {
  background-color: #333;
  color: #fff;
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.navbar-brand {
  font-size: 1.8rem;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

.navbar-nav {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.navbar-nav li {
  margin-left: 20px;
}

.navbar-nav a {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.navbar-nav a:hover {
  background-color: #555;
}
</style> 