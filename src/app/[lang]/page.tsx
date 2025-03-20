import LocaleSwitcher from '@/components/locale-switcher'
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import Image from 'next/image'
import { Mail,MapPin,Phone } from 'lucide-react'

export default async function Home(
  { params }: { params: { lang: Locale } },
) {

  const dictionary = await getDictionary(params.lang)
  return (
    <main className='min-h-screen'>

      {/* Hero Section */}
      <section className="relative">
        {/* Background Image */}
        <Image
          src="/images/image-background.png"
          alt="Background"
          fill
          className="object-cover z-0"
          priority
        />

        <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 lg:p-[100]">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/images/logo.png"
              alt="Develware Logo"
              width={300}
              height={65}
              priority
            />
          </div>

          <div className='flex align-middle justify-center items-center'>
            <div className="mb-12 flex flex-col ">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0C777F] max-w-[480] uppercase">
                {dictionary.home.hero.title}
              </h2>
            </div>

            {/* Devices Image */}
            <div className="mt-8">
              <Image
                src="/images/dispositivos.png"
                alt="Dispositivos"
                width={660}
                height={440}
                className="max-w-full h-auto"
                priority
              />
            </div>
          </div>
          {/* Language Switcher */}
          <div className="absolute top-4 right-4">
            <p className='text-[#0C777F] text-center'>{dictionary.lenguage.welcome}</p>
            <LocaleSwitcher />
          </div>
        </div>
      </section>

      {/* Design and Programming Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0C777F] mb-8">
            {dictionary.home.hero.title}
          </h2>
          <p className="max-w-3xl mx-auto text[#8D8D8D] text-lg">
            {dictionary.home.hero.description}
          </p>
        </div>
      </section>


      {/* Services Section */}
      <section className="relative py-16">
        {/* Background wrapper */}
        <div className="absolute inset-0">
          <div className="bg-gradient-to-r to-cyan-900 absolute inset-0 opacity-90 z-10" />
          <Image
            src="/images/background-service.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 text-white">
          <h2 className="text-3xl font-bold text-center mb-4">{dictionary.services.title}</h2>
          <p className="text-center max-w-3xl mx-auto mb-12">{dictionary.services.subtitle}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service Card 1 */}
            {
              dictionary.services.services.map((service,index) => (
                <div key={index} className="bg-black/20 rounded-lg overflow-hidden">
                  <div className="h-48 relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0C777F] text-center mb-12">{dictionary.team.title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {
              dictionary.team.members.map((member,index) => (
                <div key={index} className="relative bg-gray-100 rounded-lg overflow-hidden group">
                  <div className="h-72 relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-end p-4">
                      <h3 className="font-semibold text-white">{member.name}</h3>
                      <p className="text-white text-sm">{member.position}</p>
                    </div>
                  </div>
                </div>
              ))
            }

          </div>
          <div className="mt-10 max-w-4xl mx-auto text-center text-gray-600">
            <p className="mb-4">
              {dictionary.team.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#F0F5F5]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            {/* Contact Information */}
            <div className="md:w-1/3 bg-[#094A4F] text-white p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="mb-8">Say something to start a live chat!</p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5" />
                  <span>+1012 3456 789</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5" />
                  <span>demo@gmail.com</span>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 mt-1" />
                  <span>132 Dartmouth Street Boston, Massachusetts 02156 United States</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:w-2/3 bg-[#F0F5F5] p-8">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm text-gray-500 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0C777F]"
                    placeholder="Doe"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm text-gray-500 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0C777F]"
                    placeholder="Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-500 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0C777F]"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm text-gray-500 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0C777F]"
                    placeholder="+1012 3456 789"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm text-gray-500 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0C777F]"
                    placeholder="Write your message..."
                  ></textarea>
                </div>
                <div className="md:col-span-2 flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#0C777F] text-white py-3 px-6 rounded-md hover:bg-teal-800 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#0C777F] text-white text-center">
        <div className="container mx-auto px-4">
          <div className="mb-6 flex justify-center">
            <Image src="/images/logo-white.png" alt="DevelWare Logo" width={300} height={130} className="h-10 w-auto" />
          </div>
          <p className="text-sm">
            Designed and developed by <span className="font-bold">DEVELWARE SOLUTIONS</span> Copyright © 2025
          </p>
        </div>
      </footer>
    </main>
  )
}
