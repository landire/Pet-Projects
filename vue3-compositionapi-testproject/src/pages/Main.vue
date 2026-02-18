<template>
    <div>
        <h1>Добро пожаловать.</h1>
    </div>
</template>

<script>
import { reactive } from 'vue';

export default {
    setup() {
        const user = reactive({ name: 'John', age: 25 })
        const userName = user.name
        userName = 'Jane'

        console.log(user);
        console.log(userName);
        

        return {
            user
        }
    }
}
</script>

<style scoped>

</style>