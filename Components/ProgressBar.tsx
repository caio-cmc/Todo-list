import React, {useContext, useRef, useEffect} from "react";
import TodoContext from "../Context/TodoContext";
import { View, Text, StyleSheet, Animated } from "react-native";

function ProgressBar() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("Context error");
  }
  const { progress, darkMode, progColor, setProgColor } = context;

  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: progress,
      duration: 500,
      useNativeDriver: false,
    }).start();
    if (progress < 50) {
      setProgColor("#C40C0C");
    } else if (progress >= 50 && progress < 100) {
      setProgColor("#FFC100");
    } else {
      setProgColor("#00b140");
    }
  }, [progress]);

  const animatedWidth = progressAnim.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return(
    <View style={[ styles.container, { backgroundColor: darkMode ? '#2E073F' : '#16423C' } ]}>
      <View style={ styles.progContainer }>
        <Text style={ styles.progValue }>
          { progress }%
        </Text>
      </View>
      <View style={ styles.fullTrack }>
        <Animated.View style={[styles.progTrack, { width: animatedWidth, backgroundColor: progColor }]} /> 
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'red',
    height: 70,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  progContainer: {
    width: 70
  },
  progValue: {
    color: '#fff',
    marginRight: 10,
    fontSize: 20
  },
  fullTrack: {
    flex: 1,
    height: 5,
    width: '70%',
    borderRadius: 5,
    backgroundColor: 'grey'
  },
  progTrack: {
    height: 5,
  }
});


export default ProgressBar;