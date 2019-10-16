<template>
  <div id="app">
    <header>
      <a href="https://daguerrero.com">
        <img src="@/assets/logo.png"/>
      </a>
        <nav>
          <ul>
            <li>
              <router-link to='/'>Inicio</router-link>
            </li>
            <li>
              <router-link to='/caso2'>2</router-link>
            </li>
            <li>
              <router-link to='/caso4'>4</router-link>
            </li>
            <li>
              <router-link to='/caso6'>6</router-link>
            </li>
            <li>
              <router-link to='/caso10'>10</router-link>
            </li>
            <li>
              <router-link to='/caso12'>12</router-link>
            </li>
            <li>
              <router-link to='/caso2y3'>2-3</router-link>
            </li>
            <li>
              <router-link to='/caso3y2'>3-2</router-link>
            </li>
            <li>
              <router-link to='/caso23y6'>2-3-6</router-link>
            </li>
            <li>
              <router-link to='/caso6y12'>6-12</router-link>
            </li>
          </ul>
        </nav>
    </header>

  <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header img {
    height: 40px;
    margin-left: 40px;
}
body {
    font-family: sans-serif;
    margin-top: 100px;
}

main {
    color: white;
}

header {
    background-color: #1e3757;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    display: flex;
    align-items: center;
    box-shadow: 0 0 2px 0 black;
}

header * {
    display: inline;
}

header li {
    margin: 20px;
}

header li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}
</style>
