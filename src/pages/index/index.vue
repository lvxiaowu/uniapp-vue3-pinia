<template>
  <view class="content">
    <view class="title">pinia 测试页，setup</view>
    <view class="title">{{ count }}</view>
    <view class="title">{{ doubleCount }}</view>
    <view class="title" @click="incrementCounter">增加</view>
    <view class="title" @click="printCount">打印</view>
    <view class="title" @click="jump">跳转</view>
  </view>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "@/stores";

const store = useCounterStore();
const { count, doubleCount } = storeToRefs(store);

const printCount = () => {
  console.log(count.value);
};

const jump = () => {
  uni.navigateTo({
    url: "/pages/test/index",
  });
};

// 修改state
const incrementCounter = () => store.increment();
// const incrementCounter = () =>
//   store.$patch({
//     count: store.count + 1,
//   });
// const incrementCounter = () =>
//   store.$patch((state) => {
//     state.count++;
//   });

// 监听
store.$subscribe((mutation, state) => {
  // console.log({ mutation, state });
});
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
@/stores
