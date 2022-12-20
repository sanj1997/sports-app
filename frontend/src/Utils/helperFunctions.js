const checkPassword=(password)=>{
    let flag1=false
    let flag2=false
    let char=["!","@","#","$","%","^","&","*"]
    let num=["1","2","3","4","5","6","7","8","9","0"]
    for(let i=0;i<char.length;i++)
    {
      if(password.includes(char[i]))
      {
        flag1=true
      }
    }
    for(let i=0;i<num.length;i++)
    {
      if(password.includes(num[i]))
      {
        flag2=true
      }
    }
    if(flag1&&flag2)
    {
      return true
    }
    return false
}
export default checkPassword