import { Icons } from '@/components/icons';
import { HomeIcon } from 'lucide-react';
import starkai from '../../public/starkai.png';
import unsplash from '../../public/unsplash.png';
import weather from '../../public/weather.png';

export const DATA = {
  name: 'Dev Bhuptani',
  initials: 'DB',
  url: 'https://devbhuptani.vercel.app/',
  location: 'Gujarat, IN',
  locationLink: 'https://www.google.com/maps/place/Gujarat',
  description:
    'An aspiring programmer who wants to explore the magic of coding and to one day become a top-notch coder.',
  summary:
    'Seeking a team or company where I can grow and contribute. I want opportunities for continuous learning and exciting projects with new technologies. I’m eager to learn and confident that my passion and hard work will benefit any team I join.',
  avatarUrl: '/me.jpg',
  skills: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'TypeScript',
    'jQuery',
    'React',
    'Redux',
    'Vite.js',
    'Next.js',
    'Next Auth',
    'Axios',
    'Tailwind CSS',
    'Antd',
    'Bootstrap',
    'SCSS',
    'GraphQL',
    'Socket',
    'Git',
    'Github',
  ],
  navbar: [{ href: '/', icon: HomeIcon, label: 'Home' }],
  contact: {
    email: 'devbhuptani20@gmail.com',
    tel: '+91 8469797922',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/DevBhuptani',
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/dev-bhuptani-04b7301a2/',
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: 'Send Email',
        url: 'mailto:devbhuptani20@gmail.com',
        icon: Icons.email,
        navbar: true,
      },
      Resume: {
        name: 'Resume',
        url: process.env.NEXT_PUBLIC_RESUME_LINK,
        icon: Icons.googleDrive,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: 'IO Market Software Solutions / edeXa',
      href: 'https://edexa.network/',
      badges: [],
      location: 'On Site',
      title: 'React.js Developer',
      logoUrl: '/edexa.png',
      start: 'Feb 2023',
      end: 'Present',
      description:
        'Designed and developed responsive web applications and user interfaces using React.js, employing Redux for efficient state management. Improved user engagement and seamless browsing experiences by optimizing code for performance, achieving a 15% reduction in page load times. Collaborated with cross-functional teams to solve challenging technical problems and enhance overall site performance.',
    },
    {
      company: 'Infikey Technologies',
      href: 'https://infikeytechnologies.com/',
      badges: [],
      location: 'On Site',
      title: 'React.js Developer',
      logoUrl: '',
      start: 'Apr 2022',
      end: 'May 2022',
      description:
        'Crafted visually appealing interfaces and integrated with backend APIs for efficient data handling. Ensured responsiveness across devices and maintained optimal user experience.',
    },
  ],
  projects: [
    {
      title: 'Stark-AI Art',
      href: 'https://stark-ai-art.vercel.app/',
      active: true,
      description:
        'StarkAI Art is a revolutionary platform on StarkNet that combines the power of artificial intelligence with the world of digital art to create unique, one-of-a-kind NFTs. Our mission is to bridge the gap between technology and creativity, offering artists, collectors, and enthusiasts a new way to experience and interact with art.',
      technologies: ['Next.js', 'GraphQL', 'Typescript', 'Dynamic Labs'],
      links: [
        {
          type: 'Website',
          href: 'https://stark-ai-art.vercel.app/',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: starkai,
      video: '',
    },
    {
      title: 'Real Time Weather Forecast',
      href: 'https://forecast-weather-application.netlify.app/',
      active: true,
      description:
        'The WeatherApp React component is a simple application that fetches current weather information from the OpenWeatherMap API based on user input and displays it using the WeatherCard component.',
      technologies: ['React.js', 'Bootstrap', 'Typescript', 'Axios'],
      links: [
        {
          type: 'Website',
          href: 'https://forecast-weather-application.netlify.app/',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'Source',
          href: 'https://github.com/DevBhuptani/Weather_Forecast_In_React',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: weather,
      video: '',
    },
    {
      title: 'Image Search App 📸',
      href: 'https://unsplash-image-app.netlify.app/',
      active: true,
      description:
        'This is a React application that allows users to search for images using the Unsplash API. Users can enter a search query, and the app will fetch and display corresponding images in a grid layout.',
      technologies: ['React.js', 'Bootstrap', 'Typescript', 'Axios'],
      links: [
        {
          type: 'Website',
          href: 'https://unsplash-image-app.netlify.app/',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'Source',
          href: 'https://github.com/DevBhuptani/Unsplash_Image_App_In_React',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: unsplash,
      video: '',
    },
  ],
} as const;
