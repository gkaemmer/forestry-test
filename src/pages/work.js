import React from "react"
import Layout from "../components/Layout"
import Work from "../components/Work"

export default function IndexPage() {
  return (
    <Layout page="home" bgColor="inherit">
      <section>
        <div>
          <Work />
        </div>
      </section>
    </Layout>
  )
}
