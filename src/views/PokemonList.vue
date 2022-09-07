<template>
    <ListView :items="items" />
</template>

<script>
    import axios from 'axios'
    import ListView from '../views/ListView'

    export default{
        name: "PokemonList",
        components:{ ListView },
        data(){
            return {
                items: null
            }
        },
        mounted(){
            axios.get('https://pokeapi.co/api/v2/pokemon?limit=151').then((res) => {
                if(res.data && res.data.results){
                    this.items = res.data.results
                }
            })
        }
    }
</script>