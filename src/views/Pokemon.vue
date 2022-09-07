<template>
    <div>
        <BasicDetails :pokemon="pokemon" />
    </div>
</template>

<script>
import axios from 'axios'
import BasicDetails from "../components/BasicDetails.vue";

export default{
    name: "Pokemon",
    data() {
        return {
            pokemon: null
        };
    },
    created() {
        const pokemonName = this.$route.params.name;
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then((res) => {
            const data = res.data;
            axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`)
                .then((res) => {
                Object.assign(data, {
                    description: res.data.flavor_text_entries[0].flavor_text,
                    specie_id: res.data.evolution_chain.url.split("/")[6],
                });
                this.pokemon = data
            });
        });
    },
    components: {
        BasicDetails
    }
}
</script>