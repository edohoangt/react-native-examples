import { StyleSheet, View, FlatList, Button } from "react-native";
import { useState } from "react";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setGoals((currGoals) => [
      ...currGoals,
      { id: Math.random().toString(), text: enteredGoalText },
    ]);
    setModalVisible(false);
  }

  function deleteGoalHandler(id) {
    setGoals((currGoals) => {
      return currGoals.filter((goal) => goal.id != id);
    });
  }

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#e28372"
          onPress={() => {
            setModalVisible(true);
          }}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modalVisible}
          onCancel={() => setModalVisible(false)}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDeleteItem={deleteGoalHandler}
                  id={itemData.item.id}
                />
              );
            }}
            alwaysBounceVertical={false}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 6,
    marginTop: 20,
  },
});
