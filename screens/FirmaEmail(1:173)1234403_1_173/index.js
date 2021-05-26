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
      <View style={styles.View_1_174} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4f2/f4ea/b525c2019d98662abaed9a3266382bae"
        }}
        style={styles.ImageBackground_1_175}
      />
      <View style={styles.View_1_176}>
        <Text style={styles.Text_1_176}>INGENIERA AGRÓNOMA</Text>
      </View>
      <View style={styles.View_1_177}>
        <Text style={styles.Text_1_177}>Lucia Franco</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9586/436a/dccf7a9abc830fe3961f16998ce28261"
        }}
        style={styles.ImageBackground_1_178}
      />
      <View style={styles.View_1_179}>
        <Text style={styles.Text_1_179}>lucia.franco@prodinamica.ag</Text>
      </View>
      <View style={styles.View_1_180}>
        <Text style={styles.Text_1_180}>Tel: (+54) 9341 3913366</Text>
      </View>
      <View style={styles.View_1_181}>
        <Text style={styles.Text_1_181}>Rosario, Santa Fe</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69de/1d41/9643c23d904487a99aebe435a6a2487f"
        }}
        style={styles.ImageBackground_1_182}
      />
      <View style={styles.View_1_183}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b83e/033d/3b7cd7c0fc31420ec025dda8d73975ec"
          }}
          style={styles.ImageBackground_1_184}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69de/1d41/9643c23d904487a99aebe435a6a2487f"
        }}
        style={styles.ImageBackground_1_188}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69de/1d41/9643c23d904487a99aebe435a6a2487f"
        }}
        style={styles.ImageBackground_1_189}
      />
      <View style={styles.View_1_190}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fed2/8050/eaa885968cc2465955e7a4c8c6e0d7a6"
          }}
          style={styles.ImageBackground_1_191}
        />
      </View>
      <View style={styles.View_1_195}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bc9/fcf4/ea4f542506db54afe8110f20c637c235"
          }}
          style={styles.ImageBackground_1_196}
        />
      </View>
      <View style={styles.View_1_199}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01d1/8edb/df05788da9dafce1c880922125c607d9"
          }}
          style={styles.ImageBackground_1_200}
        />
        <View style={styles.View_1_202}>
          <View style={styles.View_1_203}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/419e/bcf4/4f325054b8cae3f2ebd5f46686f70882"
              }}
              style={styles.ImageBackground_1_204}
            />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71bd/d699/7c4e53465c652a785ec31c0f47affd0c"
        }}
        style={styles.ImageBackground_1_221}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71bd/d699/7c4e53465c652a785ec31c0f47affd0c"
        }}
        style={styles.ImageBackground_1_222}
      />
      <View style={styles.View_1_223}>
        <Text style={styles.Text_1_223}>PRODINAMICA.AG</Text>
      </View>
      <View style={styles.View_1_224}>
        <Text style={styles.Text_1_224}>Tel: (+54) 9 3415 069098</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9dec/fa34/012f44e68f1d092319fb907fc0e0621e"
        }}
        style={styles.ImageBackground_1_225}
      />
      <View style={styles.View_1_226}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d73a/9d03/5b4429639383587e1948ae2da1af0778"
          }}
          style={styles.ImageBackground_1_227}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_1_174: {
    width: wp("41.285714285714285%"),
    height: hp("100%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.71428571428572%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_1_175: {
    width: wp("66.14285714285715%"),
    height: hp("101.66666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_176: {
    width: wp("36.70731898716518%"),
    top: hp("23.346028645833332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.160295758928571%")
  },
  Text_1_176: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_177: {
    width: wp("38%"),
    top: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.142857142857142%")
  },
  Text_1_177: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_178: {
    width: wp("11.951218741280693%"),
    height: hp("0%"),
    top: hp("34.884765625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2822265625%")
  },
  View_1_179: {
    width: wp("30.853657313755576%"),
    top: hp("85.17936197916667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.038330078125%")
  },
  Text_1_179: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_180: {
    width: wp("22.195120675223215%"),
    top: hp("71.07682291666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.160295758928571%")
  },
  Text_1_180: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_181: {
    width: wp("23.536586216517858%"),
    top: hp("55.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.038330078125%")
  },
  Text_1_181: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_182: {
    width: wp("4.428571428571428%"),
    height: hp("10.333333333333334%"),
    top: hp("82.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.428571428571429%")
  },
  View_1_183: {
    width: wp("2.857142857142857%"),
    height: hp("6.666666666666667%"),
    top: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.142857142857142%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_184: {
    width: wp("2.3809525626046315%"),
    height: hp("5.277777671813965%"),
    top: hp("0.6944478352864536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.23809814453125%")
  },
  ImageBackground_1_188: {
    width: wp("4.428571428571428%"),
    height: hp("10.333333333333334%"),
    top: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.428571428571429%")
  },
  ImageBackground_1_189: {
    width: wp("4.428571428571428%"),
    height: hp("10.333333333333334%"),
    top: hp("53.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.428571428571429%")
  },
  View_1_190: {
    width: wp("3.1428571428571432%"),
    height: hp("7.333333333333333%"),
    top: hp("55.00000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_191: {
    width: wp("1.8333335603986467%"),
    height: hp("6.111111323038737%"),
    top: hp("0.611114501953125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6547502790178577%")
  },
  View_1_195: {
    width: wp("2.857142857142857%"),
    height: hp("6.666666666666667%"),
    top: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.142857142857142%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_196: {
    width: wp("2.3809525626046315%"),
    height: hp("5.556119918823242%"),
    top: hp("0.5553080240885322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.23749651227678648%")
  },
  View_1_199: {
    width: wp("25.85712541852679%"),
    height: hp("50.90262858072917%"),
    top: hp("7.937825520833333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.57142857142857%")
  },
  ImageBackground_1_200: {
    width: wp("15.001566205705915%"),
    height: hp("42.24352518717448%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.416015625%")
  },
  View_1_202: {
    width: wp("25.85712541852679%"),
    height: hp("5.5449059804280605%"),
    top: hp("45.35772705078124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_203: {
    width: wp("25.85712541852679%"),
    height: hp("5.5449059804280605%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_204: {
    width: wp("25.85712541852679%"),
    height: hp("5.5449059804280605%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_221: {
    width: wp("3.7142857142857144%"),
    height: hp("8.666666666666668%"),
    top: hp("70.33333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.28571428571428%")
  },
  ImageBackground_1_222: {
    width: wp("3.7142857142857144%"),
    height: hp("8.666666666666668%"),
    top: hp("82.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.28571428571428%")
  },
  View_1_223: {
    width: wp("17.285714285714285%"),
    top: hp("84.33333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.85714285714286%")
  },
  Text_1_223: {
    color: "rgba(0, 26, 90, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_224: {
    width: wp("20.142857142857142%"),
    top: hp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.71428571428571%")
  },
  Text_1_224: {
    color: "rgba(0, 26, 90, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_225: {
    width: wp("2.571428571428571%"),
    height: hp("6%"),
    top: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.85714285714286%")
  },
  View_1_226: {
    width: wp("2.857142857142857%"),
    height: hp("6.666666666666667%"),
    top: hp("71.33333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.71428571428572%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_227: {
    width: wp("2.3809525626046315%"),
    height: hp("5.556119918823242%"),
    top: hp("0.5553080240885322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2374965122767776%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
