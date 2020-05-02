import _ from 'lodash'
const mock_item={avatar_url:require('../../assets/common/user_logo.png'),full_name:'name',description:'description',stargazers_count:20}

const mockList=(item)=>{
    return _.range(0,30).reduce((acc,cur)=>{
        acc.push({...item,_label:cur})
        return acc
    },[])
}

export const setList=(page,pageSize,item)=>{

    const list={
        total_count:20,
        items:mockList(item||mock_item)
    }
    const total=list.total_count
    const res=list.items.filter(it=>it._label>(page-1)*pageSize&&it._label<=(page-1)*pageSize+pageSize)
    return {total,list:res}
}
