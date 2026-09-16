export const services = [
  {
    number: '01',
    slug: 'architecture',
    title: 'Architecture',
    text: 'Context-led homes and commercial spaces shaped around the way people live, work, and gather.',
    image: '/images/courtyard-wide.jpg',
    summary:
      'We design homes and commercial spaces that respond to climate, context, and the way people actually live — from early massing studies through to a fully resolved architectural language.',
    description:
      'Every building starts with the site: light, orientation, movement, and the rhythms of daily life. We carry that thinking through planning, detailing, and material selection so the finished building feels inevitable rather than imposed.',
    highlights: ['Site & feasibility studies', 'Concept & schematic design', 'Planning & permit documentation', 'Construction detailing'],
    gallery: ['/images/courtyard-wide.jpg', '/images/courtyard-night.jpg', '/images/site-inspection.jpg'],
  },
  {
    number: '02',
    slug: 'interior-design',
    title: 'Interior Design',
    text: 'Material-rich interiors balancing clarity, warmth, functionality, and a quietly elevated finish.',
    image: '/images/interior-lounge.jpg',
    summary:
      'Every interior we shape balances comfort with intention — material choices, lighting, and layout are considered together so a space feels complete rather than decorated.',
    description:
      'We work room by room and detail by detail, from spatial planning through to the smallest fixture, so each interior reads as one considered idea rather than a collection of finishes.',
    highlights: ['Space planning & layout', 'Material & finish selection', 'Custom joinery & furniture', 'Lighting design'],
    gallery: ['/images/interior-lounge.jpg', '/images/interior-bedroom.jpg', '/images/interior-media.jpg'],
  },
  {
    number: '03',
    slug: 'project-delivery',
    title: 'Project Delivery',
    text: 'A considered process from initial concept through documentation, coordination, and site oversight.',
    image: '/images/site-inspection.jpg',
    summary:
      'Good design only matters if it gets built well. We stay close to every project through documentation, contractor coordination, and site visits so intent survives contact with construction.',
    description:
      'From technical drawings through to final snagging, we act as the through-line between design intent and finished space — coordinating trades, tracking quality, and solving problems before they reach the client.',
    highlights: ['Technical documentation', 'Contractor coordination', 'Site supervision', 'Quality & snagging review'],
    gallery: ['/images/site-inspection.jpg', '/images/studio-work.jpg', '/images/material-stone.jpg'],
  },
]

export const getServiceBySlug = (slug) => services.find((service) => service.slug === slug)
