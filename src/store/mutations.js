import {
  CAREGORY_LEFT,
  HOME_DESC,
  SEARCH
} from './mutation-types'

export default {
  [CAREGORY_LEFT](state, data) {
    // console.log(categoryL1List, categoryL2List)
    state.categoryList = data
  },
  [HOME_DESC](state, {
    policyDescList,
    personalShop,
    kingKongModule,
    flashSaleModule,
    newItemList,
    popularItemList,
    
  }) {
    // console.log(policyDescList)
    state.describe = policyDescList
    state.personalShop = personalShop
    state.shopnav = kingKongModule //商品导航
    state.timeLimitedPurchase = flashSaleModule//限时购
    state.newItemList = newItemList,//新品首发
    state.popularItemList = popularItemList//人气推荐
 
  },

  [SEARCH](state,keywords){
    console.log(keywords)
    state.keywords=keywords
  }
 
}