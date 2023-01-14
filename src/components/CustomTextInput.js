import { View } from "react-native";
import { HelperText, TextInput } from "react-native-paper";

export function CustomTextInput({ label, state, name, dispatch }) {
  return (
    <View>
      <TextInput
        label={label}
        value={state[name]}
        onChangeText={(text) => {
          dispatch({
            type: "onChange",
            payload: { field: name, value: text },
          });
        }}
        error={state.error[name].length > 0}
      />
      <HelperText type={"error"} visible={state.error[name].length > 0}>
        {state.error[name]}
      </HelperText>
    </View>
  );
}
