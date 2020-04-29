import { base, viewports, slugs } from './site'

const all = viewports.map((viewport) => slugs.map((slug) => ({
  slug,
  ...viewport,
}))).reduce((acc, curr) => acc.concat(curr), [])

describe('Page Test', () => {
  all.forEach(({ slug, device, orientation }) => {
    it(`Loads Page "${slug}", on device (${device}/${orientation})`, () => {
      cy.viewport(device, orientation)
      cy.visit(base + slug)
      cy.get('div#___gatsby').should('be.visible')
      const {
        viewportHeight,
      } = cy.state()
      const newSlug = slug === '/' ? '/index' : slug
      const name = `pages${newSlug}/${device}-${orientation}`
      cy.percySnapshot(name, { widths: [viewportHeight] })
    })
  })
})
