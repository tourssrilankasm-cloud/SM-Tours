import { MetadataRoute } from 'next';
import { toursData } from '@/lib/tours-data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.smtourssrilanka.com';

    // Static routes
    const routes = [
        '',
        '/about',
        '/contact',
        '/tours',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic tour routes
    const tourRoutes = toursData.map((tour) => ({
        url: `${baseUrl}/tours/${tour.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9, // High priority for product pages
    }));

    return [...routes, ...tourRoutes];
}
