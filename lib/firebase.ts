// Firebase Admin SDK configuration and initialization
// For server-side operations in Next.js API routes
import { initializeApp, getApps, cert, type ServiceAccount } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

// Initialize Firebase Admin SDK for server-side operations
// In production, use environment variables for these values
let app
if (!getApps().length) {
  try {
    // Option 1: Using service account JSON (recommended for production)
    // Create a service account key in Firebase Console > Project Settings > Service Accounts
    // Download the JSON and store the entire JSON string in FIREBASE_SERVICE_ACCOUNT_KEY env var
    const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY

    if (serviceAccountKey) {
      const serviceAccount = JSON.parse(serviceAccountKey) as ServiceAccount
      app = initializeApp({
        credential: cert(serviceAccount),
      })
    } else if (process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
      // Option 2: Using project ID (for development, requires Application Default Credentials)
      // Or set GOOGLE_APPLICATION_CREDENTIALS env var to path of service account JSON file
      app = initializeApp({
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      })
    }
  } catch (error) {
    console.error('Firebase Admin initialization error:', error)
    // Gracefully handle if Firebase is not configured yet
  }
} else {
  app = getApps()[0]
}

export const db = app ? getFirestore(app) : null

