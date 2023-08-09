<template>
  <view class="content">
    <view class="title">pinia </view>
    <view class="title">{{ count }} </view>
    <view class="title">{{ myOwnName }} </view>
    <view class="title">{{ double }} </view>
    <view class="title">{{ magicValue }} </view>
    <view class="title" @click="increment">增加</view>
    <view class="title" @click="print">打印</view>
  </view>
</template>

<script>
import { mapActions, mapState, mapStores } from "pinia";
import { useCounterStore, useStudentStore } from "@/stores";

export default {
  computed: {
    ...mapStores(useCounterStore, useStudentStore),
    ...mapState(useCounterStore, ["count"]),
    ...mapState(useCounterStore, {
      myOwnName: "count",
      double: (store) => store.count * 2,
      magicValue(store) {
        return this.count + this.double;
      },
    }),
  },
  methods: {
    ...mapActions(useCounterStore, ["increment"]),
    print() {
      // 可以 id+'Store' 的形式访问每个 store 。
      console.log(this.studentStore.age);
    },
  },
};
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
