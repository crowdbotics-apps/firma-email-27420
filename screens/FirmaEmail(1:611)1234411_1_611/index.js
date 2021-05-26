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
      <View style={styles.View_1_612}>
        <Text style={styles.Text_1_612}>INGENIERA AGRÓNOMA</Text>
      </View>
      <View style={styles.View_1_613}>
        <Text style={styles.Text_1_613}>Josefina Benedetti</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c84/3447/27fcd7979988ecce48a7772fd82a7f94"
        }}
        style={styles.ImageBackground_1_614}
      />
      <View style={styles.View_1_615}>
        <Text style={styles.Text_1_615}>PRODINAMICA.AG</Text>
      </View>
      <View style={styles.View_1_616}>
        <Text style={styles.Text_1_616}>Tel: (+54) 9 3415 069098</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce0f/b572/b83d0c63c9fa01a1761fb87bd79ba5c7"
        }}
        style={styles.ImageBackground_1_617}
      />
      <View style={styles.View_1_618}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2ef/23ce/56e0b0b25285af3b5722cf93c4ff5dd5"
          }}
          style={styles.ImageBackground_1_619}
        />
        <View style={styles.View_1_621}>
          <View style={styles.View_1_622}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84f9/87ec/50c078d06f1c27651be24981ccfb6022"
              }}
              style={styles.ImageBackground_1_623}
            />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/978b/c9d2/b9badb29da2f1279eea8acb0ed37079f"
        }}
        style={styles.ImageBackground_1_639}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/978b/c9d2/b9badb29da2f1279eea8acb0ed37079f"
        }}
        style={styles.ImageBackground_1_640}
      />
      <View style={styles.View_1_641}>
        <Text style={styles.Text_1_641}>PRODINAMICA.AG</Text>
      </View>
      <View style={styles.View_1_642}>
        <Text style={styles.Text_1_642}>Tel: (+54) 9 3415 069098</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ee9/598d/7e79cd43eb777f97feb977bba4f6a3f9"
        }}
        style={styles.ImageBackground_1_643}
      />
      <View style={styles.View_1_644}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f071/179d/800372464dcbd5e4c39d724628fe54e7"
          }}
          style={styles.ImageBackground_1_645}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb7b/49a2/11168496163dbb651cd70b528b8f1cc8"
        }}
        style={styles.ImageBackground_1_648}
      />
      <View style={styles.View_1_649}>
        <Text style={styles.Text_1_649}>josefina.benedetti@prodinamica.ag</Text>
      </View>
      <View style={styles.View_1_650}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b803/7c69/c6769f5cde245166153b5f8c039f73e2"
          }}
          style={styles.ImageBackground_1_651}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb7b/49a2/11168496163dbb651cd70b528b8f1cc8"
        }}
        style={styles.ImageBackground_1_655}
      />
      <View style={styles.View_1_656}>
        <Text style={styles.Text_1_656}>Gualeguay, Entre Ríos</Text>
      </View>
      <View style={styles.View_1_657}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e91/f065/c196a1f88ade878c8b97ca5b174a9b91"
          }}
          style={styles.ImageBackground_1_658}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_1_612: {
    width: wp("52.714285714285715%"),
    top: hp("24.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7142857142857144%")
  },
  Text_1_612: {
    color: "rgba(0, 46, 130, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_613: {
    width: wp("49.857142857142854%"),
    top: hp("9.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7142857142857144%")
  },
  Text_1_613: {
    color: "rgba(0, 26, 90, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_614: {
    width: wp("11.951218741280693%"),
    height: hp("0%"),
    top: hp("37.884765625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.853655133928571%")
  },
  View_1_615: {
    width: wp("30.85365513392857%"),
    top: hp("83.65384928385417%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.41463797433036%")
  },
  Text_1_615: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_616: {
    width: wp("30.85365513392857%"),
    top: hp("71.79488118489583%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.29268973214286%")
  },
  Text_1_616: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_617: {
    width: wp("46.285714285714285%"),
    height: hp("102%"),
    top: hp("-0.33333333333333337%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.57142857142857%")
  },
  View_1_618: {
    width: wp("25.85712541852679%"),
    height: hp("50.90262858072917%"),
    top: hp("7.937825520833333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%")
  },
  ImageBackground_1_619: {
    width: wp("15.001566205705915%"),
    height: hp("42.24352518717448%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.416016169956762%")
  },
  View_1_621: {
    width: wp("25.85712541852679%"),
    height: hp("5.5449059804280605%"),
    top: hp("45.35772705078124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_622: {
    width: wp("25.85712541852679%"),
    height: hp("5.5449059804280605%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_623: {
    width: wp("25.85712541852679%"),
    height: hp("5.5449059804280605%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_639: {
    width: wp("3.7142857142857144%"),
    height: hp("8.666666666666668%"),
    top: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.85714285714285%")
  },
  ImageBackground_1_640: {
    width: wp("3.7142857142857144%"),
    height: hp("8.666666666666668%"),
    top: hp("85.33333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.85714285714285%")
  },
  View_1_641: {
    width: wp("36.142857142857146%"),
    top: hp("87%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.42857142857143%")
  },
  Text_1_641: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_642: {
    width: wp("36.142857142857146%"),
    top: hp("74.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.28571428571429%")
  },
  Text_1_642: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_643: {
    width: wp("2.571428571428571%"),
    height: hp("6%"),
    top: hp("86.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.42857142857143%")
  },
  View_1_644: {
    width: wp("2.857142857142857%"),
    height: hp("6.666666666666667%"),
    top: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.28571428571429%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_645: {
    width: wp("2.3809525626046315%"),
    height: hp("5.556119918823242%"),
    top: hp("0.5553181966145786%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.23749978201729505%")
  },
  ImageBackground_1_648: {
    width: wp("4.428571428571428%"),
    height: hp("10.333333333333334%"),
    top: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7142857142857144%")
  },
  View_1_649: {
    width: wp("36.142857142857146%"),
    top: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.428571428571429%")
  },
  Text_1_649: {
    color: "rgba(0, 46, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_650: {
    width: wp("2.857142857142857%"),
    height: hp("6.666666666666667%"),
    top: hp("83.33333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.428571428571428%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_651: {
    width: wp("2.3809525626046315%"),
    height: hp("5.277777671813965%"),
    top: hp("0.6944376627604072%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2380981445312509%")
  },
  ImageBackground_1_655: {
    width: wp("4.428571428571428%"),
    height: hp("10.333333333333334%"),
    top: hp("67.66666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7142857142857144%")
  },
  View_1_656: {
    width: wp("34%"),
    top: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.428571428571429%")
  },
  Text_1_656: {
    color: "rgba(0, 46, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_657: {
    width: wp("3.1428571428571432%"),
    height: hp("7.333333333333333%"),
    top: hp("69.33333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.285714285714286%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_658: {
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
