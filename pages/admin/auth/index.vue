<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form>
        <AppInputControl type="email">E-Mail Address</AppInputControl>
        <AppInputControl type="password">Password</AppInputControl>
        <AppButton type="submit">{{ isLogin ? "Login" : "Sign Up" }}</AppButton>
        <AppButton
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin"
          >Switch to {{ isLogin ? "Signup" : "Login" }}</AppButton
        >
      </form>
    </div>
  </div>
</template>

<script>
import AppInputControl from "@/components/UI/AppInputControl.vue";
import AppButton from "@/components/UI/AppButton.vue";

export default {
  name: "AdminAuthPage",
  layout: "admin",
  components: {
    AppInputControl,
    AppButton
  },
  data() {
    return {
      isLogin: true
    };
  }
};
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>
