import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://vanthinhseafoods.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://vanthinhseafoods.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://vanthinhseafoods.com/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://vanthinhseafoods.com/catalog',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://vanthinhseafoods.com/catalog/barramundi',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    
    {
      url: 'https://vanthinhseafoods.com/catalog/grouper',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://vanthinhseafoods.com/catalog/red_snapper',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://vanthinhseafoods.com/catalog/red_spot_emperor',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://vanthinhseafoods.com/catalog/leather_jacket',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://vanthinhseafoods.com/catalog/goldband_snapper',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://vanthinhseafoods.com/catalog/mahi_mahi',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://vanthinhseafoods.com/catalog/parrotfish',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://vanthinhseafoods.com/catalog/sillago_whiting',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://vanthinhseafoods.com/catalog/red_mullet',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },

    

  ]
}