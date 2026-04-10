'use server';

import { supabase } from './supabase';

export async function submitFeedback(formData: FormData) {
  const rawData = {
    parent_name: formData.get('parent_name'),
    student_name: formData.get('student_name'),
    class_section: formData.get('class_section'),
    ward_participated_in: formData.get('ward_participated_in'),
    overall_rating: formData.get('overall_rating'),
    organization_rating: formData.get('organization_rating'),
    performances_rating: formData.get('performances_rating'),
    costumes_rating: formData.get('costumes_rating'),
    time_management_rating: formData.get('time_management_rating'),
    sound_lighting_rating: formData.get('sound_lighting_rating'),
    seating_rating: formData.get('seating_rating'),
    cafeteria_rating: formData.get('cafeteria_rating'),
    enjoyed_most: formData.get('enjoyed_most'),
    duration_appropriate: formData.get('duration_appropriate'),
    duration_comments: formData.get('duration_comments'),
    liked_most: formData.get('liked_most'),
    suggestions: formData.get('suggestions'),
  };

  const { error } = await supabase
    .from('feedback')
    .insert([rawData]);

  if (error) {
    console.error('Error inserting feedback:', error);
    return { success: false, error: error.message };
  }

  return { success: true };
}
