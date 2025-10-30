// Firebase client-side configuration (for future client-side features)
// Replace with your Firebase web app config
import { initializeApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

// Initialize Firebase client only if config is available
let app
if (typeof window !== 'undefined' && !getApps().length && firebaseConfig.apiKey) {
  try {
    app = initializeApp(firebaseConfig)
  } catch (error) {
    console.error('Firebase client initialization error:', error)
  }
}

export const firestore = app ? getFirestore(app) : null
export { app }

