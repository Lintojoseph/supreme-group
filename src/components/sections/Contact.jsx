'use client';

export default function Contact() {
  return (
    <section className="min-h-screen bg-[#006eb8] text-white px-6 md:px-20 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left: Contact Info */}
        <div className="space-y-8">
          <h2 className="text-5xl font-bold">Get in touch</h2>
          <div className="w-16 h-1 bg-white"></div>
          <p className="text-lg">For general enquiries</p>

          <div className="space-y-4">
            <div>
              <p className="font-medium">Address :</p>
              <p>110, 16th Road, Chembur, Mumbai - 400071</p>
            </div>
            <div>
              <p className="font-medium">Phone :</p>
              <p>+91 22 25208822</p>
            </div>
            <div>
              <p className="font-medium">Email :</p>
              <p>info@supremegroup.co.in</p>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <form className="space-y-6">
          <div>
            <label className="block mb-1 text-xl">Full name</label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-white focus:outline-none py-1"
            />
          </div>
          <div>
            <label className="block mb-1 text-xl">Email</label>
            <input
              type="email"
              className="w-full bg-transparent border-b border-white focus:outline-none py-1"
            />
          </div>
          <div>
            <label className="block mb-1 text-xl">Company</label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-white focus:outline-none py-1"
            />
          </div>
          <div>
            <label className="block mb-1 text-xl">Message</label>
            <textarea
              className="w-full bg-transparent border-b border-white focus:outline-none py-1 h-24 resize-none"
            />
          </div>
          <button
            type="submit"
            className="px-8 py-2 rounded-full border border-white hover:bg-white hover:text-[#006eb8] transition-all text-xl"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
