import { sites } from '../src/site.config'
import type { Site } from '../src/types'

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
