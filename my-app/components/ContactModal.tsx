import React, { useState } from 'react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  if (!isOpen) return null

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('https://n8n.ltbventures.com/webhook/web-form-submission', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setSubmitMessage('Thank you for your message. We will get back to you soon!')
        form.reset()
      } else {
        setSubmitMessage('There was an error submitting the form. Please try again.')
      }
    } catch (error) {
      setSubmitMessage('There was an error submitting the form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="mb-4">Get in touch to explore new investment opportunities with Simone Advisory.</p>
        <form
          id="contact-form"
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            rows={4}
          ></textarea>
          {submitMessage && (
            <p className={`text-sm ${submitMessage.includes('error') ? 'text-red-500' : 'text-green-500'}`}>
              {submitMessage}
            </p>
          )}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactModal
