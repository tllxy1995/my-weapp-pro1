<template>
  <div class="container">
    <CommentList v-if="userinfo.openId" type="user" :comments="comments"></CommentList>
    <div v-if="userinfo.openId">
      <div class="page-title">我的图书</div>
      <Card :key="book.id" v-for="book in books" :book="book"></Card>
      <div v-if="!books.length">暂时还没添加过书，快去添加几本吧</div>
    </div>
  </div>
</template>

<script>
  import { get } from '@/util'
  import CommentList from '@/components/CommentList'
  import Card from '@/components/Card'
  export default {
    data () {
      return {
        comments: [],
        userinfo: {},
        books: []
      }
    },
    components: {
      CommentList,
      Card
    },
    methods: {
      init () {
        wx.showNavigationBarLoading()
        this.getComments()
        this.getBooks()
        console.log(this.books)
        wx.hideNavigationBarLoading()
      },
      async getComments () {
        const comments = await get('/weapp/commentlist', {
          openid: this.userinfo.openId
        })
        console.log(comments)
        this.comments = comments.list
      },
      async getBooks () {
        const books = await get('/weapp/booklist', {
          openid: this.userinfo.openId
        })
        console.log(books)
        this.books = books.list
      }
    },
    onPullDownRefresh () {
      this.init()
      wx.stopPullDownRefresh()
    },
    onShow () {
      console.log('onshow')
      if (!this.userinfo.openId) {
        let userinfo = wx.getStorageSync('userinfo')
        if (userinfo) {
          this.userinfo = userinfo
          this.init()
        }
      }
    }
  }
</script>

<style lang="scss">

</style>
