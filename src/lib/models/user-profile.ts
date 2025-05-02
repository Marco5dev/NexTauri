import mongoose, { Schema, models } from 'mongoose';

// Define a schema for a basic user profile
// Note: This is separate from NextAuth's user data and can be used to store additional user information
const userProfileSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    bio: {
      type: String,
      default: '',
    },
    location: {
      type: String,
      default: '',
    },
    website: {
      type: String,
      default: '',
    },
    preferences: {
      type: Map,
      of: Schema.Types.Mixed,
      default: {},
    },
  },
  { timestamps: true }
);

// Create the model if it doesn't exist, or use the existing one
export const UserProfile = models.UserProfile || mongoose.model('UserProfile', userProfileSchema);