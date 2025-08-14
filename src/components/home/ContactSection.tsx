

const ContactSection = () => {
  return (
    <section className="py-20 bg-[#0c0c0c] text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-6">
              <span className="text-primary">Contact </span>
              <span>Us</span>
            </h2>
            <p className="text-white/70 mb-8 font-light leading-relaxed">
              Whether you're looking to buy, sell, or simply explore the luxury real estate market, our team is here to assist you every step of the way.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center mr-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-lg mb-1">Visit Us</h3>
                  <p className="text-white/70 font-light">Marci Metzger - THE RIDGE REALTY GROUP</p>
                  <p className="text-white/70 font-light">3190 HW-160, Suite F, Pahrump, Nevada 89048, United States</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center mr-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-lg mb-1">Call Us</h3>
                  <p className="text-white/70 font-light">(206) 919-6886</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center mr-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-lg mb-1">Email Us</h3>
                  <p className="text-white/70 font-light">Marcimetzger@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center mr-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-lg mb-1">Office Hours</h3>
                  <p className="text-white/70 font-light">Open today</p>
                  <p className="text-white/70 font-light">08:00 am – 07:00 pm</p>
                  <p className="text-white/70 font-light mt-2">Open daily: 8:00 am - 7:00 pm</p>
                  <p className="text-white/70 font-light mt-2">Appointments outside office hours available upon request. Just call!</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center mr-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-lg mb-1">Message Us on WhatsApp</h3>
                  <a href="https://wa.me/12069196886" className="text-primary hover:text-primary/80 transition-colors font-light">+1 425-941-2560</a>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/marciandlauren_nvrealtors/" 
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                <span className="sr-only">Instagram</span>
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/MarciHomes/" 
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                <span className="sr-only">Facebook</span>
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/marci-metzger-30642496/" 
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a 
                href="https://www.yelp.com/biz/xr3yQN_m2SgO0R_7S6p62w" 
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                <span className="sr-only">Yelp</span>
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.288 9.463c.34-1.25.913-3.375-1.379-3.463h-.001c-2.058-.08-6.055 1.5-6.445 2.47-.197.492.322.918.82.75 0 0 2.318-.59 3.067-.665 1.139-.12 1.229.625 1.139 1.033-.09.375-.828 1.875-1.139 2.548-.16.325.32.69.62.483.3-.2 3.828-2.454 3.828-2.454.38-.245.49-.867-.51-.702zm-6.838 3.092c-.51.375-1.179 1.077-1.179 1.077-.28.25-.22.865.25.865 0 0 4.375.036 4.485.036 1.15 0 1.299-1.25.949-2.19-.34-.93-.949-1.328-1.559-1.328-.6 0-2.235.165-2.235.165-.51.08-.22.999-.71 1.375zm-1.68-8.59c-.37-.225-.87.25-.87.25s-1.909 3.373-2.009 3.533c-.1.17-.17.54.17.79.33.26 1.039.8 1.449.96.42.15.87-.09.96-.37.09-.29.79-3.93.79-3.93.08-.41-.12-.99-.49-1.23zm-2.119 9.19c.3-.24.22-.75.22-.75s-.729-1.92-.899-2.19c-.16-.27-.6-.57-1.199-.42-.6.15-1.67.45-2.069.87-.4.42-.25.93-.04 1.14.21.2 2.979 1.97 2.979 1.97.4.25.71-.38 1.008-.62zm-1.25 2.56c.1-.37-.12-.75-.12-.75s-2.068-1.58-2.368-1.79c-.3-.2-.65-.15-.95.05-.3.21-1.22.83-1.47 1.54-.24.71.17 1.21.37 1.38.21.17 3.268.83 3.268.83.5.12.78-.63 1.27-1.26z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md p-8">
            <h3 className="text-2xl font-serif font-light mb-6">Send Us a Message</h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider mb-2 font-light">First Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-white/30 py-2 focus:border-primary outline-none transition-colors"
                    placeholder="Your first name"
                  />
                </div>
                
                <div>
                  <label className="block text-xs uppercase tracking-wider mb-2 font-light">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-white/30 py-2 focus:border-primary outline-none transition-colors"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-xs uppercase tracking-wider mb-2 font-light">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-white/30 py-2 focus:border-primary outline-none transition-colors"
                  placeholder="Your email address"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-xs uppercase tracking-wider mb-2 font-light">Phone</label>
                <input 
                  type="tel" 
                  className="w-full bg-transparent border-b border-white/30 py-2 focus:border-primary outline-none transition-colors"
                  placeholder="Your phone number"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-xs uppercase tracking-wider mb-2 font-light">Message</label>
                <textarea 
                  className="w-full bg-transparent border-b border-white/30 py-2 focus:border-primary outline-none transition-colors"
                  placeholder="Your message"
                  rows={4}
                ></textarea>
              </div>
              
              <button className="bg-primary text-white px-8 py-3 hover:bg-primary/90 transition-colors duration-300 uppercase tracking-widest text-sm font-light w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;