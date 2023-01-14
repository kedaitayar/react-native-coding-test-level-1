import { Image, ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { useGetPokemonDetailQuery } from "../services/pokemonApi";
import { ActivityIndicator, Surface } from "react-native-paper";
import { TextHeadlineSmall } from "../components/TextHeadlineSmall";
import { TextLabelLarge } from "../components/TextLabelLarge";
import { TextBodyLarge } from "../components/TextBodyLarge";

export function DetailScreen({ route }) {
  const { data, isLoading } = useGetPokemonDetailQuery(route.params.id);
  return (
    <ScrollView
      contentContainerStyle={[
        { flexGrow: 1, paddingTop: StatusBar.currentHeight },
      ]}
    >
      <View style={[styles.center]}>
        {isLoading && <ActivityIndicator />}
        <Image
          source={{ uri: data?.sprites?.front_default }}
          style={[{ height: 240, width: 240 }]}
        />
        <TextHeadlineSmall style={[{ textTransform: "capitalize" }]}>
          {data?.name}
        </TextHeadlineSmall>
        <TextLabelLarge style={[{ marginTop: 16 }]}>Types</TextLabelLarge>
        <View style={[{ flexDirection: "row" }, styles.center]}>
          {data?.types?.map((value, index) => {
            return (
              <View key={index} style={[{ paddingHorizontal: 4 }]}>
                <TextBodyLarge style={[{ textTransform: "capitalize" }]}>
                  {value?.type?.name}
                </TextBodyLarge>
              </View>
            );
          })}
        </View>
        <View style={[styles.center]}>
          <TextLabelLarge style={[{ marginTop: 16 }]}>Weight</TextLabelLarge>
          <TextBodyLarge>{data?.weight}</TextBodyLarge>
        </View>
        <TextLabelLarge style={[{ marginTop: 16 }]}>Base Stats</TextLabelLarge>
        <View
          style={[{ flexDirection: "row", flexWrap: "wrap" }, styles.center]}
        >
          {data?.stats?.map((value, index) => {
            return (
              <Surface
                key={index}
                style={[
                  {
                    paddingHorizontal: 16,
                    paddingVertical: 8,
                    minWidth: 100,
                    marginHorizontal: 8,
                    marginVertical: 4,
                    borderRadius: 8,
                  },
                  styles.center,
                ]}
              >
                <TextLabelLarge style={[{ textTransform: "capitalize" }]}>
                  {value?.stat?.name}
                </TextLabelLarge>
                <TextBodyLarge>{value?.base_stat}</TextBodyLarge>
              </Surface>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});
