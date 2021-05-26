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
      <View style={styles.View_1_390}>
        <Text style={styles.Text_1_390}>ANALISTA DEL SECTOR PÚBLICO</Text>
      </View>
      <View style={styles.View_1_391}>
        <Text style={styles.Text_1_391}>Jesica Peralta</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c84/3447/27fcd7979988ecce48a7772fd82a7f94"
        }}
        style={styles.ImageBackground_1_392}
      />
      <View style={styles.View_1_393}>
        <Text style={styles.Text_1_393}>PRODINAMICA.AG</Text>
      </View>
      <View style={styles.View_1_394}>
        <Text style={styles.Text_1_394}>Tel: (+54) 9 3415 069098</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce0f/b572/b83d0c63c9fa01a1761fb87bd79ba5c7"
        }}
        style={styles.ImageBackground_1_395}
      />
      <View style={styles.View_1_396}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2ef/23ce/56e0b0b25285af3b5722cf93c4ff5dd5"
          }}
          style={styles.ImageBackground_1_397}
        />
        <View style={styles.View_1_399}>
          <View style={styles.View_1_400}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84f9/87ec/50c078d06f1c27651be24981ccfb6022"
              }}
              style={styles.ImageBackground_1_401}
            />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/978b/c9d2/b9badb29da2f1279eea8acb0ed37079f"
        }}
        style={styles.ImageBackground_1_417}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/978b/c9d2/b9badb29da2f1279eea8acb0ed37079f"
        }}
        style={styles.ImageBackground_1_418}
      />
      <View style={styles.View_1_419}>
        <Text style={styles.Text_1_419}>PRODINAMICA.AG</Text>
      </View>
      <View style={styles.View_1_420}>
        <Text style={styles.Text_1_420}>Tel: (+54) 9 3415 069098</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ee9/598d/7e79cd43eb777f97feb977bba4f6a3f9"
        }}
        style={styles.ImageBackground_1_421}
      />
      <View style={styles.View_1_422}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f071/179d/800372464dcbd5e4c39d724628fe54e7"
          }}
          style={styles.ImageBackground_1_423}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb7b/49a2/11168496163dbb651cd70b528b8f1cc8"
        }}
        style={styles.ImageBackground_1_426}
      />
      <View style={styles.View_1_427}>
        <Text style={styles.Text_1_427}>administracion@prodinamica.ag</Text>
      </View>
      <View style={styles.View_1_428}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b803/7c69/c6769f5cde245166153b5f8c039f73e2"
          }}
          style={styles.ImageBackground_1_429}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb7b/49a2/11168496163dbb651cd70b528b8f1cc8"
        }}
        style={styles.ImageBackground_1_433}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb7b/49a2/11168496163dbb651cd70b528b8f1cc8"
        }}
        style={styles.ImageBackground_1_434}
      />
      <View style={styles.View_1_435}>
        <Text style={styles.Text_1_435}>Tel: (+54) 9 3415 017901</Text>
      </View>
      <View style={styles.View_1_436}>
        <Text style={styles.Text_1_436}>Rosario, Santa Fe</Text>
      </View>
      <View style={styles.View_1_437}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e91/f065/c196a1f88ade878c8b97ca5b174a9b91"
          }}
          style={styles.ImageBackground_1_438}
        />
      </View>
      <View style={styles.View_1_442}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d73a/9d03/5b4429639383587e1948ae2da1af0778"
          }}
          style={styles.ImageBackground_1_443}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_1_390: {
    width: wp("45.285714285714285%"),
    top: hp("24.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8571428571428568%")
  },
  Text_1_390: {
    color: "rgba(0, 46, 130, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_391: {
    width: wp("45.285714285714285%"),
    top: hp("9.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8571428571428568%")
  },
  Text_1_391: {
    color: "rgba(0, 26, 90, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_392: {
    width: wp("11.951218741280693%"),
    height: hp("0%"),
    top: hp("37.884765625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9965122767857144%")
  },
  View_1_393: {
    width: wp("30.85365513392857%"),
    top: hp("83.65384419759114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.41463797433036%")
  },
  Text_1_393: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_394: {
    width: wp("30.85365513392857%"),
    top: hp("71.79487101236978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.29268973214286%")
  },
  Text_1_394: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_395: {
    width: wp("46.285714285714285%"),
    height: hp("102%"),
    top: hp("-0.33333333333333337%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.57142857142857%")
  },
  View_1_396: {
    width: wp("25.85712541852679%"),
    height: hp("50.90262858072917%"),
    top: hp("7.937825520833333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%")
  },
  ImageBackground_1_397: {
    width: wp("15.001566205705915%"),
    height: hp("42.24352518717448%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.416015625%")
  },
  View_1_399: {
    width: wp("25.85712541852679%"),
    height: hp("5.5449059804280605%"),
    top: hp("45.35772196451822%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_400: {
    width: wp("25.85712541852679%"),
    height: hp("5.5449059804280605%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_401: {
    width: wp("25.85712541852679%"),
    height: hp("5.5449059804280605%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_417: {
    width: wp("3.7142857142857144%"),
    height: hp("8.666666666666668%"),
    top: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.85714285714285%")
  },
  ImageBackground_1_418: {
    width: wp("3.7142857142857144%"),
    height: hp("8.666666666666668%"),
    top: hp("85.33333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.85714285714285%")
  },
  View_1_419: {
    width: wp("36.142857142857146%"),
    top: hp("87%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.42857142857143%")
  },
  Text_1_419: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_420: {
    width: wp("36.142857142857146%"),
    top: hp("74.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.28571428571429%")
  },
  Text_1_420: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_421: {
    width: wp("2.571428571428571%"),
    height: hp("6%"),
    top: hp("86.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.42857142857143%")
  },
  View_1_422: {
    width: wp("2.857142857142857%"),
    height: hp("6.666666666666667%"),
    top: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.28571428571429%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_423: {
    width: wp("2.3809525626046315%"),
    height: hp("5.556119918823242%"),
    top: hp("0.5553080240885464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2374965122767918%")
  },
  ImageBackground_1_426: {
    width: wp("4.428571428571428%"),
    height: hp("10.333333333333334%"),
    top: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.571428571428571%")
  },
  View_1_427: {
    width: wp("36.142857142857146%"),
    top: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.285714285714286%")
  },
  Text_1_427: {
    color: "rgba(0, 46, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_428: {
    width: wp("2.857142857142857%"),
    height: hp("6.666666666666667%"),
    top: hp("83.33333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.285714285714286%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_429: {
    width: wp("2.3809525626046315%"),
    height: hp("5.277777671813965%"),
    top: hp("0.6944452921549384%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2380894252232144%")
  },
  ImageBackground_1_433: {
    width: wp("4.428571428571428%"),
    height: hp("10.333333333333334%"),
    top: hp("67.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.571428571428571%")
  },
  ImageBackground_1_434: {
    width: wp("4.428571428571428%"),
    height: hp("10.333333333333334%"),
    top: hp("52.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.571428571428571%")
  },
  View_1_435: {
    width: wp("26%"),
    top: hp("70.33333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.428571428571429%")
  },
  Text_1_435: {
    color: "rgba(0, 46, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_436: {
    width: wp("34%"),
    top: hp("55.00000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.285714285714286%")
  },
  Text_1_436: {
    color: "rgba(0, 46, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_437: {
    width: wp("3.1428571428571432%"),
    height: hp("7.333333333333333%"),
    top: hp("54.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.142857142857142%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_438: {
    width: wp("1.8333335603986467%"),
    height: hp("6.111111323038737%"),
    top: hp("0.6111138661702427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6547502790178577%")
  },
  View_1_442: {
    width: wp("2.857142857142857%"),
    height: hp("6.666666666666667%"),
    top: hp("69.33333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.285714285714286%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_443: {
    width: wp("2.3809525626046315%"),
    height: hp("5.556119918823242%"),
    top: hp("0.5553080240885322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2374965122767856%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
