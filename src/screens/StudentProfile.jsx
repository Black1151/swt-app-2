import React, { useState, useEffect } from 'react';
import { ScrollView, VStack, HStack, Text, Heading, Badge, Button, Input } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/core';
import theme from '../../theme/theme';
import { addGoalAPI, getAllGoalsAPI } from '../../api/api';
import { TouchableOpacity } from 'react-native'


const StudentProfile = () => {
  const navigation = useNavigation();
  const { student } = useRoute().params;
  const [newGoal, setNewGoal] = useState('');
  const [goalList, setGoalList] = useState([]);

  const handleAddGoal = async () => {
    addGoalAPI(student.id, newGoal)
    setNewGoal('');
    const updatedGoals = await getAllGoalsAPI(student.id);
    setGoalList(updatedGoals);
  };

  useEffect(() => {
    const getGoals = async () => {
      let _goals = await getAllGoalsAPI(student.id);
      setGoalList(_goals); 
    };
    getGoals(); 
  }, []);

  return (
    <ScrollView>
      <VStack p={4} space={4}>
        <Heading size="xl">{student.first_name} {student.last_name}</Heading>
        <Text fontSize="md">Year: {student.year}</Text>
        <Text
          fontSize="md"
        >Student behaviour: {student.behavior_score}</Text>
        <Heading size="md">Goals:</Heading>
        <VStack space={2} divider={<Text fontSize="sm">|</Text>}>
        {goalList[0] ? goalList.map((goal, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('StudentGoal', { goal })}
          >
            <HStack
              alignItems="center"
              justifyContent="space-between"
            >
              <Text fontSize="md">{goal.title}</Text>
              <Badge variant="solid" colorScheme={theme.colors.primary[500]}>
                {goal.status}
              </Badge>
            </HStack>
          </TouchableOpacity>
        )) : <Text>No goals set, please add below</Text>
        }
        </VStack>
        <Input
          placeholder="Goal to add"
          value={newGoal}
          onChangeText={setNewGoal}
          mb={4}
        />
        <Button colorScheme="primary" onPress={handleAddGoal}>
          Add Goal
        </Button>
      </VStack>
    </ScrollView>
  );
};

export default StudentProfile;
