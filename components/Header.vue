<template>
    <header>
        <div class="logo-wrapper">
            <nuxt-link class="logo-link" :to="localePath('/')">
                <img src="/img/Logo.png" alt="">
            </nuxt-link>
        </div>
        <div class="localeSwitcher">
            <select :value="$i18n.locale" @change="$i18n.setLocale($event.target.value)">
                <option
                    v-for="(lang, i) in $i18n.locales"
                    :key="`lang-${i}`"
                    :value="lang">
                    {{ lang }}
                </option>
            </select>
        </div>
        <nav class="main-menu" v-bind:class="{active: menuActive}">
            <button class="burger" v-on:click="burgerActivation">
                <span></span>
                <span></span>
                <span></span>
            </button>
            
            <div class="menu-list" @click="resetClass">
                <nuxt-link class="menu-link"  active-class="current-page" :to="localePath('/about')" >{{$t('linkAbout')}}</nuxt-link>
                <nuxt-link class="menu-link"  active-class="current-page" :to="localePath('/resume')">{{$t('linkResume')}}</nuxt-link>
                <nuxt-link class="menu-link"  active-class="current-page" :to="localePath('/contacts')">{{$t('linkContacts')}}</nuxt-link>
            </div>            

        </nav>
    </header>
</template>

<script>


export default {
    data () {
        return {
            menuActive: false,
            langs: ['en', 'ru' ]
        }
    },
    methods: {
        burgerActivation: function () {
            this.menuActive = !this.menuActive
            document.body.classList.add('menuActive')
            if (this.menuActive == false) {
                document.body.classList.remove('menuActive')
            } 
        },

        resetClass: function () {
            this.menuActive = false
            document.body.classList.remove('menuActive')
        }

        

    },
}
</script>