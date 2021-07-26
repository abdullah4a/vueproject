<template>
  <div class="navbar-menu">
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a
            :href="github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-github fa-2x" aria-hidden="true"></i>
          </a>
          <a
            :href="twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-twitter fa-2x" aria-hidden="true"></i>
          </a>
          <a :href="facebook" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-facebook fa-2x" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"HeaderBarLinks",
data(){
  return{
          github:'https://github.com/abdullah4a/vueproject',
          twitter:'https://twitter.com/account/access',
          facebook:'https://facebook.com/abdullah4a'
        }
      } 
      }
</script>