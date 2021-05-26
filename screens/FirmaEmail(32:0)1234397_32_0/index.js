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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecb6/8463/a13c74565d50c2d46447d0e45bc1283b"
        }}
        style={styles.ImageBackground_32_1}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a3d/9b8c/65ff85ade3d623aa6ec98aa5db91b97d"
        }}
        style={styles.ImageBackground_32_2}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/097d/10d1/0c15e493d9288c1b9a5cce7ec779ae5f"
        }}
        style={styles.ImageBackground_32_252}
      />
      <View style={styles.View_32_3}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3dcf/34e5/50425b7d375fb1e3623d57e11d1a5d85"
          }}
          style={styles.ImageBackground_32_4}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6405/bcd0/71da6e03642691c7b0395e135be2e215"
          }}
          style={styles.ImageBackground_32_5}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86c9/f8e4/d6c355bc5d419e1438b439d9a2908959"
          }}
          style={styles.ImageBackground_32_6}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96a3/fa54/ede20f164b3aa450084e62a44d491e9f"
          }}
          style={styles.ImageBackground_32_7}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb6e/09ea/ab8038fbdd012b61d1c6f55379a41b1f"
          }}
          style={styles.ImageBackground_32_8}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4451/2291/cbaa9a292872cd88d660d95a08004813"
          }}
          style={styles.ImageBackground_32_9}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4a1/5c41/e5b3dd793a24c952385817499e0e9f86"
          }}
          style={styles.ImageBackground_32_10}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6038/c6f2/51afeda279ea7cb095f48304053e5744"
          }}
          style={styles.ImageBackground_32_13}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7f2/51d9/40277d54eacef92b6a33b7fe6887fb78"
          }}
          style={styles.ImageBackground_32_16}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7f2/51d9/40277d54eacef92b6a33b7fe6887fb78"
          }}
          style={styles.ImageBackground_32_19}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7f2/51d9/40277d54eacef92b6a33b7fe6887fb78"
          }}
          style={styles.ImageBackground_32_22}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7f2/51d9/40277d54eacef92b6a33b7fe6887fb78"
          }}
          style={styles.ImageBackground_32_25}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6038/c6f2/51afeda279ea7cb095f48304053e5744"
          }}
          style={styles.ImageBackground_32_28}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d65d/87f4/e8f102bea45297c9be5b610a4ce305cd"
          }}
          style={styles.ImageBackground_32_31}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ddb/70d0/e8c863b7340fe23fd845747fa5b7f0d9"
          }}
          style={styles.ImageBackground_32_33}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84cb/9ee4/acecf2d9a1a3a55cac05b4e98f0175f1"
          }}
          style={styles.ImageBackground_32_42}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7fe3/3aac/4853d52629ec66b29b612dc44ef86438"
          }}
          style={styles.ImageBackground_32_51}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f130/e35b/0c7be235dd7922ca0ff969d8e0e1bb8a"
          }}
          style={styles.ImageBackground_32_65}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/931b/18fa/6397ac8d8a66829d71f1896ebc3e71c3"
          }}
          style={styles.ImageBackground_32_71}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a300/37e0/ec56cb568cd3bcbd086022ea7f0b02cc"
          }}
          style={styles.ImageBackground_32_78}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31db/62d0/bd6c18358b021090266cb44f3395a611"
          }}
          style={styles.ImageBackground_32_79}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31db/62d0/bd6c18358b021090266cb44f3395a611"
          }}
          style={styles.ImageBackground_32_80}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06ee/6705/62a71674216e5934c48aecaf0821e5a1"
          }}
          style={styles.ImageBackground_32_81}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7800/80fd/7bdbc93bb5553cc20fea0573b4274d37"
          }}
          style={styles.ImageBackground_32_82}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c49/04c5/cf68545fe30a3af40bd91287def05f55"
          }}
          style={styles.ImageBackground_32_83}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7db6/4656/1da941f6626d5f86ebcf014463536145"
          }}
          style={styles.ImageBackground_32_84}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50fd/8945/b8acdb6b75a214dffee91c09b0395c45"
          }}
          style={styles.ImageBackground_32_85}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86d7/1eac/3c9527929ed566c06d1b900671892e3d"
          }}
          style={styles.ImageBackground_32_86}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be1d/0f61/5af258d606c6782572edc8012701965f"
          }}
          style={styles.ImageBackground_32_87}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c150/f13e/6fecebd85d619813281f9d5eab18e1af"
          }}
          style={styles.ImageBackground_32_88}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6038/c6f2/51afeda279ea7cb095f48304053e5744"
          }}
          style={styles.ImageBackground_32_89}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7f2/51d9/40277d54eacef92b6a33b7fe6887fb78"
          }}
          style={styles.ImageBackground_32_92}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6038/c6f2/51afeda279ea7cb095f48304053e5744"
          }}
          style={styles.ImageBackground_32_95}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6038/c6f2/51afeda279ea7cb095f48304053e5744"
          }}
          style={styles.ImageBackground_32_98}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4a1/5c41/e5b3dd793a24c952385817499e0e9f86"
          }}
          style={styles.ImageBackground_32_101}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7f2/51d9/40277d54eacef92b6a33b7fe6887fb78"
          }}
          style={styles.ImageBackground_32_104}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f536/d116/8b0eca38a247a43af285dd569b7fc374"
          }}
          style={styles.ImageBackground_32_107}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/632b/b119/d21b6cc9957e454ca27d246cdb06a4f2"
          }}
          style={styles.ImageBackground_32_112}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b694/9b3c/043607df277310849dfb7b6095d35b03"
          }}
          style={styles.ImageBackground_32_113}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69f4/6f3e/c2a0892b011ab02a3cbba34f4ee28c00"
          }}
          style={styles.ImageBackground_32_114}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41eb/4214/aef89fd16438fcf8496700ff72c10bf0"
          }}
          style={styles.ImageBackground_32_115}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b489/fcf5/27f6acd78280b00953c9e38cb1d5f97e"
          }}
          style={styles.ImageBackground_32_116}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06f2/78d7/b24ae3380cea279c0028947af771a74c"
          }}
          style={styles.ImageBackground_32_117}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/317e/741c/655e8be1cbd85fdc79a4ba6d14d5e42a"
          }}
          style={styles.ImageBackground_32_118}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd5f/d371/45cd827ba6def6d62cc1f3f01cbb8a71"
          }}
          style={styles.ImageBackground_32_119}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c56/64da/e264e743497889ca25b39137e2c37f72"
          }}
          style={styles.ImageBackground_32_120}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96a3/fa54/ede20f164b3aa450084e62a44d491e9f"
          }}
          style={styles.ImageBackground_32_123}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96a3/fa54/ede20f164b3aa450084e62a44d491e9f"
          }}
          style={styles.ImageBackground_32_124}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96a3/fa54/ede20f164b3aa450084e62a44d491e9f"
          }}
          style={styles.ImageBackground_32_125}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96a3/fa54/ede20f164b3aa450084e62a44d491e9f"
          }}
          style={styles.ImageBackground_32_126}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96a3/fa54/ede20f164b3aa450084e62a44d491e9f"
          }}
          style={styles.ImageBackground_32_127}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96a3/fa54/ede20f164b3aa450084e62a44d491e9f"
          }}
          style={styles.ImageBackground_32_128}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96a3/fa54/ede20f164b3aa450084e62a44d491e9f"
          }}
          style={styles.ImageBackground_32_129}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96a3/fa54/ede20f164b3aa450084e62a44d491e9f"
          }}
          style={styles.ImageBackground_32_130}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96a3/fa54/ede20f164b3aa450084e62a44d491e9f"
          }}
          style={styles.ImageBackground_32_131}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96a3/fa54/ede20f164b3aa450084e62a44d491e9f"
          }}
          style={styles.ImageBackground_32_132}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96a3/fa54/ede20f164b3aa450084e62a44d491e9f"
          }}
          style={styles.ImageBackground_32_133}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96a3/fa54/ede20f164b3aa450084e62a44d491e9f"
          }}
          style={styles.ImageBackground_32_134}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96a3/fa54/ede20f164b3aa450084e62a44d491e9f"
          }}
          style={styles.ImageBackground_32_135}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce2c/70f8/a5f84133703f03096f29c53fc155aee9"
          }}
          style={styles.ImageBackground_32_136}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69c3/4277/57e0dfaada94e743a6fe8b1f3c00f42d"
          }}
          style={styles.ImageBackground_32_139}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36a8/ca21/97cd7539ca3cd0ebbe9acf59966cf86e"
          }}
          style={styles.ImageBackground_32_141}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dbc4/1c1c/af9e9ddaca1b643f0636604a22a29dee"
          }}
          style={styles.ImageBackground_32_144}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c6d/a07c/a17f18480946a982e329ec6306fa7b49"
          }}
          style={styles.ImageBackground_32_150}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac86/b5ed/3ad9577563406b7978a652440006960b"
          }}
          style={styles.ImageBackground_32_151}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac86/b5ed/3ad9577563406b7978a652440006960b"
          }}
          style={styles.ImageBackground_32_152}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6e7/f21a/a718f5a1df5da178dcd724c903c2e90e"
          }}
          style={styles.ImageBackground_32_153}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b809/1e36/d5c0f15a7746ff9158c1b8c50a7bafa1"
          }}
          style={styles.ImageBackground_32_154}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3632/eece/1f2269178f0611581aa6908c7c10b10d"
          }}
          style={styles.ImageBackground_32_155}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5112/971f/771f5b5cdccd9477c9d452bd053c4b42"
          }}
          style={styles.ImageBackground_32_156}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d567/42b0/c130d8a24c2a6b306bc0d1b2ca283bc4"
          }}
          style={styles.ImageBackground_32_157}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eab6/3833/a437a9baeb6a7d103d2a69ddffe9801b"
          }}
          style={styles.ImageBackground_32_180}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96a3/fa54/ede20f164b3aa450084e62a44d491e9f"
          }}
          style={styles.ImageBackground_32_186}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96a3/fa54/ede20f164b3aa450084e62a44d491e9f"
          }}
          style={styles.ImageBackground_32_187}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1074/d140/63122f86798ec10707aed63b470eae09"
          }}
          style={styles.ImageBackground_32_188}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5975/d2eb/9546f0bcbba6ff7b3b2fa31fb4b45375"
          }}
          style={styles.ImageBackground_32_194}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/faf6/5b0b/9fe82a97c49f8ed2bc7c2d3d7567c9d8"
          }}
          style={styles.ImageBackground_32_195}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19d7/48c5/0cb11c3ba99cd27b7ffa473ec348f3c8"
          }}
          style={styles.ImageBackground_32_196}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/0cad/eab3b76b144590115cdaab404483a2f5"
          }}
          style={styles.ImageBackground_32_197}
        />
      </View>
      <View style={styles.View_32_198}>
        <Text style={styles.Text_32_198}>INGENIERA AGRÓNOMA</Text>
      </View>
      <View style={styles.View_32_199}>
        <Text style={styles.Text_32_199}>Lucia Franco</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a6f/cf8d/64ac3492c5e77f490c271e9726d2d8eb"
        }}
        style={styles.ImageBackground_32_200}
      />
      <View style={styles.View_32_201}>
        <Text style={styles.Text_32_201}>lucia.franco@prodinamica.ag</Text>
      </View>
      <View style={styles.View_32_202}>
        <Text style={styles.Text_32_202}>Tel: (+54) 9341 3913366</Text>
      </View>
      <View style={styles.View_32_203}>
        <Text style={styles.Text_32_203}>Rosario, Santa Fe</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/307e/6df1/b4197fa614e8626a7e5c4df30f983f5f"
        }}
        style={styles.ImageBackground_32_204}
      />
      <View style={styles.View_32_205}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b803/7c69/c6769f5cde245166153b5f8c039f73e2"
          }}
          style={styles.ImageBackground_32_206}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/307e/6df1/b4197fa614e8626a7e5c4df30f983f5f"
        }}
        style={styles.ImageBackground_32_210}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/307e/6df1/b4197fa614e8626a7e5c4df30f983f5f"
        }}
        style={styles.ImageBackground_32_211}
      />
      <View style={styles.View_32_212}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e91/f065/c196a1f88ade878c8b97ca5b174a9b91"
          }}
          style={styles.ImageBackground_32_213}
        />
      </View>
      <View style={styles.View_32_217}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d73a/9d03/5b4429639383587e1948ae2da1af0778"
          }}
          style={styles.ImageBackground_32_218}
        />
      </View>
      <View style={styles.View_32_221}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61f6/5d56/12ba08aaa65f7bdae021c8016d1d34b0"
          }}
          style={styles.ImageBackground_32_222}
        />
        <View style={styles.View_32_224}>
          <View style={styles.View_32_225}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05b2/17a7/e7d8939343c93c85c3e62d2fc0fbd8f8"
              }}
              style={styles.ImageBackground_32_226}
            />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f81d/6839/bd0b8ae256b74014684c74797d686ec9"
        }}
        style={styles.ImageBackground_32_251}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71bd/d699/7c4e53465c652a785ec31c0f47affd0c"
        }}
        style={styles.ImageBackground_32_243}
      />
      <View style={styles.View_32_244}>
        <Text style={styles.Text_32_244}>PRODINAMICA.AG</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9dec/fa34/012f44e68f1d092319fb907fc0e0621e"
        }}
        style={styles.ImageBackground_32_246}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71bd/d699/7c4e53465c652a785ec31c0f47affd0c"
        }}
        style={styles.ImageBackground_32_242}
      />
      <View style={styles.View_32_245}>
        <Text style={styles.Text_32_245}>Tel: (+54) 9 3415 069098</Text>
      </View>
      <View style={styles.View_32_247}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d73a/9d03/5b4429639383587e1948ae2da1af0778"
          }}
          style={styles.ImageBackground_32_248}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  ImageBackground_32_1: {
    width: wp("48.285714285714285%"),
    minWidth: wp("48.285714285714285%"),
    height: hp("90.33333333333333%"),
    minHeight: hp("90.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.28571428571429%"),
    top: hp("8.333333333333332%")
  },
  ImageBackground_32_2: {
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
  ImageBackground_32_252: {
    width: wp("60.285714285714285%"),
    minWidth: wp("60.285714285714285%"),
    height: hp("15.666666666666668%"),
    minHeight: hp("15.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("83%")
  },
  View_32_3: {
    width: wp("63.571480887276785%"),
    minWidth: wp("63.571480887276785%"),
    height: hp("148.98562622070312%"),
    minHeight: hp("148.98562622070312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-10.142857142857142%"),
    top: hp("-51.33333333333333%")
  },
  ImageBackground_32_4: {
    width: wp("22.701490129743306%"),
    height: hp("52.970148722330734%"),
    top: hp("44.151285807291664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.441127232142858%")
  },
  ImageBackground_32_5: {
    width: wp("24.475803920200892%"),
    height: hp("57.110209147135414%"),
    top: hp("42.30818684895833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.61460658482143%")
  },
  ImageBackground_32_6: {
    width: wp("25.836929321289066%"),
    height: hp("60.286148071289055%"),
    top: hp("40.71993001302083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.934238978794642%")
  },
  ImageBackground_32_7: {
    width: wp("1.1666690281459262%"),
    height: hp("2.722235997517904%"),
    top: hp("54.586466471354164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.114693777901785%")
  },
  ImageBackground_32_8: {
    width: wp("8.871567862374443%"),
    height: hp("20.70032501220703%"),
    top: hp("18.942179361979164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.7291259765625%")
  },
  ImageBackground_32_9: {
    width: wp("9.552127293178012%"),
    height: hp("22.288297017415363%"),
    top: hp("18.23323567708333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.413103376116071%")
  },
  ImageBackground_32_10: {
    width: wp("9.552127293178012%"),
    height: hp("22.288294474283855%"),
    top: hp("20.019612630208332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.26222446986607%")
  },
  ImageBackground_32_13: {
    width: wp("9.552127293178012%"),
    height: hp("22.288297017415363%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.015781947544642%")
  },
  ImageBackground_32_16: {
    width: wp("9.552122933523997%"),
    height: hp("22.288297017415363%"),
    top: hp("61.90242513020833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.01935686383929%")
  },
  ImageBackground_32_19: {
    width: wp("9.552130562918528%"),
    height: hp("22.288297017415363%"),
    top: hp("106.02518717447916%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.52099609375%")
  },
  ImageBackground_32_22: {
    width: wp("9.552127293178012%"),
    height: hp("22.288286844889324%"),
    top: hp("126.69734700520833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.076642717633927%")
  },
  ImageBackground_32_25: {
    width: wp("9.552126203264509%"),
    height: hp("22.288297017415363%"),
    top: hp("105.940185546875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.388950892857142%")
  },
  ImageBackground_32_28: {
    width: wp("9.552127293178012%"),
    height: hp("22.288294474283855%"),
    top: hp("62.1009521484375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_32_31: {
    width: wp("5.550807407924107%"),
    height: hp("13.339113871256512%"),
    top: hp("66.32177734375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8016183035714288%")
  },
  ImageBackground_32_33: {
    width: wp("5.4322084699358255%"),
    height: hp("9.017381032307943%"),
    top: hp("26.144897460937496%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.401175362723215%")
  },
  ImageBackground_32_42: {
    width: wp("16.467073713030132%"),
    height: hp("27.19404093424479%"),
    top: hp("57.56392415364583%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.2119140625%")
  },
  ImageBackground_32_51: {
    width: wp("4.991697583879743%"),
    height: hp("16.067928314208984%"),
    top: hp("21.267456054687496%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.79668317522322%")
  },
  ImageBackground_32_65: {
    width: wp("5.06482424054827%"),
    height: hp("16.334269205729164%"),
    top: hp("109.14359537760416%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.672154017857142%")
  },
  ImageBackground_32_71: {
    width: wp("5.990255628313338%"),
    height: hp("15.908044179280598%"),
    top: hp("64.993408203125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.78276715959821%")
  },
  ImageBackground_32_78: {
    width: wp("5.8212062290736615%"),
    height: hp("5.019123077392578%"),
    top: hp("138.03987630208331%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.74155970982143%")
  },
  ImageBackground_32_79: {
    width: wp("0%"),
    height: hp("5.019123077392578%"),
    top: hp("138.03987630208331%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.673915318080354%")
  },
  ImageBackground_32_80: {
    width: wp("0%"),
    height: hp("5.019123077392578%"),
    top: hp("138.03987630208331%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.50877162388393%")
  },
  ImageBackground_32_81: {
    width: wp("5.20141111101423%"),
    height: hp("0%"),
    top: hp("134.60888671875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.008701869419642%")
  },
  ImageBackground_32_82: {
    width: wp("3.062511444091797%"),
    height: hp("3.1475769678751626%"),
    top: hp("134.495361328125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.163155691964285%")
  },
  ImageBackground_32_83: {
    width: wp("2.880222865513393%"),
    height: hp("3.232651710510254%"),
    top: hp("130.83723958333331%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.248447963169642%")
  },
  ImageBackground_32_84: {
    width: wp("2.0416743414742604%"),
    height: hp("0%"),
    top: hp("82.99979654947916%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.25031389508929%")
  },
  ImageBackground_32_85: {
    width: wp("0%"),
    height: hp("7.174227396647136%"),
    top: hp("82.99979654947916%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.23447963169643%")
  },
  ImageBackground_32_86: {
    width: wp("2.0416743414742604%"),
    height: hp("4.08335018157959%"),
    top: hp("90.17403157552083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.25031389508929%")
  },
  ImageBackground_32_87: {
    width: wp("0%"),
    height: hp("11.597852071126303%"),
    top: hp("82.99979654947916%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.54017857142857%")
  },
  ImageBackground_32_88: {
    width: wp("2.3454952239990234%"),
    height: hp("2.381953398386637%"),
    top: hp("92.21573893229166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.27598353794643%")
  },
  ImageBackground_32_89: {
    width: wp("9.552127293178012%"),
    height: hp("22.288294474283855%"),
    top: hp("20.019612630208332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.526123046875%")
  },
  ImageBackground_32_92: {
    width: wp("9.552130562918528%"),
    height: hp("22.288297017415363%"),
    top: hp("45.88094075520833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.30571637834821%")
  },
  ImageBackground_32_95: {
    width: wp("9.552130562918528%"),
    height: hp("22.288297017415363%"),
    top: hp("77.640380859375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.28125%")
  },
  ImageBackground_32_98: {
    width: wp("9.552127293178012%"),
    height: hp("22.288297017415363%"),
    top: hp("103.27482096354166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.526123046875%")
  },
  ImageBackground_32_101: {
    width: wp("9.552127293178012%"),
    height: hp("22.288297017415363%"),
    top: hp("102.707763671875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.26222446986607%")
  },
  ImageBackground_32_104: {
    width: wp("9.552126203264509%"),
    height: hp("22.288286844889324%"),
    top: hp("77.5552978515625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.543422154017856%")
  },
  ImageBackground_32_107: {
    width: wp("6.310643877301897%"),
    height: hp("10.83322016398112%"),
    top: hp("83.19816080729166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.047467912946429%")
  },
  ImageBackground_32_112: {
    width: wp("8.37330082484654%"),
    height: hp("18.57357915242513%"),
    top: hp("37.0904541015625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.081734793526785%")
  },
  ImageBackground_32_113: {
    width: wp("0.12152832746505737%"),
    height: hp("25.237386067708336%"),
    top: hp("21.38065592447916%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.658115931919642%")
  },
  ImageBackground_32_114: {
    width: wp("8.361147199358259%"),
    height: hp("18.57357915242513%"),
    top: hp("37.0904541015625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.67885044642857%")
  },
  ImageBackground_32_115: {
    width: wp("11.460126604352679%"),
    height: hp("0%"),
    top: hp("73.0465087890625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.54715401785714%")
  },
  ImageBackground_32_116: {
    width: wp("9.187545776367188%"),
    height: hp("21.465957641601562%"),
    top: hp("87.6787109375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.80405970982143%")
  },
  ImageBackground_32_117: {
    width: wp("0%"),
    height: hp("30.256505330403645%"),
    top: hp("95.1646728515625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.658115931919642%")
  },
  ImageBackground_32_118: {
    width: wp("8.348993028913226%"),
    height: hp("19.480993906656902%"),
    top: hp("88.5576171875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.871564592633927%")
  },
  ImageBackground_32_119: {
    width: wp("11.37505122593471%"),
    height: hp("0%"),
    top: hp("72.96150716145833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.026140485491071%")
  },
  ImageBackground_32_120: {
    width: wp("9.552126203264509%"),
    height: hp("22.288294474283855%"),
    top: hp("46.39131673177083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.422101702008927%")
  },
  ImageBackground_32_123: {
    width: wp("1.1666725703648158%"),
    height: hp("2.7222277323404946%"),
    top: hp("71.60042317708333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.9393310546875%")
  },
  ImageBackground_32_124: {
    width: wp("1.1666690281459262%"),
    height: hp("2.722231864929199%"),
    top: hp("45.25703938802083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.07463727678571%")
  },
  ImageBackground_32_125: {
    width: wp("1.1666725703648158%"),
    height: hp("2.722234090169271%"),
    top: hp("20.64359537760416%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.269339425223215%")
  },
  ImageBackground_32_126: {
    width: wp("1.1666690281459262%"),
    height: hp("2.722235997517904%"),
    top: hp("35.72932942708333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.45692661830357%")
  },
  ImageBackground_32_127: {
    width: wp("1.1666762488228934%"),
    height: hp("2.722235997517904%"),
    top: hp("71.68538411458333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.30229840959821%")
  },
  ImageBackground_32_128: {
    width: wp("1.1666690281459262%"),
    height: hp("2.7222277323404946%"),
    top: hp("107.89689127604166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.57826450892857%")
  },
  ImageBackground_32_129: {
    width: wp("1.1666725703648158%"),
    height: hp("2.722235997517904%"),
    top: hp("86.3173828125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.2205810546875%")
  },
  ImageBackground_32_130: {
    width: wp("1.1666690281459262%"),
    height: hp("2.722235997517904%"),
    top: hp("92.6693115234375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.07463727678571%")
  },
  ImageBackground_32_131: {
    width: wp("1.1666725703648158%"),
    height: hp("2.7222277323404946%"),
    top: hp("125.33622233072916%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.147670200892858%")
  },
  ImageBackground_32_132: {
    width: wp("1.1666690281459262%"),
    height: hp("2.722235997517904%"),
    top: hp("86.3173828125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.086669921875%")
  },
  ImageBackground_32_133: {
    width: wp("1.1666725703648158%"),
    height: hp("2.722235997517904%"),
    top: hp("107.7833251953125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.984514508928571%")
  },
  ImageBackground_32_134: {
    width: wp("1.1666725703648158%"),
    height: hp("2.7222277323404946%"),
    top: hp("71.60042317708333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.981131417410714%")
  },
  ImageBackground_32_135: {
    width: wp("1.1666725703648158%"),
    height: hp("2.722235997517904%"),
    top: hp("36.012939453125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.619873046875%")
  },
  ImageBackground_32_136: {
    width: wp("9.552122933523997%"),
    height: hp("22.288297017415363%"),
    top: hp("17.77962239583333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.54546247209821%")
  },
  ImageBackground_32_139: {
    width: wp("5.397378104073661%"),
    height: hp("12.571858723958334%"),
    top: hp("24.773803710937496%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.48134068080357%")
  },
  ImageBackground_32_141: {
    width: wp("4.646939958844866%"),
    height: hp("13.270890553792317%"),
    top: hp("107.61328125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.794259207589285%")
  },
  ImageBackground_32_144: {
    width: wp("6.3451014927455365%"),
    height: hp("13.752978006998697%"),
    top: hp("109.5133056640625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.83349609375%")
  },
  ImageBackground_32_150: {
    width: wp("4.5087015969412665%"),
    height: hp("3.4595053990681968%"),
    top: hp("59.23681640624999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.533063616071429%")
  },
  ImageBackground_32_151: {
    width: wp("4.520855222429548%"),
    height: hp("3.487863858540853%"),
    top: hp("60.45629882812499%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.715227399553571%")
  },
  ImageBackground_32_152: {
    width: wp("4.520855222429548%"),
    height: hp("3.4878594080607095%"),
    top: hp("57.960734049479164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.36279296875%")
  },
  ImageBackground_32_153: {
    width: wp("2.7829979487827847%"),
    height: hp("3.7997837066650395%"),
    top: hp("55.12508138020833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.281389508928571%")
  },
  ImageBackground_32_154: {
    width: wp("2.345499038696289%"),
    height: hp("3.204297383626302%"),
    top: hp("56.316080729166664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.892613002232142%")
  },
  ImageBackground_32_155: {
    width: wp("2.0052191870553155%"),
    height: hp("2.7505903244018555%"),
    top: hp("57.450358072916664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.442679268973214%")
  },
  ImageBackground_32_156: {
    width: wp("2.041678019932338%"),
    height: hp("4.7639109293619795%"),
    top: hp("51.126871744791664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.250139508928571%")
  },
  ImageBackground_32_157: {
    width: wp("5.604391370500837%"),
    height: hp("12.703716278076172%"),
    top: hp("107.5283203125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.13185337611607%")
  },
  ImageBackground_32_180: {
    width: wp("6.162261417933873%"),
    height: hp("14.329559326171875%"),
    top: hp("4.017008463541664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.405133928571427%")
  },
  ImageBackground_32_186: {
    width: wp("1.1666725703648158%"),
    height: hp("2.722235997517904%"),
    top: hp("54.246134440104164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.10791015625%")
  },
  ImageBackground_32_187: {
    width: wp("1.1666725703648158%"),
    height: hp("2.7222277323404946%"),
    top: hp("71.60042317708333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.55069405691964%")
  },
  ImageBackground_32_188: {
    width: wp("4.3384552001953125%"),
    height: hp("11.569572448730469%"),
    top: hp("50.531534830729164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.04042271205357%")
  },
  ImageBackground_32_194: {
    width: wp("3.061941146850586%"),
    height: hp("7.365167617797852%"),
    top: hp("27.640502929687493%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.477800641741071%")
  },
  ImageBackground_32_195: {
    width: wp("3.25664792742048%"),
    height: hp("7.378190358479817%"),
    top: hp("21.835205078124996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.530238560267858%")
  },
  ImageBackground_32_196: {
    width: wp("1.4315152849469865%"),
    height: hp("3.4322385787963863%"),
    top: hp("23.80680338541666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.6966552734375%")
  },
  ImageBackground_32_197: {
    width: wp("1.4709593909127372%"),
    height: hp("3.3402055104573565%"),
    top: hp("30.293619791666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.864345005580358%")
  },
  View_32_198: {
    width: wp("36.70731898716518%"),
    top: hp("22.679361979166668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.160295758928571%")
  },
  Text_32_198: {
    color: "rgba(0, 46, 130, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_32_199: {
    width: wp("38%"),
    top: hp("8.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.142857142857142%")
  },
  Text_32_199: {
    color: "rgba(0, 46, 130, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_32_200: {
    width: wp("11.951218741280693%"),
    height: hp("0%"),
    top: hp("32.551432291666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.139369419642857%")
  },
  View_32_201: {
    width: wp("30.853657313755576%"),
    top: hp("63.84602864583333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.038330078125%")
  },
  Text_32_201: {
    color: "rgba(0, 46, 130, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_32_202: {
    width: wp("22.195120675223215%"),
    top: hp("52.41015624999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.160295758928571%")
  },
  Text_32_202: {
    color: "rgba(0, 46, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_32_203: {
    width: wp("23.536586216517858%"),
    top: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.038330078125%")
  },
  Text_32_203: {
    color: "rgba(0, 46, 130, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_32_204: {
    width: wp("4.142857142857142%"),
    height: hp("9.666666666666666%"),
    top: hp("61.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.571428571428571%")
  },
  View_32_205: {
    width: wp("2.857142857142857%"),
    height: hp("6.666666666666667%"),
    top: hp("62.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.142857142857142%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_32_206: {
    width: wp("2.3809525626046315%"),
    height: hp("5.277777671813965%"),
    top: hp("0.6944580078124929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2380894252232153%")
  },
  ImageBackground_32_210: {
    width: wp("4.142857142857142%"),
    height: hp("9.666666666666666%"),
    top: hp("49.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.571428571428571%")
  },
  ImageBackground_32_211: {
    width: wp("4.142857142857142%"),
    height: hp("9.666666666666666%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.571428571428571%")
  },
  View_32_212: {
    width: wp("3.1428571428571432%"),
    height: hp("7.333333333333333%"),
    top: hp("39.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_32_213: {
    width: wp("1.8333335603986467%"),
    height: hp("6.111111323038737%"),
    top: hp("0.6111246744791714%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6547502790178577%")
  },
  View_32_217: {
    width: wp("2.857142857142857%"),
    height: hp("6.666666666666667%"),
    top: hp("51.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.142857142857142%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_32_218: {
    width: wp("2.3809525626046315%"),
    height: hp("5.556119918823242%"),
    top: hp("0.5552978515625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.23749651227678648%")
  },
  View_32_221: {
    width: wp("33.18751525878906%"),
    height: hp("65.33332316080728%"),
    top: hp("17.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.42857142857142%")
  },
  ImageBackground_32_222: {
    width: wp("19.254444667271205%"),
    height: hp("54.219380696614586%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.9514334542410765%")
  },
  View_32_224: {
    width: wp("33.18751525878906%"),
    height: hp("7.116852442423503%"),
    top: hp("58.21647135416666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_32_225: {
    width: wp("33.18751525878906%"),
    height: hp("7.116852442423503%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_32_226: {
    width: wp("33.18751525878906%"),
    height: hp("7.116852442423503%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_32_251: {
    width: wp("60.285714285714285%"),
    minWidth: wp("60.285714285714285%"),
    height: hp("15.666666666666668%"),
    minHeight: hp("15.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("85%")
  },
  ImageBackground_32_243: {
    width: wp("3.7142857142857144%"),
    height: hp("8.666666666666668%"),
    top: hp("88%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.571428571428571%")
  },
  View_32_244: {
    width: wp("17.285714285714285%"),
    top: hp("89.66666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.142857142857144%")
  },
  Text_32_244: {
    color: "rgba(0, 46, 130, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_32_246: {
    width: wp("2.571428571428571%"),
    height: hp("6%"),
    top: hp("89.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.142857142857142%")
  },
  ImageBackground_32_242: {
    width: wp("3.7142857142857144%"),
    height: hp("8.666666666666668%"),
    top: hp("88%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.57142857142857%")
  },
  View_32_245: {
    width: wp("20.57142857142857%"),
    top: hp("89.66666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  Text_32_245: {
    color: "rgba(0, 46, 130, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_32_247: {
    width: wp("2.857142857142857%"),
    height: hp("6.666666666666667%"),
    top: hp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_32_248: {
    width: wp("2.3809525626046315%"),
    height: hp("5.556119918823242%"),
    top: hp("0.5553385416666572%"),
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
