<template>
    
    <div class="submit-form">
      <h4>Add New Post</h4>
      <div v-if="!submitted">
        <div class="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            class="form-control"
            id="title"
            required
            v-model="post.title"
            name="title"
          />
        </div>
  
        <div class="form-group">
  <label for="description">Content</label>
  <textarea
    class="form-control"
    id="description"
    required
    v-model="post.content"
    name="description"
    rows="5" 
    style="resize: vertical;" 
  ></textarea>
</div>
  
        <button @click="savePost" class="btn btn-success">Submit</button>
      </div>
  
      <div v-else>
        <h4>You submitted successfully!</h4>
        <button class="btn btn-success" @click="newPost">Add</button>
      </div>
    </div>
  </template>
  
  <script>
  import PostDataService from "../services/PostDataService";
  
  export default {
    name: "add-post",
    data() {
      return {
        post: {
          id: null,
          title: "",
          content: ""
        },
        submitted: false
      };
    },
    methods: {
      savePost() {
        var data = {
          title: this.post.title,
          content: this.post.content
        };
  
        PostDataService.create(data)
          .then(response => {
            this.post.id = response.data.id;
            console.log(response.data);
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
      },
      
      newPost() {
        this.submitted = false;
        this.post = {};
      }
    }
  };
  </script>
  
  <style>
  .submit-form {
    max-width: 300px;
    margin: auto;
  }
  </style>