import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <View style={styles.View_1_282}>
        <Text style={styles.Text_1_282}>DESARROLLO Y ANÁLISIS AGRONÓMICO</Text>
      </View>
      <View style={styles.View_1_283}>
        <Text style={styles.Text_1_283}>Antonella Pighín</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c84/3447/27fcd7979988ecce48a7772fd82a7f94"
        }}
        style={styles.ImageBackground_1_284}
      />
      <View style={styles.View_1_285}>
        <Text style={styles.Text_1_285}>antonella.pighin@prodinamica.ag</Text>
      </View>
      <View style={styles.View_1_286}>
        <Text style={styles.Text_1_286}>Rosario, Santa Fe</Text>
      </View>
      <View style={styles.View_1_287}>
        <Text style={styles.Text_1_287}>PRODINAMICA.AG</Text>
      </View>
      <View style={styles.View_1_288}>
        <Text style={styles.Text_1_288}>Tel: (+54) 9 3415 069098</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb7b/49a2/11168496163dbb651cd70b528b8f1cc8"
        }}
        style={styles.ImageBackground_1_289}
      />
      <View style={styles.View_1_290}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b803/7c69/c6769f5cde245166153b5f8c039f73e2"
          }}
          style={styles.ImageBackground_1_291}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb7b/49a2/11168496163dbb651cd70b528b8f1cc8"
        }}
        style={styles.ImageBackground_1_295}
      />
      <View style={styles.View_1_296}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e91/f065/c196a1f88ade878c8b97ca5b174a9b91"
          }}
          style={styles.ImageBackground_1_297}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce0f/b572/b83d0c63c9fa01a1761fb87bd79ba5c7"
        }}
        style={styles.ImageBackground_1_301}
      />
      <View style={styles.View_1_302}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2ef/23ce/56e0b0b25285af3b5722cf93c4ff5dd5"
          }}
          style={styles.ImageBackground_1_303}
        />
        <View style={styles.View_1_305}>
          <View style={styles.View_1_306}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84f9/87ec/50c078d06f1c27651be24981ccfb6022"
              }}
              style={styles.ImageBackground_1_307}
            />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/978b/c9d2/b9badb29da2f1279eea8acb0ed37079f"
        }}
        style={styles.ImageBackground_1_323}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/978b/c9d2/b9badb29da2f1279eea8acb0ed37079f"
        }}
        style={styles.ImageBackground_1_324}
      />
      <View style={styles.View_1_325}>
        <Text style={styles.Text_1_325}>PRODINAMICA.AG</Text>
      </View>
      <View style={styles.View_1_326}>
        <Text style={styles.Text_1_326}>Tel: (+54) 9 3415 069098</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ee9/598d/7e79cd43eb777f97feb977bba4f6a3f9"
        }}
        style={styles.ImageBackground_1_327}
      />
      <View style={styles.View_1_328}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f071/179d/800372464dcbd5e4c39d724628fe54e7"
          }}
          style={styles.ImageBackground_1_329}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_1_282: {
    width: wp("36.70731898716518%"),
    top: hp("24.679361979166668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.160295758928571%")
  },
  Text_1_282: {
    color: "rgba(0, 46, 130, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_283: {
    width: wp("45.285714285714285%"),
    top: hp("9.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.142857142857142%")
  },
  Text_1_283: {
    color: "rgba(0, 26, 90, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_284: {
    width: wp("11.951218741280693%"),
    height: hp("0%"),
    top: hp("43.884765625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2822265625%")
  },
  View_1_285: {
    width: wp("37.714285714285715%"),
    top: hp("85.33333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  Text_1_285: {
    color: "rgba(0, 46, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_286: {
    width: wp("31.857142857142858%"),
    top: hp("70.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  Text_1_286: {
    color: "rgba(0, 46, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_287: {
    width: wp("30.85365513392857%"),
    top: hp("83.65384928385417%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.41463797433036%")
  },
  Text_1_287: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_288: {
    width: wp("30.85365513392857%"),
    top: hp("71.79487101236978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.29268973214286%")
  },
  Text_1_288: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_289: {
    width: wp("4.428571428571428%"),
    height: hp("10.333333333333334%"),
    top: hp("82.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.428571428571429%")
  },
  View_1_290: {
    width: wp("2.857142857142857%"),
    height: hp("6.666666666666667%"),
    top: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.142857142857142%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_291: {
    width: wp("2.3809525626046315%"),
    height: hp("5.277777671813965%"),
    top: hp("0.6944427490234375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2380894252232153%")
  },
  ImageBackground_1_295: {
    width: wp("4.428571428571428%"),
    height: hp("10.333333333333334%"),
    top: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.428571428571429%")
  },
  View_1_296: {
    width: wp("3.1428571428571432%"),
    height: hp("7.333333333333333%"),
    top: hp("69.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_297: {
    width: wp("1.8333335603986467%"),
    height: hp("6.111111323038737%"),
    top: hp("0.611114501953125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6547502790178577%")
  },
  ImageBackground_1_301: {
    width: wp("46.285714285714285%"),
    height: hp("102%"),
    top: hp("-0.33333333333333337%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.57142857142857%")
  },
  View_1_302: {
    width: wp("25.85712541852679%"),
    height: hp("50.90262858072917%"),
    top: hp("7.937825520833333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%")
  },
  ImageBackground_1_303: {
    width: wp("15.001566205705915%"),
    height: hp("42.24352518717448%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.416015625%")
  },
  View_1_305: {
    width: wp("25.85712541852679%"),
    height: hp("5.5449059804280605%"),
    top: hp("45.35772705078124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_306: {
    width: wp("25.85712541852679%"),
    height: hp("5.5449059804280605%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_307: {
    width: wp("25.85712541852679%"),
    height: hp("5.5449059804280605%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_323: {
    width: wp("3.7142857142857144%"),
    height: hp("8.666666666666668%"),
    top: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.85714285714285%")
  },
  ImageBackground_1_324: {
    width: wp("3.7142857142857144%"),
    height: hp("8.666666666666668%"),
    top: hp("85.33333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.85714285714285%")
  },
  View_1_325: {
    width: wp("36.142857142857146%"),
    top: hp("87%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.42857142857143%")
  },
  Text_1_325: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_326: {
    width: wp("36.142857142857146%"),
    top: hp("74.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.28571428571429%")
  },
  Text_1_326: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_327: {
    width: wp("2.571428571428571%"),
    height: hp("6%"),
    top: hp("86.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.42857142857143%")
  },
  View_1_328: {
    width: wp("2.857142857142857%"),
    height: hp("6.666666666666667%"),
    top: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.28571428571429%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_329: {
    width: wp("2.3809525626046315%"),
    height: hp("5.556119918823242%"),
    top: hp("0.5553080240885464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2374965122767918%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
