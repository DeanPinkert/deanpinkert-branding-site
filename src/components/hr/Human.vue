<script setup lang="ts">
import humanData from '../../data/human.ts'

</script>

<template>
  <div class="main" >
    <div class="gallery">
      <div v-for="(image, idx) in humanData" :class="`gallery-item gallery-item-${idx}`" :key="image.id">
        <div class="bg-img">
          <img :src="image.backgroundImg"
               :alt="image.title"
               :style=" `
                position: absolute;
                height: ${image.height}px;
                width: 100%;
                text-align: center;
                color: white;`"
               :height="image.height"
               width="100%"
          />
          <div class="overlay">
            <a :href="image.src" target="_blank">
              <span class="title">{{image.title}}</span>
              <span><span class="source">{{image.source}}</span></span>
              <span class="linkout">Read More...</span>
              <span v-if="image.audio" class="audio-banner">Hear Dean's story: </span>
              <audio v-if="image.audio" controls>
                <source src="https://audio.jukehost.co.uk/fHzavDGfQfonj9VuDlpnaUizgjZt9fm2">
              </audio>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.main {
  height: 100vh;

  .gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(150px, auto);
    gap: 10px;

    img {
      width: 100%;
      object-fit: cover;
      cursor: pointer;
      overflow: hidden;
    }

    .gallery-item {
      position: relative;

      a {
        color: white;
        background: transparent;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;

       & > * {
          padding: 0 18px;
        }
      }
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
      transform: scale(1.01);    }

    .gallery-item-0 {
      grid-column: 1 / 3;
      grid-row: 1;

    }
    .gallery-item-1 {
      grid-column: 3;
      grid-row: 1/3;

    }
    .gallery-item-2 {
      grid-column: 1;
      grid-row: 2 / 6;

    }
    .gallery-item-3 {
      grid-column: 2 / 3;
      grid-row: 4 / 6;

    }
    .gallery-item-4 {
      grid-column: 2;
      grid-row: 4/2;

    }
    .gallery-item-5 {
      grid-column: 3;
      grid-row: 3/6;

    }

    .gallery-item-6 {
      grid-column: 2;
      grid-row: 4;
    }

    .audio-banner {
      margin-top: 25px;
    }
  }
}
</style>