<template>
  <div class="admin-new-postpage">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmit"/>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from 'axios';
import AdminPostForm from "@/components/Admin/AdminPostForm.vue";

export default Vue.extend({
  layout: "admin",
  components: {
    AdminPostForm
  },

  methods: {
    onSubmit(postData: any) {
      axios.post('https://nuxt-blog-udemy-course.firebaseio.com/posts.json', postData)
      .then(result => console.log(result))
      .catch(e => console.log(e));
    }
  }
});
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
