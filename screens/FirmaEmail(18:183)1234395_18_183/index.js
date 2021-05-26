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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/805e/2d24/ec16d02ee591ce503f9a225d739d121c"
        }}
        style={styles.ImageBackground_18_241}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bf5/3287/28e4dbe2192e9ab27f78d7164a85dfdc"
        }}
        style={styles.ImageBackground_18_185}
      />
      <View style={styles.View_18_186}>
        <Text style={styles.Text_18_186}>INGENIERA AGRÓNOMA</Text>
      </View>
      <View style={styles.View_18_187}>
        <Text style={styles.Text_18_187}>Lucia Franco</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a6f/cf8d/64ac3492c5e77f490c271e9726d2d8eb"
        }}
        style={styles.ImageBackground_18_188}
      />
      <View style={styles.View_18_189}>
        <Text style={styles.Text_18_189}>lucia.franco@prodinamica.ag</Text>
      </View>
      <View style={styles.View_18_190}>
        <Text style={styles.Text_18_190}>Tel: (+54) 9341 3913366</Text>
      </View>
      <View style={styles.View_18_191}>
        <Text style={styles.Text_18_191}>Rosario, Santa Fe</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/307e/6df1/b4197fa614e8626a7e5c4df30f983f5f"
        }}
        style={styles.ImageBackground_18_192}
      />
      <View style={styles.View_18_193}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b803/7c69/c6769f5cde245166153b5f8c039f73e2"
          }}
          style={styles.ImageBackground_18_194}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/307e/6df1/b4197fa614e8626a7e5c4df30f983f5f"
        }}
        style={styles.ImageBackground_18_198}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/307e/6df1/b4197fa614e8626a7e5c4df30f983f5f"
        }}
        style={styles.ImageBackground_18_199}
      />
      <View style={styles.View_18_200}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e91/f065/c196a1f88ade878c8b97ca5b174a9b91"
          }}
          style={styles.ImageBackground_18_201}
        />
      </View>
      <View style={styles.View_18_205}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d73a/9d03/5b4429639383587e1948ae2da1af0778"
          }}
          style={styles.ImageBackground_18_206}
        />
      </View>
      <View style={styles.View_18_209}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93ac/e336/f68cb1e790e9cb04aa429089b2a04991"
          }}
          style={styles.ImageBackground_18_210}
        />
        <View style={styles.View_18_212}>
          <View style={styles.View_18_213}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0161/5a80/0534756560db02788d09e48b5e24fcb9"
              }}
              style={styles.ImageBackground_18_214}
            />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/978b/c9d2/b9badb29da2f1279eea8acb0ed37079f"
        }}
        style={styles.ImageBackground_18_230}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/978b/c9d2/b9badb29da2f1279eea8acb0ed37079f"
        }}
        style={styles.ImageBackground_18_231}
      />
      <View style={styles.View_18_232}>
        <Text style={styles.Text_18_232}>PRODINAMICA.AG</Text>
      </View>
      <View style={styles.View_18_233}>
        <Text style={styles.Text_18_233}>Tel: (+54) 9 3415 069098</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b85d/4529/564222cf47b17a402928b935972006db"
        }}
        style={styles.ImageBackground_18_234}
      />
      <View style={styles.View_18_235}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc83/9402/5364d1bde7f81d34bd4cb694d7849c39"
          }}
          style={styles.ImageBackground_18_236}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  ImageBackground_18_241: {
    width: wp("101.57142857142858%"),
    minWidth: wp("101.57142857142858%"),
    height: hp("89.66666666666666%"),
    minHeight: hp("89.66666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.7142857142857143%"),
    top: hp("11.333333333333332%")
  },
  ImageBackground_18_185: {
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
  View_18_186: {
    width: wp("36.70731898716518%"),
    top: hp("22.346028645833332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.160295758928571%")
  },
  Text_18_186: {
    color: "rgba(0, 46, 130, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_187: {
    width: wp("38%"),
    top: hp("8.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.142857142857142%")
  },
  Text_18_187: {
    color: "rgba(0, 46, 130, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_18_188: {
    width: wp("11.951218741280693%"),
    height: hp("0%"),
    top: hp("32.551432291666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.139369419642857%")
  },
  View_18_189: {
    width: wp("30.853657313755576%"),
    top: hp("65.5126953125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.038330078125%")
  },
  Text_18_189: {
    color: "rgba(74, 114, 178, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_190: {
    width: wp("22.195120675223215%"),
    top: hp("54.41015625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.160295758928571%")
  },
  Text_18_190: {
    color: "rgba(74, 114, 178, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_191: {
    width: wp("23.536586216517858%"),
    top: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.038330078125%")
  },
  Text_18_191: {
    color: "rgba(74, 114, 178, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_18_192: {
    width: wp("4.142857142857142%"),
    height: hp("9.666666666666666%"),
    top: hp("63.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.571428571428571%")
  },
  View_18_193: {
    width: wp("2.857142857142857%"),
    height: hp("6.666666666666667%"),
    top: hp("64.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.142857142857142%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_18_194: {
    width: wp("2.3809525626046315%"),
    height: hp("5.277777671813965%"),
    top: hp("0.6944580078125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.23809814453125%")
  },
  ImageBackground_18_198: {
    width: wp("4.142857142857142%"),
    height: hp("9.666666666666666%"),
    top: hp("51.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.571428571428571%")
  },
  ImageBackground_18_199: {
    width: wp("4.142857142857142%"),
    height: hp("9.666666666666666%"),
    top: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.571428571428571%")
  },
  View_18_200: {
    width: wp("3.1428571428571432%"),
    height: hp("7.333333333333333%"),
    top: hp("41.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_18_201: {
    width: wp("1.8333335603986467%"),
    height: hp("6.111111323038737%"),
    top: hp("0.6111246744791643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6547502790178577%")
  },
  View_18_205: {
    width: wp("2.857142857142857%"),
    height: hp("6.666666666666667%"),
    top: hp("53.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.142857142857142%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_18_206: {
    width: wp("2.3809525626046315%"),
    height: hp("5.556119918823242%"),
    top: hp("0.5552978515624929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.23749651227678648%")
  },
  View_18_209: {
    width: wp("28.857142857142858%"),
    height: hp("56.80858357747396%"),
    top: hp("22.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.57142857142857%")
  },
  ImageBackground_18_210: {
    width: wp("16.742102486746653%"),
    height: hp("47.14477030436198%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.044398716517861%")
  },
  View_18_212: {
    width: wp("28.857142857142858%"),
    height: hp("6.188266754150391%"),
    top: hp("50.62032063802084%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_18_213: {
    width: wp("28.857142857142858%"),
    height: hp("6.188266754150391%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_18_214: {
    width: wp("28.857142857142858%"),
    height: hp("6.188266754150391%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_18_230: {
    width: wp("3.7142857142857144%"),
    height: hp("8.666666666666668%"),
    top: hp("87.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.14285714285714%")
  },
  ImageBackground_18_231: {
    width: wp("3.7142857142857144%"),
    height: hp("8.666666666666668%"),
    top: hp("87.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_18_232: {
    width: wp("17.285714285714285%"),
    top: hp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.571428571428571%")
  },
  Text_18_232: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_233: {
    width: wp("20.142857142857142%"),
    top: hp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.57142857142858%")
  },
  Text_18_233: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_18_234: {
    width: wp("2.571428571428571%"),
    height: hp("6%"),
    top: hp("88.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.571428571428571%")
  },
  View_18_235: {
    width: wp("2.857142857142857%"),
    height: hp("6.666666666666667%"),
    top: hp("88.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.57142857142857%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_18_236: {
    width: wp("2.3809525626046315%"),
    height: hp("5.556119918823242%"),
    top: hp("0.5552978515625142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2374965122767847%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
