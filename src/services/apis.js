import {Get} from "./index";
const apiRoot='http://localhost:2323/api'

function getProjectList (options) {
  return Get(`${apiRoot}/project/list`,options)
}

export  const serviceApi =  {
  getProjectList
}