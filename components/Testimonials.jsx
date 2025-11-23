'use client';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      handle: '@sarahmitchell',
      avatar: '/avatars/avatar1.jpg',
      text: 'Gainvestor completely transformed my approach to real estate investing. Professional, transparent, and always available.',
      verified: true,
    },
    {
      name: 'Michael Chen',
      handle: '@mchen',
      avatar: '/avatars/avatar2.jpg',
      text: 'Best investment decision I ever made. The team guided me through every step and I now own 3 properties.',
      verified: true,
    },
    {
      name: 'Jennifer Brooks',
      handle: '@jenbrooks',
      avatar: '/avatars/avatar3.jpg',
      text: 'I was nervous about investing, but Gainvestor made it so simple. Their expertise is unmatched.',
      verified: false,
    },
    {
      name: 'David Thompson',
      handle: '@dthompson',
      avatar: '/avatars/avatar4.jpg',
      text: 'Finally, a real estate company that actually cares about their clients long-term success. Highly recommend!',
      verified: true,
    },
    {
      name: 'Amanda Rodriguez',
      handle: '@amandarodriguez',
      avatar: '/avatars/avatar5.jpg',
      text: 'The ROI has exceeded my expectations. Thank you Gainvestor for turning my real estate dreams into reality.',
      verified: true,
    },
    {
      name: 'Robert Kim',
      handle: '@robertkim',
      avatar: '/avatars/avatar6.jpg',
      text: 'Professional service from start to finish. They found me the perfect investment property in just weeks.',
      verified: false,
    },
    {
      name: 'Lisa Anderson',
      handle: '@lisaanderson',
      avatar: '/avatars/avatar7.jpg',
      text: 'Transparent pricing, no hidden fees, and incredible market insights. This is how real estate should be done.',
      verified: true,
    },
    {
      name: 'James Wilson',
      handle: '@jwilson',
      avatar: '/avatars/avatar8.jpg',
      text: 'Started with one property, now I have a growing portfolio. Gainvestor has been with me every step.',
      verified: true,
    },
    {
      name: 'Emily Davis',
      handle: '@emilydavis',
      avatar: '/avatars/avatar9.jpg',
      text: 'The team is knowledgeable, responsive, and genuinely invested in my success. Could not ask for better partners.',
      verified: false,
    },
    {
      name: 'Christopher Lee',
      handle: '@chrislee',
      avatar: '/avatars/avatar10.jpg',
      text: 'From consultation to closing, everything was seamless. Gainvestor delivers on their promises.',
      verified: true,
    },
    {
      name: 'Maria Garcia',
      handle: '@mariagarcia',
      avatar: '/avatars/avatar11.jpg',
      text: 'I appreciate the educational approach. They made sure I understood every aspect before making decisions.',
      verified: true,
    },
    {
      name: 'Daniel Brown',
      handle: '@danielbrown',
      avatar: '/avatars/avatar12.jpg',
      text: 'Outstanding service and results. My investment has already appreciated significantly in just one year.',
      verified: false,
    },
  ];

  // Split testimonials into 3 columns for desktop
  const column1 = testimonials.slice(0, 4);
  const column2 = testimonials.slice(4, 8);
  const column3 = testimonials.slice(8, 12);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0A2342] to-[#0d1a2d] px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#C6A664]/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            What our clients{' '}
            <span className="bg-gradient-to-r from-[#C6A664] to-[#D4B876] bg-clip-text text-transparent">
              say
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/70 sm:text-md">
            Here's what some of our clients have to say about Gainvestor Property Group.
          </p>
        </div>

        {/* Vertical Marquee Grid */}
        <div className="relative mx-auto max-w-7xl">
          {/* Fade overlays */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-[#0A2342] to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-[#0d1a2d] to-transparent" />

          {/* Desktop: 3 columns */}
          <div className="hidden gap-6 lg:grid lg:grid-cols-3">
            {/* Column 1 - Normal speed */}
            <div className="marquee-column">
              <div className="marquee-content animate-marquee-up">
                {[...column1, ...column1].map((testimonial, index) => (
                  <TestimonialCard key={`col1-${index}`} {...testimonial} />
                ))}
              </div>
            </div>

            {/* Column 2 - Slower speed */}
            <div className="marquee-column">
              <div className="marquee-content animate-marquee-up-slow">
                {[...column2, ...column2].map((testimonial, index) => (
                  <TestimonialCard key={`col2-${index}`} {...testimonial} />
                ))}
              </div>
            </div>

            {/* Column 3 - Faster speed */}
            <div className="marquee-column">
              <div className="marquee-content animate-marquee-up-fast">
                {[...column3, ...column3].map((testimonial, index) => (
                  <TestimonialCard key={`col3-${index}`} {...testimonial} />
                ))}
              </div>
            </div>
          </div>

          {/* Mobile & Tablet: 2 columns */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:hidden">
            {/* Column 1 */}
            <div className="marquee-column">
              <div className="marquee-content animate-marquee-up">
                {[...testimonials.slice(0, 6), ...testimonials.slice(0, 6)].map((testimonial, index) => (
                  <TestimonialCard key={`mobile-col1-${index}`} {...testimonial} />
                ))}
              </div>
            </div>

            {/* Column 2 */}
            <div className="marquee-column">
              <div className="marquee-content animate-marquee-up-slow">
                {[...testimonials.slice(6, 12), ...testimonials.slice(6, 12)].map((testimonial, index) => (
                  <TestimonialCard key={`mobile-col2-${index}`} {...testimonial} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ name, handle, avatar, text, verified }) {
  return (
    <div className="group relative mb-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#C6A664]/30 hover:bg-white/10">
      {/* User info */}
      <div className="mb-4 flex items-center gap-3">
        <div className="h-12 w-12 overflow-hidden rounded-full bg-gradient-to-br from-[#C6A664] to-[#8B7355]">
          <div className="flex h-full w-full items-center justify-center text-lg font-bold text-white">
            {name.charAt(0)}
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-1">
            <h4 className="font-semibold text-white">{name}</h4>
            {verified && (
              <svg className="h-4 w-4 text-[#1DA1F2]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
          </div>
          <p className="text-sm text-white/50">{handle}</p>
        </div>
      </div>

      {/* Testimonial text */}
      <p className="text-sm leading-relaxed text-white/80">{text}</p>
    </div>
  );
}