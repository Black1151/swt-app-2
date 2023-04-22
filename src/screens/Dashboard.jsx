import React from 'react';
import { ScrollView, View, Text, VStack, HStack } from 'native-base';
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import theme from '../../theme/theme';

const students = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    grade: 'A',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    grade: 'B',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    grade: 'C',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Alice Brown',
    email: 'alice.brown@example.com',
    grade: 'A',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    name: 'Tom Lee',
    email: 'tom.lee@example.com',
    grade: 'B',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    name: 'Sara Jones',
    email: 'sara.jones@example.com',
    grade: 'C',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 7,
    name: 'David Kim',
    email: 'david.kim@example.com',
    grade: 'B',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 8,
    name: 'Emily Chang',
    email: 'emily.chang@example.com',
    grade: 'C',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 9,
    name: 'Mike Smith',
    email: 'mike.smith@example.com',
    grade: 'A',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 10,
    name: 'Jessica Lee',
    email: 'jessica.lee@example.com',
    grade: 'B',
    photo: 'https://via.placeholder.com/150',
  },
];


const Dashboard = () => {
  const navigation = useNavigation();

  const handleStudentPress = (id) => {
    navigation.navigate('StudentProfile');
  };

  return (
    <ScrollView bg={theme.colors.gray[50]} p={4}>
      <VStack space={8}>
        {students.map((student, index) => (
          <TouchableOpacity
            key={student.id}
            style={{
              backgroundColor: index % 2 === 0 ? 'white' : theme.colors.gray[50],
              paddingVertical: 12,
              paddingHorizontal: 16,
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 8,
              marginBottom: 8,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            onPress={() => handleStudentPress(student.id)}
          >
            <HStack>
              <View
                bg={theme.colors.primary[500]}
                borderRadius={25}
                width={50}
                height={50}
                alignItems="center"
                justifyContent="center"
                mr={3}
              >
                <Text fontSize={20} color="white">
                  {student.name[0]}
                </Text>
              </View>
              <View>
                <Text fontWeight="bold" fontSize={18} mb={1}>
                  {student.name}
                </Text>
                <Text fontSize={16} color={theme.colors.gray[700]} mb={1}>
                  {student.email}
                </Text>
                <Text fontSize={16} color={theme.colors.gray[700]}>
                  Grade: {student.grade}
                </Text>
              </View> 
            </HStack>
          </TouchableOpacity>
        ))}
      </VStack>
    </ScrollView>
  );
};



export default Dashboard;
