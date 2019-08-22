import Mock from 'mockjs'
import homeData from './homeData.json'
import categoryData from './category.json'
import categoryListData from './categoryList.json'

Mock.mock('/mock/home',{
  code: 0,
  data: homeData
})

Mock.mock('/mock/category', {
  code: 0,
  data: categoryData
})

Mock.mock('/mock/category/list', {
  code: 0,
  data: categoryListData
})