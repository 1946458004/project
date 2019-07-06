<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
                <img :src="item.img" alt=""/>
            </mt-swipe-item>
         >
        </mt-swipe>
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                   <img src="../img/menu1.png" alt="">
                    <div class="mui-media-body">新闻首页</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../img/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../img/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../img/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../img/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../img/menu6.png">
                    <div class="mui-media-body" alt="">联系我们</div></a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {Toast} from "mint-ui"
    export default {
        data() {
            return {
                lunbotuList: [] // 保存轮播图的数组
            };
        },
        created() {
            this.getLunbotu();
        },
        methods: {
            getLunbotu() {
                // 获取轮播图数据的方法
                this.$http.get("/api").then(result => {
                    // console.log(result.body);
                    if (result.body.status === 0) {
                        // 成功了
                        this.lunbotuList = result.body.message;
                    } else {
                        // 失败的
                        Toast("加载轮播图失败。。。");
                    }
                });
            }
        }
    }
</script>

<style scoped>
.mint-swipe{
    height: 200px;
}
img{
    height: 100%;
    width: 100%;
}
.mui-grid-view.mui-grid-9{
    background-color: white;
    border: none;

}
li img {
    width: 50%;
    height: 50%;
}
.mui-media-body{
    font-size: 13px;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: none;
}
</style>