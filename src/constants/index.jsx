import { GlobeLock } from "lucide-react";
import { AppWindow } from "lucide-react";
import { TabletSmartphone } from "lucide-react";
import { MonitorCog } from "lucide-react";
import { CloudCog } from "lucide-react";
import { Radio } from "lucide-react";
import { Wrench } from "lucide-react";
import { ShieldEllipsis } from 'lucide-react';
import { BrainCircuit } from 'lucide-react';
import { ScreenShare } from 'lucide-react';
import { UserPen } from 'lucide-react';
import { Link } from 'lucide-react';
import { Box } from 'lucide-react';


export const navItems = [
  { label: "About us", to: "workflow" },
  { label: "Services", to: "services" },
  { label: "Pricing", to: "pricing" },
];

export const features = [
  {
    icon: <AppWindow />,
    text: "Web App Pentesting",
    description:
      "Identify vulnerabilities in your web applications, ensuring robust security against cyber threats.",
  },
  {
    icon: <TabletSmartphone />,
    text: "Mobile App Pentesting",
    description:
      "Secure your mobile apps by uncovering and mitigating security flaws across Android and iOS platforms.",
  },
  {
    icon: <MonitorCog />,
    text: "API Testing",
    description:
      "Validate and protect your APIs against vulnerabilities, ensuring seamless and secure integrations.",
  },
  {
    icon: <CloudCog />,
    text: "Cloud Pentesting",
    description:
      "Enhance the security of your cloud infrastructure by identifying misconfigurations and threats.",
  },
  {
    icon: <GlobeLock />,
    text: "External Network Pentesting",
    description:
      "Assess and fortify your external networks to prevent unauthorized access and data breaches.",
  },
  {
    icon: <Radio />,
    text: "IoT Pentesting",
    description:
      "Safeguard your IoT devices and networks with comprehensive security testing tailored to connected systems.",
  },
];

export const checklistItems = [
  {
    title: "Innovative Expertise",
    description:
      "We combine AI, ML, engineering, and IT to deliver cutting-edge solutions that solve complex challenges and drive impactful results.",
  },
  {
    title: "Global Reach",
    description:
      "We serve clients not only in India but also across international markets, providing solutions that meet diverse needs and drive success globally.",
  },
  {
    title: "Comprehensive Services",
    description:
      "From 3D modeling to AI integration, we offer a full spectrum of services that address all your business needs and help you stay ahead in a competitive market.",
  },
  {
    title: "Client-Centric Approach",
    description:
      "We provide solutions tailored to your unique goals and challenges, ensuring that each strategy is aligned with your business vision and objectives.",
  },
];

// export const pricingOptions = [
//   {
//     title: "Free",
//     price: "₹0",
//     features: [
//       "Private board sharing",
//       "5 Gb Storage",
//       "Web Analytics",
//       "Private Mode",
//     ],
//   },
//   {
//     title: "Pro",
//     price: "₹100",
//     features: [
//       "Private board sharing",
//       "10 Gb Storage",
//       "Web Analytics (Advance)",
//       "Private Mode",
//     ],
//   },
//   {
//     title: "Enterprise",
//     price: "₹1000",
//     features: [
//       "Private board sharing",
//       "Unlimited Storage",
//       "High Performance Network",
//       "Private Mode",
//     ],
//   },
// ];

export const pricingOptions = [
  {
    title: "Basic",
    price: "₹0",
    features: [
      "Standard Engineering Templates",
      "5 GB Secure Cloud Storage",
      "Basic Project Tracker",
      "Community Support",
    ],
  },
  {
    title: "Pro",
    price: "₹100",
    features: [
      "Advanced 3D Modeling Tools",
      "10 GB Cloud Storage",
      "AI-Powered Project Insights",
      "Priority Email Support",
    ],
  },
  {
    title: "Enterprise",
    price: "₹1000",
    features: [
      "End-to-End Project Management Suite",
      "Unlimited Storage with High-Security Access",
      "Custom AI/ML & Cybersecurity Solutions",
      "Dedicated Account Manager",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
export const infoLinks = [
  { href: "#", text: "About Us" },
  { href: "#", text: "Contact Us" },
  { href: "#", text: "Partnership" },
  { href: "#", text: "Case Studies" },
  { href: "#", text: "Jobs" },
];

export const serviceLink = [
  {
    icon: <ScreenShare />,
    title: "IT Solutions",
    description:
      "We offer development and management of IT infrastructure, custom software solutions for engineering and manufacturing, and end-to-end IT support tailored to meet your business requirements.",
    href: "/testService",
    // ele: <TestService/>
  },
  {
    icon: <ShieldEllipsis />,
    title: "Cybersecurity Solutions",
    description:
      "Comprehensive protection against cyber threats through security assessments, risk analysis, continuous monitoring, safeguarding sensitive data, and ensuring compliance.",
    href: "/testService",
    // ele: <TestService/>
  },
  {
    icon: <Wrench />,
    title: "Engineering Design & Project Engineering",
    description:
      "We provide customized engineering designs and drafting solutions, comprehensive project engineering support for seamless execution, and specialized expertise in manufacturing equipment for the oil and gas sector and beyond.",
    href: "/enggService",
    // ele: <EnggService/>
  },
 
  {
    icon: <BrainCircuit />,
    title: "Artificial Intelligence (AI) & Machine Learning (ML)",
    description:
      "AI-driven solutions for process optimization, tailored ML models, predictive analytics for enhanced efficiency, and seamless integration of AI/ML technologies into existing business workflows.",
    href: "AIService.jsx",
    // ele: <TestService/>
  },
];

export const enggLink = [
    {
      icon: <UserPen />,
      text: "Project Management",
      description:
        "Comprehensive project planning and execution with risk management, cost optimization, timeline control, and seamless coordination across all stages.",
    },
    {
      icon: <Link />,
      text: "Supply Chain Support",
      description:
        "Reliable supply chain solutions with strategic sourcing of engineered materials, procurement, and logistics management for domestic and international clients.",
    },
    {
      icon: <Box />,
      text: "3D Modeling & Visualization",
      description:
        "Advanced 3D modeling and high-quality rendering for accurate visualization, delivering detailed designs to streamline engineering and manufacturing processes.",
    },
  
];