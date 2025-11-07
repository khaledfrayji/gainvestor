'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  FiMapPin, 
  FiDollarSign, 
  FiTrendingUp,
  FiHome,
  FiCalendar,
  FiCheckCircle,
  FiAward,
  FiFilter
} from 'react-icons/fi';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'development', label: 'Development' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Luxury Apartment Complex',
      location: 'Parramatta, NSW',
      category: 'residential',
      image: '/i1.png',
      price: '850,000',
      yield: '5.2%',
      status: 'Completed',
      year: '2024',
      description: 'Premium residential development featuring modern amenities and exceptional rental yields in the heart of Parramatta CBD.',
      features: ['3 Bedrooms', '2 Bathrooms', 'Parking', 'Gym & Pool']
    },
    {
      id: 2,
      title: 'Waterfront Investment Property',
      location: 'Sydney, NSW',
      category: 'residential',
      image: '/i2.png',
      price: '1,250,000',
      yield: '4.8%',
      status: 'Completed',
      year: '2024',
      description: 'Stunning waterfront property with breathtaking harbor views and strong capital growth potential.',
      features: ['4 Bedrooms', '3 Bathrooms', 'Ocean Views', 'Prime Location']
    },
    {
      id: 3,
      title: 'Commercial Office Space',
      location: 'Melbourne, VIC',
      category: 'commercial',
      image: '/i1.png',
      price: '2,100,000',
      yield: '6.5%',
      status: 'Completed',
      year: '2023',
      description: 'Grade A commercial office space in Melbourne CBD with long-term tenant and excellent returns.',
      features: ['500 sqm', 'CBD Location', '10 Year Lease', 'High Yield']
    },
    {
      id: 4,
      title: 'Mixed-Use Development',
      location: 'Brisbane, QLD',
      category: 'development',
      image: '/i2.png',
      price: '3,500,000',
      yield: '7.2%',
      status: 'In Progress',
      year: '2024',
      description: 'Exciting mixed-use development combining retail and residential spaces in Brisbane\'s fastest-growing suburb.',
      features: ['Retail + Residential', 'High Growth Area', 'Multiple Income', 'Future Value']
    },
    {
      id: 5,
      title: 'Suburban Family Home',
      location: 'Adelaide, SA',
      category: 'residential',
      image: '/i1.png',
      price: '680,000',
      yield: '5.5%',
      status: 'Completed',
      year: '2023',
      description: 'Perfect family home in established neighborhood with strong rental demand and stable returns.',
      features: ['4 Bedrooms', '2 Bathrooms', 'Large Yard', 'Near Schools']
    },
    {
      id: 6,
      title: 'Retail Investment Opportunity',
      location: 'Perth, WA',
      category: 'commercial',
      image: '/i2.png',
      price: '950,000',
      yield: '6.8%',
      status: 'Completed',
      year: '2024',
      description: 'High-traffic retail space with established tenant and consistent income stream in prime location.',
      features: ['200 sqm', 'High Foot Traffic', 'Established Tenant', 'Stable Income']
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .hero-badge {
          animation: fadeIn 0.8s ease-out 0.2s backwards;
        }

        .hero-title {
          animation: fadeInUp 1s ease-out 0.4s backwards;
        }

        .hero-subtitle {
          animation: fadeInUp 0.8s ease-out 0.6s backwards;
        }

        .filter-btn {
          animation: fadeIn 0.6s ease-out backwards;
        }

        .filter-btn:nth-child(1) { animation-delay: 0.7s; }
        .filter-btn:nth-child(2) { animation-delay: 0.75s; }
        .filter-btn:nth-child(3) { animation-delay: 0.8s; }
        .filter-btn:nth-child(4) { animation-delay: 0.85s; }

        .project-card {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .project-card:nth-child(1) { animation-delay: 0.1s; }
        .project-card:nth-child(2) { animation-delay: 0.2s; }
        .project-card:nth-child(3) { animation-delay: 0.3s; }
        .project-card:nth-child(4) { animation-delay: 0.4s; }
        .project-card:nth-child(5) { animation-delay: 0.5s; }
        .project-card:nth-child(6) { animation-delay: 0.6s; }

        .project-card:hover .project-image {
          transform: scale(1.05);
        }

        .project-image {
          transition: transform 0.5s ease;
        }

        .stat-item {
          animation: slideInLeft 0.6s ease-out backwards;
        }

        .stat-item:nth-child(1) { animation-delay: 0.8s; }
        .stat-item:nth-child(2) { animation-delay: 0.9s; }
        .stat-item:nth-child(3) { animation-delay: 1s; }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <div className="scroll-smooth overflow-hidden bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0A2342] via-[#0d2d54] to-[#0A2342] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#C6A664]/10 blur-3xl" />
            <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
          </div>

          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />

          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <div className="hero-badge mb-6 inline-flex items-center gap-2 rounded-full border border-[#C6A664]/20 bg-[#C6A664]/10 px-5 py-2.5 text-sm font-semibold text-[#C6A664] backdrop-blur-sm">
              <FiAward className="h-4 w-4" />
              <span>Our Projects</span>
            </div>

            <h1 className="hero-title mb-8 text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              Investment properties{' '}
              <span className="bg-gradient-to-r from-[#C6A664] to-[#D4B876] bg-clip-text text-transparent">
                we've secured
              </span>
            </h1>

            <p className="hero-subtitle mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-white/80 sm:text-2xl">
              Discover the diverse portfolio of high-return investment properties we've helped our clients acquire across Australia.
            </p>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="border-b border-gray-200 bg-white px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 sm:grid-cols-3">
              <div className="stat-item text-center">
                <div className="mb-2 text-4xl font-bold text-[#C6A664] lg:text-5xl">
                  150+
                </div>
                <div className="text-base font-medium text-gray-600">
                  Properties Secured
                </div>
              </div>
              <div className="stat-item text-center">
                <div className="mb-2 text-4xl font-bold text-[#C6A664] lg:text-5xl">
                  $180M+
                </div>
                <div className="text-base font-medium text-gray-600">
                  Total Property Value
                </div>
              </div>
              <div className="stat-item text-center">
                <div className="mb-2 text-4xl font-bold text-[#C6A664] lg:text-5xl">
                  5.8%
                </div>
                <div className="text-base font-medium text-gray-600">
                  Average Rental Yield
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 text-gray-600">
                <FiFilter className="h-5 w-5" />
                <span className="font-semibold">Filter:</span>
              </div>
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`filter-btn rounded-lg px-6 py-2.5 font-semibold transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r from-[#C6A664] to-[#D4B876] text-[#0A2342] shadow-md'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="project-card group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden bg-gray-200">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="project-image object-cover"
                    />
                    {/* Status Badge */}
                    <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold backdrop-blur-sm">
                      <FiCheckCircle className={`h-3.5 w-3.5 ${
                        project.status === 'Completed' ? 'text-green-600' : 'text-blue-600'
                      }`} />
                      <span className={
                        project.status === 'Completed' ? 'text-green-600' : 'text-blue-600'
                      }>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Location and Year */}
                    <div className="mb-3 flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1.5 text-gray-500">
                        <FiMapPin className="h-4 w-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-500">
                        <FiCalendar className="h-4 w-4" />
                        <span>{project.year}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="mb-3 text-xl font-bold text-[#0A2342] transition-colors group-hover:text-[#C6A664]">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-gray-600">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <span
                          key={index}
                          className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Divider */}
                    <div className="mb-4 border-t border-gray-200" />

                    {/* Price and Yield */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="mb-1 flex items-center gap-1.5 text-xs text-gray-500">
                          <FiDollarSign className="h-3.5 w-3.5" />
                          <span>Property Value</span>
                        </div>
                        <div className="text-lg font-bold text-[#0A2342]">
                          ${project.price}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="mb-1 flex items-center justify-end gap-1.5 text-xs text-gray-500">
                          <FiTrendingUp className="h-3.5 w-3.5" />
                          <span>Rental Yield</span>
                        </div>
                        <div className="text-lg font-bold text-green-600">
                          {project.yield}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <div className="py-20 text-center">
                <FiHome className="mx-auto mb-4 h-16 w-16 text-gray-300" />
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  No projects found
                </h3>
                <p className="text-gray-600">
                  Try selecting a different filter to see more projects.
                </p>
              </div>
            )}
          </div>
        </section>

       
      </div>
    </>
  );
}