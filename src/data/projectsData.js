
import booking from '../assets/png/bokkingapp.png'
import car from '../assets/png/CarRental.png'
import backend from '../assets/png/Backend.png'
import fit from '../assets/png/fit.png'
import pm from '../assets/png/planet.png'



export const projectsData = [
    {
        id: 1,
        projectName: 'Booking app',
        projectDesc: 'This is a fullstack project for booking hotels, homes or bungalovs. You als can advertise your own place.',
        tags: ['NextJS 13', 'Tailwind', 'Prisma', 'MongoDB', 'TypeScript'],
        code: 'https://github.com/Ondrej89/VacatioBooking',
        demo: 'https://vacation-booking.vercel.app/',
        image: booking
    },
    {
        id: 2,
        projectName: 'Shopp Backend',
        projectDesc: 'This project is a backend project for creating and maintaining stores.',
        tags: ['NextJS 13', 'Tailwind', 'PlanetScale mysql', 'Prisma', 'TypeScript'],
        code: 'https://github.com/Ondrej89/E-commerce-backend',
        demo: 'https://e-commerce-backend-ashen.vercel.app/',
        image: backend
    },
    {
        id: 3,
        projectName: 'Rent-a-Car',
        projectDesc: 'This project is a frontend web app for rent-a-car buissnes.',
        tags: ['React', 'SCSS'],
        code: 'https://github.com/Ondrej89/Rent-a-Car',
        demo: 'https://rent-a-car-mu.vercel.app/',
        image: car
    },
    {
        id: 4,
        projectName: 'FitApp',
        projectDesc: 'This project is a frontend page for FitApp webpage.',
        tags: ['React', 'CSS'],
        code: 'https://github.com/said7388/Travel-Agency-client',
        demo:'https://fit-app-seven.vercel.app/',
        image: fit
    },
    {
        id: 5,
        projectName: 'PlanetMarket',
        projectDesc: 'This project is stil in development. Fullstack web shop market. Create your store and sell or just be a buyer',
        tags: ['NextJS 13', 'Tailwind', 'PlanetScale mysql', 'Clerk'],
        code: 'https://github.com/Ondrej89/PlanetMarket',
        image: pm
    }
]

