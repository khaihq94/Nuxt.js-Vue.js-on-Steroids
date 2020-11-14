<template>
  <div class="admin-new-postpage">
    <section class="new-post-form">
      <form @submit.prevent="onSave">
        <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>

        <AppControlInput v-model="editedPost.title">Title</AppControlInput>

        <AppControlInput v-model="editedPost.thumbnailLink">Thumbnail Link</AppControlInput>

        <AppControlInput control-type="textarea" v-model="editedPost.content">Content</AppControlInput>

        <AppButton type="submit">Save</AppButton>

        <AppButton
          type="button"
          style="margin-left: 10px"
          btn-style="cancel"
          @click="onCancel" >
            Cancel
        </AppButton>
      </form>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppControlInput from '@/components/UI/AppInputControl.vue'
import AppButton from '@/components/UI/AppButton.vue'

export default Vue.extend({
    components: {
        AppButton,
        AppControlInput
    },

    data() {
        return {
            editedPost: {
                author: '',
                title: '',
                thumbnailLink: '',
                content: ''
            }
        }
    },

    methods: {
        onSave() {
            console.log(this.editedPost);
        },
        onCancel() {
            this.$router.push('/admin')
        }
    }
})
</script>
