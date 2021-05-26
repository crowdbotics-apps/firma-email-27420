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
      <View style={styles.View_1_60}>
        <Text style={styles.Text_1_60}>INGENIERA AGRÓNOMA</Text>
      </View>
      <View style={styles.View_1_61}>
        <Text style={styles.Text_1_61}>Lucia Franco</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c84/3447/27fcd7979988ecce48a7772fd82a7f94"
        }}
        style={styles.ImageBackground_1_62}
      />
      <View style={styles.View_1_63}>
        <Text style={styles.Text_1_63}>lucia.franco@prodinamica.ag</Text>
      </View>
      <View style={styles.View_1_64}>
        <Text style={styles.Text_1_64}>Tel: (+54) 9341 3913366</Text>
      </View>
      <View style={styles.View_1_65}>
        <Text style={styles.Text_1_65}>Rosario, Santa Fe</Text>
      </View>
      <View style={styles.View_1_66}>
        <Text style={styles.Text_1_66}>PRODINAMICA.AG</Text>
      </View>
      <View style={styles.View_1_67}>
        <Text style={styles.Text_1_67}>Tel: (+54) 9 3415 069098</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb7b/49a2/11168496163dbb651cd70b528b8f1cc8"
        }}
        style={styles.ImageBackground_1_68}
      />
      <View style={styles.View_1_69}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b803/7c69/c6769f5cde245166153b5f8c039f73e2"
          }}
          style={styles.ImageBackground_1_70}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb7b/49a2/11168496163dbb651cd70b528b8f1cc8"
        }}
        style={styles.ImageBackground_1_74}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb7b/49a2/11168496163dbb651cd70b528b8f1cc8"
        }}
        style={styles.ImageBackground_1_75}
      />
      <View style={styles.View_1_76}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e91/f065/c196a1f88ade878c8b97ca5b174a9b91"
          }}
          style={styles.ImageBackground_1_77}
        />
      </View>
      <View style={styles.View_1_81}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d73a/9d03/5b4429639383587e1948ae2da1af0778"
          }}
          style={styles.ImageBackground_1_82}
        />
      </View>
      <View style={styles.View_1_85}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01d1/8edb/df05788da9dafce1c880922125c607d9"
          }}
          style={styles.ImageBackground_1_86}
        />
        <View style={styles.View_1_88}>
          <View style={styles.View_1_89}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/419e/bcf4/4f325054b8cae3f2ebd5f46686f70882"
              }}
              style={styles.ImageBackground_1_90}
            />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/528b/7ac8/126695c0ca6837c50aaeef8444fdec2e"
        }}
        style={styles.ImageBackground_1_106}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/528b/7ac8/126695c0ca6837c50aaeef8444fdec2e"
        }}
        style={styles.ImageBackground_1_107}
      />
      <View style={styles.View_1_108}>
        <Text style={styles.Text_1_108}>PRODINAMICA.AG</Text>
      </View>
      <View style={styles.View_1_109}>
        <Text style={styles.Text_1_109}>Tel: (+54) 9 3415 069098</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ee9/598d/7e79cd43eb777f97feb977bba4f6a3f9"
        }}
        style={styles.ImageBackground_1_110}
      />
      <View style={styles.View_1_111}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f071/179d/800372464dcbd5e4c39d724628fe54e7"
          }}
          style={styles.ImageBackground_1_112}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b40d/a2fd/f6e885fd895cc38d3efe57b5b329066e"
        }}
        style={styles.ImageBackground_1_115}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_1_60: {
    width: wp("36.70731898716518%"),
    top: hp("23.346028645833332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.160295758928571%")
  },
  Text_1_60: {
    color: "rgba(0, 46, 130, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_61: {
    width: wp("38%"),
    top: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.142857142857142%")
  },
  Text_1_61: {
    color: "rgba(0, 26, 90, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_62: {
    width: wp("11.951218741280693%"),
    height: hp("0%"),
    top: hp("34.884765625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2822265625%")
  },
  View_1_63: {
    width: wp("30.853657313755576%"),
    top: hp("85.17936197916667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.038330078125%")
  },
  Text_1_63: {
    color: "rgba(0, 46, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_64: {
    width: wp("22.195120675223215%"),
    top: hp("71.07682291666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.160295758928571%")
  },
  Text_1_64: {
    color: "rgba(0, 46, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_65: {
    width: wp("23.536586216517858%"),
    top: hp("55.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.038330078125%")
  },
  Text_1_65: {
    color: "rgba(0, 46, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_66: {
    width: wp("30.85365513392857%"),
    top: hp("80.9873046875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.55747767857143%")
  },
  Text_1_66: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_67: {
    width: wp("30.85365513392857%"),
    top: hp("69.12825520833333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.435546875%")
  },
  Text_1_67: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_68: {
    width: wp("4.428571428571428%"),
    height: hp("10.333333333333334%"),
    top: hp("82.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.428571428571429%")
  },
  View_1_69: {
    width: wp("2.857142857142857%"),
    height: hp("6.666666666666667%"),
    top: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.142857142857142%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_70: {
    width: wp("2.3809525626046315%"),
    height: hp("5.277777671813965%"),
    top: hp("0.6944427490234375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.23809814453125%")
  },
  ImageBackground_1_74: {
    width: wp("4.428571428571428%"),
    height: hp("10.333333333333334%"),
    top: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.428571428571429%")
  },
  ImageBackground_1_75: {
    width: wp("4.428571428571428%"),
    height: hp("10.333333333333334%"),
    top: hp("53.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.428571428571429%")
  },
  View_1_76: {
    width: wp("3.1428571428571432%"),
    height: hp("7.333333333333333%"),
    top: hp("55.00000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_77: {
    width: wp("1.8333335603986467%"),
    height: hp("6.111111323038737%"),
    top: hp("0.611114501953125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6547502790178577%")
  },
  View_1_81: {
    width: wp("2.857142857142857%"),
    height: hp("6.666666666666667%"),
    top: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.142857142857142%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_82: {
    width: wp("2.3809525626046315%"),
    height: hp("5.556119918823242%"),
    top: hp("0.5553080240885322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.23749651227678648%")
  },
  View_1_85: {
    width: wp("25.85712541852679%"),
    height: hp("50.90262858072917%"),
    top: hp("7.937825520833333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.42857142857143%")
  },
  ImageBackground_1_86: {
    width: wp("15.001566205705915%"),
    height: hp("42.24352518717448%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.416015625%")
  },
  View_1_88: {
    width: wp("25.85712541852679%"),
    height: hp("5.5449059804280605%"),
    top: hp("45.35772705078124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_89: {
    width: wp("25.85712541852679%"),
    height: hp("5.5449059804280605%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_90: {
    width: wp("25.85712541852679%"),
    height: hp("5.5449059804280605%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_106: {
    width: wp("3.7142857142857144%"),
    height: hp("8.666666666666668%"),
    top: hp("70.33333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  ImageBackground_1_107: {
    width: wp("3.7142857142857144%"),
    height: hp("8.666666666666668%"),
    top: hp("82.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  View_1_108: {
    width: wp("36.142857142857146%"),
    top: hp("84.33333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.57142857142857%")
  },
  Text_1_108: {
    color: "rgba(0, 26, 90, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_109: {
    width: wp("36.142857142857146%"),
    top: hp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.42857142857143%")
  },
  Text_1_109: {
    color: "rgba(0, 26, 90, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_110: {
    width: wp("2.571428571428571%"),
    height: hp("6%"),
    top: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.57142857142857%")
  },
  View_1_111: {
    width: wp("2.857142857142857%"),
    height: hp("6.666666666666667%"),
    top: hp("71.33333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.42857142857143%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_112: {
    width: wp("2.3809525626046315%"),
    height: hp("5.556119918823242%"),
    top: hp("0.5553080240885322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2374965122767918%")
  },
  ImageBackground_1_115: {
    width: wp("0.0000015486322289299485%"),
    height: hp("82.66666666666667%"),
    top: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.57142857142857%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
