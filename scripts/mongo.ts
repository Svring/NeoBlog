const { MongoClient } = require('mongodb');
const path = require('path');
const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const uri = process.env.MONGODB_URI;

async function insertPosts() {
    const client = new MongoClient(uri);
    
    try {
        // Read the image file and convert to buffer
        const imagePath = path.join(__dirname, '../public/1818131.png');
        const imageBuffer = fs.readFileSync(imagePath);

        // Read the MDX content
        const mdxPath = path.join(__dirname, '../public/Declaration_of_Inception.md');
        const mdxContent = fs.readFileSync(mdxPath, 'utf-8');

        await client.connect();
        const db = client.db('blog');
        const posts = db.collection('posts');

        // Clear existing posts
        await posts.deleteMany({});

        // Insert new posts with MDX content
        const result = await posts.insertMany([{
            title: "Declaration of Inception",
            description: "Frist post, for the beginning of the blog",
            content: mdxContent,  // 使用 MDX 文件内容
            tags: ["Caprice", "Memorial"],
            cover: imageBuffer,
            createdAt: new Date(),
        }]);

        console.log(`${result.insertedCount} documents were inserted`);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await client.close();
    }
}

insertPosts();

module.exports = { insertPosts }; 