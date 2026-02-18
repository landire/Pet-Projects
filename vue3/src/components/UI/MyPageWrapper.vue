<template>
    <div class="page__wrapper">
        <div class="page" :class="{ 'current-page': page === pageNumber }" v-for="pageNumber in totalPages"
            :key="pageNumber" @click="$emit('change', pageNumber)">{{ pageNumber }}</div>
    </div>
</template>

<script>
export default {
    name: 'my-page-wrapper',
    props: {
        page: {
            type: Number,
            required: true
        },
        totalPages: {
            type: Number,
            required: true,
        }
    }
}
</script>

<style scoped>
.page {
    border: 1px solid black;
    padding: 10px;
    cursor: pointer;
}

.page__wrapper {
    display: flex;
    margin-top: 15px;
}

.current-page {
    border: 2px solid teal;
}
</style>