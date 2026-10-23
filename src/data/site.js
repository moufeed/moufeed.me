import { copy } from "./copy"

const contactUrl = "/contacts"

export const menuLinks = [
  {
    label: copy.nav.home,
    url: "/",
  },
  {
    label: copy.nav.about,
    url: "/about",
  },
  {
    label: copy.nav.experience,
    url: "/#experience",
  },
  // {
  //   label: copy.nav.portfolio,
  //   url: "/portfolio",
  // },
  {
    label: copy.nav.contact,
    url: contactUrl,
  },
]

export const socialLinks = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/mofid-juboqji/",
    icon: "linkedin.svg",
  },
  {
    label: "Stackoverflow",
    url: "https://stackoverflow.com/users/4399730/mofid-juboqji",
    icon: "stack-overflow.svg",
  },
  {
    label: "Github",
    url: "https://github.com/moufeed",
    icon: "github.svg",
  },
]

export const site = {
  title: "Senior Frontend Engineer · Angular · TypeScript · Form.io",
  description:
    "Senior Frontend Developer with 8+ years of experience building responsive web applications, CMS platforms, dashboards, and hybrid mobile experiences. Strong focus on Angular, TypeScript, JavaScript, and reusable UI components.",
  author: "@moufeed_m",
  siteUrl: "https://www.moufeed.me",
  email: "m.juboqji@outlook.com",
  name: "Mofid Juboqji",
  siteTitle: "Mofid Juboqji",
  contactLabel: copy.nav.contact,
  contactUrl,
  menuLinks,
  socialLinks,
  resumeUrl: "/files/Mofid-juboqji-cv.pdf",
}

export const breakpoint = 576
