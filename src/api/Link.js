import service from '@/utils/service'

let link = (url,method,data,params)) => {
  return new Promise((resolve, reject) => {
    service.request({
      url,
      method,
      data,
      params
    }).then((ok)=>{
        resolve(ok)
    }).catch(()=>{
        reject(err)
    })
  })
}

export default link
