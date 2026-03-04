import Header from '../components/Header'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact The Grand Meridian Hotel. We\'d love to hear from you about reservations, amenities, or event planning.',
  keywords: ['Contact The Grand Meridian Hotel', 'Support', 'Help', 'Get in Touch'],
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-8 md:pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-accent-400 to-transparent" />
            </div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4">Contact Us</h1>
            <p className="text-base md:text-lg text-gray-400 font-light">
              Have questions about reservations, amenities, or event planning? We&#39;d love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Information */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
              <h2 className="text-2xl font-serif font-light text-white mb-6">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Email</h3>
                    <p className="text-gray-400">reservations@grandmeridian.com</p>
                    <p className="text-gray-400">support@grandmeridian.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Phone</h3>
                    <p className="text-gray-400">(555) 234-5617</p>
                    <p className="text-sm text-gray-500">Monday to Friday, 9 AM - 6 PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Office</h3>
                    <p className="text-gray-400">
                      1 Grand Meridian Boulevard<br />
                      Waterfront District<br />
                      Miami, FL 33131
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Business Hours</h3>
                    <p className="text-gray-400">
                      Front Desk: 24/7<br />
                      Reservations: 8:00 AM - 10:00 PM Daily<br />
                      Concierge: 7:00 AM - 11:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
              <h2 className="text-2xl font-serif font-light text-white mb-6">Send us a Message</h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-accent-500 focus:border-accent-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-accent-500 focus:border-accent-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-accent-500 focus:border-accent-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-accent-500 focus:border-accent-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-accent-500 focus:border-accent-500"
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full border border-accent-500 text-accent-400 py-3 px-4 rounded hover:bg-accent-500 hover:text-slate-950 focus:outline-none focus:ring-1 focus:ring-accent-500 transition-all duration-200 font-medium tracking-wide"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-8 md:mt-12 bg-slate-900 border border-slate-800 rounded-xl p-6 md:p-8">
            <div className="text-center">
              <h2 className="font-serif text-xl md:text-2xl font-light text-white mb-4">Need Immediate Help?</h2>
              <p className="text-sm md:text-base text-gray-400 mb-6 font-light">
                Check out our documentation and community resources for quick answers to common questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 border border-slate-600 text-gray-300 rounded hover:border-gray-400 hover:text-white transition-all duration-200 font-medium tracking-wide"
                >
                  View Documentation
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 border border-accent-500 text-accent-400 rounded hover:bg-accent-500 hover:text-slate-950 transition-all duration-200 font-medium tracking-wide"
                >
                  Join Community
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
