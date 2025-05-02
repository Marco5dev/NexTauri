import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth/auth-options';
import { UserProfile } from '@/lib/models/user-profile';
import clientPromise from '@/lib/mongodb';
import mongoose from 'mongoose';

// Initialize MongoDB connection
async function initMongoDB() {
  await clientPromise;
  // Ensure mongoose is connected
  if (mongoose.connection.readyState !== 1) {
    await mongoose.connect(process.env.MONGODB_URI as string);
  }
}

export async function GET() {
  await initMongoDB();
  
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  try {
    // Find or create user profile
    let userProfile = await UserProfile.findOne({ userId: session.user.id });
    
    if (!userProfile) {
      userProfile = await UserProfile.create({ userId: session.user.id });
    }
    
    return NextResponse.json(userProfile);
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return NextResponse.json(
      { error: 'Failed to fetch user profile' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  await initMongoDB();
  
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  try {
    const updateData = await request.json();
    
    // Find user profile or create if it doesn't exist
    const userProfile = await UserProfile.findOneAndUpdate(
      { userId: session.user.id },
      { $set: updateData },
      { new: true, upsert: true }
    );
    
    return NextResponse.json(userProfile);
  } catch (error) {
    console.error('Error updating user profile:', error);
    return NextResponse.json(
      { error: 'Failed to update user profile' },
      { status: 500 }
    );
  }
}