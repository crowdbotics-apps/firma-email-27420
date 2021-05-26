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
      <View style={styles.View_1_561}>
        <Text style={styles.Text_1_561}>ANALISTA DE NEGOCIOS</Text>
      </View>
      <View style={styles.View_1_562}>
        <Text style={styles.Text_1_562}>José Gutiérrez</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c84/3447/27fcd7979988ecce48a7772fd82a7f94"
        }}
        style={styles.ImageBackground_1_563}
      />
      <View style={styles.View_1_564}>
        <Text style={styles.Text_1_564}>PRODINAMICA.AG</Text>
      </View>
      <View style={styles.View_1_565}>
        <Text style={styles.Text_1_565}>Tel: (+54) 9 3415 069098</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce0f/b572/b83d0c63c9fa01a1761fb87bd79ba5c7"
        }}
        style={styles.ImageBackground_1_566}
      />
      <View style={styles.View_1_567}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2ef/23ce/56e0b0b25285af3b5722cf93c4ff5dd5"
          }}
          style={styles.ImageBackground_1_568}
        />
        <View style={styles.View_1_570}>
          <View style={styles.View_1_571}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84f9/87ec/50c078d06f1c27651be24981ccfb6022"
              }}
              style={styles.ImageBackground_1_572}
            />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/978b/c9d2/b9badb29da2f1279eea8acb0ed37079f"
        }}
        style={styles.ImageBackground_1_588}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/978b/c9d2/b9badb29da2f1279eea8acb0ed37079f"
        }}
        style={styles.ImageBackground_1_589}
      />
      <View style={styles.View_1_590}>
        <Text style={styles.Text_1_590}>PRODINAMICA.AG</Text>
      </View>
      <View style={styles.View_1_591}>
        <Text style={styles.Text_1_591}>Tel: (+54) 9 3415 069098</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ee9/598d/7e79cd43eb777f97feb977bba4f6a3f9"
        }}
        style={styles.ImageBackground_1_592}
      />
      <View style={styles.View_1_593}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f071/179d/800372464dcbd5e4c39d724628fe54e7"
          }}
          style={styles.ImageBackground_1_594}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb7b/49a2/11168496163dbb651cd70b528b8f1cc8"
        }}
        style={styles.ImageBackground_1_597}
      />
      <View style={styles.View_1_598}>
        <Text style={styles.Text_1_598}>jose.gutierrez@prodinamica.ag</Text>
      </View>
      <View style={styles.View_1_599}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b803/7c69/c6769f5cde245166153b5f8c039f73e2"
          }}
          style={styles.ImageBackground_1_600}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb7b/49a2/11168496163dbb651cd70b528b8f1cc8"
        }}
        style={styles.ImageBackground_1_604}
      />
      <View style={styles.View_1_605}>
        <Text style={styles.Text_1_605}>Rosario, Santa Fe</Text>
      </View>
      <View style={styles.View_1_606}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e91/f065/c196a1f88ade878c8b97ca5b174a9b91"
          }}
          style={styles.ImageBackground_1_607}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_1_561: {
    width: wp("52.714285714285715%"),
    top: hp("24.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7142857142857144%")
  },
  Text_1_561: {
    color: "rgba(0, 46, 130, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_562: {
    width: wp("45.285714285714285%"),
    top: hp("9.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7142857142857144%")
  },
  Text_1_562: {
    color: "rgba(0, 26, 90, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_563: {
    width: wp("11.951218741280693%"),
    height: hp("0%"),
    top: hp("37.884765625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.853655133928571%")
  },
  View_1_564: {
    width: wp("30.85365513392857%"),
    top: hp("83.65384928385417%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.41463797433036%")
  },
  Text_1_564: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_565: {
    width: wp("30.85365513392857%"),
    top: hp("71.79488118489583%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.29268973214286%")
  },
  Text_1_565: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_566: {
    width: wp("46.285714285714285%"),
    height: hp("102%"),
    top: hp("-0.33333333333333337%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.57142857142857%")
  },
  View_1_567: {
    width: wp("25.85712541852679%"),
    height: hp("50.90262858072917%"),
    top: hp("7.937825520833333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%")
  },
  ImageBackground_1_568: {
    width: wp("15.001566205705915%"),
    height: hp("42.24352518717448%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.416015625%")
  },
  View_1_570: {
    width: wp("25.85712541852679%"),
    height: hp("5.5449059804280605%"),
    top: hp("45.35772705078124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_571: {
    width: wp("25.85712541852679%"),
    height: hp("5.5449059804280605%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_572: {
    width: wp("25.85712541852679%"),
    height: hp("5.5449059804280605%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_588: {
    width: wp("3.7142857142857144%"),
    height: hp("8.666666666666668%"),
    top: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.85714285714285%")
  },
  ImageBackground_1_589: {
    width: wp("3.7142857142857144%"),
    height: hp("8.666666666666668%"),
    top: hp("85.33333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.85714285714285%")
  },
  View_1_590: {
    width: wp("36.142857142857146%"),
    top: hp("87%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.42857142857143%")
  },
  Text_1_590: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_591: {
    width: wp("36.142857142857146%"),
    top: hp("74.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.28571428571429%")
  },
  Text_1_591: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_592: {
    width: wp("2.571428571428571%"),
    height: hp("6%"),
    top: hp("86.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.42857142857143%")
  },
  View_1_593: {
    width: wp("2.857142857142857%"),
    height: hp("6.666666666666667%"),
    top: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.28571428571429%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_594: {
    width: wp("2.3809525626046315%"),
    height: hp("5.556119918823242%"),
    top: hp("0.5553181966145786%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2374965122767918%")
  },
  ImageBackground_1_597: {
    width: wp("4.428571428571428%"),
    height: hp("10.333333333333334%"),
    top: hp("82.33333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7142857142857144%")
  },
  View_1_598: {
    width: wp("36.142857142857146%"),
    top: hp("85.33333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.428571428571429%")
  },
  Text_1_598: {
    color: "rgba(0, 46, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_599: {
    width: wp("2.857142857142857%"),
    height: hp("6.666666666666667%"),
    top: hp("83.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.428571428571428%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_600: {
    width: wp("2.3809525626046315%"),
    height: hp("5.277777671813965%"),
    top: hp("0.6944376627604072%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2380894252232153%")
  },
  ImageBackground_1_604: {
    width: wp("4.428571428571428%"),
    height: hp("10.333333333333334%"),
    top: hp("68.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7142857142857144%")
  },
  View_1_605: {
    width: wp("34%"),
    top: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.428571428571429%")
  },
  Text_1_605: {
    color: "rgba(0, 46, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_606: {
    width: wp("3.1428571428571432%"),
    height: hp("7.333333333333333%"),
    top: hp("70.33333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.285714285714286%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_607: {
    width: wp("1.8333335603986467%"),
    height: hp("6.111111323038737%"),
    top: hp("0.6111043294270786%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6547502790178577%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
