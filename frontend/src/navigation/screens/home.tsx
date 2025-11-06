import { StyleSheet, ScrollView, View, ImageBackground, Text, TouchableOpacity, Image, TextInput, useWindowDimensions, StatusBar } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React, { useState }  from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function home() {
  const [showPopUp, setShowPopUp] = useState(false);
  const { width, height } = useWindowDimensions();
  const isPortrait = height > width;
  const navigation = useNavigation();

  const [phoneNumber, setPhoneNumber] = useState('');
  const handleConfirm = async () => {
    try {
      const response = await fetch("http://192.168.1.233:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: phoneNumber }),
      });

      const data = await response.json();
      if (data.success) {
        Alert.alert(
          "✅ Success",
          `Welcome ${data.user.name}`,
          [
            {
              text: "OK",
              onPress: () => {
                setShowPopUp(false); // close popup
                navigation.navigate("profile"); // go to Profile
              }
            }
          ],
          { cancelable: false }
        );
      } else {
        Alert.alert("⚠️ Error", data.message);
      }
    } catch (error) {
      console.error(error);
      Alert.alert("❌ Error", "Failed to connect to server");
    }
  };
  
  return (
    <SafeAreaView style={[ styles.body, isPortrait && styles.body_Portrait ]}>
      <StatusBar backgroundColor='black'/>
      <View style={[ styles.stickyTopNavigationBar, isPortrait && styles.stickyTopNavigationBar_Portrait ]}>
        <Image source={{ uri: 'https://winnie2802.github.io/mltechsoft-doiquakun-backend/kunLogo.png' }} style={[ styles.kunLogo, { cursor: 'pointer' }, isPortrait && styles.kunLogo_Portrait ]} resizeMode='stretch'></Image>
        
        <View style={[ styles.navigationText, isPortrait && styles.navigationText_Portrait ]}>
          <Text style={[ styles.navigationText1, { cursor: 'pointer' }, isPortrait && styles.navigationText1_Portrait ]} allowFontScaling={ false }>Chương trình đổi thưởng</Text>
          <Text style={[ styles.navigationText2, { cursor: 'pointer' }, isPortrait && styles.navigationText2_Portrait ]} allowFontScaling={ false } onPress={() => setShowPopUp(true)}>Quà siêu KUN</Text>
          <Text style={[ styles.navigationText3, { cursor: 'pointer' }, isPortrait && styles.navigationText3_Portrait ]} allowFontScaling={ false }>Liên hệ</Text>
        </View>

        <View style={[ styles.navigationIcon, isPortrait && styles.navigationIcon_Portrait ]}>
          <Ionicons name="person-sharp" color="white" style={[ styles.navigationIcon1, isPortrait && styles.navigationIcon1_Portrait ]} allowFontScaling={ false } onPress={() => setShowPopUp(true)}/>
          <MaterialIcons name="shopping-bag" color="white" style={[ styles.navigationIcon2, isPortrait && styles.navigationIcon2_Portrait ]} allowFontScaling={ false } onPress={() => setShowPopUp(true)}/>
        </View>
      </View>
      
      <ScrollView style={[ styles.scrollView, isPortrait && styles.scrollView_Portrait ]} showsVerticalScrollIndicator={ false }>
        <View>
          <ImageBackground source={{ uri: 'https://winnie2802.github.io/mltechsoft-doiquakun-backend/background1.png' }} style={[ styles.background1, isPortrait && styles.background1_Portrait ]} resizeMode='stretch'>
            <View style={[ styles.content1, isPortrait && styles.content1_Portrait ]}>
              <Text style={[ styles.text11, isPortrait && styles.text11_Portrait ]} allowFontScaling={ false }>SƯU TẬP THẺ SIÊU QUYỀN NĂNG</Text>
              <Text style={[ styles.text11, isPortrait && styles.text11_Portrait ]} allowFontScaling={ false }>ĐỔI QUÀ SIÊU KUN</Text>
              
              <Text style={[ styles.text12, isPortrait && styles.text12_Portrait ]} allowFontScaling={ false }>TRONG MỖI THÙNG KUN TƯƠI VUI 180ML</Text>
              
              <Text style={[ styles.text13, isPortrait && styles.text13_Portrait ]} allowFontScaling={ false }>Thời gian: 25/07 - 30/09/2021</Text>
              
              <TouchableOpacity style={[ styles.button1, isPortrait && styles.button1_Portrait ]} onPress={() => setShowPopUp(true)}>
                <Text style={[ styles.button1Text, isPortrait && styles.button1Text_Portrait ]} allowFontScaling={ false }>Sưu tập ngay</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>

        <View>
          <ImageBackground source={{ uri: 'https://winnie2802.github.io/mltechsoft-doiquakun-backend/background2.png' }} style={[ styles.background2, isPortrait && styles.background2_Portrait ]} resizeMode='stretch'>
            <View style={[ styles.content2, isPortrait && styles.content2_Portrait ]}>
              <Text style={[ styles.text21, isPortrait && styles.text21_Portrait ]} allowFontScaling={ false }>Thẻ Siêu Quyền Năng</Text>
              
              <Text style={[ styles.text22, isPortrait && styles.text22_Portrait ]} allowFontScaling={ false }>Tích Thẻ Siêu Quyền Năng để đổi quà yêu thích. Thời gian khuyến mãi từ 25/07 - 30/09/2021. Hạn chót đổi quà 10/10/2021. Thẻ trúng thưởng do IDP phát hành, phải còn nguyên vẹn, không rách nát, chắp vá, cạo sửa, bôi vẽ,...</Text>
              
              <TouchableOpacity style={[ styles.button2, isPortrait && styles.button2_Portrait ]}>
                <Text style={[ styles.button2Text, isPortrait && styles.button2Text_Portrait ]} allowFontScaling={ false }>Xem Chi Tiết Và Đổi Quà</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>

        <View>
          <ImageBackground source={{ uri: 'https://winnie2802.github.io/mltechsoft-doiquakun-backend/background3.png' }} style={[ styles.background3, isPortrait && styles.background3_Portrait ]} resizeMode='stretch'>
            <View style={[ styles.content3, isPortrait && styles.content3_Portrait ]}>
              <Text style={[ styles.text31, isPortrait && styles.text31_Portrait ]} allowFontScaling={ false }>BA BƯỚC ĐỔI QUÀ KUN</Text>
              
              <View style={[ styles.container31, isPortrait && styles.container31_Portrait ]}>
                <Image source={{ uri: 'https://winnie2802.github.io/mltechsoft-doiquakun-backend/onboarding_4_step1.png' }} style={[ styles.step, isPortrait && styles.step_Portrait ]} resizeMode='stretch'></Image>
                <Text style={[ styles.text32, isPortrait && styles.text32_Portrait ]} allowFontScaling={ false }>Đăng ký tài khoản bằng SĐT</Text>
              </View>
              
              <View style={[ styles.container32, isPortrait && styles.container32_Portrait ]}>
                <View style={[ styles.lineToStep, isPortrait && styles.lineToStep_Portrait ]}></View>
                <Text style={[ styles.text33, isPortrait && styles.text33_Portrait ]} allowFontScaling={ false }>Chỉ cần điền SĐT và nhập mật khẩu là bạn đã đăng ký tài khoản thành công</Text>
              </View>
              
              <View style={[ styles.container31, isPortrait && styles.container31_Portrait ]}>
                <Image source={{ uri: 'https://winnie2802.github.io/mltechsoft-doiquakun-backend/onboarding_4_step2.png' }} style={[ styles.step, isPortrait && styles.step_Portrait ]} resizeMode='stretch'></Image>
                <Text style={[ styles.text32, isPortrait && styles.text32_Portrait ]} allowFontScaling={ false }>Chọn quà KUN mà bạn muốn đổi thưởng</Text>
              </View>
              
              <View style={[ styles.container32, isPortrait && styles.container32_Portrait ]}>
                <View style={[ styles.lineToStep, isPortrait && styles.lineToStep_Portrait ]}></View>
                <Text style={[ styles.text33, isPortrait && styles.text33_Portrait ]} allowFontScaling={ false }>Nhập mã số trên mặt thẻ mà bạn sưu tập được. Tích lũy đủ số lượng thẻ cần thiết và chọn phần quà bạn muốn đổi thưởng.</Text>
              </View>
              
              <View style={[ styles.container31, isPortrait && styles.container31_Portrait ]}>
                <Image source={{ uri: 'https://winnie2802.github.io/mltechsoft-doiquakun-backend/onboarding_4_step3.png' }} style={[ styles.step, isPortrait && styles.step_Portrait ]} resizeMode='stretch'></Image>
                <Text style={[ styles.text32, isPortrait && styles.text32_Portrait ]} allowFontScaling={ false }>Điền thông tin và nhận quà</Text>
              </View>
              
              <View style={[ styles.container32, isPortrait && styles.container32_Portrait ]}>
                <View style={[ styles.lineToStep, isPortrait && styles.lineToStep_Portrait ]}></View>
                <Text style={[ styles.text33, isPortrait && styles.text33_Portrait ]} allowFontScaling={ false }>Sau khi bạn đã điền đầy đủ thông tin, chúng tôi sẽ xác nhận sự hợp lệ của những mã số và sẽ liên hệ lại với bạn trong thời gian sớm nhất.</Text>
              </View>
              
              <TouchableOpacity style={[ styles.button3, isPortrait && styles.button3_Portrait ]}>
                <Text style={[ styles.button3Text, isPortrait && styles.button3Text_Portrait ]} allowFontScaling={ false }>Đổi quà ngay</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>

        <View>
          <ImageBackground source={{ uri: 'https://winnie2802.github.io/mltechsoft-doiquakun-backend/background4.png' }} style={[ styles.background2, isPortrait && styles.background2_Portrait ]} resizeMode='stretch'>
            <View style={[ styles.content4, isPortrait && styles.content4_Portrait ]}>
              <Text style={[ styles.text41, isPortrait && styles.text41_Portrait ]} allowFontScaling={ false }>QUÀ SIÊU KUN</Text>
              
              <Text style={[ styles.text42, isPortrait && styles.text42_Portrait ]} allowFontScaling={ false }>Bạn chưa đăng nhập, hãy đăng nhập ngay để xem các phần quà nhé!</Text>
              
              <TouchableOpacity style={[ styles.button4, isPortrait && styles.button4_Portrait ]} onPress={() => setShowPopUp(true)}>
                <Text style={[ styles.button4Text, isPortrait && styles.button4Text_Portrait ]} allowFontScaling={ false }>Đăng nhập</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>

        <View>
          <ImageBackground source={{ uri: 'https://winnie2802.github.io/mltechsoft-doiquakun-backend/background5.png' }} style={[ styles.footer, isPortrait && styles.footer_Portrait ]} resizeMode='cover'>
            <View style={[ styles.content5, isPortrait && styles.content5_Portrait ]}>
              <Image source={{ uri: 'https://winnie2802.github.io/mltechsoft-doiquakun-backend/idpLogo.png' }} style={[ styles.idpLogo, isPortrait && styles.idpLogo_Portrait ]} resizeMode='stretch'></Image>
              
              <View style={[ styles.content51, isPortrait && styles.content51_Portrait ]}>
                <Text style={[ styles.text511, isPortrait && styles.text511_Portrait ]} allowFontScaling={ false }>CÔNG TY CỔ PHẦN SỮA QUỐC TẾ (IDP)</Text>
                
                <Text style={[ styles.text512, isPortrait && styles.text512_Portrait ]} allowFontScaling={ false }>Giấy CN ĐKDN số: 0500463609</Text>
                
                <Text style={[ styles.text512, isPortrait && styles.text512_Portrait ]} allowFontScaling={ false }>Cấp lần đầu ngày: 24/11/2014</Text>
                
                <Text style={[ styles.text512, isPortrait && styles.text512_Portrait ]} allowFontScaling={ false }>Nơi cấp: Sở KH và ĐT Thành phố Hà Nội</Text>
              </View>

              <View style={[ styles.content52, isPortrait && styles.content52_Portrait ]}>
                <View style={[ styles.content521, isPortrait && styles.content521_Portrait ]}>
                  <Text style={[ styles.text5211, { cursor: 'pointer' }, isPortrait && styles.text5211_Portrait ]} allowFontScaling={ false }>Chương trình đổi thưởng</Text>
                </View>

                <View style={[ styles.content522, isPortrait && styles.content522_Portrait ]}>
                  <Text style={[ styles.text5221, isPortrait && styles.text5221_Portrait ]} allowFontScaling={ false }>Chính sách</Text>
                  
                  <Text style={[ styles.text5222, { cursor: 'pointer' }, isPortrait && styles.text5222_Portrait ]} allowFontScaling={ false }>Cách đổi quà</Text>
                  
                  <Text style={[ styles.text5222, { cursor: 'pointer' }, isPortrait && styles.text5222_Portrait ]} allowFontScaling={ false }>Chính sách bảo mật</Text>
                </View>

                <View style={[ styles.content523, isPortrait && styles.content523_Portrait ]}>
                  <Text style={[ styles.text5231, isPortrait && styles.text5231_Portrait ]} allowFontScaling={ false }>Liên hệ</Text>
                  
                  <Text style={[ styles.text5232, { cursor: 'pointer' }, isPortrait && styles.text5232_Portrait ]} allowFontScaling={ false }>Hotline: 1900 633 571</Text>
                  
                  <View style={[ styles.container5, isPortrait && styles.container5_Portrait ]}>
                    <TouchableOpacity style={[ styles.buttonFb, isPortrait && styles.buttonFb_Portrait ]}><FontAwesome6 name="facebook-f" color="white" style={[ styles.iconFb, isPortrait && styles.iconFb_Portrait ]} allowFontScaling={ false }/></TouchableOpacity>
                    <TouchableOpacity style={[ styles.buttonYt, isPortrait && styles.buttonYt_Portrait ]}><FontAwesome6 name="youtube" color="white" style={[ styles.iconYt, isPortrait && styles.iconYt_Portrait ]} allowFontScaling={ false }/></TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={[ styles.content53, isPortrait && styles.content53_Portrait ]}>
                <Text style={[ styles.text531, isPortrait && styles.text531_Portrait ]} allowFontScaling={ false }>Địa chỉ</Text>
                
                <Text style={[ styles.text532, isPortrait && styles.text532_Portrait ]} allowFontScaling={ false }>HCM: 217 Nguyễn Văn Thủ, Phường Đakao, Quận 1, Hồ Chí Minh</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>

      { showPopUp && (
        <SafeAreaView style={[ styles.popUpBackground, isPortrait && styles.popUpBackground_Portrait ]}>
          <View style={[ styles.popUp, isPortrait && styles.popUp_Portrait ]}>
            <FontAwesome name='close' color='red' style={[ styles.popUpClose, { cursor: 'pointer' }, isPortrait && styles.popUpClose_Portrait ]} onPress={() => setShowPopUp(false)}/>

            <Text style={[ styles.popUpText, isPortrait && styles.popUpText_Portrait ]} allowFontScaling={ false }>Nhập số điện thoại</Text>

            <TextInput style={[ styles.popUpInput, isPortrait && styles.popUpInput_Portrait ]} allowFontScaling={ false } keyboardType="phone-pad" value={phoneNumber} onChangeText={setPhoneNumber}></TextInput>

            <TouchableOpacity style={[ styles.popUpButton, isPortrait && styles.popUpButton_Portrait ]} onPress={ handleConfirm }>
              <Text style={[ styles.popUpButtonText, isPortrait && styles.popUpButtonText_Portrait ]} allowFontScaling={ false }>Xác nhận</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      )}
    </SafeAreaView>
  );
};

