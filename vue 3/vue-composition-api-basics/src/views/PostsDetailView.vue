<template>
  <div class="about">
    <h1>This is a post page</h1>
    <p>Display the content of post with ID of {{ $route.params.id }}!</p>
    <div>
      <button @click="showPostId">Show Post ID</button>
    </div>
    <div>
      <button @click="goHomeIn3Seconds">Go Home in 3 Seconds</button>
    </div>
    <div>
      <button @click="goToFirstPost">Go To First Post</button>
    </div>
    <p>
      <RouterLink to="/posts">&lt; Back to Posts</RouterLink>
    </p>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const showPostId = () => {
  // alert(`The ID of this post is: ${this.$route.params.id}`)
  alert(`The ID of this post is: ${route.params.id}`)
}

const goHomeIn3Seconds = () => {
  setTimeout(() => {
    // this.$router.push('/')
    // router.push('/')
    router.push({ name: 'home' })
  }, 3000)
}

const goToFirstPost = () =>{
  router.push({
    name: 'postDetail',
    params: {
      id: 'id1'
    }
  })
}
</script>