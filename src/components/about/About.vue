<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)

const props = defineProps(['width'])

const heroText = [
    'PINKERT',
    'TRADE & HUMAN RIGHTS',
    'CONSULTING'
]

</script>

<template>
  <div class="container__desktop" v-if="props.width > 900">
    <div class="container__left">
      <div class="container__main-branding">
        <div class="container__main-branding-text">
          <div class="container__left--hero-text-sentence" v-for="word in heroText">
            <div class="">{{word}}</div>
          </div>
        </div>
        <img class="main-landing-logo" src="/dphrt-big.svg">
      </div>
      <p class="container__bio--content">Dean Pinkert is an innovator in international trade and
        human rights policy. Since departing from the
        International Trade Commission (“ITC”) in 2017 after ten
        years as a Commissioner (with two years as
        presidentially designated Vice Chairman), his
        involvement in public debate has included testimony
        before the ITC and an interagency forced labor
        committee, televised interviews, and publications on a
        range of topics including human rights violations in
        U.S.-facing supply chains.</p>
      <div>

        <div class="container__email--desktop">
          <div class="container__cta--desktop">
            <span class="mailto" @click="open = true"><a href="mailto:pinkertconsulting@gmail.com" target="_blank"><img src="/mail.svg" width="30" height="30" alt="mail icon"/></a></span>
            <span class="linkedin"><a href="https://www.linkedin.com/in/dean-pinkert/" target="_blank"><img src="/linkedin.svg" width="30" height="30" alt="linkedin icon"/></a></span>
          </div>
          <a href="mailto:pinkertconsulting@gmail.com" target="_blank">pinkertconsulting@gmail.com</a>
        </div>
      </div>


    </div>
    <div class="container__right">
      <img
          class="container__left--portrait"
          src="https://images.squarespace-cdn.com/content/v1/5810dda3e3df28ce37b58357/1635801209439-FFUCZLQKLS0TSL2CJ33G/signal-2021-11-01-160737_001.jpg?format=1000w"
          width="100%"
          loading="lazy"
          alt="Large image of Dean Pinkert"
      />
<!--      <div class="container__cta&#45;&#45;desktop">-->
<!--        <span class="mailto"><a href="mailto:pinkertconsulting@gmail.com" target="_blank"><img src="/mail.svg" width="30" height="30" alt="mail icon"/></a></span>-->
<!--        <span class="linkedin"><a href="https://www.linkedin.com/in/dean-pinkert/" target="_blank"><img src="/linkedin.svg" width="30" height="30" alt="linkedin icon"/></a></span>-->
<!--      </div>-->

    </div>
<!--    <span class="overlay"></span>-->
    <div v-if="open" class="modal">
      <p>Contact us at <a href="mailto:pinkertconsulting@gmail.com">pinkertconsulting.com</a></p>
      <button @click="open = false">Close</button>
    </div>
  </div>
  <div class="container__mobile" v-else>
    <div class="container__main-branding">
      <div class="container__main-branding-text">
        <div class="container__left--hero-text-sentence" v-for="word in heroText">
          <div class="">{{word}}</div>
        </div>
      </div>
      <img class="main-landing-logo" src="/dphrt-big.svg">
    </div>
    <img
        class="portrait-mobile"
        src="https://images.squarespace-cdn.com/content/v1/5810dda3e3df28ce37b58357/1635801209439-FFUCZLQKLS0TSL2CJ33G/signal-2021-11-01-160737_001.jpg?format=1000w"
        loading="lazy"
        alt="Image of Dean Pinkert"
    />
    <div class="container__mobile--bio-cta-container">
      <p>Dean Pinkert is an innovator in international trade and
        human rights policy. Since departing from the
        International Trade Commission (“ITC”) in 2017 after ten
        years as a Commissioner (with two years as
        presidentially designated Vice Chairman), his
        involvement in public debate has included testimony
        before the ITC and an interagency forced labor
        committee, televised interviews, and publications on a
        range of topics including human rights violations in
        U.S.-facing supply chains.
      </p>

      <div class="center">
        <div class="container__mobile--cta-container">
          <span class="mailto" @click="open = true"><a href="mailto:pinkertconsulting@gmail.com" target="_blank"><img src="/mail.svg" width="30" height="30" alt="mail icon"/></a></span>
          <span class="linkedin"><a href="https://www.linkedin.com/in/dean-pinkert/" target="_blank"><img src="/linkedin.svg" width="30" height="30" alt="linkedin icon"/></a></span>
        </div>
        <div class="container__email--mobile">
          <a href="mailto:pinkertconsulting@gmail.com" target="_blank">pinkertconsulting@gmail.com</a>
        </div>
      </div>

    </div>
    <div v-if="open" class="modal">
      <p>Contact us at <a href="mailto:pinkertconsulting@gmail.com">pinkertconsulting.com</a></p>
      <button @click="open = false">Close</button>
    </div>
  </div>
</template>

