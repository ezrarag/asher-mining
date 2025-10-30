// Placeholder utilities showing how one might plug in Supabase or Firebase later.

export type ContactPayload = {
  name: string
  email: string
  message: string
}

// Example: replace with Supabase insert
export async function saveContactWithSupabase(_payload: ContactPayload) {
  // const supabase = createClient(...)
  // return supabase.from('contacts').insert(_payload)
  return { ok: false, reason: 'Supabase not configured' }
}

// Example: replace with Firebase Firestore write
export async function saveContactWithFirebase(_payload: ContactPayload) {
  // const db = getFirestore(app)
  // return addDoc(collection(db, 'contacts'), _payload)
  return { ok: false, reason: 'Firebase not configured' }
}

