// const requireAll = requireContext=> requireContext.keys().map(requireContext)
// const req = require.context('./svg',false,/\.svg$/)
// requireAll(req)
// console.log(req)
// requireAll(req).forEach(({default:item}) => {
//     debugger;
// 	console.log(item)

// });


// export default req
const requireAll = requireContext => requireContext.keys().map(requireContext);
const svgs = require.context("./svg", false, /\.svg$/);
requireAll(svgs);
// export default svgs