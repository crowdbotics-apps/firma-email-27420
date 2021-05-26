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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9711/df36/66a04393710c6c3979a22ec61c0ecd25"
        }}
        style={styles.ImageBackground_18_4}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d72c/c27b/d0f9883a65946c9b7b64f04199a68218"
        }}
        style={styles.ImageBackground_18_58}
      />
      <View style={styles.View_18_5}>
        <Text style={styles.Text_18_5}>INGENIERA AGRÓNOMA</Text>
      </View>
      <View style={styles.View_18_6}>
        <Text style={styles.Text_18_6}>Lucia Franco</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9586/436a/dccf7a9abc830fe3961f16998ce28261"
        }}
        style={styles.ImageBackground_18_7}
      />
      <View style={styles.View_18_8}>
        <Text style={styles.Text_18_8}>lucia.franco@prodinamica.ag</Text>
      </View>
      <View style={styles.View_18_9}>
        <Text style={styles.Text_18_9}>Tel: (+54) 9341 3913366</Text>
      </View>
      <View style={styles.View_18_10}>
        <Text style={styles.Text_18_10}>Rosario, Santa Fe</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1957/1596/043f45c715c7e100cf38fa45e7f1da8d"
        }}
        style={styles.ImageBackground_18_11}
      />
      <View style={styles.View_18_12}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b83e/033d/3b7cd7c0fc31420ec025dda8d73975ec"
          }}
          style={styles.ImageBackground_18_13}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1957/1596/043f45c715c7e100cf38fa45e7f1da8d"
        }}
        style={styles.ImageBackground_18_17}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1957/1596/043f45c715c7e100cf38fa45e7f1da8d"
        }}
        style={styles.ImageBackground_18_18}
      />
      <View style={styles.View_18_19}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fed2/8050/eaa885968cc2465955e7a4c8c6e0d7a6"
          }}
          style={styles.ImageBackground_18_20}
        />
      </View>
      <View style={styles.View_18_24}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bc9/fcf4/ea4f542506db54afe8110f20c637c235"
          }}
          style={styles.ImageBackground_18_25}
        />
      </View>
      <View style={styles.View_18_28}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c258/f49c/975410d7168d2267820bd4ae754a10fb"
          }}
          style={styles.ImageBackground_18_29}
        />
        <View style={styles.View_18_31}>
          <View style={styles.View_18_32}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2dc/c9d8/7982be688add8db718b7a5a75bbc3a57"
              }}
              style={styles.ImageBackground_18_33}
            />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71bd/d699/7c4e53465c652a785ec31c0f47affd0c"
        }}
        style={styles.ImageBackground_18_49}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71bd/d699/7c4e53465c652a785ec31c0f47affd0c"
        }}
        style={styles.ImageBackground_18_50}
      />
      <View style={styles.View_18_51}>
        <Text style={styles.Text_18_51}>PRODINAMICA.AG</Text>
      </View>
      <View style={styles.View_18_52}>
        <Text style={styles.Text_18_52}>Tel: (+54) 9 3415 069098</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9dec/fa34/012f44e68f1d092319fb907fc0e0621e"
        }}
        style={styles.ImageBackground_18_53}
      />
      <View style={styles.View_18_54}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d73a/9d03/5b4429639383587e1948ae2da1af0778"
          }}
          style={styles.ImageBackground_18_55}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6df/347b/5659234114e2a883a428ec9c1d97940c"
        }}
        style={styles.ImageBackground_18_121}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c06d/dc5f/505d42c040b14dd5f3ea420b953b497e"
        }}
        style={styles.ImageBackground_18_124}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  ImageBackground_18_4: {
    width: wp("102.42857142857143%"),
    height: hp("101.66666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_18_58: {
    width: wp("100.57142857142858%"),
    minWidth: wp("100.57142857142858%"),
    height: hp("89.66666666666666%"),
    minHeight: hp("89.66666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.4285714285714286%"),
    top: hp("12.666666666666668%")
  },
  View_18_5: {
    width: wp("36.70731898716518%"),
    top: hp("22.346028645833332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.160295758928571%")
  },
  Text_18_5: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_6: {
    width: wp("38%"),
    top: hp("8.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.142857142857142%")
  },
  Text_18_6: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_18_7: {
    width: wp("11.951218741280693%"),
    height: hp("0%"),
    top: hp("32.551432291666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.139369419642857%")
  },
  View_18_8: {
    width: wp("30.853657313755576%"),
    top: hp("70.17936197916667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.038330078125%")
  },
  Text_18_8: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_9: {
    width: wp("22.195120675223215%"),
    top: hp("56.74348958333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.160295758928571%")
  },
  Text_18_9: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_10: {
    width: wp("23.536586216517858%"),
    top: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.038330078125%")
  },
  Text_18_10: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_18_11: {
    width: wp("4.142857142857142%"),
    height: hp("9.666666666666666%"),
    top: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.571428571428571%")
  },
  View_18_12: {
    width: wp("2.857142857142857%"),
    height: hp("6.666666666666667%"),
    top: hp("69.33333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.142857142857142%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_18_13: {
    width: wp("2.3809525626046315%"),
    height: hp("5.277777671813965%"),
    top: hp("0.6944376627604072%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.23809814453125%")
  },
  ImageBackground_18_17: {
    width: wp("4.142857142857142%"),
    height: hp("9.666666666666666%"),
    top: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.571428571428571%")
  },
  ImageBackground_18_18: {
    width: wp("4.142857142857142%"),
    height: hp("9.666666666666666%"),
    top: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.571428571428571%")
  },
  View_18_19: {
    width: wp("3.1428571428571432%"),
    height: hp("7.333333333333333%"),
    top: hp("41.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_18_20: {
    width: wp("1.8333335603986467%"),
    height: hp("6.111111323038737%"),
    top: hp("0.6111043294270786%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6547502790178577%")
  },
  View_18_24: {
    width: wp("2.857142857142857%"),
    height: hp("6.666666666666667%"),
    top: hp("55.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.142857142857142%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_18_25: {
    width: wp("2.3809525626046315%"),
    height: hp("5.556119918823242%"),
    top: hp("0.5553181966145857%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.23749651227678648%")
  },
  View_18_28: {
    width: wp("28.857142857142858%"),
    height: hp("56.80858357747396%"),
    top: hp("25.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.57142857142857%")
  },
  ImageBackground_18_29: {
    width: wp("16.742102486746653%"),
    height: hp("47.14477030436198%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.044398716517861%")
  },
  View_18_31: {
    width: wp("28.857142857142858%"),
    height: hp("6.188266754150391%"),
    top: hp("50.620320638020836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_18_32: {
    width: wp("28.857142857142858%"),
    height: hp("6.188266754150391%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_18_33: {
    width: wp("28.857142857142858%"),
    height: hp("6.188266754150391%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_18_49: {
    width: wp("3.7142857142857144%"),
    height: hp("8.666666666666668%"),
    top: hp("88.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.14285714285714%")
  },
  ImageBackground_18_50: {
    width: wp("3.7142857142857144%"),
    height: hp("8.666666666666668%"),
    top: hp("88.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_18_51: {
    width: wp("17.285714285714285%"),
    top: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.571428571428571%")
  },
  Text_18_51: {
    color: "rgba(0, 26, 90, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_52: {
    width: wp("20.142857142857142%"),
    top: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.57142857142858%")
  },
  Text_18_52: {
    color: "rgba(0, 26, 90, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_18_53: {
    width: wp("2.571428571428571%"),
    height: hp("6%"),
    top: hp("89.66666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.571428571428571%")
  },
  View_18_54: {
    width: wp("2.857142857142857%"),
    height: hp("6.666666666666667%"),
    top: hp("89.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.57142857142857%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_18_55: {
    width: wp("2.3809525626046315%"),
    height: hp("5.556119918823242%"),
    top: hp("0.5553181966145928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2374965122767847%")
  },
  ImageBackground_18_121: {
    width: wp("22.428571428571427%"),
    minWidth: wp("22.428571428571427%"),
    height: hp("66%"),
    minHeight: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.285714285714285%"),
    top: hp("13%")
  },
  ImageBackground_18_124: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.42857142857143%"),
    top: hp("8.333333333333332%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
