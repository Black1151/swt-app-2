import React, { useState, useEffect } from 'react';
import { ScrollView, VStack, HStack, Text, Heading, Badge, Button, Input } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/core';
import theme from '../../theme/theme';
import { addGoalAPI, getAllGoalsAPI } from '../../api/api';
import { TouchableOpacity } from 'react-native';
import GoalStatusWidget from '../components/goals/GoalStatusWidget';

const StudentProfile = () => {
  const navigation = useNavigation();
  const { student } = useRoute().params;
  const [newGoal, setNewGoal] = useState('');
  const [goalList, setGoalList] = useState([]);

  const handleAddGoal = async () => {
    await addGoalAPI(student.id, newGoal);
    setNewGoal('');
    getGoals();
  };

  const getGoals = async () => {
    let _goals = await getAllGoalsAPI(student.id);
    setGoalList(_goals);
  };

  useEffect(() => {
    getGoals();
  }, []);

  return (
    <VStack flex={1}>
      <VStack p={4} flex={1} space={2}s>
        <Heading size="xl">{student.first_name} {student.last_name}</Heading>
        <Text fontSize="md">Year: {student.year}</Text>
        <Text pb={4} fontSize="md">Student behaviour: {student.behavior_score}</Text>
        <Heading size="md">Goals:</Heading>
        <ScrollView flex={1}>
          <VStack space={8}>
            {goalList[0] ? goalList.map((goal, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate('Goal Details', { goal })}
              >
                <HStack
                  alignItems="center"
                  justifyContent="space-between"
                  borderWidth={1}
                  borderColor={theme.colors.gray[300]}
                  borderRadius={4}
                  p={4}
                  bg="white"
                >
                  {console.log(goal.status)}
                  <Text fontSize="md">{goal.title}</Text>
                  <GoalStatusWidget status={goal.status} />
                </HStack>
              </TouchableOpacity>
            )) : <Text>No goals set, please add below</Text>}
          </VStack>
        </ScrollView>
      </VStack>
      <VStack roundedTop={30} bg="primary.100" p={4} >
        <Text fontSize="md" mb={2}>Add a new goal</Text>
        <Input bg="white" value={newGoal} onChangeText={setNewGoal} mb={4} />
        { newGoal !== "" && <Button colorScheme="primary" onPress={handleAddGoal} >
          Add Goal
        </Button>}
      </VStack>
    </VStack>
  );
};

export default StudentProfile;
