import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import {
  Button,
  HelperText,
  Modal,
  Portal,
  Surface,
  TextInput,
  TouchableRipple,
} from "react-native-paper";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { useReducer, useState } from "react";
import moment from "moment";
import { CustomTextInput } from "../components/CustomTextInput";
import { validateEmail } from "../utils/utils";
import { TextTitleLarge } from "../components/text/TextTitleLarge";
import { TextTitleMedium } from "../components/text/TextTitleMedium";

function reducer(state, action) {
  switch (action.type) {
    case "reset":
      return {
        ...action.payload,
      };
    case "onChange":
      return {
        ...state,
        value: {
          ...state.value,
          [action.payload.field]: action.payload.value,
        },
        error: {
          ...state.error,
          [action.payload.field]: "",
        },
      };
    case "onError":
      return {
        ...state,
        error: {
          ...state.error,
          [action.payload.field]: action.payload.value,
        },
      };
    case "clearError":
      return {
        ...state,
        error: {
          name: "",
          email: "",
          birthday: "",
        },
      };
  }
}

export function ContactUsScreen() {
  const [isBirthdayPickerVisible, setIsBirthdayPickerVisible] = useState(false);
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [state, dispatch] = useReducer(reducer, {
    value: {
      name: "",
      email: "",
      birthday: new Date(),
    },
    error: {
      name: "",
      email: "",
      birthday: "",
    },
  });

  const onSubmitHandler = () => {
    let isError = false;

    if (state.value.name.length === 0) {
      isError = true;
      dispatch({
        type: "onError",
        payload: {
          field: "name",
          value: "Name field is mandatory",
        },
      });
    }
    if (!/[a-zA-Z]/.test(state.value.name)) {
      isError = true;
      dispatch({
        type: "onError",
        payload: {
          field: "name",
          value: "Name field must contain letter only",
        },
      });
    }

    if (state.value.name.length > 50) {
      isError = true;
      dispatch({
        type: "onError",
        payload: {
          field: "name",
          value: "Name field cannot have more than 50 characters",
        },
      });
    }

    if (state.value.email.length === 0) {
      isError = true;
      dispatch({
        type: "onError",
        payload: {
          field: "email",
          value: "Email field is mandatory",
        },
      });
    }
    if (!validateEmail(state.value.email)) {
      isError = true;
      dispatch({
        type: "onError",
        payload: {
          field: "email",
          value: "Email field must be a valid email",
        },
      });
    }

    if (!isError) {
      setIsPopUpVisible(true);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={[
        { flexGrow: 1, paddingTop: StatusBar.currentHeight },
      ]}
    >
      <View style={[{ paddingHorizontal: 16, paddingTop: 24, flex: 1 }]}>
        <View
          style={[{ flex: 1, justifyContent: "center", alignItems: "center" }]}
        >
          <TextTitleLarge>Contact Us</TextTitleLarge>
        </View>
        <View style={[{ flex: 1 }]}>
          <CustomTextInput
            label={"Name"}
            name={"name"}
            state={state}
            dispatch={dispatch}
          />
          <CustomTextInput
            label={"Email"}
            name={"email"}
            state={state}
            dispatch={dispatch}
          />
          <TouchableRipple
            onPress={() => {
              setIsBirthdayPickerVisible(true);
            }}
          >
            <View pointerEvents={"box-only"}>
              <TextInput
                label={"Birthday"}
                value={moment(state.value.birthday).format("D/M/YYYY")}
                error={state.error.birthday.length > 0}
              />
            </View>
          </TouchableRipple>
          <HelperText type={"error"} visible={state.error.birthday.length > 0}>
            {state.error.birthday}
          </HelperText>
          {isBirthdayPickerVisible && (
            <RNDateTimePicker
              mode={"date"}
              value={state.value.birthday}
              onChange={(event, date) => {
                setIsBirthdayPickerVisible(false);
                dispatch({
                  type: "onChange",
                  payload: { field: "birthday", value: date },
                });
              }}
              maximumDate={new Date()}
            />
          )}
          <Button onPress={onSubmitHandler}>Submit</Button>
        </View>
      </View>
      <Portal>
        <Modal
          visible={isPopUpVisible}
          onDismiss={() => {
            setIsPopUpVisible(false);
          }}
        >
          <Surface
            style={[{ marginHorizontal: 24, borderRadius: 8, padding: 24 }]}
          >
            <View style={[styles.popUpDisplayContainer]}>
              <TextTitleLarge>Name</TextTitleLarge>
              <TextTitleMedium>{state.value.name}</TextTitleMedium>
            </View>
            <View style={[styles.popUpDisplayContainer]}>
              <TextTitleLarge>Email</TextTitleLarge>
              <TextTitleMedium>{state.value.email}</TextTitleMedium>
            </View>
            <View style={[styles.popUpDisplayContainer]}>
              <TextTitleLarge>Birthday</TextTitleLarge>
              <TextTitleMedium>
                {moment(state.value.birthday).format("D/M/YYYY")}
              </TextTitleMedium>
            </View>
            <Button
              style={[{ marginTop: 24 }]}
              onPress={() => {
                setIsPopUpVisible(false);
              }}
            >
              Done
            </Button>
          </Surface>
        </Modal>
      </Portal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  popUpDisplayContainer: {
    paddingVertical: 4,
  },
});
