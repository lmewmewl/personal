<template>
    <transition name="aboutTransition">
        <div class="content-wrapper">
            <div class="about">
                <div class="about-info">
                    <div class="my-photo"><img src="/img/my-photo.jpg" rel="nofollow" alt="At this photo Constantine The Great! Developer and designer of this perfect portfolio site!" title="At this photo Constantine The Great! Developer and designer of this perfect portfolio site!"></div>
                    <div class="text-info">
                        <h1>{{$t('someAboutMe')}}</h1>
                        <div class="about-text-wrapper">
                            <p>{{$t('aboutText1')}} <nuxt-link :to="localePath('/resume')">{{$t('aboutText2')}}</nuxt-link></p>
                            <p>{{$t('aboutText3')}} <a href="https://en.wikipedia.org/wiki/Saint_Petersburg" target="_blank">{{$t('aboutText4')}}</a> {{$t('aboutText5')}} </p>
                            <p>{{$t('aboutText6')}}<nuxt-link :to="localePath('/resume')"> {{$t('aboutText7')}}</nuxt-link>, {{$t('aboutText8')}}</p>
                            <p>{{$t('aboutText9')}} <a target="_blank" rel="nofollow" href="https://www.instagram.com/lmewmewl/" >{{$t('aboutText10')}}</a>, {{$t('aboutText11')}} <a target="_blank" rel="nofollow" href="https://www.instagram.com/p/B1rVEEjopsn/">{{$t('aboutText12')}}</a>, {{$t('aboutText13')}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>

export default {
    head () {
        return {
            title: this.$t('aboutTitle'),
            meta: [
                {
                    hid: this.$t('aboutDescription'),
                    name: this.$t('aboutTitle'),
                    content: this.$t('aboutContent')
                }
            ],
    }
  }
}
</script>
<style scoped>
    .about {
        margin-bottom: 60px;
    }

    .about-info {
        display: flex;
        width: 100%;
        align-items: flex-start;
        justify-content: flex-start;
    }

    .my-photo {
        display: block;
        width: 100%;
        max-width: 360px;
        margin-right: 30px;
    }

    .my-photo img {
        display: block;
        width: 100%;
    }

    .about-text-wrapper {
        padding: 0px 15px;
        border-left: 2px solid #1B5BFF;
    }



</style>
