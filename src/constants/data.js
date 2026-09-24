import { GitBranch, Mail, Phone, Telescope } from "lucide-react"
import {
    SiFacebook,
    SiInstagram,
    SiWhatsapp,
    SiGithub,
    SiGmail,
} from 'react-icons/si'


export const navLinks =[
    {to: '/#', title: 'Home'},
    {to: '/#about', title: 'About'},
    {to: '/#skills', title: 'Skills'},
    {to: '/#background', title: 'Background'},
    {to: '/#projects', title: 'Projects'},
    {to: '/#contact', title: 'Contact'},
]


export const contact = [
    {
        id: '01',
        title: 'Facebook',
        link: 'https://www.facebook.com/share/17iL3kMu4w/?mibextid=wwXIfr',
        icon: SiFacebook
    },
    {
        id: '02',
        title: 'Gmail',
        link: 'mailto:ahmedelnemrdev@gmail.com',
        icon: SiGmail
    },
    {
        id: '03',
        title: 'Github',
        link: 'https://github.com/Elnemr01',
        icon: SiGithub
    },
    {
        id: '04',
        title: 'Linkedin',
        link: 'https://www.linkedin.com/in/ahmedelnemr01',
        icon: Mail
    },
    {
        id: '05',
        title: 'WhatsApp',
        link: 'https://wa.me/201204662807',
        icon: SiWhatsapp
    },
    {
        id: '06',
        title: 'Instagram',
        link: 'https://www.instagram.com/a7med_elnemr_?igsh=MWxocjh3MGRtdGhmdQ%3D%3D&utm_source=qr',
        icon: SiInstagram
    },
]
