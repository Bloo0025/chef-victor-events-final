export default function Contact() {
  return (
    <section className="container-xl py-12">
      <div className="max-w-2xl mx-auto bg-white/70 rounded-3xl p-8 shadow">
        <h2 className="text-3xl md:text-4xl font-display mb-6">Contact Us</h2>
        <form className="grid gap-4" onSubmit={(e)=>{e.preventDefault(); alert('Form submit placeholder – wire this to your email or backend.')}}>
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input className="mt-1 w-full rounded-xl border border-navy/20 px-3 py-2 bg-cream" required />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" className="mt-1 w-full rounded-xl border border-navy/20 px-3 py-2 bg-cream" required />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea rows="5" className="mt-1 w-full rounded-xl border border-navy/20 px-3 py-2 bg-cream" required></textarea>
          </div>
          <button className="justify-self-start px-6 py-3 bg-navy text-cream rounded-xl shadow hover:opacity-90">Send</button>
        </form>
      </div>
    </section>
  )
}
