<template>
  <div class="pokemon">
    <h1>{{ pokemon.name }}</h1>
    <img :src="url" v-for="(url, name) in pokemon.sprites" :key="name"/>
    <ul>
      <li v-for="moveDetails in pokemon.moves">
        {{moveDetails.move.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pokemon: {}
    }
  },
  async created() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.$route.params.name}/`);
    this.pokemon = await response.json();
  }
}
</script>

<style scoped>
  .pokemon {
    padding: 1rem;
  }

  .pokemon > h1 {
    text-transform: capitalize;
  }
</style>
