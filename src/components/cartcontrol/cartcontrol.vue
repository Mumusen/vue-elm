<!-- 按钮 加减 -->
<template>
  <div class="cartcontrol">
    <transition name="fade">
      <div class="cart-decrease" v-show="food.count>0" @click.stop.prevent="decreaseCart">
        <transition name="inner">
          <span class="inner icon-remove_circle_outline"></span>
        </transition>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
  </div>
</template>

<script type='text/ecmascript-6'>
import Vue from 'vue'
export default {
  props: {
    food: {
      type: Object
    }
  },
  methods: {
    addCart (event) {
      if (!event._constructed) {
        return
      }
      if (!this.food.count) {
        Vue.set(this.food, 'count', 1)
      } else {
        this.food.count++
      }
      // eventBus.$emit('addcart', event.target)
      this.$emit('add', event.target)
      // this.$emit('cart-add', event.target)
    },
    decreaseCart (event) {
      if (!event._constructed) {
        return
      }
      if (this.food.count) {
        this.food.count--
      }
    }
  }
}
</script>

<style lang='stylus' rel='tylesheet/stylus'>
.cartcontrol
  font-size 0
  .cart-decrease,.cart-add
    display inline-block
    padding 6px
    line-height 24px
    font-size 24px
    color rgb(0,160,200)
  .cart-decrease
    &.fade-enter-active, &.fade-leave-active
      transition: all 0.4s linear
    &.fade-enter, &.fade-leave-active
      opacity: 0
      transform translate3d(24px, 0, 0) //这样可以开启硬件加速，动画更流畅，3D旋转，X轴位移24px
    .inner
      line-height 24px
      font-size 24px
      vertical-align top
      color rgb(0, 160, 220, 0.2)
      &.inner-enter-active, &.inner-leave-active
        transition: all 0.4s linear
        transform: rotate(0)
      &.inner-enter, &.inner-leave-active
        opacity: 0
        transform  rotate(180deg)
  .cart-count
    display inline-block
    line-height 24px
    vertical-align top
    width 12px
    padding-top 6px
    text-align center
    font-size 10px
    color rgb(147,153,159)
</style>
