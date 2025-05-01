const Contact = () => (
  <section class="contact">
    <div class="container">
      <h1>Contact Us</h1>
      <form class="contact-form" action="#" method="post">
        <label>Name</label>
        <input type="text" placeholder="Your Name" required />

        <label>Email</label>
        <input type="email" placeholder="Your Email" required />

        <label>Message</label>
        <textarea placeholder="Your Message" rows="5" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  </section>
);

export default Contact;