const statusBarHeight = StatusBar.currentHeight;

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'black',
    
    flex: 1,
  },

  stickyTopNavigationBar: {
    backgroundColor: '#1b1464',
    
    width: '100%',
    height: 70,
    
    position: 'absolute',
    top: statusBarHeight,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',
    
    paddingLeft: 20,
    paddingRight: 20,
  },
    kunLogo: {
      width: 100,
      height: 50,
    },
    navigationText: {
      flexDirection: 'row',

      alignItems: 'center',

      gap: 40,
    },
      navigationText1: {
        color: 'white',

        fontSize: 12,
      },
      navigationText2: {
        color: 'white',

        fontSize: 12,
      },
      navigationText3: {
        color: 'white',

        fontSize: 12,
      },
    navigationIcon: {
      flexDirection: 'row',

      gap: 40,
    },
      navigationIcon1: {
        fontSize: 20,
      },
      navigationIcon2: {
        fontSize: 20,
      },

  scrollView: {
    marginTop: 70,
  },

  background1: {
    width: '100%',
    height: 400,
  },
    content1: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      right: 20,
      
      transform: [{ translateY: '-50%' }],
    },
      text11: {
        color: 'white',
        
        fontSize: 18,
        fontWeight: '900',

        textShadowColor: '#fdbd35',
        textShadowRadius: 10,

        textAlign: 'center',
      },
      text12: {
        color: 'white',
        
        fontSize: 16,
        fontWeight: '900',

        textShadowColor: '#fdbd35',
        textShadowRadius: 10,

        textAlign: 'center',

        marginTop: 10,
      },
      text13: {
        color: 'white',
        
        fontSize: 12,

        textAlign: 'center',

        marginTop: 10,
      },
      button1: {
        backgroundColor: '#fdbd35',

        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,

        borderRadius: 64,

        alignSelf: 'center',

        marginTop: 10,
      },
        button1Text: {
          color: 'white',

          fontSize: 12,
          fontWeight: 'bold',
        },

  background2: {
    width: '100%',
    height: 400,
  },
    content2: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      right: 20,

      transform: [{ translateY: '-50%' }],
    },
      text21: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      text22: {
        fontSize: 12,

        textAlign: 'justify',

        marginTop: 10,
      },
      button2: {
        backgroundColor: 'white',

        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,

        borderWidth: 1,
        borderColor: '#00aaec',
        borderRadius: 64,

        alignSelf: 'flex-start',

        marginTop: 30,
      },
        button2Text: {
          color: '#00aaec',

          fontSize: 12,
          fontWeight: 'bold',
        },

  background3: {
    width: '100%',
    height: 800,
  },
    content3: {
      position: 'absolute',
      top: '50%',
      left: 20,
      right: 20,
      
      transform: [{ translateY: '-50%' }],
    },
      text31: {
        color: 'white',
        
        fontSize: 18,
        fontWeight: '900',

        textShadowColor: '#fdbd35',
        textShadowRadius: 10,

        textAlign: 'center',

        marginBottom: 20,
      },
      container31: {
        flexDirection: 'row',

        alignItems: 'center',

        marginTop: 10,
      },
        step: {
          width: 50,
          height: 50,
        },
        text32: {
          color: 'white',

          fontSize: 16,
          fontWeight: 'bold',
          
          marginLeft: 10,
        },

      container32: {
        flexDirection: 'row',

        alignItems: 'center',

        marginTop: 10,
      },        
        lineToStep: {
          backgroundColor: '#fdbd35',

          width: 2,
          height: 70,

          borderRadius: 2,
          
          marginLeft: 25,
          marginRight: 25,
        },
        text33: {
          fontSize: 12,

          textAlign: 'justify',

          width: '40%',

          marginLeft: 10,
        },
      button3: {
        backgroundColor: '#fdbd35',

        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,

        borderRadius: 64,

        alignSelf: 'flex-start',

        marginTop: 10,
      },
        button3Text: {
          color: 'white',

          fontSize: 12,
          fontWeight: 'bold',
        },

  background4: {
    width: '100%',
    height: 400,
  },
    content4: {
      position: 'absolute',
      top: '50%',
      left: 20,
      right: 20,

      alignItems: 'center',
      
      transform: [{ translateY: '-50%' }],
    },
      text41: {
        color: '#fdbd35',
        
        fontSize: 18,
        fontWeight: '900',

        textAlign: 'center',
      },
      text42: {
        fontSize: 12,

        textAlign: 'justify',

        marginTop: 30,
      },
      button4: {
        backgroundColor: '#00aaec',

        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,

        borderRadius: 64,

        alignSelf: 'center',

        marginTop: 10,
      },
        button4Text: {
          color: 'white',

          fontSize: 12,
          fontWeight: 'bold',
        },

  footer: {
    width: '100%',
    height: 500,
  },
    content5: {
      position: 'absolute',
      left: 20,
      right: 20,
      bottom: 20,
    },
      idpLogo: {
        width: 50,
        height: 50,
      },
      content51: {
        marginTop: 20,
      },
        text511: {
          color: 'white',

          fontWeight: 'bold',
          fontSize: 12,

          marginBottom: 10,
        },
        text512: {
          color: 'white',

          fontSize: 12,

          marginTop: 10,
        },
      content52: {
        flexDirection: 'row',

        justifyContent: 'space-between',

        marginTop: 20,
      },
        content521: {

        },
          text5211: {
            color: 'white',

            fontWeight: 'bold',
            fontSize: 12,
          },
        content522: {
          
        },
          text5221: {
            color: 'white',

            fontWeight: 'bold',
            fontSize: 12,

            marginBottom: 10,
          },
          text5222: {
            color: 'white',

            fontSize: 12,

            marginTop: 10,
          },
        content523: {

        },
          text5231: {
            color: 'white',

            fontWeight: 'bold',
            fontSize: 12,

            marginBottom: 10,
          },
          text5232: {
            color: 'white',

            fontSize: 12,

            marginTop: 10,
          },
          container5: {
            flexDirection: 'row',
            gap: 20,

            marginTop: 10,
          },
            buttonFb: {
              backgroundColor: 'none',
              
              width: 40,
              height: 40,

              borderWidth: 1,
              borderColor: 'white',
              borderRadius: 60,

              alignItems: 'center',
              justifyContent: 'center',
            },
              iconFb: {
                fontSize: 20,
              },
            buttonYt: {
              backgroundColor: 'none',
              
              width: 40,
              height: 40,

              borderWidth: 1,
              borderColor: 'white',
              borderRadius: 60,

              alignItems: 'center',
              justifyContent: 'center',
            },
              iconYt: {
                fontSize: 20,
              },
      content53: {
        marginTop: 10,
      },
        text531: {
          color: 'white',

          fontWeight: 'bold',
          fontSize: 12,
        },
        text532: {
          color: 'white',

          fontSize: 12,

          marginTop: 10,
        },

  popUpBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',

    width: '100%',
    height: '100%',

    position: 'absolute',
    top: statusBarHeight,

    alignItems: 'center',

    justifyContent: 'center',
  },
    popUp: {
      backgroundColor: 'white',

      alignItems: 'center',

      borderRadius: 20,

      paddingTop: 60,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 20,
    },
      popUpClose: {
        fontSize: 20,

        position: 'absolute',
        top: 20,
        right: 20,
      },
      popUpText: {
        color: '#00aaec',

        fontWeight: 'bold',
        fontSize: 18,
      },
      popUpInput: {
        borderWidth: 1,
        borderColor: '#00aaec',
        borderRadius: 10,
        
        width: 300,

        fontSize: 12,

        paddingLeft: 10,

        marginTop: 10,
      },
      popUpButton: {
        backgroundColor: '#00aaec',
        
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,

        borderRadius: 64,

        marginTop: 10,
      },
        popUpButtonText: {
          color: 'white',

          fontWeight: 'bold',
          fontSize: 12,
        },










  body_Portrait: {
    backgroundColor: 'black',
    
    flex: 1,
  },

  stickyTopNavigationBar_Portrait: {
    backgroundColor: '#1b1464',
    
    width: '100%',
    height: 35,
    
    position: 'absolute',
    top: statusBarHeight,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',
    
    paddingLeft: 10,
    paddingRight: 10,

    marginLeft: 0,
  },
    kunLogo_Portrait: {
      width: 50,
      height: 25,
    },
    navigationText_Portrait: {
      flexDirection: 'row',

      alignItems: 'center',

      gap: 20,
    },
      navigationText1_Portrait: {
        color: 'white',

        fontSize: 6,
      },
      navigationText2_Portrait: {
        color: 'white',

        fontSize: 6,
      },
      navigationText3_Portrait: {
        color: 'white',

        fontSize: 6,
      },
    navigationIcon_Portrait: {
      flexDirection: 'row',

      gap: 20,
    },
      navigationIcon1_Portrait: {
        fontSize: 10,
      },
      navigationIcon2_Portrait: {
        fontSize: 10,
      },

  scrollView_Portrait: {
    marginTop: 35,
  },

  background1_Portrait: {
    width: '100%',
    height: 200,
  },
    content1_Portrait: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      right: 10,
      
      transform: [{ translateY: '-50%' }],
    },
      text11_Portrait: {
        color: 'white',
        
        fontSize: 9,
        fontWeight: '900',

        textShadowColor: '#fdbd35',
        textShadowRadius: 5,

        textAlign: 'center',
      },
      text12_Portrait: {
        color: 'white',
        
        fontSize: 8,
        fontWeight: '900',

        textShadowColor: '#fdbd35',
        textShadowRadius: 5,

        textAlign: 'center',

        marginTop: 5,
      },
      text13_Portrait: {
        color: 'white',
        
        fontSize: 6,

        textAlign: 'center',

        marginTop: 5,
      },
      button1_Portrait: {
        backgroundColor: '#fdbd35',

        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,

        borderRadius: 32,

        alignSelf: 'center',

        marginTop: 5,
      },
        button1Text_Portrait: {
          color: 'white',

          fontSize: 6,
          fontWeight: 'bold',
        },

  background2_Portrait: {
    width: '100%',
    height: 200,
  },
    content2_Portrait: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      right: 10,

      transform: [{ translateY: '-50%' }],
    },
      text21_Portrait: {
        fontSize: 9,
        fontWeight: 'bold',
      },
      text22_Portrait: {
        fontSize: 6,

        textAlign: 'justify',

        marginTop: 5,
      },
      button2_Portrait: {
        backgroundColor: 'white',

        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,

        borderWidth: 0.5,
        borderColor: '#00aaec',
        borderRadius: 32,

        alignSelf: 'flex-start',

        marginTop: 15,
      },
        button2Text_Portrait: {
          color: '#00aaec',

          fontSize: 6,
          fontWeight: 'bold',
        },

  background3_Portrait: {
    width: '100%',
    height: 400,
  },
    content3_Portrait: {
      position: 'absolute',
      top: '50%',
      left: 10,
      right: 10,
      
      transform: [{ translateY: '-50%' }],
    },
      text31_Portrait: {
        color: 'white',
        
        fontSize: 9,
        fontWeight: '900',

        textShadowColor: '#fdbd35',
        textShadowRadius: 5,

        textAlign: 'center',

        marginBottom: 10,
      },
      container31_Portrait: {
        flexDirection: 'row',

        alignItems: 'center',

        marginTop: 5,
      },
        step_Portrait: {
          width: 25,
          height: 25,
        },
        text32_Portrait: {
          color: 'white',

          fontSize: 8,
          fontWeight: 'bold',
          
          marginLeft: 5,
        },

      container32_Portrait: {
        flexDirection: 'row',

        alignItems: 'center',

        marginTop: 5,
      },        
        lineToStep_Portrait: {
          backgroundColor: '#fdbd35',

          width: 1,
          height: 35,

          borderRadius: 1,
          
          marginLeft: 12.5,
          marginRight: 12.5,
        },
        text33_Portrait: {
          fontSize: 6,

          textAlign: 'justify',

          width: '40%',

          marginLeft: 5,
        },
      button3_Portrait: {
        backgroundColor: '#fdbd35',

        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,

        borderRadius: 32,

        alignSelf: 'flex-start',

        marginTop: 5,
      },
        button3Text_Portrait: {
          color: 'white',

          fontSize: 6,
          fontWeight: 'bold',
        },

  background4_Portrait: {
    width: '100%',
    height: 200,
  },
    content4_Portrait: {
      position: 'absolute',
      top: '50%',
      left: 10,
      right: 10,

      alignItems: 'center',
      
      transform: [{ translateY: '-50%' }],
    },
      text41_Portrait: {
        color: '#fdbd35',
        
        fontSize: 9,
        fontWeight: '900',

        textAlign: 'center',
      },
      text42_Portrait: {
        fontSize: 6,

        textAlign: 'justify',

        marginTop: 15,
      },
      button4_Portrait: {
        backgroundColor: '#00aaec',

        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,

        borderRadius: 32,

        alignSelf: 'center',

        marginTop: 5,
      },
        button4Text_Portrait: {
          color: 'white',

          fontSize: 6,
          fontWeight: 'bold',
        },

  footer_Portrait: {
    width: '100%',
    height: 250,
  },
    content5_Portrait: {
      position: 'absolute',
      left: 10,
      right: 10,
      bottom: 10,
    },
      idpLogo_Portrait: {
        width: 25,
        height: 25,
      },
      content51_Portrait: {
        marginTop: 10,
      },
        text511_Portrait: {
          color: 'white',

          fontWeight: 'bold',
          fontSize: 6,

          marginBottom: 5,
        },
        text512_Portrait: {
          color: 'white',

          fontSize: 6,

          marginTop: 5,
        },
      content52_Portrait: {
        flexDirection: 'row',

        justifyContent: 'space-between',

        marginTop: 10,
      },
        content521_Portrait: {

        },
          text5211_Portrait: {
            color: 'white',

            fontWeight: 'bold',
            fontSize: 6,
          },
        content522_Portrait: {
          
        },
          text5221_Portrait: {
            color: 'white',

            fontWeight: 'bold',
            fontSize: 6,

            marginBottom: 5,
          },
          text5222_Portrait: {
            color: 'white',

            fontSize: 6,

            marginTop: 5,
          },
        content523_Portrait: {

        },
          text5231_Portrait: {
            color: 'white',

            fontWeight: 'bold',
            fontSize: 6,

            marginBottom: 5,
          },
          text5232_Portrait: {
            color: 'white',

            fontSize: 6,

            marginTop: 5,
          },
          container5_Portrait: {
            flexDirection: 'row',
            gap: 10,

            marginTop: 5,
          },
            buttonFb_Portrait: {
              backgroundColor: 'none',
              
              width: 20,
              height: 20,

              borderWidth: 0.5,
              borderColor: 'white',
              borderRadius: 30,

              alignItems: 'center',
              justifyContent: 'center',
            },
              iconFb_Portrait: {
                fontSize: 10,
              },
            buttonYt_Portrait: {
              backgroundColor: 'none',
              
              width: 20,
              height: 20,

              borderWidth: 0.5,
              borderColor: 'white',
              borderRadius: 30,

              alignItems: 'center',
              justifyContent: 'center',
            },
              iconYt_Portrait: {
                fontSize: 10,
              },
      content53_Portrait: {
        marginTop: 5,
      },
        text531_Portrait: {
          color: 'white',

          fontWeight: 'bold',
          fontSize: 6,
        },
        text532_Portrait: {
          color: 'white',

          fontSize: 6,

          marginTop: 5,
        },

  popUpBackground_Portrait: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',

    width: '100%',
    height: '100%',

    position: 'absolute',

    alignItems: 'center',

    justifyContent: 'center',
  },
    popUp_Portrait: {
      backgroundColor: 'white',

      alignItems: 'center',

      borderRadius: 20,

      paddingTop: 60,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 20,
    },
      popUpClose_Portrait: {
        fontSize: 20,

        position: 'absolute',
        top: 20,
        right: 20,
      },
      popUpText_Portrait: {
        color: '#00aaec',

        fontWeight: 'bold',
        fontSize: 18,
      },
      popUpInput_Portrait: {
        borderWidth: 1,
        borderColor: '#00aaec',
        borderRadius: 10,
        
        width: 300,

        fontSize: 12,

        paddingLeft: 10,

        marginTop: 10,
      },
      popUpButton_Portrait: {
        backgroundColor: '#00aaec',
        
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,

        borderRadius: 64,

        marginTop: 10,
      },
        popUpButtonText_Portrait: {
          color: 'white',

          fontWeight: 'bold',
          fontSize: 12,
        },
});