<style scoped>
  .container__desktop {
    height: 100vh;
    display: flex;
    flex-direction: row;

    .container__left {
      width: 40vw;
      height: 100vw;
      display: flex;
      flex-direction: column;
      margin-top: 10%;

      .container__main-branding {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 15px;

        font-family: "Ubuntu", sans-serif;
        font-weight: 400;
        font-style: normal;
      }

      .main-landing-logo {
        width: 125px;
        height: 125px;
      }


      .container__left--hero-text-sentence {
        font-size: 1em;
      }

      .container__left--hero-text-sentence:nth-child(1) {
        color: #4D4397;
        font-size: 35px;
        font-weight: 500;
        text-align: right;
      }

      .container__left--hero-text-sentence:nth-child(2) {
        color:  #41A9DF;
        font-size: 22px;
        font-weight: 400;
      }

      .container__left--hero-text-sentence:nth-child(3) {
        color:  #41A9DF;
        text-align: right;
        font-size: 22px;
        font-weight: 400;
      }

      .container__left--hero-text-sentence:nth-child(4) {
        color: #f65147;
      }

      .container__left--portrait {

      }


    }

    .container__right {
      width: 60vw;
      height: 100vh;
    }

    .container__bio--content {
      display: flex;
      justify-content: end;
      align-self: end;
      width: 97%;
      margin-top: 25%;
      padding: 5px;
      font-weight: 300;
      font-size: 16px;
      line-height: 1.8em
    }

    .container__cta--desktop {
      display: flex;
      flex-direction: row;

      .info {
        margin-left:  15px;
        display: flex;
        align-self: center;

        a {
          color: #f65147;
        }

      }

      .linkedin {
        margin-left:  15px;
        display: flex;
        align-self: center;

        a {
          color: #f65147;
        }

      }

      .mailto {
        margin-left:  15px;
        display: flex;
        align-self: center;

        a {
          color: #f65147;
        }

      }

    }

    .overlay {
      transition: .6s ease;
      opacity: 0.7;
      box-shadow:  2px 1px 6px 0 #949494;
      position: absolute;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.86), rgba(0, 0, 0, 0.86));
      height: 100%;
      width: 100%;
      text-align: center;
    }

    .container__email--desktop {
      padding-left: 10px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
  }

  .container__mobile {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;


    .center {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .container__main-branding {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 15px;

      font-family: "Ubuntu", sans-serif;
      font-weight: 400;
      font-style: normal;
    }

    .container__main-branding-text {
      display: flex;
      flex-direction: column;

    }

    .main-landing-logo  {
      width: 85px;
      height: 85px;
    }

    .portrait-mobile {
      height: 200px;
      width: 200px;
      justify-content: center;
      display: flex;
      align-self: center;
    }

    .container__left--hero-text-sentence:nth-child(1) {
      color: #4D4397;
      font-size: 25px;
      font-weight: 500;
      text-align: right;      }

    .container__left--hero-text-sentence:nth-child(2) {
      color:  #41A9DF;
      font-size: 18px;
      font-weight: 400;
    }

    .container__left--hero-text-sentence:nth-child(3) {
      color:  #41A9DF;
      text-align: right;
      font-size: 18px;
      font-weight: 400;
    }

    .container__mobile--hero-text {
      z-index: 2;

      .container__mobile--hero-text-sentence {
        font-size: 60px;
        width: 100vw;
      }
    }

    .container__mobile--bio-cta-container {
      z-index: 2;

      p {
        color: black;
        font-size: 14px;
        padding: 3px 25px;
      }

      audio {
        width: 250px;
      }

      a {
        width: 30px;
        height: 30px;
      }
      img {
        height: 30px;
        width: 30px;
      }

    }

    .overlay {
      transition: .6s ease;
      opacity: 0.7;
      box-shadow:  2px 1px 6px 0 #949494;
      position: absolute;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.86), rgba(0, 0, 0, 0.86));
      height: 100%;
      width: 100%;
      text-align: center;
    }

    .container__mobile--cta-container {
      display: flex;
      flex-direction: row;
      gap: 35px;
      justify-content: center;

      .info {
        width: 30px;
        height: 30px;
        margin-left:  15px;
        display: flex;
        align-self: center;

        span {
          width: 30px;
          height: 30px;
          color: #f65147;

          img {
            width: 30px;
            height: 30px;
          }
        }

      }

      .linkedin {
        margin-left:  15px;
        display: flex;
        align-self: center;

        a {
          color: #f65147;
        }

      }

      .mailto {
        margin-left:  15px;
        display: flex;
        align-self: center;

        a {
          color: #f65147;
        }

      }
    }


  }

  .modal {
    position: fixed;
    z-index: 999;
    top: 40%;
    left: 30%;
    width: 200px;
    color: #4D4397;
    padding: 20px;
    border-radius: 16px;
    background-color: white;
    box-shadow:  2px 1px 6px 0 #949494;

    button {
      margin-left: 25%;
      margin-bottom: 10%;
      background-color: white;
      color: #41A9DF;
      border-radius: 8px;
      box-shadow:  2px 1px 6px 0 #949494;
    }
  }
</style>