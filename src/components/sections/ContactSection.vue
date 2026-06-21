<template>
  <section id="contact" class="section contact-section">
    <div class="section-label"><span>04</span><p>Start a conversation</p></div>
    <div class="contact-layout">
      <div>
        <p class="eyebrow">Contact us</p>
        <h2>Let's create<br /><em>something lasting.</em></h2>
        <p class="contact-copy">Have a project in mind? Tell us a little about your vision and we will be in touch.</p>
      </div>
      <form @submit.prevent>
        <label>Name<input type="text" placeholder="Your name" /></label>
        <label>Email<input type="email" placeholder="you@email.com" /></label>
        <label>Project type
          <select><option>Residential architecture</option><option>Interior design</option><option>Commercial space</option><option>Other</option></select>
        </label>
        <label>Tell us about your project<textarea rows="3" placeholder="A few words about your project"></textarea></label>
        <button class="submit-button" type="submit">Send inquiry <span>↗</span></button>
      </form>
    </div>
  </section>
</template>
