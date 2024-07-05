<script setup lang="ts">

import {onMounted, ref} from "vue";
import { useWindowSize } from '@vueuse/core'

import {useGlobalStore} from "./stores/global.ts";

import Human from "./components/hr/Human.vue";
import Intellectual from "./components/ip/Intellectual.vue";
import Strategy from "./components/strat/Strategy.vue";
import Trade from "./components/trade/Trade.vue";
import About from "./components/about/About.vue";

import tradeData from '../src/data/trade.ts'
import strategyData from '../src/data/strategy.ts'
import ipData from '../src/data/ip.ts'
import humanData from '../src/data/human.ts'
import {useSeoMeta} from "unhead";



const globalState = useGlobalStore()

const { width, height } = useWindowSize()

const scrollHash = ref({}) as any

const now = new Date()
const currentYear = now.getFullYear()

useSeoMeta({
  title: `Pinkert Trade and Human Rights Consulting`,
  description: 'Pinkert Trade and Human Rights Consulting Company Page',
  ogTitle: 'Pinkert Trade and Human Rights Consulting',
  ogDescription: 'Pinkert Trade and Human Rights Consulting Company Page'
})


const sectionsArray = [tradeData, humanData, strategyData, ipData] as any[]
const sectionsObjects = [{id: 'Trade', data: tradeData, key: 'trade'}, {id: 'Agency Strategy', data: strategyData, key: 'strategy'}, {id: 'Intellectual Property', data: ipData, key: 'intellectual'}, {id: 'Human Rights', data: humanData, key: 'human'}] as any[]

const scrollFn = (positionValue: number) => window.scrollTo({
  top: positionValue,
  left: 0,
  behavior: "smooth",
})

const setState = (passVal: string)  => globalState.$patch({
  activeNav: passVal
})
const handleNavClick = (e: Event) => {

  const clickValue =  (e.target as HTMLButtonElement).value

  const baseHashVal = scrollHash.value[1]

  switch (clickValue) {
    case 'intellectual': {
      setState(clickValue)
      return scrollFn(baseHashVal * 3)
    }
    case 'trade': {
      setState(clickValue)
      return scrollFn(baseHashVal)
    }
    case 'strategy': {
     setState(clickValue)
      return scrollFn(scrollHash.value[2])

    }
    case 'human': {
      setState(clickValue)
      return scrollFn(baseHashVal * 4)
    }
    default:
      setState('')
      return scrollFn(0)
  }
}

const backToTop = () => {
  return scrollFn(0)
}

onMounted(() => {

  const options = {
    threshold: .50
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
        setState(entry.target.id)
        return
      } else {
        entry.target.classList.remove('show')
        return
      }
    })

  }, options)

  const pageElementArr = document.querySelector('.section') ? Array.from(document.querySelectorAll('.section')) : Array.from(document.querySelectorAll('.mobile-content'))

  scrollHash.value = pageElementArr.reduce((acc, value,  idx) => {
    console.log('value: ', !!value)
    return {...acc, [idx]: idx * Number(height.value) || 0}
  })

  pageElementArr.forEach((el:any) => observer.observe(el))

   return setTimeout(() => {
        return document.documentElement.scrollTop = 0;
      }, 200);
})
</script>

