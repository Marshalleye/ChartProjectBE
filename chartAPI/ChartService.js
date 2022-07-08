import Chart from "./Chart.js";

class ChartService {
   async createPost(postParams) {
      const createdPost = await Chart.create(postParams);
      return createdPost;
   }

   async getAllPost() {
      const getPosts = await Chart.find();
      return getPosts;
   }

   async getOnePost(getParamsId) {
      if (!getParamsId) {
         throw new Error("Id doesn't found");
      }
      const getPostById = await Chart.findById(getParamsId);
      return getPostById;
   }

   async updatePost(putParamsId, post) {
      if (!putParamsId) {
         throw new Error("Id doesn't found");
      }
      const updatedPost = await Chart.findByIdAndUpdate(putParamsId, post, { new: true });
      return updatedPost;
   }

   async deletePost(deleteParamsId) {
      if (!deleteParamsId) {
         throw new Error("Id doesn't found");
      }
      const postDelete = await Chart.findByIdAndDelete(deleteParamsId);
      return postDelete;
   }
}

export default new ChartService();