import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Seeding database...');

    // 1. Clean existing data
    await prisma.event.deleteMany();
    await prisma.course.deleteMany();
    await prisma.department.deleteMany();

    // 2. Create Departments & Courses
    const engineering = await prisma.department.create({
        data: {
            name: 'Faculty of Engineering',
            courses: {
                create: [
                    { name: 'Computer Science & AI', description: 'Advanced studies in AI and software engineering.' },
                    { name: 'Quantum Engineering', description: 'Next-generation hardware systems.' },
                ],
            },
        },
    });

    const business = await prisma.department.create({
        data: {
            name: 'Business School',
            courses: {
                create: [
                    { name: 'Digital Marketing & Strategy', description: 'Mastering the digital landscape.' },
                    { name: 'FinTech Innovation', description: 'The future of finance and blockchain.' },
                ],
            },
        },
    });

    // 3. Create Events
    await prisma.event.createMany({
        data: [
            {
                title: 'Global Innovation Summit 2026',
                description: 'A gathering of the worlds most innovative minds in tech and business.',
                date: new Date('2026-04-15T09:00:00Z'),
                location: 'Main Auditorium',
            },
            {
                title: 'Hackathon: Future City',
                description: '48-hour challenge to build sustainable urban solutions.',
                date: new Date('2026-05-20T10:00:00Z'),
                location: 'Tech Hub, Building B',
            },
            {
                title: 'Career Fair: Silicon Valley Link',
                description: 'Meet recruiters from top tech companies across the globe.',
                date: new Date('2026-06-12T11:00:00Z'),
                location: 'University Plaza',
            },
        ],
    });

    console.log('✅ Seeding complete!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