<template>
  <div v-if="width > 900" class="container__app--desktop">
    <div class="container__app--desktop--navbar-container">
      <div>
        <div class="container__mast--desktop" @click="handleNavClick">
          <img src="/dphrt.svg" height="37" width="37">
        </div>
      </div>

      <nav>
        <button :class="globalState.activeNav === 'trade' ? 'trade' : 'container__app--desktop--navbar-item' " value="trade" @click="handleNavClick">TRADE</button>
        <button :class="globalState.activeNav === 'strategy' ? 'strategy' : 'container__app--desktop--navbar-item' " value="strategy" @click="handleNavClick">AGENCY STRATEGY</button>
        <button :class="globalState.activeNav === 'intellectual' ? 'intellectual' : 'container__app--desktop--navbar-item' " value="intellectual" @click="handleNavClick">INTELLECTUAL PROPERTY</button>
        <button :class="globalState.activeNav === 'human' ? 'human' : 'container__app--desktop--navbar-item' "  value="human" @click="handleNavClick">HUMAN RIGHTS</button>
      </nav>

    </div>

    <About id="about" class="section" :width="width" />
    <Trade id="trade" class="section"/>
    <Strategy id="strategy" class="section"/>
    <Intellectual id="intellectual" ref="intellectual" class="section" :height="height" :width="width" :scrollHash="scrollHash"/>
    <Human id="human" ref="human" class="section" />

    <footer class="container__footer--desktop">
      <span>Pinkert Trade & Human Rights Consulting &copy; {{ currentYear }}</span>
    </footer>

  </div>
  <div v-else class="container__app--mobile">
    <About id="about" class="section" :width="width"/>
    <div :class="`container__content--mobile ${page.id.toLowerCase()}`" v-for="(page, index) in sectionsObjects" :key="sectionsArray[index].id">
      <div :class="`header__section--mobile ${page.key}`">{{page.id.toUpperCase()}}</div>
      <div class="container__card--mobile" v-for="article in page.data" :key="article.id">
        <a :href="article.src" target="_blank">
          <span class="card">
            <span class="card-title">{{ article.title }}</span>
            <span class="source"><span class="source">{{article.source}}</span></span>
            <span class="linkout">Read More...</span>
          </span>

          <img :src="article.backgroundImg"
               :alt="article.title"
               :style="`
                  position: absolute;
                  width: 100%;
                  text-align: center;
                  color: white;`"
                loading="lazy"
                width="100%"
          />
        </a>
      </div>
    </div>
    <div class="controls">
      <button @click="backToTop">UP</button>
    </div>
    <div v-if="false" class="contact">
      <button>MAIL</button>
    </div>
    <footer class="container__footer--mobile">
      <span>Pinkert Trade & Human Rights Consulting &copy; {{ currentYear }}</span>
    </footer>
  </div>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
  html {
    scroll-behavior: smooth;
    position: relative;
  }

  .container__app--desktop {
    width: 100vw;
    height: 100%;
    
    .container__app--desktop--navbar-item {
      font-weight: 400;
    }

    .human, #human {
     background-color: #4D4397;
     color: white;
    }

    .strategy, #strategy {
      background-color: #140B00;
      color: white;
    }

    .trade,#trade {
      background-color:  #41A9DF;
      color: white;
    }

    .intellectual, #intellectual {
      background-color: #70C6BE;
      color: white;
    }

    #human, #strategy, #trade, #intellectual {
      scroll-behavior: smooth !important;
      cursor: pointer;
    }

    .container__mast--desktop {
      display: flex;
      align-self: center;
      position: sticky;
      top: 5px;
      margin-left: 10px;
      font-size: 20px;
      cursor: pointer;
      font-family: 'EB Garamond', sans-serif;
    }

    .container__app--desktop--navbar-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      position: sticky;
      top: 0;
      z-index: 3;
      background: white;
      font-family: "Ubuntu", sans-serif;
      font-weight: 400;
      font-style: normal;
    }

    button {
      cursor: pointer;
      background-color: transparent;
      width: 260px; /*BUTTON*/
      font-size: 16px;
      line-height: 1em;
      color: black;
      border-right: 0 !important;
    }

    .show {
      opacity: 1;
    }

    .section {
      opacity: 0;

      &.show {
        opacity: 1;
        transition: all 1s;
      }
    }

    .container__footer--desktop {
      display: flex;
      justify-content: center;
      font-family: "Ubuntu", sans-serif;
    }

  }

  .container__app--mobile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    position: relative;

    .header__section--mobile {
      position: sticky;
      top: 0;
      z-index: 4;
      height: 40px;
      padding: 0 15px;
      font-weight: 500;
      font-size: 20px !important;
      display: flex;
      align-items: center;
      font-family: "Ubuntu", sans-serif;


      &.human, #human {
        background-color: #4D4397;
        color: white;
      }

      &.strategy, #strategy {
        background-color: black;
        color: white;
      }

      &.trade,#trade {
        background-color: #41A9DF;
        color: white;
      }

      &.intellectual, #intellectual {
        background-color: #70C6BE;
        color: white;
      }
    }

    .controls {
      position: absolute;
      margin-left: 80%;
      bottom: 20px;
      z-index: 4;

       > * {
         background-color: #41A9DF;
         color: white;
         border-radius: 8px;

       }
    }

    .contact {
      position: sticky;
      margin-left: 80%;
      bottom: 80%;
      z-index: 4;
    }

    .container__header--mobile {
      top: 0;
      z-index: 5;
      background-color: white;

      .container__mast-mobile {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }

    }

    .section {
      height: 100vh;
      width: 100vw;
    }

    .container__mast-mobile {
      display: flex;
      align-self: center;
      position: sticky;
      top: 0;
      cursor: pointer;
      font-family: 'EB Garamond',sans-serif;
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


    .trade {
      .container__card--mobile {
        border-bottom: 5px solid #41A9DF;

      }
    }

    .agency {
      .container__card--mobile {
        border-bottom: 5px solid black;

      }
    }

    .intellectual {
      .container__card--mobile {
        border-bottom: 5px solid #70C6BE;
      }
    }

    .human {
      .container__card--mobile {
        border-bottom: 5px solid #4D4397;
      }
    }


    .container__card--mobile {
      position: relative;
      height: 25vh;
      overflow: hidden;



      .card {
        position: absolute;
        height: 25vh;
        width: 100%;
        z-index: 1;
        color: white;
        font-size: 13px;
        display: flex;
        flex-direction: column;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.36), rgba(0, 0, 0, 0.86));

        .card-title {
          width: 88vw;
        }

        .source {
          padding-top: 15px;
          font-style: italic;
        }

        .linkout {
          font-weight: 400;
          text-decoration: underline;
          margin-top: 15px;
        }
      }

    }

    .container__footer--mobile {
      color: white;
      background-color: black;
      font-family: "Ubuntu", sans-serif;
      font-weight: 100;
      font-style: normal;
      font-size: 10px;
      display: flex;
      justify-content: center;
    }

  }

</style>
