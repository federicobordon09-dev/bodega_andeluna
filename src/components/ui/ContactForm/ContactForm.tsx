'use client'

import { useState, useRef, useEffect, FormEvent } from 'react'
import { useTranslations } from 'next-intl'
import styles from './ContactForm.module.css'

interface FormData {
  nombre: string
  email: string
  telefono: string
  fecha: string
  personas: string
  mensaje: string
}

interface FormErrors {
  nombre?: string
  email?: string
  telefono?: string
  mensaje?: string
}

export default function ContactForm() {
  const t = useTranslations('common')

  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    fecha: '',
    personas: '',
    mensaje: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const honeypotRef = useRef<HTMLInputElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const startTimeRef = useRef<number>(0)
  const lastSubmitTimeRef = useRef<number>(0)

  useEffect(() => {
    startTimeRef.current = Date.now()
  }, [])

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!re.test(email)) return false
    const blocked = ['tempmail', 'throwaway', 'guerrillamail', 'mailinator', 'yopmail', 'fake', 'test', 'asdf']
    const lower = email.toLowerCase()
    return !blocked.some((b) => lower.includes(b))
  }

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {}

    if (!formData.nombre.trim() || formData.nombre.trim().length < 2) {
      newErrors.nombre = t('contactForm.errorName')
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contactForm.errorEmail')
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t('contactForm.errorEmailInvalid')
    }

    if (formData.telefono && formData.telefono.replace(/\D/g, '').length < 8) {
      newErrors.telefono = t('contactForm.errorPhone')
    }

    if (!formData.mensaje.trim() || formData.mensaje.trim().length < 10) {
      newErrors.mensaje = t('contactForm.errorMinLength')
    }

    return newErrors
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    // Anti-spam: honeypot check
    if (honeypotRef.current?.value) {
      setSubmitMessage(t('contactForm.success'))
      setSubmitted(true)
      return
    }

    // Anti-spam: minimum time check (3 seconds)
    const elapsed = Date.now() - startTimeRef.current
    if (elapsed < 3000) {
      setSubmitMessage(t('contactForm.errorSlowdown'))
      return
    }

    // Anti-spam: cooldown between submits (10 seconds)
    const sinceLastSubmit = Date.now() - lastSubmitTimeRef.current
    if (sinceLastSubmit < 10000 && lastSubmitTimeRef.current > 0) {
      setSubmitMessage(t('contactForm.errorCooldown'))
      return
    }

    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setIsSubmitting(true)
    lastSubmitTimeRef.current = Date.now()

    // Simular envío (en producción iría a un backend)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setSubmitMessage(t('contactForm.success'))
    }, 1500)
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  if (submitted) {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className={styles.successTitle}>{t('contactForm.errorTitle')}</h3>
        <p className={styles.successText}>{submitMessage}</p>
      </div>
    )
  }

  return (
    <form
      ref={formRef}
      className={styles.form}
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
    >
      {/* Honeypot - oculto para humanos, visible para bots */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="website">{t('contactForm.honeypot')}</label>
        <input
          ref={honeypotRef}
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className={styles.formRow}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="nombre">{t('contactForm.nameLabel')}</label>
          <input
            id="nombre"
            type="text"
            className={`${styles.input} ${errors.nombre ? styles.inputError : ''}`}
            placeholder={t('contactForm.namePlaceholder')}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            value={formData.nombre}
            onChange={(e) => handleChange('nombre', e.target.value)}
          />
          {errors.nombre && <span className={styles.error}>{errors.nombre}</span>}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">{t('contactForm.emailLabel')}</label>
          <input
            id="email"
            type="email"
            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
            placeholder={t('contactForm.emailPlaceholder')}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="telefono">{t('contactForm.phoneLabel')}</label>
          <input
            id="telefono"
            type="tel"
            className={`${styles.input} ${errors.telefono ? styles.inputError : ''}`}
            placeholder={t('contactForm.phonePlaceholder')}
            autoComplete="off"
            value={formData.telefono}
            onChange={(e) => handleChange('telefono', e.target.value)}
          />
          {errors.telefono && <span className={styles.error}>{errors.telefono}</span>}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="fecha">{t('contactForm.dateLabel')}</label>
          <input
            id="fecha"
            type="date"
            className={styles.input}
            autoComplete="off"
            value={formData.fecha}
            onChange={(e) => handleChange('fecha', e.target.value)}
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="personas">{t('contactForm.peopleLabel')}</label>
          <select
            id="personas"
            className={styles.select}
            value={formData.personas}
            onChange={(e) => handleChange('personas', e.target.value)}
          >
            <option value="">{t('contactForm.peopleSelect')}</option>
            <option value="1-2">{t('contactForm.people12')}</option>
            <option value="3-4">{t('contactForm.people34')}</option>
            <option value="5-8">{t('contactForm.people58')}</option>
            <option value="8+">{t('contactForm.people8plus')}</option>
          </select>
        </div>
        <div className={styles.field} />
      </div>

      <div className={styles.fieldFull}>
        <label className={styles.label} htmlFor="mensaje">{t('contactForm.messageLabel')}</label>
        <textarea
          id="mensaje"
          className={`${styles.textarea} ${errors.mensaje ? styles.inputError : ''}`}
          rows={5}
          placeholder={t('contactForm.messagePlaceholder')}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          value={formData.mensaje}
          onChange={(e) => handleChange('mensaje', e.target.value)}
        />
        {errors.mensaje && <span className={styles.error}>{errors.mensaje}</span>}
      </div>

      <button
        type="submit"
        className={styles.submit}
        disabled={isSubmitting}
      >
        {isSubmitting ? t('contactForm.sending') : t('contactForm.submit')}
        {!isSubmitting && (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        )}
      </button>
    </form>
  )
}
