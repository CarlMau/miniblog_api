<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by Id"
          v-model="id"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchId"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(post, index) in posts"
          :key="index"
          @click="setActivePost(post, index)"
        >
         ID #{{ post.id }}
          {{ post.title }}
        </li>
      </ul>

    </div>
    <div class="col-md-6">
      <div v-if="currentPost">
        <h4>Detail</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentPost.title }}
        </div>
        <div>
          <label><strong>Content:</strong></label> {{ currentPost.content }}
        </div>

        <router-link :to="'/posts/' + currentPost.id" class="badge badge-warning">Edit</router-link>
      </div>
      <div v-else>
        <br />
<<<<<<< HEAD
        <p>Click on a Post to see details</p>
=======
        <p>Click on a post to see details</p>
>>>>>>> ec12add597326bffcdc72ea33f96da4abc94e129
      </div>
    </div>
  </div>
</template>

<script>
import PostDataService from "../services/PostDataService";

export default {
  name: "post-list",
  data() {
    return {
      posts: [],
      currentPost: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrievePosts() {
      PostDataService.getAll()
        .then(response => {
          this.posts = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrievePost();
      this.currentPost = null;
      this.currentIndex = -1;
    },

    setActivePost(post, index) {
      this.currentPost = post;
      this.currentIndex = post ? index : -1;
    },

    
    searchId() {
  PostDataService.findById(this.id)
    .then(response => {
      // Clear the existing posts before adding new ones
      this.posts = [];
      
      // Check if there are search results
      if (response.data) {
        // Add the search results to the posts array
        this.posts.push(response.data);
        
        // Set the first post in the search results as the active post
        if (this.posts.length > 0) {
          this.setActivePost(this.posts[0], 0);
        }
      } else {
        // If no search results found, reset active post
        this.setActivePost(null, -1);
      }
      
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
}
<<<<<<< HEAD
=======


>>>>>>> ec12add597326bffcdc72ea33f96da4abc94e129
  },
  mounted() {
    this.retrievePosts();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>