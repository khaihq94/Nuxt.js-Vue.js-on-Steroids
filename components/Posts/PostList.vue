<template>
  <section class="post-list">
    <PostPreview
      id="1"
      thumbnail="https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
      title="Hello there!"
      previewText="This my first post!"
      :is-admin="isAdmin" />
    <PostPreview
      id="2"
      thumbnail="https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
      title="Hello there - the second time!"
      previewText="This my second post!"
      :is-admin="isAdmin" />
    <PostPreview
      id="3"
      thumbnail="https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
      title="Hi!"
      previewText="This my third post!"
      :is-admin="isAdmin" />
  </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  components: {
    PostPreview
  },

  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
}
</script>


<style scoped>

.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>

