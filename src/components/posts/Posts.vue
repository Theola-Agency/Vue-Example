<template>
  <div class="post-wrapper">
    <h1>WordPress Posts in Vue.js</h1>
    <h2 class="post-title">These are the latest posts in the 100 Creek dev site</h2>
    <p>Current Author: <code>{{ currentAuthor }}</code></p>
    <div v-for="post in posts" v-bind:key="post.id">
      <div class="post">
        <h2 class="post-title" v-html="post.title.rendered"></h2>
        <a v-if="post._embedded['wp:featuredmedia'][0].media_details.sizes['full']" :href="post.link">
          <img :src="post._embedded['wp:featuredmedia'][0].media_details.sizes['full'].source_url" />
        </a>
        <div class="excerpt" v-if="post.excerpt.rendered" v-html="post.excerpt.rendered.split(excerptFilter)[0]"></div>
        <div class="entry-meta" v-if="post._embedded.author[0]">
          <a class="author-wrap" :href="post._embedded.author[0].link">by&nbsp; {{ post._embedded.author[0].name }} </a>
          <a class="btn btn-primary read-more float-right" :href="post.link">Read More &raquo;</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GetPosts from './get-posts.js'
export default {
  mixins: [GetPosts]
}
</script>

<style lang="scss">

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

img {
	max-width: 100%;
}
</style>
