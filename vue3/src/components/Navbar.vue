<template>
    <div class="navbar">
        <h3 style="cursor: pointer;" @click="$router.push('/')">Vue 3</h3>
        <div class="navbar__btns">
            <my-button @click="$router.push('/posts')">Посты</my-button>
            <my-button @click="$router.push('/store')" style="margin-left: 20px;">Store</my-button>
            <my-button @click="$router.push('/about')" style="margin-left: 20px;">О сайте</my-button>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.navbar {
    height: 50px;
    background-color: teal;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0 15px;
}

.navbar__btns {
    margin-left: auto;
}
</style>