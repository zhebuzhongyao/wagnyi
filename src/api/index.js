import ajax from './ajax'

//搜索关键字
export const reqSearch = (inputValue) => ajax({
        url: '/xhr/search/searchAutoComplete.json?keywordPrefix=' + inputValue       
      })


//获取分类信息

export const reqCategory =()=>{
  return ajax('/mock/category/list')
  }

// 获取home数据
export const reqDesc = () =>{
  return ajax('/mock/home')
}


    
  