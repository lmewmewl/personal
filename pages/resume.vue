<template>
    <div class="content-wrapper">
        <div class="resume">
            <h1>{{$t('titleResume')}}</h1>
            <div class="resume-row">
                <section class="resume-col" v-on:click="colAction">
                    <h2>{{$t('titleExp')}}</h2>
                    <article class="resume-item">
                        <h3 class="resume-item__heading">2018 - {{$t('currentTimeTitle')}}</h3>
                        <a href="https://www.mcart.ru/" target="_blank"   class="resume-item__link">{{$t('titleCompanie1')}}</a>
                        <div class="resume-item__subtitle">{{$t('myPosition1')}}</div>
                        <div class="resume-item__description">
                             <p>
                                 {{$t('myExp1')}}<br>
                                 {{$t('myExp2')}}<br>
                                 {{$t('myExp3')}}<br>
                                 {{$t('myExp4')}}<br>
                                 {{$t('myExp5')}}<br>
                                 {{$t('myExp6')}}
                            </p>
                            <p>
                                {{$t('myExp7')}}<br>
                                 {{$t('myExp8')}}<br>
                                 {{$t('myExp9')}}<br>
                                 {{$t('myExp10')}}<br>
                                 {{$t('myExp11')}}<br>
                                 {{$t('myExp12')}}

                            </p>
                        </div>
                    </article>
                    <article class="resume-item">
                        <h3 class="resume-item__heading">2017</h3>
                        <a href="https://www.alkodesign.ru/" target="_blank"  class="resume-item__link">{{$t('titleCompanie2')}}</a>
                        <div class="resume-item__subtitle">{{$t('myPosition2')}}</div>
                        <div class="resume-item__description">
                            <p>
                                {{$t('myExp13')}}<br>
                                 {{$t('myExp14')}}<br>
                                 {{$t('myExp15')}}<br>
                                 {{$t('myExp12')}}
                            </p>
                        </div>
                    </article>
                    <article class="resume-item">
                        <h3 class="resume-item__heading">2015-2017</h3>
                        <a href="https://mkmedia.ru/" target="_blank"  class="resume-item__link">{{$t('titleCompanie3')}}</a>
                        <div class="resume-item__subtitle">{{$t('myPosition3')}}</div>
                        <div class="resume-item__description">
                            <p>
                               {{$t('myExp16')}}<br>
                               {{$t('myExp17')}}<br>
                               {{$t('myExp18')}}<br>
                               {{$t('myExp19')}}<br>
                               {{$t('myExp20')}}<br>
                               {{$t('myExp21')}}<br>
                               {{$t('myExp22')}}<br>

                               {{$t('myExp12')}}
                            </p>
                        </div>
                    </article>
                    <article class="resume-item">
                        <h3 class="resume-item__heading">2012 - 2013</h3>
                        <a class="resume-item__link">{{$t('titleCompanie4')}}</a>
                        <div class="resume-item__subtitle">{{$t('myPosition4')}}</div>
                        <div class="resume-item__description">
                            <p>
                                {{$t('myExp23')}}<br>
                               {{$t('myExp24')}}<br>
                               {{$t('myExp25')}}<br>
                               {{$t('myExp26')}}<br>
                               {{$t('myExp27')}}<br>
                               {{$t('myExp28')}}<br>
                               {{$t('myExp29')}}
                            </p>
                        </div>
                    </article>
                    <article class="resume-item">
                        <h3 class="resume-item__heading">2011</h3>
                        <a href="https://www.sberbank.ru/" target="_blank"  class="resume-item__link">{{$t('titleCompanie5')}}</a>
                        <div class="resume-item__subtitle">{{$t('myPosition5')}}</div>
                        <div class="resume-item__description">
                            <p>
                               {{$t('myExp30')}}<br>
                               {{$t('myExp31')}}
                            </p>
                        </div>
                    </article>
                </section>
                <section class="resume-col" v-on:click="colAction" >
                    <h2>{{$t('titleSkilzzz')}}</h2>
                    <article class="resume-item">
                        <h3 class="resume-item__heading">{{$t('titleSkill1')}}</h3>
                        <div class="resume-item__description">
                            <p>
                                HTML5<br>
                                CSS (Vanila CSS, LESS, SCSS, Bootstrap)<br>
                                Javascript (jQuery, Vue JS, Nuxt JS)<br>
                                SVG<br>
                                Git
                            </p>
                        </div>
                    </article>
                    <article class="resume-item">
                        <h3 class="resume-item__heading">{{$t('titleSkill2')}}</h3>
                        <div class="resume-item__description">
                            <p>
                                Figma<br>
                                Photoshop<br>
                                Lightroom<br>
                                CorelDRAW
                            </p>
                        </div>
                    </article>
                    <article class="resume-item">
                        <h3 class="resume-item__heading">{{$t('titleSkill3')}}</h3>
                        <div class="resume-item__description">
                            <p>
                                {{$t('managementSkill1')}}<br>
                                {{$t('managementSkill2')}}<br>
                                {{$t('managementSkill3')}}<br>
                                {{$t('managementSkill4')}}<br>
                                {{$t('managementSkill5')}}<br>
                                {{$t('managementSkill6')}}<br>
                                {{$t('managementSkill7')}}<br>
                                {{$t('managementSkill8')}}<br>
                                {{$t('managementSkill9')}}<br>
                                {{$t('managementSkill10')}}
                            </p>
                        </div>
                    </article>
                    <article class="resume-item">
                        <h3 class="resume-item__heading">{{$t('titleSkill4')}}</h3>

                        <div class="resume-item__description">
                            <p>
                                {{$t('otherSkill1')}}<br>
                                {{$t('otherSkill2')}}<br>
                                {{$t('otherSkill3')}}<br>
                                {{$t('otherSkill4')}}<br>
                                {{$t('otherSkill5')}}<br>
                                {{$t('otherSkill6')}}<br>
                                {{$t('otherSkill7')}}<br>
                                {{$t('otherSkill8')}}
                            </p>
                        </div>
                    </article>
                </section>
                <section class="resume-col" v-on:click="colAction">
                    <h2>{{$t('titleCourses')}}</h2>
                    <article class="resume-item">
                        <h3 class="resume-item__heading">2019</h3>
                        <a href="https://stratoplan-school.com/" target="_blank"  class="resume-item__link">{{$t('courseTitle1')}} 7.0</a>
                        <div class="resume-item__subtitle">{{$t('educationInfo1')}}</div>
                    </article>
                    <article class="resume-item">
                        <h3 class="resume-item__heading">2015 - 2016</h3>
                        <a href="https://www.1c-bitrix.ru/" class="resume-item__link">{{$t('courseTitle2')}}</a>
                        <div class="resume-item__subtitle">
                            {{$t('educationInfo2')}}<br>
                            {{$t('educationInfo3')}}<br>
                            {{$t('educationInfo4')}}
                        </div>
                    </article>
                    <article class="resume-item">
                        <h3 class="resume-item__heading">2012 - 2014</h3>
                        <a href="http://tti.sfedu.ru/" target="_blank"  class="resume-item__link">{{$t('courseTitle3')}}</a>
                        <div class="resume-item__subtitle">{{$t('educationInfo5')}}</div>
                    </article>
                    <article class="resume-item">
                        <h3 class="resume-item__heading">2008 - 2012</h3>
                        <a href="http://tti.sfedu.ru/" target="_blank" class="resume-item__link">{{$t('courseTitle3')}}</a>
                        <div class="resume-item__subtitle">{{$t('educationInfo6')}}</div>
                    </article>
                </section>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    head () {
        return {
            title: this.$t('resumeTitle'),
            meta: [
                {
                    hid: this.$t('resumeDescription'),
                    name: this.$t('resumeTitle'),
                    content: this.$t('resumeContent')
                }
            ],
        }
    },
    data() {
        return {
            colHidden: true
        }
    },
    methods: {
        colAction: function () {
            if (window.innerWidth <= 767) {
                // future code
            }
        }
    }
}
</script>

