import { db } from "./db";

export async function createPost1() {
    const post = await db.post.create({
        data: {
            name: 'hello mundo',
            createdAt: Date.now().toLocaleString(),
            updatedAt: Date.now().toLocaleString()
        },
    })
    return post
}