import { StyleSheet, Text, View } from "react-native";

function List({ data }) {
  return data.map((dataText) => (
    <View key={dataText} style={styles.listItem}>
      <Text style={styles.itemText}>{dataText}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});

export default List;
