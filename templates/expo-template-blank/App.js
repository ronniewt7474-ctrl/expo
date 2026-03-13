import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from "react-native";

export default function App() {

const [rise, setRise] = useState("");
const [run, setRun] = useState("");
const [steps, setSteps] = useState("");
const [result, setResult] = useState("");

const calculateStairs = () => {
  const r = parseFloat(rise);
  const rn = parseFloat(run);
  const s = parseFloat(steps);

  if (!r || !rn || !s) {
    setResult("Enter numbers in all fields");
    return;
  }

  const risePerStep = r / s;
  const runPerStep = rn / s;

  setResult(
`Stair Layout

Total Rise: ${r}"
Total Run: ${rn}"
Steps: ${s}

Rise per Step: ${risePerStep.toFixed(2)}"
Run per Step: ${runPerStep.toFixed(2)}"

Mark each step the same.`
  );
};

return (
<ScrollView style={styles.container}>

<Text style={styles.title}>Fabricator Layout Toolbox</Text>

<Text style={styles.label}>Total Rise (inches)</Text>
<TextInput
style={styles.input}
keyboardType="numeric"
value={rise}
onChangeText={setRise}
/>

<Text style={styles.label}>Total Run (inches)</Text>
<TextInput
style={styles.input}
keyboardType="numeric"
value={run}
onChangeText={setRun}
/>

<Text style={styles.label}>Number of Steps</Text>
<TextInput
style={styles.input}
keyboardType="numeric"
value={steps}
onChangeText={setSteps}
/>

<Button title="Calculate Stair Layout" onPress={calculateStairs} />

<Text style={styles.result}>{result}</Text>

</ScrollView>
);
}

const styles = StyleSheet.create({
container:{
padding:30,
marginTop:40
},
title:{
fontSize:24,
fontWeight:"bold",
marginBottom:20
},
label:{
marginTop:10
},
input:{
borderWidth:1,
padding:10,
marginTop:5
},
result:{
marginTop:20,
fontSize:16
}
});
