// import React, { Component } from "react";
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
// } from "react-native";

// const Small_header = ({
//   navigation,
//   // props,
//   leftsideicon,
//   lefticonpress,
//   rightsideicon,
//   righticonpress,
//   leftsidetext,
//   rightsidetext,
//   righttextpress,
// }) => {
//   return (
//     <View style={styles.header_view}>
//       <View style={{ flexDirection: "row", alignItems: "center" }}>
//         <TouchableOpacity onPress={lefticonpress}>
//           <Image source={leftsideicon} style={styles.icons} />
//         </TouchableOpacity>
//         <Text style={[styles.normal_text, { left: 10 }]}>{leftsidetext}</Text>
//       </View>

//       {rightsideicon ? (
//         <TouchableOpacity onPress={righticonpress}>
//           <Image source={rightsideicon} style={styles.icons} />
//         </TouchableOpacity>
//       ) : (
//         <TouchableOpacity onPress={righttextpress}>
//           <Text style={[styles.normal_text]}>{rightsidetext}</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   header_view: {
//     height: 50,
//     width: "100%",
//     backgroundColor: "#31323B",
//     paddingHorizontal: "5%",
//     alignItems: "center",
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   normal_text: {
//     color: "#F79535",
//     fontSize: 16,
//     fontFamily: "Montserrat-Regular",
//   },
//   icons: {
//     width: 20,
//     height: 20,
//     alignSelf: "center",
//     resizeMode: "contain",
//   },
// });
// export default Small_header;
