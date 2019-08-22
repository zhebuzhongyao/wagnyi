import {
  CAREGORY_LEFT,
  HOME_DESC,
  SEARCH
} from './mutation-types'

import {
  reqCategory, reqDesc, reqSearch
} from '../api'

export default {
  async getCategory({commit}){
    const result = await reqCategory()
    // console.log(result)
    if(result.code===0){
      // console.log(result.data.categoryL1List, categoryL2List)
      const data = result.data
      commit(CAREGORY_LEFT, data)
    }
  },
  async getDesc({commit}){
    const result = await reqDesc()
    console.log(result)
    if(result.code===0){
      const {
        policyDescList,
        personalShop,
        kingKongModule,
        flashSaleModule,
        newItemList,
        popularItemList,
        
      } = result.data
      // console.log(result.data.flashSaleModule)
      commit(HOME_DESC, {
        policyDescList,
        personalShop,
        kingKongModule,
        flashSaleModule,
        newItemList,
        popularItemList,
        
      })
    }
  },

  async search({
      commit
    }, inputValue) {
    const result = await reqSearch(inputValue)
    console.log(result)
    if (result.code === '200') {
      console.log('--s--',result)
      // const  = result.data
      commit(SEARCH, result.data)
    }
  },

  
}