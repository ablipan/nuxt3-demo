<template>
  <div>One</div>
</template>
<script lang="ts" setup>
const token = useCookie('token', {
  maxAge: 60 * 60 * 24 * 15, // 15天
})
token.value = 'tokenValue'

await $fetch('/api/postApi', {
  method: 'post',
  headers: useRequestHeaders(['cookie']),
});

await $fetch('/api/postApi', {
  method: 'post',
  headers: useRequestHeaders(['cookie']),
  body: {
    foo: 'bar'
  }
});
</script>
