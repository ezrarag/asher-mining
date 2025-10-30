import { NextResponse } from 'next/server'
import { db } from '@/lib/firebase'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, message } = data ?? {}

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    // Save to Firebase Firestore
    if (db) {
      await db.collection('contacts').add({
        name,
        email,
        message,
        timestamp: new Date().toISOString(),
        read: false,
      })
    } else {
      // Fallback to console if Firebase is not configured
      console.log('Contact submission (Firebase not configured):', {
        name,
        email,
        message,
      })
      console.warn(
        '⚠️  Firebase not configured. Set up environment variables to enable database storage.'
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Invalid request' },
      { status: 500 }
    )
  }
}

