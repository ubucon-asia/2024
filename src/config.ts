import UbuntuIndiaLogo from "@assets/UbuntuIndia.svg"
import UbuConAsiaCommitteeLogo from "@assets/UbuConAsiaCommittee.svg"
import OSCollectiveLogo from "@assets/oscollective.webp";
import JaipurPhoto from "@assets/jaipur.jpg"

export const config = {
    siteTitle: "UbuCon Asia 2024",
    siteDescription: "JECRC Foundation, Jaipur, India | August 31st - September 2nd",
    blog: {
        rssFeedUrl: "https://blog.ubucon.asia/tags/uca24/index.xml",
        viewMoreUrl: "https://blog.ubucon.asia/tags/uca24"
    },
    cityBanner: {
        title: "Let's meet in the pink city of innovation!",
        description: 'Learn about the Jaipur, India the city where UbuCon Asia 2024 will be held. And plan your trip today!',
        image: JaipurPhoto.src,
        buttons: [
            {
                label: 'Venue & Safety',
                url: '/venue-and-travel/venue-and-safety'
            },
            {
                label: 'Getting to the city',
                url: '/venue-and-travel/getting-to-city'
            },
            {
                label: 'Exploring the city',
                url: '/venue-and-travel/explore-city'
            },
        ]
    },
    footer: {
        copyright: "© 2024-Present UbuCon Asia Committee. Ubuntu and Canonical are registered trademarks of Canonical Ltd. Unless otherwise noted, content licensed under CC BY 4.0 source code under MIT.",
        contactUs: "mailto:contact@ubucon.asia",
        srcRepoUrl: "https://github.com/ubucon-asia/2024.ubucon.asia",
        organizers: [
            { name: "Ubuntu India", logoImage: UbuntuIndiaLogo.src, link: "https://discourse.ubuntu.com/t/ubuntu-india-local-community-ubuntu-in/39994" },
            { name: "UbuCon Asia Committee", logoImage: UbuConAsiaCommitteeLogo.src, link: "https://www.ubucon.asia" },
            { name: "Open Source Collective", logoImage: OSCollectiveLogo.src, link: "https://www.oscollective.org/" }
        ]
    },
    navigation: [
        {
            label: 'About',
            url: '/about'
        },
        {
            label: 'Venue & Travel',
            items: [
                {
                    label: 'Venue & Safety',
                    url: '/venue-and-travel/venue-and-safety'
                },
                {
                    label: 'Getting to the city',
                    url: '/venue-and-travel/getting-to-city'
                },
                {
                    label: 'Exploring the city',
                    url: '/venue-and-travel/explore-city'
                },
                {
                    label: 'Accommodations',
                    url: '/venue-and-travel/accommodations'
                },
                {
                    label: 'Travel grant',
                    url: '/venue-and-travel/travel-grant'
                },
                {
                    label: 'Visa Process',
                    url: '/venue-and-travel/visa-process'
                }
            ],
        },
        {
            label: 'Programs',
            items: [
                {
                    label: 'Important dates',
                    url: '/programs/important-dates'
                },
                {
                    label: 'Call for proposals',
                    url: 'https://events.canonical.com/event/47/'
                },
                {
                    label: 'Schedules',
                    url: 'https://events.canonical.com/event/47/timetable'
                },
                {
                    label: 'Social events',
                    url: '/programs/social-events'
                }
            ]
        },
        {
            label: 'Sponsors/Patrons',
            items: [
                {
                    label: 'Become a sponsor',
                    url: '/sponsors/become-a-sponsor'
                },
                {
                    label: 'Our sponsors',
                    url: '/sponsors/our-sponsors'
                },
                {
                    label: 'Become a patron',
                    url: '/sponsors/patrons'
                }
            ]
        },
        {
            label: 'Links',
            items: [
                {
                    label: 'News',
                    url: 'https://blog.ubucon.asia/'
                },
                {
                    label: 'Docs',
                    url: 'https://docs.ubucon.asia'
                },
                {
                    label: 'Chat',
                    url: 'https://docs.ubucon.asia/chat/'
                },
                {
                    label: 'Photo album (Community)',
                    url: 'https://photos.app.goo.gl/EMVw8zJQqgRvDqzaA'
                },
                {
                    label: 'Photo album (Official)',
                    url: 'https://photos.app.goo.gl/vFeFiPakaFdwjQJN6'
                }
            ]
        }
    ],
    navigationRight: [
        {
            label: 'Register',
            url: '/register'
        }
    ]
}