<template>
  <footer id="AppFooter">
    <div id="footer" class="text-center">
      Copyright &copy; 2020. All Rights Reserved.
    </div>    
  </footer>
</template>
<script>
  export default {
    name: 'AppFooter',
  };
</script>
<style scoped>
  #footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 3rem;
    padding: 0.75rem 1.25rem;
    background-color: var(--light);
    border-top: 0 solid rgba(0, 0, 0, 0.125);
  }
</style>
