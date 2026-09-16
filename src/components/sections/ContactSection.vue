<template>
  <section id="contact" class="section contact-section">
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
        <button class="submit-button" type="submit">Send inquiry <span><i class="fa-solid fa-arrow-right icon-diagonal" aria-hidden="true"></i></span></button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.contact-layout {
  display: grid;
  gap: 8vw;
  grid-template-columns: 1fr 1fr;
  margin-left: 13vw;
}

.contact-layout > * {
  min-width: 0;
}

.contact-copy {
  color: var(--gray);
  font-size: 0.95rem;
  line-height: 1.9;
  margin-top: 30px;
  max-width: 430px;
}

form {
  display: grid;
  gap: 27px;
}

label {
  color: var(--gray);
  display: grid;
  font-size: 0.6rem;
  gap: 9px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

input,
select,
textarea {
  background: transparent;
  border: 0;
  border-bottom: 1px solid var(--line);
  border-radius: 0;
  color: var(--ink);
  outline: 0;
  padding: 8px 0 12px;
  resize: vertical;
  transition: border-color 0.2s;
}

input:focus,
select:focus,
textarea:focus {
  border-bottom: 2px solid var(--gold);
  padding-bottom: 11px;
}

input::placeholder,
textarea::placeholder {
  color: var(--gray-light);
}

.submit-button {
  align-items: center;
  background: var(--ink);
  color: var(--paper);
  display: flex;
  font-size: 0.68rem;
  gap: 20px;
  justify-content: center;
  letter-spacing: 0.19em;
  margin-top: 8px;
  padding: 17px;
  text-transform: uppercase;
  width: 205px;
}

@media (max-width: 1100px) {
  .contact-layout {
    margin-left: 8vw;
  }
}

@media (max-width: 800px) {
  .contact-layout {
    display: block;
    margin-left: 0;
  }
  form {
    margin-top: 42px;
  }
}

@media (max-width: 480px) {
  form {
    gap: 22px;
  }
  .submit-button {
    width: 100%;
  }
}
</style>
