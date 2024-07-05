<script setup lang="ts">
import {onMounted} from "vue";
import ipData from '../../data/ip.ts'

const props = defineProps(['height', 'width', 'scrollHash'])

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
      } else {
        entry.target.classList.remove('show')
      }
    })
  })

  const pageElementArr = Array.from(document.querySelectorAll('.column'))

  pageElementArr.forEach((el:any) => observer.observe(el))

  const hash = pageElementArr.reduce((acc: any, idx: any) => {
    return {...acc, [idx]: idx * Number(props.height.value) || 0}
  })

  props.scrollHash.value = hash
})
</script>

<template>
  <section class="main">
    <div class="column-container">
      <div v-for="(image) in ipData" class="column"  :key="image.id">
        <div class="gallery-item"
             :style="
`             background: url(${image.backgroundImg}), linear-gradient(0deg, rgba(0, 0, 0, 0.86), rgba(0, 0, 0, 0.86));
              background-size: cover;
              background-repeat: no-repeat;
              background-position: center;
              height: 100%;
              width: 100%;`"
        >
          <div class="overlay">
            <a :href="image.src" target="_blank">
              <span class="title">{{image.title}}</span>
              <span><span class="source">{{image.source}}</span></span>
              <span class="linkout">Read More...</span>

            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.main {
  height: 100%;
}

a {
  color: white;
  background: transparent;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.column-container {
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
}

.column {
  width: 25vw;
  height: 100vh;
  opacity: 0;
  filter: blur(5px);
  transform: translateX(0);
  transition: all 1s;
}

.column:nth-child(1) {
  transition-delay: 200ms;
}

.column:nth-child(2) {
  transition-delay: 400ms;
}
.column:nth-child(3) {
  transition-delay: 600ms;
}
.column:nth-child(4) {
  transition-delay: 800ms;
}

.overlay {
  transition: .6s ease;
  opacity: 0.7;
  position: absolute;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.86), rgba(0, 0, 0, 0.86));
  height: 100%;
  width: 100%;
  text-align: center;

  .title {
    font-weight: 600;
  }

  .source {
    font-style: italic;
  }

  .linkout {
    font-weight: 400;
    text-decoration: underline;
  }
}

.overlay:hover {
  box-shadow:  2px 1px 6px 0 black;
}

.gallery-item:hover {
  transition: .8s all ;
  transform: scale(1.01);
}

.show {
  opacity: 1;
  filter: blur(0);
  transform: translateX(0);
}
</style>