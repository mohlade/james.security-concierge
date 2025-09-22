import React, { useState } from 'react';
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    company: '', 
    service: '', 
    message: '' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success', 'error', or null
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setStatus('error');
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate potential error
      if (Math.random() < 0.1) { // 10% chance of error
        throw new Error('Submission failed');
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
      
      // Reset success state after 3 seconds
      setTimeout(() => setStatus(null), 3000);
      
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const InputField = ({ id, label, name, type = 'text', required = false, placeholder, children, ...props }) => (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
        {label} {required && <span className="text-orange-500">*</span>}
      </label>
      <div className="relative">
        {children}
        <input
          id={id}
          name={name}
          type={type}
          value={formData[name]}
          onChange={handleChange}
          required={required}
          placeholder={placeholder}
          disabled={isSubmitting}
          className={`
            w-full px-4 py-3 pr-12 border rounded-xl bg-white/90 dark:bg-gray-800/90 
            text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 
            focus:border-transparent transition-all duration-300 backdrop-blur-sm
            ${
              errors[name]
                ? 'border-red-300 dark:border-red-600 focus:ring-red-500'
                : 'border-orange-200 dark:border-orange-800 hover:border-orange-300 dark:hover:border-orange-700'
            }
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
          {...props}
        />
        {errors[name] && (
          <AlertCircle 
            size={16} 
            className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500" 
          />
        )}
      </div>
      {errors[name] && (
        <p className="text-sm text-red-500 flex items-center gap-1">
          <AlertCircle size={14} className="flex-shrink-0" />
          {errors[name]}
        </p>
      )}
    </div>
  );

  const SelectField = ({ id, label, name, required = false, children }) => (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
        {label} {required && <span className="text-orange-500">*</span>}
      </label>
      <div className="relative">
        <select
          id={id}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          required={required}
          disabled={isSubmitting}
          className={`
            w-full px-4 py-3 pr-8 border rounded-xl bg-white/90 dark:bg-gray-800/90 
            text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 
            focus:border-transparent appearance-none transition-all duration-300 
            backdrop-blur-sm cursor-pointer
            ${
              errors[name]
                ? 'border-red-300 dark:border-red-600 focus:ring-red-500'
                : 'border-orange-200 dark:border-orange-800 hover:border-orange-300 dark:hover:border-orange-700'
            }
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
        >
          <option value="">Select an option</option>
          {children}
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {errors[name] && (
        <p className="text-sm text-red-500 flex items-center gap-1">
          <AlertCircle size={14} className="flex-shrink-0" />
          {errors[name]}
        </p>
      )}
    </div>
  );

  const TextAreaField = ({ id, label, name, required = false, placeholder, rows = 4 }) => (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
        {label} {required && <span className="text-orange-500">*</span>}
      </label>
      <div className="relative">
        <textarea
          id={id}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          required={required}
          rows={rows}
          placeholder={placeholder}
          disabled={isSubmitting}
          className={`
            w-full px-4 py-3 pr-12 border rounded-xl bg-white/90 dark:bg-gray-800/90 
            text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 
            focus:border-transparent transition-all duration-300 backdrop-blur-sm 
            resize-vertical min-h-[120px]
            ${
              errors[name]
                ? 'border-red-300 dark:border-red-600 focus:ring-red-500'
                : 'border-orange-200 dark:border-orange-800 hover:border-orange-300 dark:hover:border-orange-700'
            }
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
        />
        {errors[name] && (
          <AlertCircle 
            size={16} 
            className="absolute right-3 top-3 text-red-500" 
          />
        )}
      </div>
      {errors[name] && (
        <p className="text-sm text-red-500 flex items-center gap-1">
          <AlertCircle size={14} className="flex-shrink-0" />
          {errors[name]}
        </p>
      )}
    </div>
  );

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Status Messages */}
      {status && (
        <div className={`
          mb-6 p-4 rounded-2xl flex items-center gap-3 transition-all duration-300
          ${status === 'success' 
            ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300' 
            : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300'
          }
        `}>
          {status === 'success' ? (
            <CheckCircle size={20} className="flex-shrink-0" />
          ) : (
            <AlertCircle size={20} className="flex-shrink-0" />
          )}
          <div>
            {status === 'success' ? (
              <>
                <p className="font-semibold">Message Sent Successfully!</p>
                <p className="text-sm opacity-90">We'll get back to you within 24 hours.</p>
              </>
            ) : (
              <>
                <p className="font-semibold">Oops! Something went wrong.</p>
                <p className="text-sm opacity-90">Please try again or contact us directly.</p>
              </>
            )}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <InputField
            id="name"
            label="Full Name"
            name="name"
            required
            placeholder="John Doe"
          />
          
          <InputField
            id="email"
            label="Email Address"
            name="email"
            type="email"
            required
            placeholder="john.doe@example.com"
          />
        </div>

        {/* Phone and Company Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <InputField
            id="phone"
            label="Phone Number"
            name="phone"
            type="tel"
            placeholder="+44 (0) 123 456 7890"
          />
          
          <InputField
            id="company"
            label="Company"
            name="company"
            placeholder="Your company name"
          />
        </div>

        {/* Service Selection */}
        <SelectField
          id="service"
          label="Service Required"
          name="service"
        >
          <option value="manned-guarding">Manned Guarding</option>
          <option value="concierge">Concierge Services</option>
          <option value="cctv">CCTV & Monitoring</option>
          <option value="mobile-patrols">Mobile Patrols</option>
          <option value="access-control">Access Control</option>
          <option value="construction">Construction Security</option>
          <option value="consultation">Consultation</option>
          <option value="other">Other</option>
        </SelectField>

        {/* Message */}
        <TextAreaField
          id="message"
          label="Message"
          name="message"
          required
          placeholder="Please describe your security requirements in detail. Let us know what specific services you're interested in and any particular challenges you're facing."
          rows={6}
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting || status === 'success'}
          className={`
            w-full group relative px-8 py-4 rounded-xl font-bold flex items-center 
            justify-center gap-3 transition-all duration-300 overflow-hidden
            disabled:cursor-not-allowed
            ${
              isSubmitting || status === 'success'
                ? 'bg-gray-400 dark:bg-gray-600 text-white/70 shadow-none'
                : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95'
            }
          `}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span className="tracking-wide">Sending Message...</span>
            </>
          ) : status === 'success' ? (
            <>
              <CheckCircle size={20} className="text-green-300 animate-pulse" />
              <span className="tracking-wide">Message Sent!</span>
            </>
          ) : (
            <>
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                Send Message
              </span>
              <ArrowRight 
                size={20} 
                className="group-hover:translate-x-1 transition-transform duration-300" 
              />
            </>
          )}
          
          {/* Button shimmer effect */}
          {!isSubmitting && status !== 'success' && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          )}
        </button>
      </form>

      {/* Privacy Notice */}
      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
          By submitting this form, you agree to our{' '}
          <a href="#" className="text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 underline">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="#" className="text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 underline">
            Terms of Service
          </a>
          .
        </p>
      </div>
    </div>
  );
}