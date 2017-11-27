<template>
  <div class="movie-view has-header">
    <div class="movie_outer">
    	<span class="movie_outer_title">影院热映</span><span class="movie_more">更多</span>
    	<div class="scoll">
    	<ul class="movie_list">
    		<li class="movie_list_outer" v-for="movie_now_list in movie_now_lists">
    			<img class="movie_image" :src="movie_now_list.images.small"/>
    			<p>{{movie_now_list.title}}</p>
    			<div><span></span></div>
    		</li>
    	</ul>
    	</div>
    </div>
    <div class="movie_outer">
    	<span class="movie_outer_title">豆瓣TOP250</span><span class="movie_more">更多</span>
    	<div class="scoll">
    	<ul class="movie_list">
    		<li class="movie_list_outer" v-for="movie_new_list in movie_new_lists">
    			<img class="movie_image" :src="movie_new_list.images.small"/>
    			<p>{{movie_new_list.title}}</p>
    			<div><span></span></div>
    		</li>
    	</ul>
    	</div>
    </div>
    <div class="movie_outer">
    	<span class="movie_outer_title">新片速递</span><span class="movie_more">更多</span>
    	<div class="scoll">
    	<ul class="movie_list">
    		<li class="movie_list_outer" v-for="movie_soon_list in movie_soon_lists">
    			<img class="movie_image" :src="movie_soon_list.images.small"/>
    			<p>{{movie_soon_list.title}}</p>
    			<div><span></span></div>
    		</li>
    	</ul>
    	</div>
    </div>
    <div class="movie_outer">
    	<span class="movie_outer_title">发现好电影</span><span class="movie_more">更多</span>
    	<div class="find_scoll">
    		<ul>
				<li class="find_movie_list" v-for="find_movie_list in find_movie_lists"><a :href="find_movie_list.href" :style="{color:find_movie_list.color}">{{find_movie_list.title}}</a></li>
    		</ul>
    	</div>
    </div>
	<div class="movie_outer">
		<span class="movie_type_title">分类浏览</span>
		<div class="movie_type">
			<ul  class="movie_type_list">
				
				<li  class="movie_type_tag" v-for="movie_type_list in movie_type_lists" >
					<span class="movie_type_tag_name">{{movie_type_list.title}}</span>
					<a :href="baseUri + movie_type_list.href">
					<span class="type_icon"></span>
					</a>
				</li>
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
      baseUri: 'https://m.douban.com/',
      movie_now_lists: [],
      movie_new_lists: [],
      movie_soon_lists: [],
      find_movie_lists: [
        {
          title: '同时入选IMDB250和豆瓣电影250的电影',
          href: 'https://m.douban.com/doulist/968362/',
          color: '#ffac2d'
        },
        {
          title: '带你进入不正常的世界',
          href: 'https://m.douban.com/doulist/16002',
          color: '#3ba94d'
        },
        {
          title: '用电【影】来祭奠逝去的岁月',
          href: 'https://m.douban.com/doulist/190343',
          color: '#3ba94d'
        },
        {
          title: '女孩们的故事【电影】',
          href: 'https://m.douban.com/doulist/1125971',
          color: '#4f9ded'
        },
        {
          title: '科幻是未来的钥匙——科幻启示录【科幻题材】',
          href: 'https://m.douban.com/doulist/4253902',
          color: '#3ba94d'
        },
        {
          title: '美国生活面面观',
          href: 'https://m.douban.com/doulist/121326',
          color: '#4f9ded'
        },
        {
          title: '2015终极期待',
          href: 'https://m.douban.com/doulist/37479562',
          color: '#cc3344'
        },
        {
          title: '经典韩国电影——收集100部',
          href: 'https://m.douban.com/doulist/458087',
          color: '#ffac2d'
        }
      ],
      movie_type_lists: [
        {
          title: '经典',
          href: 'movie/classic'
        },
        {
          title: '冷门佳片',
          href: 'movie/underrated'
        },
        {
          title: '豆瓣高分',
          href: 'movie/doubantop'
        },
        {
          title: '动作',
          href: 'movie/action'
        },
        {
          title: '喜剧',
          href: 'movie/comedy'
        },
        {
          title: '爱情',
          href: 'movie/love'
        },
        {
          title: '悬疑',
          href: 'movie/mystery'
        },
        {
          title: '恐怖',
          href: 'movie/horror'
        },
        {
          title: '科幻',
          href: 'movie/scifi'
        },
        {
          title: '治愈',
          href: 'movie/sweet'
        },
        {
          title: '文艺',
          href: 'movie/artfilm'
        },
        {
          title: '成长',
          href: 'movie/youth'
        },
        {
          title: '动画',
          href: 'movie/animation'
        },
        {
          title: '华语',
          href: 'movie/chinese'
        },
        {
          title: '欧美',
          href: 'movie/western'
        },
        {
          title: '韩国',
          href: 'movie/korean'
        },
        {
          title: '日本',
          href: 'movie/japanese'
        }
      ]
    }
  },
  methods: {
    ready: function () {
      // GET /someUrl
      this.$http.jsonp('http://api.douban.com/v2/movie/in_theaters').then(
        response => {
          // get body data
          this.movie_now_lists = response.data.subjects
          console.log(response.data)
        },
        response => {
          // error callback
        }
      )
    },
    newMovie: function () {
      // GET /someUrl
      this.$http.jsonp('http://api.douban.com/v2/movie/top250').then(
        response => {
          // get body data
          this.movie_new_lists = response.data.subjects
          console.log(response.data)
        },
        response => {
          // error callback
        }
      )
    },
    soonMovie: function () {
      // GET /someUrl
      this.$http.jsonp('http://api.douban.com/v2/movie/coming_soon').then(
        response => {
          // get body data
          this.movie_soon_lists = response.data.subjects
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
.find_scoll {
  width: 95%;
  overflow-x: auto;
  overflow-y: hidden;
  margin: 15px 2.5% 15px 2.5%;
}
.find_scoll ul {
  width: 1195px;
  height: 125px;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
}
.find_movie_list {
  font-size: 0.94rem;
  border-radius: 5px;
  padding: 15px 30px;
  height: 20px;
  line-height: 20px;
  margin-right: 8px;
}
.find_movie_list:first-child {
  color: #ffac2d;
  border: 1px solid #ffac2d;
}
.find_movie_list:nth-child(2) {
  color: #3ba94d;
  border: 1px solid #3ba94d;
}
.find_movie_list:nth-child(3) {
  color: #3ba94d;
  border: 1px solid #3ba94d;
}
.find_movie_list:nth-child(4) {
  color: #4f9ded;
  border: 1px solid #4f9ded;
}
.find_movie_list:nth-child(5) {
  color: #3ba94d;
  border: 1px solid #3ba94d;
}
.find_movie_list:nth-child(6) {
  color: #4f9ded;
  border: 1px solid #4f9ded;
}
.find_movie_list:nth-child(7) {
  color: #cc3344;
  border: 1px solid #cc3344;
}
.find_movie_list:nth-child(8) {
  color: #ffac2d;
  border: 1px solid #ffac2d;
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
</style>
