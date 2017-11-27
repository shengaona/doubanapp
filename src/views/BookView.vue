<template>
  <div class="movie-view has-header">
    <div class="movie_outer">
    	<span class="movie_outer_title">最受关注图书|虚构类</span><span class="movie_more">更多</span>
    	<div class="scoll">
    	<ul class="movie_list">
    		<li class="movie_list_outer" v-for="movie_now_list in movie_now_lists">
    			<img class="movie_image" :src="movie_now_list.images.large"/>
    			<p>{{movie_now_list.title}}</p>
    			<div><span></span></div>
    		</li>
    	</ul>
    	</div>
    </div>
    <div class="movie_outer">
    	<span class="movie_outer_title">最受关注图书|非虚构类</span><span class="movie_more">更多</span>
    	<div class="scoll">
    	<ul class="movie_list">
    		<li class="movie_list_outer" v-for="movie_new_list in movie_new_lists">
    			<img class="movie_image" :src="movie_new_list.images.large"/>
    			<p>{{movie_new_list.title}}</p>
    			<div><span></span></div>
    		</li>
    	</ul>
    	</div>
    </div>
    <div class="movie_outer">
    	<span class="movie_outer_title">热门绘本</span><span class="movie_more">更多</span>
    	<div class="scoll">
    	<ul class="movie_list">
    		<li class="movie_list_outer" v-for="movie_soon_list in movie_soon_lists">
    			<img class="movie_image" :src="movie_soon_list.images.large"/>
    			<p>{{movie_soon_list.title}}</p>
    			<div><span></span></div>
    		</li>
    	</ul>
    	</div>
    </div>
    <div class="movie_outer">
    	<span class="movie_outer_title">发现好书</span><span class="movie_more">更多</span>
    	<div class="find_book_scoll">
    		<ul>
                <li v-for="find_book_list in find_book_lists" class="find_book_list">
                    <a :href="find_book_list.href"  :style="{color: find_book_list.color}">{{find_book_list.title}}</a>
                </li>
    		</ul>
    	</div>
    </div>
	<div class="movie_outer">
		<span class="movie_type_title">分类浏览</span>
		<div class="movie_type">
			<ul  class="movie_type_list">
				<li  class="movie_type_tag" v-for="movie_type_list in movie_type_lists" >
                    <span class="movie_type_tag_name">{{movie_type_list.title}}</span><span class="type_icon"></span></li>
			</ul>
		</div>
	</div>	 
  </div>
