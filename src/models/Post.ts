import mongoose, { Schema, Document } from 'mongoose';

// Interface for the Post document
export interface IPost extends Document {
  title: string;
  cover: Buffer;
  tags: string[];
  description: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

// Add static model interface
export interface PostModel extends mongoose.Model<IPost> {
  getSortedPostsWithTimeline(): Promise<{
    posts: IPost[];
    timeline: { date: Date }[];
  }>;
}

// Create the schema
const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  cover: {
    type: Buffer,
    required: true
  },
  tags: [{
    type: String,
    required: true
  }],
  description: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    require: true,
  }
}, {
  timestamps: true // Adds createdAt and updatedAt fields automatically
});

PostSchema.statics.getSortedPostsWithTimeline = async function() {
  const posts = await this.find({}).sort({ createdAt: -1 });
  const timeline = posts.map((post: IPost) => ({ date: post.createdAt }));
  return { posts, timeline };
};

// Create and export the model
const Post = mongoose.models.Post || mongoose.model<IPost, PostModel>('Post', PostSchema);

export default Post as PostModel;
