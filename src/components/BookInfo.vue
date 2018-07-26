<template>
  <div class="bookinfo">
    <div class="thumb">
      <img class="back" :src="info.image" mode="aspectFill" alt="">
      <img class="img" :src="info.image" mode="aspectFit" alt="">
      <div class="info">
        <div class="title">{{info.title}}</div>
        <div class="author">{{info.author}}</div>
      </div>
    </div>
      <div class="detail">
        <img class="avatar" :src="userinfo.img" mode="aspectFit" alt="">
        &nbsp;{{userinfo.nickName}}
        <div class="right text-primary">
          {{info.rate}}
          <Rate :value="info.rate"></Rate>
        </div>
      </div>
      <div class="detail">
        {{info.publisher}}
        <div class="right">
          {{info.price}}
        </div>
      </div>
      <div class="tags">
        <div class="badge" :key="tag" v-for="tag in info.tags">{{tag}}</div>
      </div>
      <div class="summary">
        <p :key="i" v-for="(sum, i) in info.summary">&nbsp;&nbsp;&nbsp;&nbsp;{{sum}}</p>
      </div>

  </div>
</template>

<script>
  import Rate from '@/components/Rate'
  export default {
    components: {
      Rate
    },
    props: ['info'],
    computed: {
      userinfo () {
        return this.info.user_info || {}
      }
    }
  }
</script>

<style lang="scss">
  .bookinfo {
    font-size: 14px;
    .badge {
      display: inline-block;
      margin: 5px;
      padding: 5px;
      border-radius: 10px;
      border: 1px #ea5a49 solid;
      color: #ea5a49;
    }
    .summary {
      margin-top: 10px;
      padding: 0 15px;
    }
    .right {
      float: right;
    }
    .detail {
      padding: 5px 10px;
      .avatar {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        vertical-align: middle;
      }
    }
    .thumb {
      width: 750rpx;
      height: 500rpx;
      position: relative;
      .back {
        filter: blur(15rpx);
        width: 100%;
      }
      .img {
        position: absolute;
        width: 100%;
        height: 300rpx;
        left: 0;
        top: 30rpx;
      }
      .info {
        position: absolute;
        width: 100%;
        color: #fff;
        left: 0;
        top: 330rpx;
        text-align: center;
      }
    }
  }
</style>
