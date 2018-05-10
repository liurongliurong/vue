<template>
  <div class="filtrate">
    <div class="filtrate-item" v-for="(item, index) in lists" :key="index">
      <span :style="{ width: labelWidth , display: 'inline-block'}">{{item.label}}</span><span @click="item.index = -1" v-if="item.value" :class="{item: true, active: item.index == -1}">全部</span><span @click="item.index = index2" v-for="(i, index2) in item.value" :key="index2" :class="{item: true, active: item.index == index2}">{{i}}</span><slot :name="index"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
    labelWidth: String
  },
  data () {
    return {
      lists: this.items
    }
  },
  beforeMount () {
    this.lists.forEach(function (list, index) {
      if (list.value) {
        this.$set(this.lists, index, {
          ...list,
          index: -1
        })
      }
    }, this)
  }
}
</script>

