<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="post" @submit="onSubmit" />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AdminPostForm from "@/components/Admin/AdminPostForm.vue";
import axios from 'axios'

export default Vue.extend({
  layout: "admin",
  components: {
    AdminPostForm
  },

  asyncData(context) {
    return axios.get('https://nuxt-blog-udemy-course.firebaseio.com/posts/' + context.params.postId + '.json')
      .then(response => {
        return {
          post: response.data
        }
      })
      .catch(e => context.error(e));
  },

  methods: {
    onSubmit(editedPost: any) {
      axios.put('https://nuxt-blog-udemy-course.firebaseio.com/posts/' + this.$route.params.postId + '.json', editedPost)
      .then(response => this.$router.push('.admin'))
      .catch(e => console.log(e));
    }
  }
});
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
