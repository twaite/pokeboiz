<template>
  <div class="pokemon">
    <h1>{{pokemon.name}}</h1>
    <img :src="sprite" v-for="sprite in pokemon.sprites" :key="sprite">
    <h3>Types:</h3>
    <ul>
      <li v-for="typeObject in pokemon.types" :key="typeObject.type.name">
        {{typeObject.type.name}}
        <span class="type-indicator" :class="typeObject.type.name"></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pokemon: {
        name: '',
        sprites: {
          back_default: ''
        },
        types: [{
          type: {
            name: ''
          }
        }]
      }
    }
  },
  async created() {
    try {
      const name = this.$route.params.name;
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
      this.pokemon = await response.json();
    } catch (err) {
      console.error(err);
    }
  }
}
</script>

<style scoped>
  h1 {
    text-transform: capitalize;
  }

  .type-indicator {
    border-radius: 50%;
    height: 1em;
    width: 1em;
  }

  .flying {
    background-color: brown;
  }

  .fire {
    background-color: red;
  }
</style>
