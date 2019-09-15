export default (parms /* { app, ssrContext } */) => {
  console.log(parms)
  // parms.ssrContext.props = 'test'
  // ssrContext has: { url, req, res }
  // console.log(app, ssrContext)
  // ssrContext.props = 'test'
  // You can add props to the ssrContext then use them in the src/index.template.html.
  // Example - let's say we ssrContext.someProp = 'some value', then in index template we can reference it:
  // {{ someProp }}
}
