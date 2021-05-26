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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c604/630d/2eeb0913472f7581910551ac7d7a3df6"
        }}
        style={styles.ImageBackground_27_1}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88f7/b0f5/8012fe2b65a69788de92eb0315c7b897"
        }}
        style={styles.ImageBackground_27_2}
      />
      <View style={styles.View_27_198}>
        <Text style={styles.Text_27_198}>INGENIERA AGRÓNOMA</Text>
      </View>
      <View style={styles.View_27_199}>
        <Text style={styles.Text_27_199}>Lucia Franco</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a6f/cf8d/64ac3492c5e77f490c271e9726d2d8eb"
        }}
        style={styles.ImageBackground_27_200}
      />
      <View style={styles.View_27_201}>
        <Text style={styles.Text_27_201}>lucia.franco@prodinamica.ag</Text>
      </View>
      <View style={styles.View_27_202}>
        <Text style={styles.Text_27_202}>Tel: (+54) 9341 3913366</Text>
      </View>
      <View style={styles.View_27_203}>
        <Text style={styles.Text_27_203}>Rosario, Santa Fe</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/307e/6df1/b4197fa614e8626a7e5c4df30f983f5f"
        }}
        style={styles.ImageBackground_27_204}
      />
      <View style={styles.View_27_205}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b803/7c69/c6769f5cde245166153b5f8c039f73e2"
          }}
          style={styles.ImageBackground_27_206}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/307e/6df1/b4197fa614e8626a7e5c4df30f983f5f"
        }}
        style={styles.ImageBackground_27_210}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/307e/6df1/b4197fa614e8626a7e5c4df30f983f5f"
        }}
        style={styles.ImageBackground_27_211}
      />
      <View style={styles.View_27_212}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e91/f065/c196a1f88ade878c8b97ca5b174a9b91"
          }}
          style={styles.ImageBackground_27_213}
        />
      </View>
      <View style={styles.View_27_217}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d73a/9d03/5b4429639383587e1948ae2da1af0778"
          }}
          style={styles.ImageBackground_27_218}
        />
      </View>
      <View style={styles.View_27_221}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d6f/b487/733ab9f78ddcd7a0689e2fa8c0347402"
          }}
          style={styles.ImageBackground_27_222}
        />
        <View style={styles.View_27_224}>
          <View style={styles.View_27_225}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d09/3af5/0058e6b98be21c9287edeb199ca237ef"
              }}
              style={styles.ImageBackground_27_226}
            />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/978b/c9d2/b9badb29da2f1279eea8acb0ed37079f"
        }}
        style={styles.ImageBackground_27_242}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/978b/c9d2/b9badb29da2f1279eea8acb0ed37079f"
        }}
        style={styles.ImageBackground_27_243}
      />
      <View style={styles.View_27_244}>
        <Text style={styles.Text_27_244}>PRODINAMICA.AG</Text>
      </View>
      <View style={styles.View_27_245}>
        <Text style={styles.Text_27_245}>Tel: (+54) 9 3415 069098</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ee9/598d/7e79cd43eb777f97feb977bba4f6a3f9"
        }}
        style={styles.ImageBackground_27_246}
      />
      <View style={styles.View_27_247}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f071/179d/800372464dcbd5e4c39d724628fe54e7"
          }}
          style={styles.ImageBackground_27_248}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  ImageBackground_27_1: {
    width: wp("48.285714285714285%"),
    minWidth: wp("48.285714285714285%"),
    height: hp("90.33333333333333%"),
    minHeight: hp("90.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.857142857142854%"),
    top: hp("9.666666666666666%")
  },
  ImageBackground_27_2: {
    width: wp("47.714285714285715%"),
    minWidth: wp("47.714285714285715%"),
    height: hp("89%"),
    minHeight: hp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.42857142857142%"),
    top: hp("10.666666666666668%")
  },
  View_27_198: {
    width: wp("36.70731898716518%"),
    top: hp("23.0126953125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.160295758928571%")
  },
  Text_27_198: {
    color: "rgba(0, 46, 130, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_27_199: {
    width: wp("38%"),
    top: hp("8.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.142857142857142%")
  },
  Text_27_199: {
    color: "rgba(0, 46, 130, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_27_200: {
    width: wp("11.951218741280693%"),
    height: hp("0%"),
    top: hp("33.551432291666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.139369419642857%")
  },
  View_27_201: {
    width: wp("30.853657313755576%"),
    top: hp("77.84602864583333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.038330078125%")
  },
  Text_27_201: {
    color: "rgba(0, 46, 130, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_27_202: {
    width: wp("22.195120675223215%"),
    top: hp("63.743489583333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.160295758928571%")
  },
  Text_27_202: {
    color: "rgba(0, 46, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_27_203: {
    width: wp("23.536586216517858%"),
    top: hp("49.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.038330078125%")
  },
  Text_27_203: {
    color: "rgba(0, 46, 130, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_27_204: {
    width: wp("4.142857142857142%"),
    height: hp("9.666666666666666%"),
    top: hp("75.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.571428571428571%")
  },
  View_27_205: {
    width: wp("2.857142857142857%"),
    height: hp("6.666666666666667%"),
    top: hp("76.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.142857142857142%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_27_206: {
    width: wp("2.3809525626046315%"),
    height: hp("5.277777671813965%"),
    top: hp("0.6944173177083286%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.23809814453125%")
  },
  ImageBackground_27_210: {
    width: wp("4.142857142857142%"),
    height: hp("9.666666666666666%"),
    top: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.571428571428571%")
  },
  ImageBackground_27_211: {
    width: wp("4.142857142857142%"),
    height: hp("9.666666666666666%"),
    top: hp("47.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.571428571428571%")
  },
  View_27_212: {
    width: wp("3.1428571428571432%"),
    height: hp("7.333333333333333%"),
    top: hp("48.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_27_213: {
    width: wp("1.8333335603986467%"),
    height: hp("6.111111323038737%"),
    top: hp("0.611083984375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6547502790178577%")
  },
  View_27_217: {
    width: wp("2.857142857142857%"),
    height: hp("6.666666666666667%"),
    top: hp("62.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.142857142857142%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_27_218: {
    width: wp("2.3809525626046315%"),
    height: hp("5.556119918823242%"),
    top: hp("0.5553385416666572%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.23749651227678648%")
  },
  View_27_221: {
    width: wp("25.640003749302455%"),
    height: hp("50.475234985351555%"),
    top: hp("14.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.42857142857143%")
  },
  ImageBackground_27_222: {
    width: wp("14.875600542340962%"),
    height: hp("41.888814290364586%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.370535714285708%")
  },
  View_27_224: {
    width: wp("25.640003749302455%"),
    height: hp("5.49833869934082%"),
    top: hp("44.976888020833336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_27_225: {
    width: wp("25.640003749302455%"),
    height: hp("5.49833869934082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_27_226: {
    width: wp("25.640003749302455%"),
    height: hp("5.49833869934082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_27_242: {
    width: wp("3.7142857142857144%"),
    height: hp("8.666666666666668%"),
    top: hp("74.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.71428571428572%")
  },
  ImageBackground_27_243: {
    width: wp("3.7142857142857144%"),
    height: hp("8.666666666666668%"),
    top: hp("85.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.71428571428572%")
  },
  View_27_244: {
    width: wp("17.285714285714285%"),
    top: hp("87.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.28571428571429%")
  },
  Text_27_244: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_27_245: {
    width: wp("20.57142857142857%"),
    top: hp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.14285714285714%")
  },
  Text_27_245: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_27_246: {
    width: wp("2.571428571428571%"),
    height: hp("6%"),
    top: hp("87%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.28571428571428%")
  },
  View_27_247: {
    width: wp("2.857142857142857%"),
    height: hp("6.666666666666667%"),
    top: hp("75.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.14285714285714%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_27_248: {
    width: wp("2.3809525626046315%"),
    height: hp("5.556119918823242%"),
    top: hp("0.5553385416666714%"),
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
