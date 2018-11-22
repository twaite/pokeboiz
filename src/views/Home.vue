<template>
  <div class="home">
    <div class="row">
      <div class="card" v-for="(pokemon, index) in pokemonList" :key="pokemon.name"
        @click="clickedCard(pokemon.name)">
        <h3>{{pokemon.name}}</h3>
        <img
          :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`" 
          :alt="`This is a pocket monster named: ${pokemon.name}`">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      pokemonList: [],
    }
  },
  async created() {
    const response = await fetch('http://pokeapi.co/api/v2/pokemon/');
    const body = await response.json();
    this.pokemonList = body.results.slice(0, 151);
  },
  methods: {
    clickedCard(name) {
      this.$router.push({ name: 'pokemon', params: { name }});
    }
  }
};
</script>

<style scoped>
  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .card {
    width: 200px;
    border: 1px solid lightgrey;
    border-radius: 5px;
    padding: 1rem;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }

  .card:hover {
    background: darkslateblue;
  }

  .card > h3 {
    text-transform: capitalize;
  }
</style>
