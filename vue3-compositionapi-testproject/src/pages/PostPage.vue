<template>
    <div class="app">
        <h1>Страница с постами</h1>
        <my-input v-model="searchQuery" placeholder="Поиск"></my-input>
        <div class="app__btns">
            <my-button @click="showDialog">Создать пост</my-button>
            <my-select v-model="selectedSort" :options="sortOptions" />
        </div>
        <my-dialog v-model:show="dialogVisible">
            <post-form @create="createPost" />
        </my-dialog>
        <post-list :posts="sortedAndSearchedPosts" @remove="removePost" v-if="!isPostLoading" />
        <div v-else>Идет загрузка...</div>
        <div v-intersection="loadMorePosts"></div>
        <!-- <my-page-wrapper :page="page" :totalPages="totalPages" @change="changePage"></my-page-wrapper> -->
    </div>
</template>

<script>
import axios from 'axios';
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'

export default {
    components: {
        PostList,
        PostForm
    },
    data() {
        return {
            posts: [],
            dialogVisible: false,
            isPostLoading: false,
            selectedSort: '',
            sortOptions: [
                { value: 'title', name: 'По названию' },
                { value: 'body', name: 'По содержанию' }
            ],
            searchQuery: '',
            page: 1,
            limit: 10,
            totalPages: 0,
        }
    },
    methods: {
        createPost(post) {
            this.posts.push(post);
            this.dialogVisible = false
        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id)
        },
        showDialog() {
            this.dialogVisible = true
        },
        async fetchPosts() {
            try {
                this.isPostLoading = true
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }
                })

                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                this.posts = response.data
            } catch (e) {
                alert('Ошбика')
            } finally {
                this.isPostLoading = false
            }
        },
        async loadMorePosts() {
            try {
                this.page += 1;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }
                })

                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                this.posts = [...this.posts, ...response.data];
            } catch (e) {
                alert('Ошбика')
            }
        },
        // changePage(pageNumber) {
        //     this.page = pageNumber
        // }
    },
    mounted() {
        this.fetchPosts()
    },
    watch: {
        selectedSort(newValue) {
            this.posts.sort((post1, post2) => {
                return post1[newValue]?.localeCompare(post2[newValue])
            })
        },
        // page() {
        //     this.fetchPosts()
        // }
    },
    computed: {
        sortedAndSearchedPosts() {
            return this.posts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
        }
    }
}
</script>

<style scoped>
.app__btns {
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
}
</style>