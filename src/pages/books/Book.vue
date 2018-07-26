<template>
  <div>
    <TopSwiper :tops="tops"></TopSwiper>
    <Card :key="book.id" v-for="book in books" :book="book"></Card>
    <p class="text-footer" v-if="!this.more">
      没有更多数据
    </p>
  </div>
</template>

<script>
  // page 当前第几页
  // 没有更多数据
  // 1、page=0 不能显示这条提醒
  // 2、page>0 数据长度<10 停止触底加载

  import { get } from '@/util'
  import Card from '@/components/Card'
  import TopSwiper from '@/components/TopSwiper'

  export default {
    components: {
      Card,
      TopSwiper
    },
    data () {
      return {
        books: [],
        page: 0,
        more: true,
        pagesize: 10,
        tops: []
      }
    },
    methods: {
      async getList (init) {
        if (init) {
          this.page = 0
        }
        wx.showNavigationBarLoading()
        const books = await get('/weapp/booklist', {
          page: this.page,
          pagesize: this.pagesize
        })
        if (this.books.length < this.pagesize && this.page > 0) {
          this.more = false
        }
        if (init) {
          this.books = books.list
          wx.stopPullDownRefresh()
        } else {
          // 下拉刷新，不能直接覆盖books.list 而是累加
          this.books = this.books.concat(books.list)
        }
        wx.hideNavigationBarLoading()
      },
      async getTop () {
        const tops = await get('/weapp/top')
        this.tops = tops.list
      }
    },
    onReachBottom () {
      if (!this.more) {
        // 没有更多
        return false
      }
      this.page = this.page + 1
      this.getList(false)
    },
    onPullDownRefresh () {
      this.getList(true)
      this.getTop()
    },
    mounted () {
      this.getList(true)
      this.getTop()
    }
  }
</script>

<style lang="scss">

</style>
