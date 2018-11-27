<template>
  <div id="app">
    <header id="nav">
      <h1>Pokédex</h1>
      <router-link to="/">Home</router-link>|
      <router-link to="/pikachu">Pikachu</router-link>
    </header>
    <hr>
    <router-view/>
  </div>
</template>

<style>
* {
  font-family: 'Kodchasan', Arial, Helvetica, sans-serif;
  box-sizing: border-box;
}

#nav {
  display: flex;
  align-items: center;
  padding: 0 1rem;
}

#nav > h1 {
  flex-grow: 1;
}

html {
  background: #161616;
  color: white;
}

a {
  color: skyblue;
  text-decoration: none;
  font-weight: bold;
  padding: 1em;
}

hr {
  border: 1px solid white;
}
</style>
