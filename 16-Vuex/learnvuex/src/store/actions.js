export default {
  // context: 上下文
  aUpdateInfo(context, payload) {
    // setTimeout(() => {
    //   context.commit('updateInfo')
    //   // 1.
    //   // console.log(payload);
    //   // 2.
    //   // console.log(payload.message);
    //   // payload.success()              
    // }, 1000);
    // 3
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('updateInfo')
        console.log(payload);          
        resolve('111')
      }, 1000);
    })
  }
}