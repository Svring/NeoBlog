import { NextResponse } from 'next/server';
import { postCard } from '@/config/postCard';
import { nameCard } from '@/config/nameCard';

// GET /api/article
export async function GET(request: Request) {
    return NextResponse.json({ postCard: postCard, nameCard: nameCard }, { status: 200 });
}

// POST /api/article
// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     // TODO: Implement saving the new article to your database
//     console.log('Received new article:', body);

//     return NextResponse.json({ message: 'Article created successfully' }, { status: 201 });
//   } catch (error) {
//     return NextResponse.json({ error: 'Failed to create article' }, { status: 400 });
//   }
// }

// Optional: Implement other HTTP methods as needed
// export async function PUT(request: Request) { ... }
// export async function DELETE(request: Request) { ... }
