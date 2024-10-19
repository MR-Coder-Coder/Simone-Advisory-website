'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
const backgroundImage = '/background.jpg';
const video = '/video.mp4';


export function LandingPageComponent() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 200])

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [playVideo, setPlayVideo] = useState(false)

  useEffect(() => {
    if (inView) {
      setPlayVideo(true)
    }
  }, [inView])

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            y: y1,
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 text-center text-black">
          <h1 className="text-6xl font-bold mb-4">Simone Advisory</h1>
          <p className="text-2xl">Maximizing Growth Potential in UK Human Capital</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">About Us</h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src={backgroundImage}
                alt="About Simone Advisory"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <p className="text-lg mb-4">
                Simone Advisory specializes in investing in UK recruitment, payroll, and human capital businesses. We work
                with management teams to maximize growth potential and drive success in the ever-evolving landscape of human
                resources and talent acquisition.
              </p>
              <p className="text-lg">
                Our team of experts brings years of experience and a deep understanding of the UK market, allowing us to
                identify opportunities and provide strategic guidance to our portfolio companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* B-roll and Animated Descriptions */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="mb-20">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="relative h-96 rounded-lg overflow-hidden"
            >
              {playVideo ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={backgroundImage}
                  alt="B-roll placeholder"
                  layout="fill"
                  objectFit="cover"
                />
              )}
            </motion.div>
          </div>

          <div className="space-y-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center"
            >
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h3 className="text-3xl font-bold mb-4">Recruitment Excellence</h3>
                <p className="text-lg">
                  We invest in cutting-edge recruitment firms that are revolutionizing talent acquisition in the UK. Our
                  portfolio companies leverage advanced technologies and innovative strategies to connect top talent with
                  leading organizations.
                </p>
              </div>
              <div className="md:w-1/2 md:pl-8">
                <Image
                  src={backgroundImage}
                  alt="Recruitment"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row-reverse items-center"
            >
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h3 className="text-3xl font-bold mb-4">Payroll Innovation</h3>
                <p className="text-lg">
                  Our investments in payroll services focus on streamlining processes and ensuring compliance. We support
                  businesses that are at the forefront of payroll technology, providing efficient and accurate solutions for
                  companies of all sizes.
                </p>
              </div>
              <div className="md:w-1/2 md:pr-8">
                <Image
                  src={backgroundImage}
                  alt="Payroll"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center"
            >
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h3 className="text-3xl font-bold mb-4">Human Capital Management</h3>
                <p className="text-lg">
                  We invest in comprehensive human capital management solutions that help businesses attract, develop, and
                  retain top talent. Our portfolio includes companies offering innovative HR tech, training programs, and
                  employee engagement platforms.
                </p>
              </div>
              <div className="md:w-1/2 md:pl-8">
                <Image
                  src={backgroundImage}
                  alt="Human Capital"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-xl mb-8">
            Interested in partnering with Simone Advisory? We&apos;d love to hear from you.
          </p>
          <a
            href="#contact"
            className="bg-white text-gray-800 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
}