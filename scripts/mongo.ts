// const { MongoClient } = require('mongodb');
// const path = require('path');
// const dotenv = require('dotenv');

// dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// const uri = process.env.MONGODB_URI;

// const fs = require('fs');

// async function insertPosts() {
//     const client = new MongoClient(uri);
    
//     try {
//         // Read the image file and convert to buffer
//         const imagePath = path.join(__dirname, '../public/abstract.jpeg');
//         const imageBuffer = fs.readFileSync(imagePath);

//         await client.connect();
//         const db = client.db('blog');
//         const posts = db.collection('posts');

//         // Clear existing posts
//         await posts.deleteMany({});

//         // Insert new posts using the actual image
//         const result = await posts.insertMany([{
//             title: "Test Post",
//             description: "This is a test post description",
//             content: "This is the main content of the test post",
//             tags: ["test", "dummy"],
//             cover: imageBuffer,
//             createdAt: new Date("2024-01-01"),
//             updatedAt: new Date("2025-01-01")
//         }]);

//         console.log(`${result.insertedCount} documents were inserted`);
//     } catch (error) {
//         console.error('Error:', error);
//     } finally {
//         await client.close();
//     }
// }

// insertPosts();

// module.exports = { insertPosts }; 