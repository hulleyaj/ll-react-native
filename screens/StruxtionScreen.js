import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { Card } from 'react-native-paper';

const AboutYou = ({ nextStep }) => {
  const [authorized, setAuthorized] = useState('');

  return <Card style={styles.card} elevation={3}>
    <Text style={styles.cardHeader}>Tell Us About You...</Text>
    <TextInput editable placeholder="First Name" placeholderTextColor="#1B75BA" style={styles.textInput} />
    <TextInput editable placeholder="Last Name" placeholderTextColor="#1B75BA" style={styles.textInput} />
    <TextInput editable placeholder="Phone Number" placeholderTextColor="#1B75BA" style={styles.textInput} />
    <TextInput editable placeholder="Title" placeholderTextColor="#1B75BA" style={styles.textInput} />
    <Text>Are you authorized to sign on behalf of your company?</Text>
    <View style={styles.authorizedContainer}>
      <Button title="No" onPress={() => setAuthorized('No')} color={authorized == 'No' ? '#1B75BA' : 'grey'} />
      <Button title="Yes" onPress={() => setAuthorized('Yes')} color={authorized == 'Yes' ? '#1B75BA' : 'grey'} />
    </View>
    <Button title="Continue" color="#27B373" onPress={nextStep} />
  </Card>
};

const AboutCompany = ({ nextStep }) => {

  return <Card style={styles.card} elevation={3}>
    <Text style={styles.cardHeader}>Tell Us About Your Company...</Text>
    <TextInput editable placeholder="Company Name" placeholderTextColor="#1B75BA" style={styles.textInput} />
    <TextInput editable placeholder="EIN" placeholderTextColor="#1B75BA" style={styles.textInput} />
    <TextInput editable placeholder="Annual Revenue" placeholderTextColor="#1B75BA" style={styles.textInput} />
    <TextInput editable placeholder="Title" placeholderTextColor="#1B75BA" style={styles.textInput} />
    <Button title="NEXT" color="#27B373" onPress={nextStep}/>
  </Card>
};

const WhichStep = ({step, nextStep}) => {
  switch (step) {
    case 0: {
      return <AboutYou nextStep={nextStep} />
    }
    case 1: {
      return <AboutCompany nextStep={nextStep} />
    }
  }
};

const StruxtionScreen = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep(step + 1);

  return (
    <View style={styles.container}>
      <WhichStep step={step} nextStep={nextStep} />
    </View>
  );
}

export default StruxtionScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5ECF2',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20
  },
  card: {
    borderRadius: 0,
    padding: 50
  },
  cardHeader: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 50,
  },
  textInput: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginBottom: 30,
  },
  authorizedContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
    marginBottom: 30
  }
});
