<template>
  <div class="tab2">
    <router-link @click.native="setIndex(index)" :to="{ query: { tab: index} }" v-for="(item, index) in tab" :key="index" :class="{ 'tab-item': true, 'active': active(index)}">{{item}}</router-link>
  </div>
</template>

<script>
// import pageData from '@/util/pageData'
export default {
  props: [
    'tab',
    'tabIndex'
  ],
  methods: {
    active (index) {
      return parseInt(this.$route.query.tab || 0) === index
    },
    setIndex (index) {
      this.$emit('update:tabIndex', index)
    }
  }
}
</script>
