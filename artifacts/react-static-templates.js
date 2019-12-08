

import React from 'react'
import universal, { setHasBabelPlugin } from '/Users/jeffreychou/Desktop/jchou-web-v7/node_modules/react-universal-component/dist/index.js'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('../src/pages/404.js'), universalOptions)
      t_0.template = '../src/pages/404.js'
      
const t_1 = universal(import('../src/pages/index.js'), universalOptions)
      t_1.template = '../src/pages/index.js'
      
const t_2 = universal(import('../src/templates/post'), universalOptions)
      t_2.template = '../src/templates/post'
      

// Template Map
export default {
  '../src/pages/404.js': t_0,
'../src/pages/index.js': t_1,
'../src/templates/post': t_2
}
// Not Found Template
export const notFoundTemplate = "../src/pages/404.js"

