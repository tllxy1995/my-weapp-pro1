<template>
  <div>
    <BookInfo :info="info"></BookInfo>
    <CommentList :comments="comments"></CommentList>
    <div class="comment" v-if="showAdd">
      <textarea v-model="comment"
                class="textarea"
                :maxlength="100"
                placeholder="请输入图书短评"
      >

      </textarea>

      <div class="location">
        地理位置:
        <switch color="#ea5a49" :checked="location" @change="getGeo"></switch>
        <span class="text-primary">{{location}}</span>
      </div>
      <div class="phone">
        手机型号:
        <switch color="#ea5a49" :checked="phone" @change="getPhone"></switch>
        <span class="text-primary">{{phone}}</span>
      </div>
      <button class="btn" @click="addComment">评论</button>
    </div>
    <div v-else class="text-footer">未登录或者已经评论过</div>
    <button open-type="share" class="btn">转发</button>
  </div>
</template>

<script>
  import { get, post, showModal } from '@/util'
  import BookInfo from '@/components/BookInfo'
  import CommentList from '@/components/CommentList'
  export default {
    components: {
      BookInfo,
      CommentList
    },
    data () {
      return {
        comments: [],
        userinfo: {},
        bookid: '',
        info: {},
        comment: '',
        location: '',
        phone: ''
      }
    },
    methods: {
      async getDetail () {
        const info = await get('/weapp/bookdetail', { id: this.bookid })
        wx.setNavigationBarTitle({
          title: info.title
        })
        this.info = info
      },
      getGeo (e) {
        if (e.target.value) {
          // 百度地图api密钥
          const ak = 'PgLjdgTp6c5R8fx1It0zlnvZoREMekFL'
          const url = 'http://api.map.baidu.com/geocoder/v2/'
          wx.getLocation({
            success: geo => {
              console.log(geo)
              wx.request({
                url,
                data: {
                  ak,
                  location: `${geo.latitude}, ${geo.longitude}`,
                  output: 'json'
                },
                success: res => {
                  console.log(res)
                  if (res.data.status === 0) {
                    this.location = res.data.result.addressComponent.city
                  } else {
                    this.location = '未能获取地理位置'
                  }
                }
              })
            }
          })
        } else {
          this.location = ''
        }
      },
      getPhone (e) {
        if (e.target.value) {
          const phoneInfo = wx.getSystemInfoSync()
          console.log(phoneInfo)
          this.phone = phoneInfo.model
        } else {
          this.phone = ''
        }
      },
      async addComment () {
        if (!this.comment) {
          return
        }
        // 评论内容 地理位置 手机型号 图书id openid
        const data = {
          openid: this.userinfo.openId,
          bookid: this.bookid,
          comment: this.comment,
          location: this.location,
          phone: this.phone
        }
        console.log(data)
        try {
          await post('/weapp/addcomment', data)
          this.comment = ''
          this.getComment()
        } catch (e) {
          showModal('失败', e.msg)
        }
      },
      async getComment () {
        const comments = await get('/weapp/commentlist', { bookid: this.bookid })
        this.comments = comments.list || []
      }
    },
    computed: {
      showAdd () {
        // 没登录
        if (!this.userinfo.openId) {
          return false
        }
        // 评论页面查到有自己的openid
        if (this.comments.filter(v => v.openid === this.userinfo.openId).length) {
          return false
        }
        return true
      }
    },
    mounted () {
      this.bookid = this.$root.$mp.query.id
      this.getDetail()
      this.getComment()
      const userinfo = wx.getStorageSync('userinfo')
      console.log(userinfo)
      if (userinfo) {
        this.userinfo = userinfo
      }
    }
  }
</script>

<style lang="scss">
.comment {
  margin-top: 10px;
  .textarea {
    padding: 10px;
    width: 730rpx;
    height: 200rpx;
    background: #eee;
  }
  .location {
    margin-top: 10px;
    padding: 5px 10px;
  }
  .phone {
    margin-top: 10px;
    padding: 5px 10px;
  }
}
</style>
