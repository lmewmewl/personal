<template>
    <div class="main-info">
        <div class="about-text">
            {{$t("helloMyName")}} <nuxt-link class="link" to="/about">{{$t('myName')}}!</nuxt-link>
        <br> <span class="decoration">&lt;</span> {{$t('myProfession')}} <span class="decoration">/&gt;</span></div>
        <nuxt-link  class="link lets-start"  to="/about" >
            <img class="fireworks firwork-first" src="/img/icons/fireworks.png"  v-if="hover">
            <img class="fireworks firwork-second" src="/img/icons/fireworks.png" v-if="hover" alt="">
            <span  v-on:mouseover="mouseOver"
            v-on:mouseleave="mouseLeave"> {{$t('letsStart')}}!</span>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    data () {
        return {
            hover: false
        }
    },

    methods: {
        mouseOver: function () {
            this.hover = true
        },
        mouseLeave: function () {
            this.hover = false
        }
    },
    watch: {
      '$route' (to, from) {
        document.title = to.meta.title || 'Pump'
      }
    }
}
</script>

<style scoped>
    .about-text {
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 150%;
    }

    .main-info {
        display: block;
        width: 100%;
        min-height: 455px;
        padding-top: 20px;
        background-image: url(/img/free-img-you-can-find-it.svg);
        background-repeat: no-repeat;
        background-size: 655px 455px;
        background-position: 330px 0px;
    }

    .decoration {
        color: #1B5BFF;
    }

    .lets-start {
        display: inline-block;
        margin-top: 45px;
        position: relative;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 151%;
    }

    .lets-start:hover {
        opacity: 1;
    }

    .fireworks {
        display: block;
        max-width: 50px;
        position: absolute;
        top: -45px;
        opacity: 0;
        z-index: 1;
    }

    .firwork-first {
        left: -50px;
    }

    .firwork-second {
        transform: rotateY(180deg);
        right: -50px;
        -webkit-transform: rotateY(180deg);
        -moz-transform: rotateY(180deg);
        -ms-transform: rotateY(180deg);
        -o-transform: rotateY(180deg);
    }

    .lets-start:hover .firwork-first {
        animation: fireworks 0.4s ease-in 1 forwards;
    }

    .lets-start:hover .firwork-second {
        animation: fireworks 0.4s ease-in 0.3s 1 forwards;
    }

    @keyframes fireworks {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @media (max-width: 480px) {
        .about-text {
            font-size: 24px;
        }

        .main-info {
            background-size: 400px 200px;
            background-position: 86px 112px;
        }
    }


    @media (max-width: 380px) {
        .main-info {
            min-height: 350px;
        }

        .about-text {
            font-size: 20px;
        }

        .lets-start {
            margin-top: 25px;
            font-size: 18px;
        }

        .main-info {
            background-position: 24px 112px;
        }
    }


    @media (max-width: 320px) {
        .about-text {
            font-size: 18px;
        }

        .main-info {
            background-position: 2px 112px;
        }
    }


</style>
