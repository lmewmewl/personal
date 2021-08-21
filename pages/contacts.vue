<template>
    <div class="content-wrapper">
        <div class="contact">
            <a href="mailto:fateevke@gmail.com" rel="nofollow" class="mail-me">f<small>ateev</small>k<small>e@gmail.com</small></a>
            <div class="my-socials">
                <a href="https://www.instagram.com/lmewmewl/" rel="nofollow" class="social" target="_blank">instagram</a>
                <a href="https://www.linkedin.com/in/constantine-fateev-524127148/" rel="nofollow" class="social" target="_blank">linkedin</a>
                <a href="https://www.facebook.com/profile.php?id=100001952191512" rel="nofollow" class="social" target="_blank">facebook</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
        head () {
        return {
            title: this.$t('contactsTitle'),
            meta: [
                {
                    hid: this.$t('contactsDescription'),
                    name: this.$t('contactsTitle'),
                    content: this.$t('contactsContent')
                }
            ],
        }
    },
}
</script>

<style scoped>
    .contact {
        padding-top: 20px;
    }

    .mail-me {
        display: block;
        max-width: 550px;
        margin: 0 auto 30px;
        align-self: center;
        font-weight: 400;
        font-size: 60px;
        line-height: 70px;
        font-style: italic;
        text-align: center;
        color: #000000;
    }

    .mail-me small {
        font-weight: 100;
    }

    .my-socials {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
    }

    .my-socials .social {
        display: inline-block;
        margin-right: 30px;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
    }

    .my-socials .social:last-child {
        margin-right: 0px;
    }

    @media (max-width: 480px) {
        .mail-me {
            font-size: 30px;
        }

        .my-socials .social {
            font-size: 14px;
        }
    }

</style>
