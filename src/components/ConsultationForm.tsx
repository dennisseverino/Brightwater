import { FormEvent, useState } from 'react';

type FormFields = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

const initialFields: FormFields = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

function validate(fields: FormFields) {
  const errors: FormErrors = {};

  if (!fields.name.trim()) errors.name = 'Please enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errors.email = 'Please enter a valid email address.';
  if (!/^[0-9+() -]{8,}$/.test(fields.phone)) errors.phone = 'Please enter a phone number we can call.';
  if (fields.message.trim().length < 10) errors.message = 'Please share a few words about what you need help with.';

  return errors;
}

export default function ConsultationForm() {
  const [fields, setFields] = useState(initialFields);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function updateField(field: keyof FormFields, value: string) {
    setFields((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(fields);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setFields(initialFields);
    }
  }

  return (
    <section id="consultation" className="section bg-charcoal text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-sage uppercase">Free consultation</p>
          <h2 className="font-serif text-4xl leading-tight sm:text-5xl">Start with one clear conversation.</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/72">
            Tell us briefly what is happening. We will contact you to arrange a free 20-minute consultation and help you understand the next practical step.
          </p>
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/7 p-6">
            <p className="font-semibold text-white">You do not need to have everything figured out.</p>
            <p className="mt-2 text-sm leading-6 text-white/68">
              A short summary is enough. If something is urgent, include that in your message.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="rounded-[2rem] bg-ivory p-6 text-charcoal shadow-image sm:p-8">
          {submitted ? (
            <div className="mb-6 rounded-3xl border border-teal/25 bg-sage/30 p-5" role="status">
              <p className="font-semibold text-charcoal">Thank you. Your enquiry has been received.</p>
              <p className="mt-2 text-sm leading-6 text-warm-gray">
                Brightwater would contact you shortly to arrange a consultation. This demo does not send data to a backend.
              </p>
            </div>
          ) : null}

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" id="name" value={fields.name} error={errors.name} onChange={(value) => updateField('name', value)} />
            <Field label="Email" id="email" type="email" value={fields.email} error={errors.email} onChange={(value) => updateField('email', value)} />
            <Field label="Phone" id="phone" type="tel" value={fields.phone} error={errors.phone} onChange={(value) => updateField('phone', value)} />
            <label className="sm:col-span-2">
              <span className="text-sm font-semibold text-charcoal">Brief message</span>
              <textarea
                rows={5}
                value={fields.message}
                onChange={(event) => updateField('message', event.target.value)}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className="mt-2 w-full resize-y rounded-3xl border border-charcoal/15 bg-white px-4 py-3 text-base outline-none transition focus:border-teal focus:ring-4 focus:ring-teal/15"
              />
              {errors.message ? <span id="message-error" className="mt-2 block text-sm font-medium text-red-700">{errors.message}</span> : null}
            </label>
          </div>

          <button type="submit" className="mt-6 w-full rounded-full bg-charcoal px-6 py-4 text-sm font-semibold text-white shadow-soft transition hover:bg-teal focus-ring">
            Book a free 20-minute consultation
          </button>
          <p className="mt-4 text-center text-xs leading-5 text-warm-gray">
            Submitting this form does not create a solicitor-client relationship.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  value,
  error,
  onChange,
  type = 'text',
}: {
  label: string;
  id: keyof FormFields;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <label>
      <span className="text-sm font-semibold text-charcoal">{label}</span>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-2 w-full rounded-full border border-charcoal/15 bg-white px-4 py-3 text-base outline-none transition focus:border-teal focus:ring-4 focus:ring-teal/15"
      />
      {error ? <span id={`${id}-error`} className="mt-2 block text-sm font-medium text-red-700">{error}</span> : null}
    </label>
  );
}