<style scoped>
    .resume {
        margin-bottom: 60px;
    }

    .resume-row {
        display: flex;
        width: 100%;
        align-items: flex-start;
        justify-content: flex-start;
    }

    .resume-col {
        display: block;
        width: 33.3333%;
        padding-right: 20px;
    }

    .resume-item {
        padding-left: 15px;
        border-left: 2px solid #1B5BFF;
    }

    .resume-item:not(:last-child) {
        margin-bottom: 30px;
    }

    .resume-col h2 {
        margin: 0px 0px 20px;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 151%;
        color: #000000;
    }

    .resume-item__heading {
        margin: 0px;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 151%;
        color: #000000;
    }

    .resume-item__link {
        display: inline-flex;
        margin-bottom: 5px;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 151%;
        color: #1B5BFF;
    }

    .resume-item__subtitle {
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 151%;
        color: #000000;
    }

    .resume-item__description {
        margin-top: 15px;
    }

    .resume-item__description p {
        margin-bottom: 15px;
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 160%;
        color: #000000;
    }

    .resume-item__description p:last-child {
        margin-bottom: 0px;
    }

    
    @media (max-width: 767px) {
        .about-info {
            flex-direction: column;
        }

        .about-text-wrapper {
            margin-bottom: 30px;
            order: 1;
        }

        .my-photo {
            margin-right: 0px;
            order: 2;
        }

        .resume-row {
            flex-direction: column;
        }

        .resume-col {
            width: 100%;

            margin-bottom: 20px;
            padding-right: 0px;
            overflow: hidden;
        }

        .resume-col:last-child {
            margin-bottom: 0px;
        }

    }

</style>
