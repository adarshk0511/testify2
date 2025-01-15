import { GlobeLock } from "lucide-react";
import {AppWindow} from "lucide-react"
import { TabletSmartphone } from 'lucide-react';
import { MonitorCog } from 'lucide-react';
import { CloudCog } from 'lucide-react';
import { Radio } from 'lucide-react';

export const navItems = [
  { label: "About us", href: "#" },
  { label: "Services", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Contact us", href: "#" },
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
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
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
