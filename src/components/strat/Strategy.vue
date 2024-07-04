<script setup lang="ts">
import strategyData from '../../data/strategy.ts'

</script>

<template>
  <div class="main">
    <div class="card-container" v-for="article in strategyData" :key="article.id">
      <a :href="article.src" target="_blank">
              <span class="card">
        <span>{{ article.title }}</span>
        <span><span class="source">{{article.source}}</span></span>
        <span class="linkout">Read More...</span>
      </span>

        <img :src="article.backgroundImg"
             :alt="article.title"
             :style="`
              position: absolute;
              width: 100%;
              text-align: center;
              color: white;`"
             loading="lazy"/>
      </a>
      <span class="overlay"></span>
    </div>
  </div>
</template>

<style scoped>
.main {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

a {
  color: white;
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}

img {
  object-fit: contain;
}

.card-container {
  position: relative;
  height: 255px;
  overflow: hidden;
}

.card {
  height: 100px;
  width: 100%;
  position: absolute;
  z-index: 1;
  margin-left: 65%;
  color: white;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  margin-top: 5%;
}

.linkout {
  font-weight: 400;
  text-decoration: underline;
}

.overlay {
  transition: .6s ease;
  opacity: 0.7;
  position: absolute;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.86), rgba(0, 0, 0, 0.86));
  height: 100%;
  width: 100%;
  text-align: center;
  
}

.title {
}

.source {
  font-style: italic;
}
</style>