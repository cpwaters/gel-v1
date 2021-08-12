const path = require('path')

const { resetWarningCache } = require("prop-types")

exports.createPages = async ({ graphql, actions }) => {

    const { data } = await graphql(`
        query Details {
            allStrapiAgriculturals {
              edges {
                node {
                  id
                }
              }
            }
            allStrapiMachines {
              edges {
                node {
                  id
                }
              }
            }
            allStrapiParts {
              edges {
                node {
                  id
                }
              }
            }
            allStrapiVehicles {
              edges {
                node {
                  id
                }
              }
            }
          }
    `)

    data.allStrapiAgriculturals.edges.forEach(res => {
        actions.createPage({
            path: '/agricultural/' + res.node.id,
            component: path.resolve('./src/templates/details.js'),
            context: { id: res.node.id }
        })
    })

    data.allStrapiMachines.edges.forEach(res => {
        actions.createPage({
            path: '/machines/' + res.node.id,
            component: path.resolve('./src/templates/details.js'),
            context: { id: res.node.id }
        })
    })

    data.allStrapiParts.edges.forEach(res => {
        actions.createPage({
            path: '/parts/' + res.node.id,
            component: path.resolve('./src/templates/details.js'),
            context: { id: res.node.id }
        })
    })

    data.allStrapiVehicles.edges.forEach(res => {
        actions.createPage({
            path: '/vehicles/' + res.node.id,
            component: path.resolve('./src/templates/details.js'),
            context: { id: res.node.id }
        })
    })

}