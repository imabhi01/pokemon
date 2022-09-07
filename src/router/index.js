import { createRouter, createWebHistory } from 'vue-router'
import PokemonList from "../views/PokemonList.vue";
import HomeView from "../views/HomeView.vue";
import Pokemon from "../views/Pokemon.vue";
import PokemonDetails from "../views/PokemonDetails.vue";
import MoreDetails from "../views/MoreDetails.vue";
import NotFoundView from "../views/NotFoundView.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pokelist',
    name: 'pokelist',
    component: PokemonList
  },
  {
    path: '/pokemon/:name',
    name: 'Pokemon',
    component: Pokemon
  },
  {
    path: '/pokemon/:name/:specie_id/details',
    name: 'PokemonDetails',
    component: PokemonDetails
  },
  {
    path: '/moredetails/:name',
    name: 'Moredetails',
    component: MoreDetails
  },
  // add this for route not found
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFoundView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
