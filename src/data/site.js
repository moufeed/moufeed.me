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
    icon: "linkedin.png",
  },
  {
    label: "Stackoverflow",
    url: "https://stackoverflow.com/users/4399730/moufeed-juboqji",
    icon: "stack-overflow.png",
  },
  {
    label: "Github",
    url: "https://github.com/moufeed",
    icon: "github.png",
  },
]

export const site = {
  title: "Front-end Developer",
  description:
    "Self-taught,Front-end Developer with 6+ years commercial experience creating successful websites.",
  author: "@moufeed_m",
  siteUrl: "https://www.moufeed.me",
  email: "m.jobakji@hotmail.com",
  name: "Mofid juboqji",
  siteTitle: "Mofid juboqji",
  contactLabel: copy.nav.contact,
  contactUrl,
  menuLinks,
  socialLinks,
  resumeUrl: "/files/Mofid-juboqji-cv.pdf",
}

export const breakpoint = 576
