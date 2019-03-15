import React from "react"
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl"

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoibmV2bzAiLCJhIjoiY2p0YWZsYnhyMGFoZzN5cnk0c2Z0djEzYiJ9.HazxMd_S_IaeDqNUmyBGAQ",
})

export default Map
// export default class Map extends Component {
//   render() {
//     return (
//       <div>
//         {/* <Map
//           style="mapbox://styles/mapbox/streets-v9"
//           containerStyle={{
//             height: "100vh",
//             width: "100vw",
//           }}
//         >
//           <Layer
//             type="symbol"
//             id="marker"
//             layout={{ "icon-image": "marker-15" }}
//           >
//             <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
//           </Layer>
//         </Map> */}
//         Hello from Map
//       </div>
//     )
//   }
// }
