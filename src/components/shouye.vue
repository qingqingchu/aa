<template>
  <div class="aa">

    <van-swipe
      :autoplay="3000"
      indicator-color="white"
    >
      <van-swipe-item v-for="item in list"  :key="item.img">
        <img :src="item.img" alt="">
      </van-swipe-item>
    </van-swipe>

  </div>
</template>

<script>
export default {
  data() {
    return {
      list:[]
    };
  },
  created() {
    this.getlunbo()
  },
  methods: {
    getlunbo(){
      console.log('11');
      this.$http.get('http://localhost:5000/api/getlunbo').then(result=>{
        console.log(result.body);
        
      })
    }
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.van-swipe{
  height: 200px;
}
</style>
