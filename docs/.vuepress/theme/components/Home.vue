<template>
  <main class="home" aria-labelledby="main-title">
    <Content class="theme-default-content custom" />

    <div v-if="data.footer" class="footer">
      {{ data.footer }}
    </div>
  </main>
</template>

<script>
export default {
  name: 'Home',

  computed: {
    data () {
      return this.$page.frontmatter
    },
  }
}
</script>

<style lang="stylus">
.home {
  padding: $navbarHeight 2rem 0
  max-width: $homePageWidth
  margin: 0px auto
  display: block

  .hero {
    text-align: center
    img {
      width: 4rem
      vertical-align: middle
      padding-bottom: 0.5rem
    }

    h1 {
      font-family: 'Liberation Serif', serif
      font-size: 4rem
      font-weight: 500
    }

    h1, .description, .action {
      margin 1.8rem auto
    }

    .description {
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      //color lighten($textColor, 40%)
      color $backgroundColor //lighten(#006938, 80%)
    }

    .action-button {
      display inline-block
      font-size 1.2rem
      color #fff
      //background-color $accentColor
      background-color $backgroundColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid $accentColorEnergy //darken(#006938, 10%)darken($accentColor, 10%)
      &:hover {
        background-color $accentColorEnergy // lighten($accentColorBold, 10%)
      }
    }
  }

  .features {
    border-top 1px solid $borderColor
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  }
  .feature {
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2 {
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    }
    p {
      color lighten($textColor, 25%)
    }
  }

  .footer {
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)
  }
}

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>
