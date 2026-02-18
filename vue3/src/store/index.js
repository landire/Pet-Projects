import { createStore } from 'vuex';
import { postModule } from '@/store/postModules';

export default createStore({
    modules: {
        post: postModule
    }
})