import React from "react"
import { Link } from "gatsby"
import useWork from "../static_queries/useWork"
import workStyles from "../styles/components/work.module.scss"
import Img from "gatsby-image"
import format from "date-fns/format"
import path from "path"
import groupBy from "lodash/groupBy"

const transparentImg = () => (
  <img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" />
)

export default function Work() {
  const work = useWork()
  console.log(work)
  const workByCategory = groupBy(work, ({ node }) =>
    path.basename(path.dirname(node.fileAbsolutePath))
  )
  const categories = Object.keys(workByCategory).sort()
  return (
    <section className={workStyles.work}>
      {categories.map(category => (
        <div key={category}>
          <h3>{category.replace(/^[0-9]+ */, "")}</h3>
          <ul className={workStyles.list} key={category}>
            {workByCategory[category].map(({ node: { frontmatter: work } }) => (
              <li key={work.title}>
                <a href={work.url}>
                  {work.image ? (
                    <img src={work.image.childImageSharp.fluid.src} />
                  ) : (
                    transparentImg()
                  )}
                  <div>
                    <strong>{work.title}</strong>
                    <br />
                    {work.publication && (
                      <span>
                        <em>{work.publication}</em>,{" "}
                      </span>
                    )}
                    <span>{format(new Date(work.date), "MMMM yyyy")}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
