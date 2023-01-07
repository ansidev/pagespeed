import type { Site } from '@/types'

const sites = [
  {
    'title': 'ansidev\'s blog',
    'description': 'Personal blog of ansidev',
    'url': 'https://ansidev.xyz/'
  },
  {
    'title': 'ansidev\'s LeetCode Blog',
    'descrtiption': 'Solutions for LeetCode problems - Written by ansidev',
    'url': 'https://leetcode.ansidev.xyz/'
  },
  {
    'title': 'Awesome Nuxt',
    'description': '🎉 A curated list of awesome things related to NuxtJS',
    'url': 'https://awesome-nuxt.js.org/'
  },
  {
    'title': 'Template Vite + Vue + Tailwind',
    'description': 'Template Vite + Vue + Tailwind',
    'url': 'https://vvt.netlify.app/'
  }
]

export default {
  showcase: async () => {
    const urls: string[] = sites.map((site) => (site as Site).url)

    return {
      name: 'ansidev\'s PageSpeed site',
      description: 'Sites built by ansidev',
      options: { frequency: 1380 },
      urls,
      skip: false,
    }
  },
}
