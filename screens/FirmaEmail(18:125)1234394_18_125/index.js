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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9368/0b15/7fc1a9d8dfeec755b3f27cd9b6923c78"
        }}
        style={styles.ImageBackground_18_126}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da00/760b/7968ce35db362c8ec2e7a9bc5be39167"
        }}
        style={styles.ImageBackground_18_127}
      />
      <View style={styles.View_18_128}>
        <Text style={styles.Text_18_128}>INGENIERA AGRÓNOMA</Text>
      </View>
      <View style={styles.View_18_129}>
        <Text style={styles.Text_18_129}>Lucia Franco</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c84/3447/27fcd7979988ecce48a7772fd82a7f94"
        }}
        style={styles.ImageBackground_18_130}
      />
      <View style={styles.View_18_131}>
        <Text style={styles.Text_18_131}>lucia.franco@prodinamica.ag</Text>
      </View>
      <View style={styles.View_18_132}>
        <Text style={styles.Text_18_132}>Tel: (+54) 9341 3913366</Text>
      </View>
      <View style={styles.View_18_133}>
        <Text style={styles.Text_18_133}>Rosario, Santa Fe</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/307e/6df1/b4197fa614e8626a7e5c4df30f983f5f"
        }}
        style={styles.ImageBackground_18_134}
      />
      <View style={styles.View_18_135}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b803/7c69/c6769f5cde245166153b5f8c039f73e2"
          }}
          style={styles.ImageBackground_18_136}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/307e/6df1/b4197fa614e8626a7e5c4df30f983f5f"
        }}
        style={styles.ImageBackground_18_140}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/307e/6df1/b4197fa614e8626a7e5c4df30f983f5f"
        }}
        style={styles.ImageBackground_18_141}
      />
      <View style={styles.View_18_142}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e91/f065/c196a1f88ade878c8b97ca5b174a9b91"
          }}
          style={styles.ImageBackground_18_143}
        />
      </View>
      <View style={styles.View_18_147}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d73a/9d03/5b4429639383587e1948ae2da1af0778"
          }}
          style={styles.ImageBackground_18_148}
        />
      </View>
      <View style={styles.View_18_151}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93ac/e336/f68cb1e790e9cb04aa429089b2a04991"
          }}
          style={styles.ImageBackground_18_152}
        />
        <View style={styles.View_18_154}>
          <View style={styles.View_18_155}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0161/5a80/0534756560db02788d09e48b5e24fcb9"
              }}
              style={styles.ImageBackground_18_156}
            />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/978b/c9d2/b9badb29da2f1279eea8acb0ed37079f"
        }}
        style={styles.ImageBackground_18_172}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/978b/c9d2/b9badb29da2f1279eea8acb0ed37079f"
        }}
        style={styles.ImageBackground_18_173}
      />
      <View style={styles.View_18_174}>
        <Text style={styles.Text_18_174}>PRODINAMICA.AG</Text>
      </View>
      <View style={styles.View_18_175}>
        <Text style={styles.Text_18_175}>Tel: (+54) 9 3415 069098</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b85d/4529/564222cf47b17a402928b935972006db"
        }}
        style={styles.ImageBackground_18_176}
      />
      <View style={styles.View_18_177}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc83/9402/5364d1bde7f81d34bd4cb694d7849c39"
          }}
          style={styles.ImageBackground_18_178}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb1c/0b12/20d9dbc633b30bca36c2a7128113c531"
        }}
        style={styles.ImageBackground_18_181}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ea9/6e86/2a549976e4c6b40f029de9899792d0f8"
        }}
        style={styles.ImageBackground_18_182}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  ImageBackground_18_126: {
    width: wp("102.42857142857143%"),
    height: hp("101.66666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_18_127: {
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
  View_18_128: {
    width: wp("36.70731898716518%"),
    top: hp("22.346028645833332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.160295758928571%")
  },
  Text_18_128: {
    color: "rgba(0, 46, 130, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_129: {
    width: wp("38%"),
    top: hp("8.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.142857142857142%")
  },
  Text_18_129: {
    color: "rgba(0, 46, 130, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_18_130: {
    width: wp("11.951218741280693%"),
    height: hp("0%"),
    top: hp("32.551432291666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.139369419642857%")
  },
  View_18_131: {
    width: wp("30.853657313755576%"),
    top: hp("65.5126953125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.038330078125%")
  },
  Text_18_131: {
    color: "rgba(74, 114, 178, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_132: {
    width: wp("22.195120675223215%"),
    top: hp("54.41015625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.160295758928571%")
  },
  Text_18_132: {
    color: "rgba(74, 114, 178, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_133: {
    width: wp("23.536586216517858%"),
    top: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.038330078125%")
  },
  Text_18_133: {
    color: "rgba(74, 114, 178, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_18_134: {
    width: wp("4.142857142857142%"),
    height: hp("9.666666666666666%"),
    top: hp("63.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.571428571428571%")
  },
  View_18_135: {
    width: wp("2.857142857142857%"),
    height: hp("6.666666666666667%"),
    top: hp("64.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.142857142857142%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_18_136: {
    width: wp("2.3809525626046315%"),
    height: hp("5.277777671813965%"),
    top: hp("0.6944580078125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.23809814453125%")
  },
  ImageBackground_18_140: {
    width: wp("4.142857142857142%"),
    height: hp("9.666666666666666%"),
    top: hp("51.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.571428571428571%")
  },
  ImageBackground_18_141: {
    width: wp("4.142857142857142%"),
    height: hp("9.666666666666666%"),
    top: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.571428571428571%")
  },
  View_18_142: {
    width: wp("3.1428571428571432%"),
    height: hp("7.333333333333333%"),
    top: hp("41.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_18_143: {
    width: wp("1.8333335603986467%"),
    height: hp("6.111111323038737%"),
    top: hp("0.6111246744791643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6547502790178577%")
  },
  View_18_147: {
    width: wp("2.857142857142857%"),
    height: hp("6.666666666666667%"),
    top: hp("53.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.142857142857142%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_18_148: {
    width: wp("2.3809525626046315%"),
    height: hp("5.556119918823242%"),
    top: hp("0.5552978515624929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.23749651227678648%")
  },
  View_18_151: {
    width: wp("28.857142857142858%"),
    height: hp("56.80858357747396%"),
    top: hp("25.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.57142857142857%")
  },
  ImageBackground_18_152: {
    width: wp("16.742102486746653%"),
    height: hp("47.14477030436198%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.044398716517861%")
  },
  View_18_154: {
    width: wp("28.857142857142858%"),
    height: hp("6.188266754150391%"),
    top: hp("50.620320638020836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_18_155: {
    width: wp("28.857142857142858%"),
    height: hp("6.188266754150391%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_18_156: {
    width: wp("28.857142857142858%"),
    height: hp("6.188266754150391%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_18_172: {
    width: wp("3.7142857142857144%"),
    height: hp("8.666666666666668%"),
    top: hp("88.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.14285714285714%")
  },
  ImageBackground_18_173: {
    width: wp("3.7142857142857144%"),
    height: hp("8.666666666666668%"),
    top: hp("88.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_18_174: {
    width: wp("17.285714285714285%"),
    top: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.571428571428571%")
  },
  Text_18_174: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_175: {
    width: wp("20.142857142857142%"),
    top: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.57142857142858%")
  },
  Text_18_175: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_18_176: {
    width: wp("2.571428571428571%"),
    height: hp("6%"),
    top: hp("89.66666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.571428571428571%")
  },
  View_18_177: {
    width: wp("2.857142857142857%"),
    height: hp("6.666666666666667%"),
    top: hp("89.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.57142857142857%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_18_178: {
    width: wp("2.3809525626046315%"),
    height: hp("5.556119918823242%"),
    top: hp("0.5552978515625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2374965122767847%")
  },
  ImageBackground_18_181: {
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
  ImageBackground_18_182: {
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
