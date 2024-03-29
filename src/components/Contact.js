/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm('xgerlpkj');

  if (state.succeeded) {
    return (
      <div className="success-message">
        <p>
          Thanks for reaching out!
          <br />
          I will be in touch as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <main className="contact fade-in">
      <div className="contact-header">
        <h1>
          Want to contact me?
        </h1>
        <p>
          You can do so by using the form below, my Linkedin or Twitter which are linked above and below.  I am open to conversation or new opportunities.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          required
        />
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </main>
  );
};

export default Contact;
