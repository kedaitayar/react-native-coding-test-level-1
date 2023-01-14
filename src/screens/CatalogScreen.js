import { ScrollView, StatusBar, View } from "react-native";
import { useGetPokemonListQuery } from "../services/pokemonApi";
import { useState } from "react";
import {
  ActivityIndicator,
  Button,
  Surface,
  Text,
  TouchableRipple,
} from "react-native-paper";
import MaterialCommunityIcon from "react-native-paper/src/components/MaterialCommunityIcon";

export function CatalogScreen({ navigation }) {
  const [page, setPage] = useState(1);
  const offset = (page - 1) * 10;
  const { data, isLoading } = useGetPokemonListQuery(offset);
  return (
    <ScrollView
      contentContainerStyle={[
        { flexGrow: 1, paddingTop: StatusBar.currentHeight },
      ]}
    >
      <View style={[{ flex: 1 }]}>
        <View style={[{ flex: 1, paddingHorizontal: 8 }]}>
          {data?.results?.map((value, index) => {
            return (
              <Surface
                key={index}
                elevation={1}
                style={[{ borderRadius: 8, marginBottom: 8, padding: 16 }]}
              >
                <Text
                  style={[
                    {
                      lineHeight: 28,
                      fontSize: 20,
                      letterSpacing: 0,
                      fontWeight: "400",
                      opacity: 0.87,
                      textTransform: "capitalize",
                    },
                  ]}
                >
                  {value.name}
                </Text>
                <Button
                  onPress={() => {
                    navigation.navigate("detail", {
                      id: value.url.substring(34).slice(0, -1),
                    });
                  }}
                >
                  View
                </Button>
              </Surface>
            );
          })}
        </View>
        {isLoading && <ActivityIndicator />}
        <View
          style={[
            {
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            },
          ]}
        >
          <TouchableRipple
            style={[{ padding: 8 }]}
            onPress={() => {
              if (page > 1) {
                setPage((prevState) => prevState - 1);
              }
            }}
          >
            <MaterialCommunityIcon
              name={"menu-left"}
              size={40}
              direction={"ltr"}
            />
          </TouchableRipple>
          <Text
            style={[{ fontSize: 22, paddingBottom: 4, paddingHorizontal: 16 }]}
          >
            {page}
          </Text>
          <TouchableRipple
            style={[{ padding: 8 }]}
            onPress={() => {
              setPage((prevState) => prevState + 1);
            }}
          >
            <MaterialCommunityIcon
              name={"menu-right"}
              size={40}
              direction={"ltr"}
            />
          </TouchableRipple>
        </View>
      </View>
    </ScrollView>
  );
}
