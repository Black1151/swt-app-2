import React from 'react';
import { ScrollView, VStack, HStack, Text, Heading, Badge, Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import theme from '../../theme/theme';

const StudentProfile = () => {
  const navigation = useNavigation();
  const student = {
    name: 'John Doe',
    year: 'Senior',
    goals: [
      { id: 1, title: 'Improve my grades', status: 'In Progress' },
      { id: 2, title: 'Get more involved in clubs', status: 'Not Started' },
      { id: 3, title: 'Build a portfolio', status: 'Completed' },
    ],
  };

  return (
    <ScrollView>
      <VStack p={4} space={4}>
        <Heading size="xl">{student.name}</Heading>
        <Text fontSize="md">{student.year}</Text>
        <Heading size="md">Goals:</Heading>
        <VStack space={2} divider={<Text fontSize="sm">|</Text>}>
          {student.goals.map((goal, index) => (
            <HStack
              key={index}
              alignItems="center"
              justifyContent="space-between"
              onPress={() => navigation.navigate('GoalDetails', { goal })}
            >
              <Text fontSize="md">{goal.title}</Text>
              <Badge variant="solid" colorScheme={theme.colors.primary[500]}>
                {goal.status}
              </Badge>
            </HStack>
          ))}
        </VStack>
        <Button colorScheme="primary" onPress={() => navigation.navigate('AddGoal')}>
          Add Goal
        </Button>
      </VStack>
    </ScrollView>
  );
};

export default StudentProfile;
