import React from "react"
import { Link } from "gatsby"
import useWork from "../static_queries/useWork"
import workStyles from "../styles/components/work.module.scss"
import Img from "gatsby-image"
import format from "date-fns/format"

const transparentImg = () => (
  <img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" />
)

export default function Work() {
  const work = useWork()
  console.log(work)
  return (
    <section>
      <ul className={workStyles.list}>
        {work.map(({ node: { frontmatter: work } }) => (
          <li>
            <a href={work.url}>
              {work.image ? (
                <img src={work.image.childImageSharp.fluid.src} />
              ) : (
                transparentImg()
              )}
              <div>
                <strong>{work.title}</strong>
                <br />
                <em>{work.publication}</em>,{" "}
                <span>{format(new Date(work.date), "MMMM yyyy")}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
