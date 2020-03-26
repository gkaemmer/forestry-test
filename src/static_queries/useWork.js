import { graphql, useStaticQuery } from "gatsby"

export default function useWork() {
  const data = useStaticQuery(graphql`
    query getWork {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
        edges {
          node {
            id
            frontmatter {
              title
              image {
                id
              }
              url
              publication
              date
            }
          }
        }
      }
    }
  `)
  return data.allMarkdownRemark.edges
}
