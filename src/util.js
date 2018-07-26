// 工具函数库
import config from './config'

// http get工具函数 获取数据
const request = (url, method, data, header = {}) => {
  return new Promise((resolve, reject) => {
    wx.request({
      data,
      method,
      header,
      url: config.host + url,
      success: function (res) {
        if (res.data.code === 0) {
          resolve(res.data.data)
        } else {
          showModal('失败', res.data.data.msg)
          reject(res.data)
        }
      }
    })
  })
}

export const get = (url, data) => {
  return request(url, 'GET', data)
}

export const post = (url, data) => {
  return request(url, 'POST', data)
}

export const showModal = (title, content) => {
  wx.showModal({
    title,
    content,
    showCancel: false
  })
}

export const showSuccess = (text) => {
  wx.showToast({
    title: text,
    icon: 'success'
  })
}