</template>
<script>
export default {
  name: 'movie',
  mounted: function () {
    this.ready()
    this.newMovie()
    this.soonMovie()
  },
  data () {
    return {
      movie_now_lists: [],
      movie_new_lists: [],
      movie_soon_lists: [],
      movie_type_lists: [
        { title: '小说' },
        { title: '爱情' },
        { title: '外国文学' },
        { title: '青春' },
        { title: '励志' },
        { title: '随笔' },
        { title: '传记' },
        { title: '推理' },
        { title: '旅行' },
        { title: '奇幻' },
        { title: '经管' }
      ],
      find_book_lists: [
        {
          title: '不可饶恕的女人们',
          href: 'https://m.douban.com/doulist/35573',
          color: '#ffac2d'
        },
        {
          title: '爱欲书',
          href: 'https://m.douban.com/doulist/38088147',
          color: '#3ba94d'
        },
        {
          title: '他们还写侦探小说',
          href: 'https://m.douban.com/doulist/645579',
          color: '#4F9DED'
        },
        {
          title: '人生识字始忧患',
          href: 'https://m.douban.com/doulist/192653',
          color: '#CC3344'
        },
        {
          title: '詩歌書店',
          href: 'https://m.douban.com/doulist/89925',
          color: '#ff4055'
        },
        {
          title: '尝试理解人类变化无常不可测心理相关小荐',
          href: 'https://m.douban.com/doulist/45361809',
          color: '#3BA94D'
        }
      ]
    }
  },
  methods: {
    ready: function () {
      // GET /someUrl
      this.$http
        .jsonp('https://api.douban.com/v2/book/search?q=虚构类&count=20')
        .then(
          response => {
            // get body data
            this.movie_now_lists = response.data.books
            console.log(response.data)
          },
          response => {
            // error callback
          }
        )
    },
    newMovie: function () {
      // GET /someUrl
      this.$http
        .jsonp('https://api.douban.com/v2/book/search?q=非虚构类&count=20')
        .then(
          response => {
            // get body data
            this.movie_new_lists = response.data.books
            console.log(response.data)
          },
          response => {
            // error callback
          }
        )
    },
    soonMovie: function () {
      // GET /someUrl
      this.$http
        .jsonp('https://api.douban.com/v2/book/search?q=绘本&count=20')
        .then(
          response => {
            // get body data
            this.movie_soon_lists = response.data.books
            console.log(response.data)
          },
          response => {
            // error callback
          }
        )
    }
  }
}
</script>
<style type="text/css">
.movie-view {
  width: 100%;
  margin-top: 75px;
}
.movie_outer {
  width: 95%;
  margin-top: 10px;
  padding: 5px 2.5% 5px 2.5%;
}
.scoll {
  margin: 10px 2.5%;
  width: 95%;
  height: 208px;
  overflow-x: auto;
  overflow-y: hidden;
}
.movie_outer_title {
  font-size: 1.06rem;
  color: #111;
  margin-left: 2.5%;
  margin-bottom: 15px;
  float: left;
}
.movie_more {
  font-size: 0.86rem;
  color: #42bd56;
  margin: 5px 3% 5px 0;
  float: right;
}
.movie_list {
  width: 2200px;
  display: flex;
  flex-flow: row;
}
.movie_list_outer {
  width: 100px;
  height: 188px;
  margin: 0px 10px 0 0;
}
.movie_image {
  width: 100%;
  height: 142px;
}
.movie_list_outer p {
  width: 100%;
  height: 15px;
  margin: 10px 0 0 0;
  text-align: center;
  line-height: 15px;
  font-size: 0.85rem;
  color: #111;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.find_book_scoll {
  width: 95%;
  overflow-x: auto;
  overflow-y: hidden;
  margin: 15px 2.5% 15px 2.5%;
}
.find_book_scoll ul {
  width: 677px;
  height: 125px;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
}
.find_book_list {
  font-size: 0.94rem;
  border-radius: 5px;
  padding: 15px 30px;
  height: 20px;
  line-height: 20px;
  margin-right: 8px;
}
.find_book_list:first-child {
  color: #ffac2d;
  border: 1px solid #ffac2d;
}
.find_book_list:nth-child(2) {
  color: #3ba94d;
  border: 1px solid #3ba94d;
}
.find_book_list:nth-child(3) {
  color: #3ba94d;
  border: 1px solid #4F9DED;
}
.find_book_list:nth-child(4) {
  color: #4f9ded;
  border: 1px solid rgb(204, 51, 68);
}
.find_book_list:nth-child(5) {
  color: #3ba94d;
  border: 1px solid  #ff4055;
}
.find_book_list:nth-child(6) {
  color: #4f9ded;
  border: 1px solid #3ba94d;
}
.movie_type {
  width: 95%;
  margin: 15px 2.5%;
}
.movie_type_list {
  width: 100%;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  border-top: 1px solid #eee;
}
.movie_type_list li {
  width: 49.5%;
  height: 50px;
  line-height: 50px;
  color: #42bd56;
  border-bottom: 1px solid #eee;
  border-right: 1px solid #eee;
  display: flex;
  justify-content: space-between;
}
.movie_type_tag:nth-child(even) .movie_type_tag_name {
  padding-left: 20px;
}
.movie_type_title {
  font-size: 1.06rem;
  color: #111;
  margin-left: 2.5%;
  margin-bottom: 15px;
}
.type_icon {
  width: 10px;
  height: 10px;
  display: block;
  border-top: 1px solid #eee;
  border-right: 1px solid #eee;
  margin: 20px 20px 0 0;
  transform: rotate(45deg);
  -ms-transform: rotate(45deg); /* IE 9 */
  -webkit-transform: rotate(45deg); /* Safari and Chrome */
}
.book_shop{
    width: 100%;
    margin: 40px 0 15px 10px;
    display: flex;
    flex-flow: row;

}
.book_shop_img{
    width: 120px;
    height: 160px;
    margin-right: 18px;
}
.book_shop_img img{
    width: 100%;
    height: 100%;
}
</style>
