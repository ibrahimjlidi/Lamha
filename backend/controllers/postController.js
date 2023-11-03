import User from '../models/userModel.js'
import Post from '../models/postModel.js';



// create 
const createPost = async (req, res) => {

    try {
        const { postedBy, text, image } = req.body;
        if (!postedBy || !text) {
            return res.status(400).json({ message: "postedby and text is required" });
        }

        const user = await User.findById(postedBy);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        if (user._id.toString() !== req.user._id.toString()) {
            return res.status(401).json({ message: "Unauthorized to create post" });
        }
        const maxLength = 500.
        if (text.length > maxLength) {
            return res.status(400).json({ message: `Text must be at least ${maxLength} characters` })
        }

        const newPost = new Post({ postedBy, text, image });
        await newPost.save();
        res.status(201).json({ message: "Post created successfully", newPost });
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log("Error in createPost: ", err.message);

    }
}

//getPost

const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {

            return res.status(404).json({ message: "Post not found" });
        }

        res.status(200).json({ post });

    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log("Error in getPost: ", err.message);

    }

}

//delete post

const deletePost = async (req, res) => {

    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        if (post.postedBy.toString() !== req.user._id.toString()) {
            return res.status(401).json({ message: "Unauthorized to delete post" });
        }

        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Post deleted" });

    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log("Error in getPost: ", err.message);

    }
}
//like unlike Post  
const likeUnlikePost = async (req, res) => {
    try {
        const { id: postId } = req.params;
        const userId = req.user._id;

        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).json({ message: "Not Found" });
        }
        const userLikedPost = post.likes.includes(userId);
        console.log("Like", post.likes);
        if (userLikedPost) {
            //unlike post
            await Post.updateOne({ _id: postId }, { $pull: { likes: userId } })
            res.status(200).json({ message: "Post unliked successfully" });

        } else {
            //like post
            post.likes.push(userId);
            await post.save();
            res.status(200).json({ message: "Post liked successfully" });

        }
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log("Error in likeUnlikePost: ", err.message);

    }
}

// reply to post 
const replyToPost = async (req, res) => {
    try {


        const { text } = req.body;
        const postId = req.params.id;
        const userId = req.user._id;
        const userProfilePic = req.user.profile_pic;
        const username = req.user.username;

        if (!text) {
            return res.status(400).json({ message: "Text field is required" })
        }
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ message: "Post not found" })
        }
        const reply = { userId, text, userProfilePic, username };

        post.replies.push(reply);
        await post.save();
        res.status(200).json({ message: "reply addes successfully", post });

    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log("Error in reply To Post : ", err.message);

    }




}
 //get feeds

 const getFeedPosts = async (req, res) => {

        try {

            const userId = req.user._id;
            const user= await User.findById(userId);

            if (!user) {
                res.save(404, { message: " User not found"});

            }
            const following = user.following;
            const feedPosts = await Post.find({postedBy:{$in:following}}).sort({createdAt: -1});
            
            res.status(200).json({feedPosts});
        } catch (err) {
            res.status(500).json({ message: err.message });
            console.log("Error in Feeds : ", err.message);
    
        }
 }



export { likeUnlikePost, replyToPost,getFeedPosts, createPost, getPost, deletePost };