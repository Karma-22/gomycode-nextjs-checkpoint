'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="section-block" style={{ maxWidth: '650px', margin: '0 auto' }}>
      <span className="hero-pill">Prendre Contact</span>
      <h1 className="hero-title" style={{ fontSize: '2.5rem', textAlign: 'left', marginBottom: '1.25rem' }}>
        Discutons de vos <span>projets</span>
      </h1>
      <p className="hero-desc" style={{ textAlign: 'left', marginBottom: '2rem' }}>
        Vous avez une opportunité, un projet web ou souhaitez échanger autour du développement ?
        Envoyez-moi un message via le formulaire ci-dessous ou contactez-moi directement.
      </p>

      <div className="card">
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>🎉</span>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
              Message envoyé avec succès !
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Merci {formData.name}, je reviendrai vers vous dans les plus brefs délais.
            </p>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', message: '' });
              }}
            >
              Envoyer un autre message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label htmlFor="name" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                Votre Nom *
              </label>
              <input
                id="name"
                type="text"
                required
                style={{
                  padding: '0.75rem 1rem',
                  background: 'rgba(10, 13, 20, 0.8)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  color: '#ffffff',
                  fontSize: '0.95rem'
                }}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ex : Alexandre Dupont"
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label htmlFor="email" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                Votre Adresse Email *
              </label>
              <input
                id="email"
                type="email"
                required
                style={{
                  padding: '0.75rem 1rem',
                  background: 'rgba(10, 13, 20, 0.8)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  color: '#ffffff',
                  fontSize: '0.95rem'
                }}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alexandre@domaine.com"
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label htmlFor="message" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                Votre Message *
              </label>
              <textarea
                id="message"
                rows={4}
                required
                style={{
                  padding: '0.75rem 1rem',
                  background: 'rgba(10, 13, 20, 0.8)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  color: '#ffffff',
                  fontSize: '0.95rem',
                  fontFamily: 'inherit'
                }}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Décrivez votre projet ou proposition..."
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}>
              ✉️ Envoyer le Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
