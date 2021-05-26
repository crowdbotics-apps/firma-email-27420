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
      <View style={styles.View_1_117} />
      <View style={styles.View_1_118} />
      <View style={styles.View_1_119}>
        <Text style={styles.Text_1_119}>INGENIERA AGRÓNOMA</Text>
      </View>
      <View style={styles.View_1_120}>
        <Text style={styles.Text_1_120}>Lucia Franco</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9586/436a/dccf7a9abc830fe3961f16998ce28261"
        }}
        style={styles.ImageBackground_1_121}
      />
      <View style={styles.View_1_122}>
        <Text style={styles.Text_1_122}>lucia.franco@prodinamica.ag</Text>
      </View>
      <View style={styles.View_1_123}>
        <Text style={styles.Text_1_123}>Tel: (+54) 9341 3913366</Text>
      </View>
      <View style={styles.View_1_124}>
        <Text style={styles.Text_1_124}>Rosario, Santa Fe</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69de/1d41/9643c23d904487a99aebe435a6a2487f"
        }}
        style={styles.ImageBackground_1_125}
      />
      <View style={styles.View_1_126}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b83e/033d/3b7cd7c0fc31420ec025dda8d73975ec"
          }}
          style={styles.ImageBackground_1_127}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69de/1d41/9643c23d904487a99aebe435a6a2487f"
        }}
        style={styles.ImageBackground_1_131}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69de/1d41/9643c23d904487a99aebe435a6a2487f"
        }}
        style={styles.ImageBackground_1_132}
      />
      <View style={styles.View_1_133}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fed2/8050/eaa885968cc2465955e7a4c8c6e0d7a6"
          }}
          style={styles.ImageBackground_1_134}
        />
      </View>
      <View style={styles.View_1_138}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bc9/fcf4/ea4f542506db54afe8110f20c637c235"
          }}
          style={styles.ImageBackground_1_139}
        />
      </View>
      <View style={styles.View_1_142}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01d1/8edb/df05788da9dafce1c880922125c607d9"
          }}
          style={styles.ImageBackground_1_143}
        />
        <View style={styles.View_1_145}>
          <View style={styles.View_1_146}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/419e/bcf4/4f325054b8cae3f2ebd5f46686f70882"
              }}
              style={styles.ImageBackground_1_147}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1_163}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/528b/7ac8/126695c0ca6837c50aaeef8444fdec2e"
          }}
          style={styles.ImageBackground_1_164}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/528b/7ac8/126695c0ca6837c50aaeef8444fdec2e"
          }}
          style={styles.ImageBackground_1_165}
        />
        <View style={styles.View_1_166}>
          <Text style={styles.Text_1_166}>PRODINAMICA.AG</Text>
        </View>
        <View style={styles.View_1_167}>
          <Text style={styles.Text_1_167}>Tel: (+54) 9 3415 069098</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ee9/598d/7e79cd43eb777f97feb977bba4f6a3f9"
          }}
          style={styles.ImageBackground_1_168}
        />
        <View style={styles.View_1_169}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f071/179d/800372464dcbd5e4c39d724628fe54e7"
            }}
            style={styles.ImageBackground_1_170}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_1_117: {
    width: wp("41.285714285714285%"),
    height: hp("100%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.71428571428572%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_118: {
    width: wp("58.71428571428572%"),
    height: hp("101.66666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_119: {
    width: wp("36.70731898716518%"),
    top: hp("23.346028645833332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.160295758928571%")
  },
  Text_1_119: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_120: {
    width: wp("38%"),
    top: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.142857142857142%")
  },
  Text_1_120: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_121: {
    width: wp("11.951218741280693%"),
    height: hp("0%"),
    top: hp("34.884765625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2822265625%")
  },
  View_1_122: {
    width: wp("30.853657313755576%"),
    top: hp("85.17936197916667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.038330078125%")
  },
  Text_1_122: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_123: {
    width: wp("22.195120675223215%"),
    top: hp("71.07682291666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.160295758928571%")
  },
  Text_1_123: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_124: {
    width: wp("23.536586216517858%"),
    top: hp("55.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.038330078125%")
  },
  Text_1_124: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_125: {
    width: wp("4.428571428571428%"),
    height: hp("10.333333333333334%"),
    top: hp("82.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.428571428571429%")
  },
  View_1_126: {
    width: wp("2.857142857142857%"),
    height: hp("6.666666666666667%"),
    top: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.142857142857142%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_127: {
    width: wp("2.3809525626046315%"),
    height: hp("5.277777671813965%"),
    top: hp("0.6944427490234375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.23809814453125%")
  },
  ImageBackground_1_131: {
    width: wp("4.428571428571428%"),
    height: hp("10.333333333333334%"),
    top: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.428571428571429%")
  },
  ImageBackground_1_132: {
    width: wp("4.428571428571428%"),
    height: hp("10.333333333333334%"),
    top: hp("53.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.428571428571429%")
  },
  View_1_133: {
    width: wp("3.1428571428571432%"),
    height: hp("7.333333333333333%"),
    top: hp("55.00000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_134: {
    width: wp("1.8333335603986467%"),
    height: hp("6.111111323038737%"),
    top: hp("0.611114501953125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6547502790178577%")
  },
  View_1_138: {
    width: wp("2.857142857142857%"),
    height: hp("6.666666666666667%"),
    top: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.142857142857142%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_139: {
    width: wp("2.3809525626046315%"),
    height: hp("5.556119918823242%"),
    top: hp("0.5553080240885322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.23749651227678648%")
  },
  View_1_142: {
    width: wp("25.85712541852679%"),
    height: hp("50.90262858072917%"),
    top: hp("7.937825520833333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.42857142857143%")
  },
  ImageBackground_1_143: {
    width: wp("15.001566205705915%"),
    height: hp("42.24352518717448%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.416015625%")
  },
  View_1_145: {
    width: wp("25.85712541852679%"),
    height: hp("5.5449059804280605%"),
    top: hp("45.35772196451822%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_146: {
    width: wp("25.85712541852679%"),
    height: hp("5.5449059804280605%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_147: {
    width: wp("25.85712541852679%"),
    height: hp("5.5449059804280605%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_163: {
    width: wp("24.571428571428573%"),
    minWidth: wp("24.571428571428573%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.14285714285714%"),
    top: hp("70.33333333333334%")
  },
  ImageBackground_1_164: {
    width: wp("3.7142857142857144%"),
    height: hp("8.666666666666668%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_165: {
    width: wp("3.7142857142857144%"),
    height: hp("8.666666666666668%"),
    top: hp("12.333333333333329%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_166: {
    width: wp("17.285714285714285%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.571428571428584%")
  },
  Text_1_166: {
    color: "rgba(0, 26, 90, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_167: {
    width: wp("20.142857142857142%"),
    top: hp("1.6666666666666572%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.428571428571431%")
  },
  Text_1_167: {
    color: "rgba(0, 26, 90, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_168: {
    width: wp("2.571428571428571%"),
    height: hp("6%"),
    top: hp("13.666666666666657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5714285714285836%")
  },
  View_1_169: {
    width: wp("2.857142857142857%"),
    height: hp("6.666666666666667%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4285714285714306%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_170: {
    width: wp("2.3809525626046315%"),
    height: hp("5.556119918823242%"),
    top: hp("0.5553080240885322%"),
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
