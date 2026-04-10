'use client';

import { useState } from 'react';
import { submitFeedback } from '@/lib/actions';
import { Star, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const SATISFACTION_ASPECTS = [
  { id: 'organization_rating', label: 'Event Organization' },
  { id: 'performances_rating', label: 'Stage Performances' },
  { id: 'costumes_rating', label: 'Costumes' },
  { id: 'time_management_rating', label: 'Time Management' },
  { id: 'sound_lighting_rating', label: 'Sound & Lighting' },
  { id: 'seating_rating', label: 'Seating Arrangement' },
  { id: 'cafeteria_rating', label: 'Cafeteria Services' },
];

const RATINGS = ['Excellent', 'Very Good', 'Good', 'Average', 'Needs Improvement'];
const MATRIX_RATINGS = ['Excellent', 'Good', 'Average', 'Poor'];

export default function SurveyForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [overallRating, setOverallRating] = useState('');
  const [durationAppropriate, setDurationAppropriate] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    // Add custom states to formData
    formData.append('overall_rating', overallRating);
    formData.append('duration_appropriate', durationAppropriate);

    const result = await submitFeedback(formData);
    
    if (result.success) {
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setError(result.error || 'Something went wrong. Please try again.');
    }
    setIsSubmitting(false);
  }

  if (isSuccess) {
    return (
      <div className="form-card text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
        <CheckCircle2 size={80} color="hsl(var(--color-teal))" />
        <h1>Thank You!</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-primary)', opacity: 0.8 }}>
          Your valuable feedback has been received. We appreciate your support in making our events better. 😊
        </p>
        <button 
          onClick={() => window.location.reload()} 
          className="submit-btn" 
          style={{ maxWidth: '200px', marginTop: '1rem' }}
        >
          Submit Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="form-card">
      {error && (
        <div style={{ background: '#fee2e2', color: '#dc2626', padding: '1rem', borderRadius: '12px', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <AlertCircle size={20} />
          {error}
        </div>
      )}

      {/* Basic Details */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          👤 Basic Details
        </h2>
        <div className="input-group">
          <label htmlFor="parent_name">Parent's Name</label>
          <input type="text" id="parent_name" name="parent_name" required placeholder="e.g. John Doe" />
        </div>
        <div className="input-group">
          <label htmlFor="student_name">Student's Name</label>
          <input type="text" id="student_name" name="student_name" required placeholder="e.g. Jane Doe" />
        </div>
        <div className="input-group">
          <label htmlFor="class_section">Class & Section</label>
          <input type="text" id="class_section" name="class_section" required placeholder="e.g. Grade 5 - B" />
        </div>
        <div className="input-group">
          <label htmlFor="ward_participated_in">Ward participated in 🎭</label>
          <input type="text" id="ward_participated_in" name="ward_participated_in" required placeholder="e.g. Dance, Drama" />
        </div>
      </section>

      {/* Event Feedback */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          ⭐ Event Feedback
        </h2>
        
        <div className="input-group">
          <label>1. Overall, how would you rate the Annual Day event?</label>
          <div className="rating-pills">
            {RATINGS.map((rate) => (
              <button
                key={rate}
                type="button"
                className={`rating-pill ${overallRating === rate ? 'active' : ''}`}
                onClick={() => setOverallRating(rate)}
              >
                {rate}
              </button>
            ))}
          </div>
        </div>

        <div className="input-group" style={{ marginTop: '2.5rem' }}>
          <label>2. How satisfied were you with the following aspects?</label>
          <div className="matrix-container">
            <table className="matrix-table">
              <thead>
                <tr>
                  <th style={{ textAlign: 'left' }}>Aspect</th>
                  {MATRIX_RATINGS.map(r => <th key={r}>{r}</th>)}
                </tr>
              </thead>
              <tbody>
                {SATISFACTION_ASPECTS.map((aspect) => (
                  <tr key={aspect.id}>
                    <td>{aspect.label}</td>
                    {MATRIX_RATINGS.map((r) => (
                      <td key={r}>
                        <input 
                          type="radio" 
                          name={aspect.id} 
                          value={r} 
                          className="radio-custom" 
                          required 
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Program Experience */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          🎭 Program Experience
        </h2>
        <div className="input-group">
          <label htmlFor="enjoyed_most">3. Which part of the event did you enjoy the most?</label>
          <textarea id="enjoyed_most" name="enjoyed_most" rows={3} placeholder="Tell us about your favorite moments..." />
        </div>
        
        <div className="input-group" style={{ marginTop: '1.5rem' }}>
          <label>4. Was the duration of the program appropriate?</label>
          <div className="rating-pills">
            <button
              type="button"
              className={`rating-pill ${durationAppropriate === 'Yes' ? 'active' : ''}`}
              onClick={() => setDurationAppropriate('Yes')}
            >
              Yes
            </button>
            <button
              type="button"
              className={`rating-pill ${durationAppropriate === 'No' ? 'active' : ''}`}
              onClick={() => setDurationAppropriate('No')}
            >
              No
            </button>
          </div>
          {durationAppropriate === 'No' && (
            <input 
              type="text" 
              name="duration_comments" 
              placeholder="Please specify why..." 
              style={{ marginTop: '1rem' }}
              required 
            />
          )}
        </div>
      </section>

      {/* Suggestions */}
      <section>
        <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          💡 Suggestions & Improvements
        </h2>
        <div className="input-group">
          <label htmlFor="liked_most">5. What did you like the most about the event?</label>
          <textarea id="liked_most" name="liked_most" rows={3} placeholder="Your thoughts..." />
        </div>
        <div className="input-group">
          <label htmlFor="suggestions">6. Any suggestions for improvement?</label>
          <textarea id="suggestions" name="suggestions" rows={3} placeholder="Help us improve future events..." />
        </div>
      </section>

      <button type="submit" className="submit-btn" disabled={isSubmitting}>
        {isSubmitting ? (
          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <Loader2 className="animate-spin" /> Submitting...
          </span>
        ) : (
          'Submit Feedback'
        )}
      </button>
      
      <p style={{ textAlign: 'center', marginTop: '2rem', opacity: 0.6, fontSize: '0.9rem' }}>
        🙏 Thank you for your valuable feedback!
      </p>
    </form>
  );
}
