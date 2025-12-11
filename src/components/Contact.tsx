import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // REPLACE 'YOUR_FORMSPREE_ID' WITH YOUR ACTUAL FORM ID FROM FORMSPREE.IO
    const formspreeId = 'xjknpyjn';

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section bg-secondary">
      <div className="container">
        <h2 className="title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p className="subtitle">
              Have a project in mind or want to say hi?
              Feel free to send me a message!
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email</strong>
                <a href="mailto:ezekdonkor@gmail.com">ezekdonkor@gmail.com</a>
              </div>
              <div className="contact-item">
                <strong>Location</strong>
                <span>Accra, Ghana</span>
              </div>
              <div className="contact-item">
                <strong>Phone</strong>
                <a href="tel:+233542309292">+233 54 230 9292</a>
              </div>
              <div className="contact-item">
                <strong>Socials</strong>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/mr-donkor-ezekiel" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href="https://github.com/Ezek9292" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="#">Portfolio</a>
                </div>
              </div>
            </div>
          </div>

          <div className="form-wrapper">
            {status === 'success' ? (
              <div className="success-message">
                <h3>Message Sent! 🚀</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
                <button onClick={() => setStatus('idle')} className="btn btn-primary">Send Another</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'error' && (
                  <p className="error-text">Oops! Something went wrong. Please try again.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-top: 3rem;
        }
        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
          }
        }
        .contact-details {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .contact-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .contact-item strong {
          color: var(--accent-primary);
        }
        .social-links {
          display: flex;
          gap: 1rem;
        }
        .social-links a:hover {
          color: var(--accent-primary);
          text-decoration: underline;
        }
        .contact-form {
          background: var(--bg-primary);
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          color: white;
          font-family: inherit;
        }
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent-primary);
        }
        .success-message {
          background: var(--bg-primary);
          padding: 2rem;
          border-radius: 12px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.05);
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }
        .success-message h3 {
          color: var(--accent-primary);
          font-size: 1.5rem;
        }
        .error-text {
          color: #ef4444;
          margin-top: 1rem;
          font-size: 0.9rem;
        }
        .btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
      `}</style>
    </section>
  );
};

export default Contact;
