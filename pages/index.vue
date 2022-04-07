<template>
  <div>One</div>
</template>
<script lang="ts" setup>
const cookie = 'token=tokenValue'

await $fetch('/api/postApi', {
  method: 'post',
  headers: { cookie  },
});

await $fetch('/api/postApi', {
  method: 'post',
  headers: { cookie  },
  body: {
    foo: 'bar'
  }
});
</script>
