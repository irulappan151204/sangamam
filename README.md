# Sangamam 2025-2026 Parent Feedback Form

A premium, responsive survey application built with Next.js and Supabase.

## 🚀 Getting Started

### 1. Install Dependencies
Run the following command in your terminal:
```bash
npm install
```

### 2. Database Setup (Supabase)
Run this SQL in your [Supabase SQL Editor](https://supabase.com/dashboard/project/xuxobymgsmrlvkpstbzx/sql/new):

```sql
create table feedback (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  parent_name text not null,
  student_name text not null,
  class_section text not null,
  ward_participated_in text,
  overall_rating text,
  organization_rating text,
  performances_rating text,
  costumes_rating text,
  time_management_rating text,
  sound_lighting_rating text,
  seating_rating text,
  cafeteria_rating text,
  enjoyed_most text,
  duration_appropriate text,
  duration_comments text,
  liked_most text,
  suggestions text
);

-- Enable RLS
alter table feedback enable row level security;

-- Create a policy to allow anyone to insert (public submission)
create policy "Allow public insert" on feedback for insert with check (true);
```

### 3. Run Locally
```bash
npm run dev
```

### 4. Deploy to Vercel
1. Push this code to GitHub.
2. Connect your repository to Vercel.
3. Add the following environment variables in Vercel:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## ✨ Features
- **Premium Design**: Glassmorphism and cultural HSL color palette.
- **Responsive**: Fully optimized for mobile and desktop feedback submission.
- **Server Actions**: Secure data handling with Next.js 14 server functions.
- **Staggered Animations**: Enhanced user experience with smooth transitions.
