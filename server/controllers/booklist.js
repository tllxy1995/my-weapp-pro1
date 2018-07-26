const { mysql } = require('../qcloud')

module.exports = async ctx => {
  const { page, pagesize, openid } = ctx.request.query
  const mysqlSelect = mysql('books')
    .select('books.*', 'cSessionInfo.user_info')
    .join('cSessionInfo', 'books.openid', 'cSessionInfo.open_id')
    .orderBy('books.id', 'desc')

  let books = []
  if (openid) {
    books = await mysqlSelect
  } else {
    books = await mysqlSelect.limit(Number(pagesize))
      .offset(Number(page) * Number(pagesize))
  }
  ctx.state.data = {
    list: books.map(v => {
      const info = JSON.parse(v.user_info)
      return Object.assign({}, v, {
        user_info: {
          nickName: info.nickName
        }
      })
    })
  }
}
