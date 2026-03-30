"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactText from '@/components/sections/contact/ContactText';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Globe, ShieldCheck, Truck } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="small"
        sizing="mediumSizeLargeTitles"
        background="aurora"
        cardStyle="outline"
        primaryButtonStyle="flat"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Products",
          id: "#products",
        },
        {
          name: "Pricing",
          id: "#pricing",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="GlobalStore"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "plain",
      }}
      title="Global Commerce, Simplified."
      description="Empowering your business to reach international customers with seamless shipping, secure payments, and global analytics."
      leftCarouselItems={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgBMLMpcSguNEnzm8HxXwGsyvi/a-high-quality-image-of-global-logistics-1774900880598-0e16462c.png?_wi=1",
          imageAlt: "Global commerce shipping 1",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgBMLMpcSguNEnzm8HxXwGsyvi/a-high-quality-image-of-global-logistics-1774900880598-0e16462c.png?_wi=2",
          imageAlt: "Global commerce shipping 2",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgBMLMpcSguNEnzm8HxXwGsyvi/a-high-quality-image-of-global-logistics-1774900880598-0e16462c.png?_wi=3",
          imageAlt: "Global commerce shipping 3",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgBMLMpcSguNEnzm8HxXwGsyvi/a-high-quality-image-of-global-logistics-1774900880598-0e16462c.png?_wi=4",
          imageAlt: "Global commerce shipping 4",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgBMLMpcSguNEnzm8HxXwGsyvi/a-high-quality-image-of-global-logistics-1774900880598-0e16462c.png?_wi=5",
          imageAlt: "Global commerce shipping 5",
        },
      ]}
      rightCarouselItems={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgBMLMpcSguNEnzm8HxXwGsyvi/a-high-quality-image-of-global-logistics-1774900880598-0e16462c.png?_wi=6",
          imageAlt: "Analytics dashboard 1",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgBMLMpcSguNEnzm8HxXwGsyvi/a-high-quality-image-of-global-logistics-1774900880598-0e16462c.png?_wi=7",
          imageAlt: "Analytics dashboard 2",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgBMLMpcSguNEnzm8HxXwGsyvi/a-high-quality-image-of-global-logistics-1774900880598-0e16462c.png?_wi=8",
          imageAlt: "Analytics dashboard 3",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgBMLMpcSguNEnzm8HxXwGsyvi/a-high-quality-image-of-global-logistics-1774900880598-0e16462c.png?_wi=9",
          imageAlt: "Analytics dashboard 4",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgBMLMpcSguNEnzm8HxXwGsyvi/a-high-quality-image-of-global-logistics-1774900880598-0e16462c.png?_wi=10",
          imageAlt: "Analytics dashboard 5",
        },
      ]}
      buttons={[
        {
          text: "Get Started",
          href: "#pricing",
        },
      ]}
      avatars={[
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgBMLMpcSguNEnzm8HxXwGsyvi/professional-business-person-headshot-1774900878481-288e727e.png",
          alt: "User 1",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgBMLMpcSguNEnzm8HxXwGsyvi/professional-business-person-headshot-1774900878382-31b0d486.png",
          alt: "User 2",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgBMLMpcSguNEnzm8HxXwGsyvi/professional-business-person-headshot-1774900878724-e7ff03ad.png",
          alt: "User 3",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgBMLMpcSguNEnzm8HxXwGsyvi/professional-business-person-headshot-1774900881117-d1a30a91.png",
          alt: "User 4",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgBMLMpcSguNEnzm8HxXwGsyvi/professional-business-person-headshot-1774900878481-288e727e.png",
          alt: "User 5",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "FedEx",
        },
        {
          type: "text",
          text: "DHL",
        },
        {
          type: "text",
          text: "UPS",
        },
        {
          type: "text",
          text: "Shopify",
        },
        {
          type: "text",
          text: "Stripe",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={true}
      title="Our Global Impact"
      metrics={[
        {
          icon: Globe,
          label: "Countries Served",
          value: "120+",
        },
        {
          icon: Truck,
          label: "Deliveries Daily",
          value: "50k+",
        },
        {
          icon: ShieldCheck,
          label: "Secure Transactions",
          value: "99.9%",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Premium Tech Hub",
          price: "$129",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgBMLMpcSguNEnzm8HxXwGsyvi/a-sleek-modern-electronic-device-on-a-mi-1774900879407-ccb86103.png",
        },
        {
          id: "p2",
          name: "Global Connectivity Kit",
          price: "$89",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgBMLMpcSguNEnzm8HxXwGsyvi/premium-accessories-photography-clean-de-1774900878751-a6e28d17.png",
        },
        {
          id: "p3",
          name: "Smart Office Suite",
          price: "$249",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgBMLMpcSguNEnzm8HxXwGsyvi/smart-home-device-design-clean-interface-1774900878787-2d1a971c.png",
        },
      ]}
      title="Top Global Products"
      description="Carefully selected products tailored for our international market."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "starter",
          name: "Starter",
          price: "$49",
          features: [
            "10 countries",
            "Standard logistics",
            "Email support",
          ],
          buttons: [
            {
              text: "Select Plan",
            },
          ],
        },
        {
          id: "growth",
          name: "Growth",
          price: "$149",
          features: [
            "50 countries",
            "Priority logistics",
            "24/7 Support",
          ],
          buttons: [
            {
              text: "Select Plan",
            },
          ],
        },
        {
          id: "enterprise",
          name: "Enterprise",
          price: "Custom",
          features: [
            "All countries",
            "Dedicated logistics",
            "API access",
          ],
          buttons: [
            {
              text: "Contact Sales",
            },
          ],
        },
      ]}
      title="Global Scaling Plans"
      description="Flexible plans designed to grow with your international ambitions."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Alice Chen",
          role: "CEO",
          testimonial: "Transformed our global operations.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgBMLMpcSguNEnzm8HxXwGsyvi/professional-business-person-headshot-1774900878481-288e727e.png?_wi=1",
        },
        {
          id: "2",
          name: "Bob Smith",
          role: "Logistics",
          testimonial: "Unmatched reliability and speed.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgBMLMpcSguNEnzm8HxXwGsyvi/professional-business-person-headshot-1774900878382-31b0d486.png",
        },
        {
          id: "3",
          name: "Carol Yan",
          role: "Founder",
          testimonial: "Scales effortlessly for our team.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgBMLMpcSguNEnzm8HxXwGsyvi/professional-business-person-headshot-1774900878724-e7ff03ad.png",
        },
        {
          id: "4",
          name: "David Lee",
          role: "CFO",
          testimonial: "Best ROI for our international shipping.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgBMLMpcSguNEnzm8HxXwGsyvi/professional-business-person-headshot-1774900881117-d1a30a91.png",
        },
        {
          id: "5",
          name: "Eve White",
          role: "COO",
          testimonial: "Seamless integration, excellent support.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgBMLMpcSguNEnzm8HxXwGsyvi/professional-business-person-headshot-1774900878481-288e727e.png?_wi=2",
        },
      ]}
      title="Trusted by Global Leaders"
      description="See why our customers trust us for their international trade operations."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      text="Ready to scale your business globally? Our team is here to assist you."
      buttons={[
        {
          text: "Contact Us",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgBMLMpcSguNEnzm8HxXwGsyvi/abstract-global-connection-visualization-1774900878856-35c0c98e.png"
      columns={[
        {
          title: "Platform",
          items: [
            {
              label: "Features",
              href: "#",
            },
            {
              label: "Pricing",
              href: "#pricing",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Support",
              href: "#",
            },
            {
              label: "Blog",
              href: "#",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
