import ChartService from "./ChartService.js";

class ChartController {
   async create(req, res) {
      try {
         const post = await ChartService.createPost(req.body);
         res.json(post);
      } catch (error) {
         res.status(500).json(error)
      }
   }

   async getAll(req, res) {
      try {
         const posts = await ChartService.getAllPost();
         return res.json(posts);
      } catch (error) {
         res.status(500).json(error)
      }
   }
   async getOne(req, res) {
      try {
         const getPostById = await ChartService.getOnePost(req.params.id);
         return res.json(getPostById)

      } catch (error) {
         res.status(500).json(error)
      }
   }
   async update(req, res) {
      try {
         //if (!post._id) {
         //   res.status(400).json({ message: 'Id not found' })
         //}
         const updatedPost = await ChartService.updatePost(req.body._id, req.body);
         return res.json(updatedPost);
      } catch (error) {
         res.status(500).json(error)
      }
   }
   async delete(req, res) {
      try {
         const postDelete = await ChartService.deletePost(req.params.id);
         return res.json(postDelete);
      } catch (error) {
         res.status(500).json(error)
      }
   }
}

export default new ChartController();