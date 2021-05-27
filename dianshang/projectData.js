// 电商作品
//fetch data from API
const data = () => {
  axios.get('https://pengushe.herokuapp.com/products')
  .then(response => {
      console.log(response)
      .catch(erro => { console.log(erro) }
      );
    });

}
const ecommerce = [
  "https://res.cloudinary.com/pengushe-home/image/upload/w_300,f_auto/v1617844194/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20210408090109.jpg",
]
