import type { MockMethod } from 'vite-plugin-mock'
import { mock, Random } from 'mockjs'

const dataGoods = mock({
  'list|30': [
    {
      goods: () => Random.name(),
      price: 34000
    }
  ]
})

export default [
  {
    url: '/mock/getList',
    method: 'get',
    response: (res: any) => {
      return {
        code: 0,
        dataGoods
      }
    }
  }
] as MockMethod[]
