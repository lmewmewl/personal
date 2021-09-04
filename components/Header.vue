<template>
    <header>
        <div class="logo-wrapper">
            <nuxt-link class="logo-link" :to="localePath('/')">
                <img src="/img/Logo.png" alt="">
            </nuxt-link>
        </div>
        <div class="localeSwitcher">
            <multiselect v-model="$i18n.locale" :value="$i18n.locale"  :options="$i18n.locales" :searchable="false" :showLabels="false" :allow-empty="false" >
             <template slot="option"  slot-scope="props">{{ props.option }}</template>
            </multiselect>
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
import Multiselect from 'vue-multiselect'

export default {
    
    components: {
        Multiselect
    },
    data () {

        return {
            menuActive: false,
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
        },

        selectAction: function() {
            console.log(this.event)
        }
        

    },
}
</script>