import axios from "axios";
const APP_URL=process.env.REACT_APP_URL
const instance=axios.create({
    baseURL:APP_URL
    
})

instance.interceptors.request.use(
    (config)=>{
        const token=JSON.parse(localStorage.getItem("asv"))
        config.headers={}
        if(token)
        {
            config.headers["Authorization"]=JSON.parse(localStorage.getItem("asv"))
        }
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)
instance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const previousRequest=error?.config
      if(error?.response?.data?.message==="jwt expired" && !previousRequest?.sent)
      {
         previousRequest.sent=true
         let rToken = JSON.parse(localStorage.getItem("csv"))
         const res=await axios(`${APP_URL}users/refresh`,{
            headers:{
                "Authorization":rToken
            },
         })
         console.log(res.data.asv)
         localStorage.setItem("asv",JSON.stringify(res.data.asv))
         return instance(previousRequest)
      }
      return Promise.reject(error)
    }
  );

  export default instance