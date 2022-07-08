import Post from "./Post.js";
import fileService from "../fileService.js";

class PostService {
   async createPost(postParams, picture) {
      const fileName = fileService.saveFile(picture);
      const createdPost = await Post.create({ ...postParams, picture: fileName });
      return createdPost;
   }

   async getAllPost() {
      const getPosts = await Post.find();
      return getPosts;
   }

   async getOnePost(getParamsId) {
      if (!getParamsId) {
         throw new Error("Id doesn't found");
      }
      const getPostById = await Post.findById(getParamsId);
      return getPostById;
   }

   async updatePost(putParamsId, post) {
      if (!putParamsId) {
         throw new Error("Id doesn't found");
      }
      const updatedPost = await Post.findByIdAndUpdate(putParamsId, post, { new: true });
      return updatedPost;
   }

   async deletePost(deleteParamsId) {
      if (!deleteParamsId) {
         throw new Error("Id doesn't found");
      }
      const postDelete = await Post.findByIdAndDelete(deleteParamsId);
      return postDelete;
   }
}

export default new PostService();