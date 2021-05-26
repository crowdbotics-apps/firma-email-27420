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
        style={styles.ImageBackground_45_4}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a3d/9b8c/65ff85ade3d623aa6ec98aa5db91b97d"
        }}
        style={styles.ImageBackground_45_5}
      />
      <View style={styles.View_45_6}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6e8/3ceb/884e9bdf1cb7427b21e43db04bc8750e"
          }}
          style={styles.ImageBackground_45_7}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f4c/6b6b/a3dcab42c0a998d368ebd2614a9bff35"
          }}
          style={styles.ImageBackground_45_8}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abad/59ce/57ff0497fb57fd46fb497d73acb92534"
          }}
          style={styles.ImageBackground_45_9}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1fb/87ab/cd64cfd5a1364610776c23a2e6edaf51"
          }}
          style={styles.ImageBackground_45_10}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acc8/823e/2ae3e9779af738bf22ca70cd664ea028"
          }}
          style={styles.ImageBackground_45_11}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9a2/c386/696b04e2997a7f4ef069e07a01e7c891"
          }}
          style={styles.ImageBackground_45_12}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ceba/58e7/1c2d1b97e7099c628c9aec8f3125421a"
          }}
          style={styles.ImageBackground_45_13}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/472a/1d1e/5d16bf39c78e7d99b589af3e893a6926"
          }}
          style={styles.ImageBackground_45_16}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/caf8/a2ff/6d27c1c12b435b3910a1de9077768c72"
          }}
          style={styles.ImageBackground_45_19}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/caf8/a2ff/6d27c1c12b435b3910a1de9077768c72"
          }}
          style={styles.ImageBackground_45_22}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/caf8/a2ff/6d27c1c12b435b3910a1de9077768c72"
          }}
          style={styles.ImageBackground_45_25}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/caf8/a2ff/6d27c1c12b435b3910a1de9077768c72"
          }}
          style={styles.ImageBackground_45_28}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/472a/1d1e/5d16bf39c78e7d99b589af3e893a6926"
          }}
          style={styles.ImageBackground_45_31}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c13d/6e10/7895b40609b75d37ee26216396d1156a"
          }}
          style={styles.ImageBackground_45_34}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd79/c5af/dca23889c480c73f3c354494cb9f4963"
          }}
          style={styles.ImageBackground_45_36}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6774/e2a5/b092efece873e5b8667405256e31a282"
          }}
          style={styles.ImageBackground_45_45}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2901/ad3b/de1e6f629170dcd8b9162bd1a47668bf"
          }}
          style={styles.ImageBackground_45_54}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c75/b8ae/073d821b9efee184e50883a6a2b0c441"
          }}
          style={styles.ImageBackground_45_68}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2cdd/d0bc/0b9260d138d2e7b3227c59eab8d1bcc3"
          }}
          style={styles.ImageBackground_45_74}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a55/5b76/6fb7784f00528cd19191b56bd12ab5ad"
          }}
          style={styles.ImageBackground_45_81}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a04/8c22/1b09d58bf5706ded64d8ed8b63d05693"
          }}
          style={styles.ImageBackground_45_82}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a04/8c22/1b09d58bf5706ded64d8ed8b63d05693"
          }}
          style={styles.ImageBackground_45_83}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c348/83cf/9fe6108d5ffba35a999b2586678b931a"
          }}
          style={styles.ImageBackground_45_84}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/018a/b780/096fbf3a8d7641abc69a6ad780659c80"
          }}
          style={styles.ImageBackground_45_85}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d6f/df6e/9f82f406c646fc3f03d499b4570089ec"
          }}
          style={styles.ImageBackground_45_86}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91bd/8dd7/e75a0ffd5872706bb38ed887fbfa7cc1"
          }}
          style={styles.ImageBackground_45_87}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0120/4f00/c24e5af8d2a6814272f9652803bf61b1"
          }}
          style={styles.ImageBackground_45_88}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24c9/7e9e/efb42614cacea6de5a3616ac0e51eddb"
          }}
          style={styles.ImageBackground_45_89}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7f5/e675/d34d276806cad010d4483aea77193584"
          }}
          style={styles.ImageBackground_45_90}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4152/e1b6/5bd512ca475bdede37143fc0f508198c"
          }}
          style={styles.ImageBackground_45_91}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/472a/1d1e/5d16bf39c78e7d99b589af3e893a6926"
          }}
          style={styles.ImageBackground_45_92}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/caf8/a2ff/6d27c1c12b435b3910a1de9077768c72"
          }}
          style={styles.ImageBackground_45_95}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/472a/1d1e/5d16bf39c78e7d99b589af3e893a6926"
          }}
          style={styles.ImageBackground_45_98}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/472a/1d1e/5d16bf39c78e7d99b589af3e893a6926"
          }}
          style={styles.ImageBackground_45_101}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ceba/58e7/1c2d1b97e7099c628c9aec8f3125421a"
          }}
          style={styles.ImageBackground_45_104}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/caf8/a2ff/6d27c1c12b435b3910a1de9077768c72"
          }}
          style={styles.ImageBackground_45_107}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/08fe/dbaf/32afe3b79551b228640d4293032dec01"
          }}
          style={styles.ImageBackground_45_110}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c88/feb7/1fe1477ad95acebf5ebcf0dd0fbcecd0"
          }}
          style={styles.ImageBackground_45_115}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f537/bced/ee6cc82533ff98e4a1e60e0d5b1dd4af"
          }}
          style={styles.ImageBackground_45_116}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bfa/e5c2/43dc1490fd4e7dea35f4cbdc57823d66"
          }}
          style={styles.ImageBackground_45_117}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9798/4b2e/5af47b56c01e6402589d43f129901c79"
          }}
          style={styles.ImageBackground_45_118}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e98/b11f/fa55fd4c0f3186ce52dab059278d35e9"
          }}
          style={styles.ImageBackground_45_119}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee2c/c2a4/9291ccf96bef437dfdd11c3cabff3332"
          }}
          style={styles.ImageBackground_45_120}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed6e/e766/43432edd237635faf57497296c6a95c4"
          }}
          style={styles.ImageBackground_45_121}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/40f8/e466/c60885f65fb3598745a15f8770d0847a"
          }}
          style={styles.ImageBackground_45_122}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/caf8/a2ff/6d27c1c12b435b3910a1de9077768c72"
          }}
          style={styles.ImageBackground_45_123}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1fb/87ab/cd64cfd5a1364610776c23a2e6edaf51"
          }}
          style={styles.ImageBackground_45_126}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1fb/87ab/cd64cfd5a1364610776c23a2e6edaf51"
          }}
          style={styles.ImageBackground_45_127}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1fb/87ab/cd64cfd5a1364610776c23a2e6edaf51"
          }}
          style={styles.ImageBackground_45_128}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1fb/87ab/cd64cfd5a1364610776c23a2e6edaf51"
          }}
          style={styles.ImageBackground_45_129}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1fb/87ab/cd64cfd5a1364610776c23a2e6edaf51"
          }}
          style={styles.ImageBackground_45_130}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1fb/87ab/cd64cfd5a1364610776c23a2e6edaf51"
          }}
          style={styles.ImageBackground_45_131}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1fb/87ab/cd64cfd5a1364610776c23a2e6edaf51"
          }}
          style={styles.ImageBackground_45_132}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1fb/87ab/cd64cfd5a1364610776c23a2e6edaf51"
          }}
          style={styles.ImageBackground_45_133}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1fb/87ab/cd64cfd5a1364610776c23a2e6edaf51"
          }}
          style={styles.ImageBackground_45_134}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1fb/87ab/cd64cfd5a1364610776c23a2e6edaf51"
          }}
          style={styles.ImageBackground_45_135}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1fb/87ab/cd64cfd5a1364610776c23a2e6edaf51"
          }}
          style={styles.ImageBackground_45_136}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1fb/87ab/cd64cfd5a1364610776c23a2e6edaf51"
          }}
          style={styles.ImageBackground_45_137}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1fb/87ab/cd64cfd5a1364610776c23a2e6edaf51"
          }}
          style={styles.ImageBackground_45_138}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d773/9c6d/81cb3147ffb4b5aa28a2891441367fab"
          }}
          style={styles.ImageBackground_45_139}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/095c/4330/6e5927f251c9f2f42478cb68871845f7"
          }}
          style={styles.ImageBackground_45_142}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16c2/b208/f4de7d28f3ba47efc8468ecf38f3fb9d"
          }}
          style={styles.ImageBackground_45_144}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67cc/8854/b54bc00c59106ec32730105640fd8920"
          }}
          style={styles.ImageBackground_45_147}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/824a/71b9/f343178983e1b530cc12fd35f5e9576f"
          }}
          style={styles.ImageBackground_45_153}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b042/b193/c317802ce816bf59aa61f25acfa1a24c"
          }}
          style={styles.ImageBackground_45_154}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b042/b193/c317802ce816bf59aa61f25acfa1a24c"
          }}
          style={styles.ImageBackground_45_155}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f00/66ef/8fe7677d0e4a27d34d4acbf6045f7c02"
          }}
          style={styles.ImageBackground_45_156}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76ae/2299/4503113ad2945833f49bda387db076a9"
          }}
          style={styles.ImageBackground_45_157}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7ba/0f23/200a5cb653acb27fd32f4d49ff0499e9"
          }}
          style={styles.ImageBackground_45_158}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d843/4b53/03588348ddac3194830eb4fa7e1a5fa9"
          }}
          style={styles.ImageBackground_45_159}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83e4/fb59/6febb177c56a215a2c17f861903e185c"
          }}
          style={styles.ImageBackground_45_160}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7577/8026/177173055fdc8fadccc2fca3c606c275"
          }}
          style={styles.ImageBackground_45_183}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1fb/87ab/cd64cfd5a1364610776c23a2e6edaf51"
          }}
          style={styles.ImageBackground_45_189}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1fb/87ab/cd64cfd5a1364610776c23a2e6edaf51"
          }}
          style={styles.ImageBackground_45_190}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c13/b506/fa9011df9f4b8dfa1ed080c429f86628"
          }}
          style={styles.ImageBackground_45_191}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32bf/1f32/27730d1e349c849fb2413ede29546d55"
          }}
          style={styles.ImageBackground_45_197}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80bf/eb94/c8e2faa87180919c4bea6fd73860a4c1"
          }}
          style={styles.ImageBackground_45_198}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b41/3f99/4fcbd025ca6a70017a82b39ae02ba4b9"
          }}
          style={styles.ImageBackground_45_199}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9d9/1334/6eef2d98ab819828571fcd4c2e696831"
          }}
          style={styles.ImageBackground_45_200}
        />
      </View>
      <View style={styles.View_45_201}>
        <Text style={styles.Text_45_201}>DISEÑADORA GRÁFICA</Text>
      </View>
      <View style={styles.View_45_202}>
        <Text style={styles.Text_45_202}>Marisol Shanahan</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a6f/cf8d/64ac3492c5e77f490c271e9726d2d8eb"
        }}
        style={styles.ImageBackground_45_203}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/307e/6df1/b4197fa614e8626a7e5c4df30f983f5f"
        }}
        style={styles.ImageBackground_45_213}
      />
      <View style={styles.View_45_215}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e91/f065/c196a1f88ade878c8b97ca5b174a9b91"
          }}
          style={styles.ImageBackground_45_216}
        />
      </View>
      <View style={styles.View_45_224}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f96/330a/3a5eea1fc4f30f9093c03f7ac17169ac"
          }}
          style={styles.ImageBackground_45_225}
        />
        <View style={styles.View_45_227}>
          <View style={styles.View_45_228}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7643/82c0/cc29e45627a15a2bcf6e6ea1e2aaef6b"
              }}
              style={styles.ImageBackground_45_229}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_46_4}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71bd/d699/7c4e53465c652a785ec31c0f47affd0c"
          }}
          style={styles.ImageBackground_45_245}
        />
        <View style={styles.View_45_246}>
          <Text style={styles.Text_45_246}>PRODINAMICA.AG</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5303/385e/7cd28b570b63665dfe6f4988990ebaf1"
          }}
          style={styles.ImageBackground_45_247}
        />
      </View>
      <View style={styles.View_46_3}>
        <View style={styles.View_46_2}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/307e/6df1/b4197fa614e8626a7e5c4df30f983f5f"
            }}
            style={styles.ImageBackground_45_207}
          />
          <View style={styles.View_45_208}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b803/7c69/c6769f5cde245166153b5f8c039f73e2"
              }}
              style={styles.ImageBackground_45_209}
            />
          </View>
        </View>
        <View style={styles.View_46_0}>
          <Text style={styles.Text_46_0}>marisol.shanahan@prodinamica.ag</Text>
        </View>
      </View>
      <View style={styles.View_46_1}>
        <Text style={styles.Text_46_1}>Capitán Sarmiento, Prov. Bs As</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  ImageBackground_45_4: {
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
  ImageBackground_45_5: {
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
  View_45_6: {
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
  ImageBackground_45_7: {
    width: wp("22.701490129743306%"),
    height: hp("52.970148722330734%"),
    top: hp("44.151285807291664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.441127232142858%")
  },
  ImageBackground_45_8: {
    width: wp("24.475803920200892%"),
    height: hp("57.110209147135414%"),
    top: hp("42.30818684895833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.61460658482143%")
  },
  ImageBackground_45_9: {
    width: wp("25.836929321289066%"),
    height: hp("60.286148071289055%"),
    top: hp("40.71997070312499%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.934238978794642%")
  },
  ImageBackground_45_10: {
    width: wp("1.1666690281459262%"),
    height: hp("2.722235997517904%"),
    top: hp("54.58642578124999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.114693777901785%")
  },
  ImageBackground_45_11: {
    width: wp("8.871567862374443%"),
    height: hp("20.70032501220703%"),
    top: hp("18.942138671874993%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.7291259765625%")
  },
  ImageBackground_45_12: {
    width: wp("9.552127293178012%"),
    height: hp("22.288297017415363%"),
    top: hp("18.23323567708333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.413094656808035%")
  },
  ImageBackground_45_13: {
    width: wp("9.552127293178012%"),
    height: hp("22.288294474283855%"),
    top: hp("20.019612630208332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.26222446986607%")
  },
  ImageBackground_45_16: {
    width: wp("9.552127293178012%"),
    height: hp("22.288297017415363%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.015781947544642%")
  },
  ImageBackground_45_19: {
    width: wp("9.552122933523997%"),
    height: hp("22.288297017415363%"),
    top: hp("61.90242513020833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.01935686383929%")
  },
  ImageBackground_45_22: {
    width: wp("9.552130562918528%"),
    height: hp("22.288297017415363%"),
    top: hp("106.02522786458331%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.52099609375%")
  },
  ImageBackground_45_25: {
    width: wp("9.552127293178012%"),
    height: hp("22.288286844889324%"),
    top: hp("126.69734700520833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.076642717633927%")
  },
  ImageBackground_45_28: {
    width: wp("9.552126203264509%"),
    height: hp("22.288297017415363%"),
    top: hp("105.940185546875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.388950892857142%")
  },
  ImageBackground_45_31: {
    width: wp("9.552127293178012%"),
    height: hp("22.288294474283855%"),
    top: hp("62.100992838541664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_45_34: {
    width: wp("5.550807407924107%"),
    height: hp("13.339113871256512%"),
    top: hp("66.32177734375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8016270228794635%")
  },
  ImageBackground_45_36: {
    width: wp("5.4322084699358255%"),
    height: hp("9.017381032307943%"),
    top: hp("26.14485677083333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.401175362723215%")
  },
  ImageBackground_45_45: {
    width: wp("16.467073713030132%"),
    height: hp("27.19404093424479%"),
    top: hp("57.56396484374999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.2119140625%")
  },
  ImageBackground_45_54: {
    width: wp("4.991697583879743%"),
    height: hp("16.067928314208984%"),
    top: hp("21.26749674479166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.79668317522322%")
  },
  ImageBackground_45_68: {
    width: wp("5.06482424054827%"),
    height: hp("16.334269205729164%"),
    top: hp("109.14363606770833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.672162737165179%")
  },
  ImageBackground_45_74: {
    width: wp("5.990255628313338%"),
    height: hp("15.908044179280598%"),
    top: hp("64.993408203125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.78276715959821%")
  },
  ImageBackground_45_81: {
    width: wp("5.8212062290736615%"),
    height: hp("5.019123077392578%"),
    top: hp("138.03987630208331%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.741550990513392%")
  },
  ImageBackground_45_82: {
    width: wp("0%"),
    height: hp("5.019123077392578%"),
    top: hp("138.03987630208331%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.673915318080354%")
  },
  ImageBackground_45_83: {
    width: wp("0%"),
    height: hp("5.019123077392578%"),
    top: hp("138.03987630208331%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.50876290457589%")
  },
  ImageBackground_45_84: {
    width: wp("5.20141111101423%"),
    height: hp("0%"),
    top: hp("134.60888671875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.008701869419642%")
  },
  ImageBackground_45_85: {
    width: wp("3.062511444091797%"),
    height: hp("3.1475769678751626%"),
    top: hp("134.495361328125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.163155691964285%")
  },
  ImageBackground_45_86: {
    width: wp("2.880222865513393%"),
    height: hp("3.232651710510254%"),
    top: hp("130.83723958333331%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.248447963169642%")
  },
  ImageBackground_45_87: {
    width: wp("2.0416743414742604%"),
    height: hp("0%"),
    top: hp("82.999755859375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.25031389508929%")
  },
  ImageBackground_45_88: {
    width: wp("0%"),
    height: hp("7.174227396647136%"),
    top: hp("82.999755859375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.23447963169643%")
  },
  ImageBackground_45_89: {
    width: wp("2.0416743414742604%"),
    height: hp("4.08335018157959%"),
    top: hp("90.174072265625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.25031389508929%")
  },
  ImageBackground_45_90: {
    width: wp("0%"),
    height: hp("11.597852071126303%"),
    top: hp("82.999755859375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.54017857142857%")
  },
  ImageBackground_45_91: {
    width: wp("2.3454952239990234%"),
    height: hp("2.381953398386637%"),
    top: hp("92.21573893229166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.27598353794643%")
  },
  ImageBackground_45_92: {
    width: wp("9.552127293178012%"),
    height: hp("22.288294474283855%"),
    top: hp("20.019612630208332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.526114327566965%")
  },
  ImageBackground_45_95: {
    width: wp("9.552130562918528%"),
    height: hp("22.288297017415363%"),
    top: hp("45.88094075520833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.30571637834821%")
  },
  ImageBackground_45_98: {
    width: wp("9.552130562918528%"),
    height: hp("22.288297017415363%"),
    top: hp("77.640380859375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.28125871930804%")
  },
  ImageBackground_45_101: {
    width: wp("9.552127293178012%"),
    height: hp("22.288297017415363%"),
    top: hp("103.27482096354166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.526114327566965%")
  },
  ImageBackground_45_104: {
    width: wp("9.552127293178012%"),
    height: hp("22.288297017415363%"),
    top: hp("102.707763671875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.26222446986607%")
  },
  ImageBackground_45_107: {
    width: wp("9.552126203264509%"),
    height: hp("22.288286844889324%"),
    top: hp("77.55533854166666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.543422154017856%")
  },
  ImageBackground_45_110: {
    width: wp("6.310643877301897%"),
    height: hp("10.83322016398112%"),
    top: hp("83.19816080729166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.047467912946429%")
  },
  ImageBackground_45_115: {
    width: wp("8.37330082484654%"),
    height: hp("18.57357915242513%"),
    top: hp("37.09041341145833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.08172607421875%")
  },
  ImageBackground_45_116: {
    width: wp("0.12152832746505737%"),
    height: hp("25.237386067708336%"),
    top: hp("21.380696614583332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.658124651227677%")
  },
  ImageBackground_45_117: {
    width: wp("8.361147199358259%"),
    height: hp("18.57357915242513%"),
    top: hp("37.09041341145833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.67885916573661%")
  },
  ImageBackground_45_118: {
    width: wp("11.460126604352679%"),
    height: hp("0%"),
    top: hp("73.04654947916666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.54716273716518%")
  },
  ImageBackground_45_119: {
    width: wp("9.187545776367188%"),
    height: hp("21.465957641601562%"),
    top: hp("87.6787109375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.80406842912946%")
  },
  ImageBackground_45_120: {
    width: wp("0%"),
    height: hp("30.256505330403645%"),
    top: hp("95.16463216145833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.658124651227677%")
  },
  ImageBackground_45_121: {
    width: wp("8.348993028913226%"),
    height: hp("19.480993906656902%"),
    top: hp("88.5576171875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.871564592633927%")
  },
  ImageBackground_45_122: {
    width: wp("11.37505122593471%"),
    height: hp("0%"),
    top: hp("72.96150716145833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.026140485491071%")
  },
  ImageBackground_45_123: {
    width: wp("9.552126203264509%"),
    height: hp("22.288294474283855%"),
    top: hp("46.39135742187499%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.422092982700892%")
  },
  ImageBackground_45_126: {
    width: wp("1.1666725703648158%"),
    height: hp("2.7222277323404946%"),
    top: hp("71.60042317708333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.9393310546875%")
  },
  ImageBackground_45_127: {
    width: wp("1.1666690281459262%"),
    height: hp("2.722231864929199%"),
    top: hp("45.256998697916664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.07462855747768%")
  },
  ImageBackground_45_128: {
    width: wp("1.1666725703648158%"),
    height: hp("2.722234090169271%"),
    top: hp("20.64363606770833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.269330705915177%")
  },
  ImageBackground_45_129: {
    width: wp("1.1666690281459262%"),
    height: hp("2.722235997517904%"),
    top: hp("35.72932942708333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.45693533761161%")
  },
  ImageBackground_45_130: {
    width: wp("1.1666762488228934%"),
    height: hp("2.722235997517904%"),
    top: hp("71.68538411458333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.30229840959821%")
  },
  ImageBackground_45_131: {
    width: wp("1.1666690281459262%"),
    height: hp("2.7222277323404946%"),
    top: hp("107.89689127604166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.57826450892857%")
  },
  ImageBackground_45_132: {
    width: wp("1.1666725703648158%"),
    height: hp("2.722235997517904%"),
    top: hp("86.3173828125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.2205810546875%")
  },
  ImageBackground_45_133: {
    width: wp("1.1666690281459262%"),
    height: hp("2.722235997517904%"),
    top: hp("92.66935221354166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.07462855747768%")
  },
  ImageBackground_45_134: {
    width: wp("1.1666725703648158%"),
    height: hp("2.7222277323404946%"),
    top: hp("125.336181640625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.14766148158482%")
  },
  ImageBackground_45_135: {
    width: wp("1.1666690281459262%"),
    height: hp("2.722235997517904%"),
    top: hp("86.3173828125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.086669921875%")
  },
  ImageBackground_45_136: {
    width: wp("1.1666725703648158%"),
    height: hp("2.722235997517904%"),
    top: hp("107.78336588541666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.984514508928571%")
  },
  ImageBackground_45_137: {
    width: wp("1.1666725703648158%"),
    height: hp("2.7222277323404946%"),
    top: hp("71.60042317708333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.981131417410714%")
  },
  ImageBackground_45_138: {
    width: wp("1.1666725703648158%"),
    height: hp("2.722235997517904%"),
    top: hp("36.012939453125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.619873046875%")
  },
  ImageBackground_45_139: {
    width: wp("9.552122933523997%"),
    height: hp("22.288297017415363%"),
    top: hp("17.77962239583333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.54546247209821%")
  },
  ImageBackground_45_142: {
    width: wp("5.397378104073661%"),
    height: hp("12.571858723958334%"),
    top: hp("24.77384440104166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.48134940011161%")
  },
  ImageBackground_45_144: {
    width: wp("4.646939958844866%"),
    height: hp("13.270890553792317%"),
    top: hp("107.61328125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.794259207589285%")
  },
  ImageBackground_45_147: {
    width: wp("6.3451014927455365%"),
    height: hp("13.752978006998697%"),
    top: hp("109.51334635416666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.83349609375%")
  },
  ImageBackground_45_153: {
    width: wp("4.5087015969412665%"),
    height: hp("3.4595053990681968%"),
    top: hp("59.23681640624999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.533063616071429%")
  },
  ImageBackground_45_154: {
    width: wp("4.520855222429548%"),
    height: hp("3.487863858540853%"),
    top: hp("60.45629882812499%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.715227399553571%")
  },
  ImageBackground_45_155: {
    width: wp("4.520855222429548%"),
    height: hp("3.4878594080607095%"),
    top: hp("57.96077473958333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.362784249441964%")
  },
  ImageBackground_45_156: {
    width: wp("2.7829979487827847%"),
    height: hp("3.7997837066650395%"),
    top: hp("55.12508138020833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.281398228236606%")
  },
  ImageBackground_45_157: {
    width: wp("2.345499038696289%"),
    height: hp("3.204297383626302%"),
    top: hp("56.316080729166664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.892604282924106%")
  },
  ImageBackground_45_158: {
    width: wp("2.0052191870553155%"),
    height: hp("2.7505903244018555%"),
    top: hp("57.450358072916664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.442679268973214%")
  },
  ImageBackground_45_159: {
    width: wp("2.041678019932338%"),
    height: hp("4.7639109293619795%"),
    top: hp("51.126871744791664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.250139508928571%")
  },
  ImageBackground_45_160: {
    width: wp("5.604391370500837%"),
    height: hp("12.703716278076172%"),
    top: hp("107.5283203125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.13185337611607%")
  },
  ImageBackground_45_183: {
    width: wp("6.162261417933873%"),
    height: hp("14.329559326171875%"),
    top: hp("4.017008463541664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.405133928571427%")
  },
  ImageBackground_45_189: {
    width: wp("1.1666725703648158%"),
    height: hp("2.722235997517904%"),
    top: hp("54.24617513020833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.107901436941965%")
  },
  ImageBackground_45_190: {
    width: wp("1.1666725703648158%"),
    height: hp("2.7222277323404946%"),
    top: hp("71.60042317708333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.55069405691964%")
  },
  ImageBackground_45_191: {
    width: wp("4.3384552001953125%"),
    height: hp("11.569572448730469%"),
    top: hp("50.53157552083333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.04042271205357%")
  },
  ImageBackground_45_197: {
    width: wp("3.061941146850586%"),
    height: hp("7.365167617797852%"),
    top: hp("27.64054361979166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.477800641741071%")
  },
  ImageBackground_45_198: {
    width: wp("3.25664792742048%"),
    height: hp("7.378190358479817%"),
    top: hp("21.835205078124996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.530238560267858%")
  },
  ImageBackground_45_199: {
    width: wp("1.4315152849469865%"),
    height: hp("3.4322385787963863%"),
    top: hp("23.80680338541666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.696646554129464%")
  },
  ImageBackground_45_200: {
    width: wp("1.4709593909127372%"),
    height: hp("3.3402055104573565%"),
    top: hp("30.293619791666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.864345005580358%")
  },
  View_45_201: {
    width: wp("36.70731898716518%"),
    top: hp("23.0126953125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.160295758928571%")
  },
  Text_45_201: {
    color: "rgba(0, 46, 130, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_202: {
    width: wp("49.28571428571429%"),
    top: hp("8.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.142857142857142%")
  },
  Text_45_202: {
    color: "rgba(0, 46, 130, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_45_203: {
    width: wp("11.951218741280693%"),
    height: hp("0%"),
    top: hp("33.551432291666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.139369419642857%")
  },
  ImageBackground_45_213: {
    width: wp("4.142857142857142%"),
    height: hp("9.666666666666666%"),
    top: hp("65%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.571428571428571%")
  },
  View_45_215: {
    width: wp("3.1428571428571432%"),
    height: hp("7.333333333333333%"),
    top: hp("66.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_45_216: {
    width: wp("1.8333335603986467%"),
    height: hp("6.111111323038737%"),
    top: hp("0.6110839843750142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6547502790178577%")
  },
  View_45_224: {
    width: wp("25.640003749302455%"),
    height: hp("50.475234985351555%"),
    top: hp("20.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.42857142857143%")
  },
  ImageBackground_45_225: {
    width: wp("14.875600542340962%"),
    height: hp("41.888814290364586%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.370535714285708%")
  },
  View_45_227: {
    width: wp("25.640003749302455%"),
    height: hp("5.49833869934082%"),
    top: hp("44.97688802083333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_45_228: {
    width: wp("25.640003749302455%"),
    height: hp("5.49833869934082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_45_229: {
    width: wp("25.640003749302455%"),
    height: hp("5.49833869934082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_46_4: {
    width: wp("21.857142857142858%"),
    minWidth: wp("21.857142857142858%"),
    height: hp("8.666666666666668%"),
    minHeight: hp("8.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.71428571428572%"),
    top: hp("81%")
  },
  ImageBackground_45_245: {
    width: wp("3.7142857142857144%"),
    height: hp("8.666666666666668%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_45_246: {
    width: wp("17.285714285714285%"),
    top: hp("1.6666666666666714%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.571428571428569%")
  },
  Text_45_246: {
    color: "rgba(0, 46, 130, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_45_247: {
    width: wp("2.571428571428571%"),
    height: hp("6%"),
    top: hp("1.3333333333333428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5714285714285552%")
  },
  View_46_3: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("22.666666666666664%"),
    minHeight: hp("22.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.571428571428571%"),
    top: hp("79.66666666666666%")
  },
  View_46_2: {
    width: wp("4.142857142857142%"),
    minWidth: wp("4.142857142857142%"),
    height: hp("9.666666666666666%"),
    minHeight: hp("9.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_45_207: {
    width: wp("4.142857142857142%"),
    height: hp("9.666666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_45_208: {
    width: wp("2.857142857142857%"),
    height: hp("6.666666666666667%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5714285714285712%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_45_209: {
    width: wp("2.3809525626046315%"),
    height: hp("5.277777671813965%"),
    top: hp("0.6944173177083428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.23809814453125%")
  },
  View_46_0: {
    width: wp("37.714285714285715%"),
    top: hp("2.000000000000014%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.285714285714285%")
  },
  Text_46_0: {
    color: "rgba(0, 46, 130, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_46_1: {
    width: wp("31.857142857142858%"),
    top: hp("67.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  Text_46_1: {
    color: "rgba(0, 46, 130, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
