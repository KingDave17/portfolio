import React, { useState } from 'react';

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSent('submitting');
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: 'cd4ee866-305f-46c9-bc0f-579a67ee84aa',
          ...form,
          subject: `New Portfolio Message from ${form.name}`
        })
      });

      const result = await response.json();
      if (result.success) {
        setSent('success');
      } else {
        console.error("Web3Forms error:", result);
        setSent('error');
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setSent('error');
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-box">
          <h2 className="contact-heading">Start a Conversation</h2>
          <p className="contact-sub">Whether you have a question or a proposal, my inbox is always open.</p>

          {sent === 'success' ? (
            <div className="form-success">
              <h3>Message Received!</h3>
              <p>Thanks for reaching out. I'll get back to you soon.</p>
              <button className="btn-submit" style={{marginTop: '15px'}} onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }}>Send Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {sent === 'error' && (
                  <div style={{ color: '#ef4444', marginBottom: '15px', padding: '10px', backgroundColor: '#fef2f2', borderRadius: '8px' }}>
                    There was an issue sending your message. Please try again.
                  </div>
              )}
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    className="form-input"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    className="form-input"
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group form-group-full">
                <label className="form-label">Message</label>
                <textarea
                  className="form-textarea"
                  name="message"
                  rows="4"
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn-submit" disabled={sent === 'submitting'}>
                 {sent === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
