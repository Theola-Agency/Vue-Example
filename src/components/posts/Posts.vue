<template>
  <div class="container post-wrapper">
    <h1 class="mb-4">WordPress Posts in Vue.js</h1>
    <h2 class="post-title">Latest posts in the 100 Creek dev site</h2>
    <!--<p>Current Author: <code>{{ currentAuthor }}</code></p>-->
    <p>Current route name: {{ $route.name }}</p>
    <div class="alert alert-info">
      These posts are being pulled in from a WordPress site's database through the WP Rest API.<br>
      It's showing an excerpt for the first three news items.
    </div>
    <div class="text-right" v-if="totalPages > 0">Current Page: {{currentPage}} of {{totalPages}}</div>

    <nav aria-label="Page navigation" class="mt-2" v-if="totalPages > 0">
      <ul class="pagination text-right float-right">
        <li class="page-item"><a class="page-link" @click.prevent="updatePage(currentPage-1)">Previous</a></li>

        <li class="page-item" v-for="(index, key) in posts.length+1" :key="key">
          <a class="page-link" @click.prevent="updatePage(key+1)">{{key+1}}</a>
        </li>

        <li class="page-item"><a class="page-link" @click.prevent="updatePage(currentPage+1)">Next</a></li>
      </ul>
    </nav>

    <div v-for="post in posts" v-bind:key="post.id" v-if="post.id">
      <div class="post d-flex flex-column w-100">
        <h2 class="post-title" v-if="post.title" v-html="post.title.rendered"></h2>
        <router-link :to="{name:'Post',
        params:{id: post.id}}"
        v-if="post._embedded">
          <img
          :src="post._embedded['wp:featuredmedia'][0].media_details.sizes['full'].source_url" />
        </router-link>
        <router-link class="btn btn-primary ml-auto" :to="{name:'Post', params:{id: post.id}}">Read More</router-link>
        <div class="excerpt"
        v-if="post.excerpt"
        v-html="post.excerpt.rendered.split(excerptFilter)[0]"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  /*props: ['posts', 'excerptFilter', 'currentPage', 'totalPages'],*/
  data () {
    return {
      posts: 'test',
      excerptFilter: null,
      currentPage: 0,
      totalPages: 0
    }
  },
  methods: {
    updatePage (page) {
      if (page <= this.totalPages && page > 0) {

        this.currentPage = page
        this.$store.commit('CHANGE_PAGE', page)
        this.$store.dispatch("fetchPosts").then(() => {
          this.posts = this.$store.state.posts
          this.excerptFilter = this.$store.state.excerptFilter
          this.currentPage = this.$store.state.currentPage
          this.totalPages = this.$store.state.totalPages
        })

      }
    }
  },
  created() {
    this.$store.dispatch("fetchPosts").then(() => {
      this.posts = this.$store.state.posts
      this.excerptFilter = this.$store.state.excerptFilter
      this.currentPage = this.$store.state.currentPage
      this.totalPages = this.$store.state.totalPages
    })
  }
}
</script>

<style lang="scss" scoped>

.author-toggle-wrap {
	display: block;
	padding: 1em;
	overflow: hidden;
}
.author-toggle {
	display: inline-block;
	width: 40%;
	margin: 5%;
	float: left;
	margin-bottom: 1em;
}

.post {
	font-size: 14px;
	font-weight: 300;
	border-bottom: 1px solid #ddd;
	padding: 2em 0;

  img {
    width: auto;
  }
}

.post-title {
	display: block;
	margin: 0 0 10px 0;
	font-size: 1.5em;
	margin-bottom: 1em;
	color: #2e3641;
	a {
		color: #2e3641;
		text-decoration: none;
		&:hover {
			color: #fc781f;
    }
	}
}

.excerpt {
	margin: 1em 0;
}

.entry-meta {
	display: block;
	text-transform: uppercase;
	margin: 2em 0 1em;
	overflow: hidden;
	line-height: 2;
	.author-wrap {
		float: left;
		display: inline-block;
		padding: 0;
		text-decoration: none;
		color: #2e3641;
		&:hover {
			color: #fc781f;
		}
		span {
			display: inline-block;
			padding: .75em 0;
		}
		.avatar {
			float: left;
			border-radius: 50%;
			margin-right: .5em;
		}
	}
	.read-more {
		float: right;
	}
}

@media ( max-width: 25em) {
	.entry-meta {
		font-size: .75em;
		.avatar {
			width: 32px;
			height: 32px;
		}
	}
}
</style>
