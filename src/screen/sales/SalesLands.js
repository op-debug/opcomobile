import { View } from "react-native"
import IconMenu from '../../component/IconMenu';
import Product from "./component/Product";
import Categori from "./component/Category";

const SalesLands = () => {
  return (
    <View style={{ flex: 1 }}>
      <IconMenu />
      <View>
        <View>
          <Categori />
          <Product />
        </View>
      </View>
    </View>
  )
}



export default SalesLands