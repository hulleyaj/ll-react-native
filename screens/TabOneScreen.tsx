import * as React from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Button, decrementAction, incrementAction } from 'll-pkg';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

function TabOneScreen({ decrementAction, count, incrementAction}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>

      <Button text="-" onClick={decrementAction} />
      <Text>{count}</Text>
      <Button text="+" onClick={incrementAction} />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.js" />
    </View>
  );
}

const mapStateToProps = (state) => ({
  count: state.counterReducer.count
})

const mapDispatchToProps = {
  decrementAction,
  incrementAction
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabOneScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
