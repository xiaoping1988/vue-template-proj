<template>
  <li :class="{actived: isActived}" @click="$router.push(path)">
      <span v-if="icon && icon !== ''" class="p-menu-item-icon">
        <i :class="iconClass"></i>
      </span>
    <span class="p-menu-item-name">
      {{name}}
      </span>
  </li>
</template>

<script>
  export default {
    name: 'PMenuItem',
    props: {
      path: {
        type: String,
        required: true
      },
      icon: String, // fontawesome
      name: String,
      notooltip: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        isActived: false,
        iconClass: 'fa fa-1x fa-' + this.icon,
        title: this.name,
        tooltipDisabled: true
      }
    },
    watch: {
      '$route': 'activeItem'
    },
    methods: {
      activeItem (newVal, oldVal) {
        let tempPath = this.path
        if (newVal.fullPath === tempPath) {
          this.isActived = true
        } else {
          if (!tempPath.endsWith('/')) {
            tempPath = tempPath + '/'
          }
          this.isActived = newVal.fullPath.startsWith(tempPath)
        }
      }
    },
    mounted () {
      this.activeItem(this.$route)
    }
  }
</script>

<style>

</style>
