import React from "react"
import { Link } from "gatsby"
import useWork from "../static_queries/useWork"
import blogListStyles from "../styles/components/bloglist.module.scss"
import Img from "gatsby-image"

export default function Work() {
  const work = useWork()
  console.log(work)
  return (
    <section>
      <ul className={blogListStyles.list}>
        <div>{JSON.stringify(work)}</div>
      </ul>
    </section>
  )
}
