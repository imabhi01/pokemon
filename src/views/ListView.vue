<template>
    <div if="items">
        <router-link 
            :to="{name: 'Pokemon', params: {name: item.name}}"
            class="link"
            v-for="item in items"
            :key="item"
        >
        <div class="list-item">
            {{item.name}}
        </div>
        </router-link>
    </div>
</template>
  
<script>
export default {
    name: "ListView",
    props: {
        items: {
            type: Array,
        },
    }
};
</script>

<style scoped>
    .list-item {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        width: 50%;
        margin: 20px;
        color: #333;
        font-size: 20px;
        border-bottom: 1px solid #ededed;
        border: 1px solid #ccc;
        border-radius: 15px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        
    }

    .list-item:first-of-type {
        border-top: 1px solid #ededed;
        background-color: #03a9f4;
        color: #fff;
        text-transform: capitalize;
    }

    a {
        color: #fff;
        text-decoration: none;
        cursor: pointer;
    }
</style>