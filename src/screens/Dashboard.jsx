import React, {useState, useEffect} from 'react';
import { ScrollView, View, Text, VStack, HStack, Button, Center } from 'native-base';
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import theme from '../../theme/theme';
import { getAllStudentsAPI, getStudentAPI } from '../../api/api';

const Dashboard = () => {
  const [students, setStudents] = useState();

  useEffect(() => {
    const fetchStudents = async () => {
       const fetchedStudents = await getAllStudentsAPI();
       setStudents(fetchedStudents);
       console.log(students)
     };
    fetchStudents();
  }, []);

  const navigation = useNavigation();
  
  const handleStudentPress = async (id) => {
    const student = await getStudentAPI(id)
    navigation.navigate('StudentProfile', {student});
  };

  return (
    <>
    <Button
      onPress={()=> navigation.navigate('AddStudent')}
    >Add student</Button>
      <ScrollView bg={theme.colors.gray[50]} p={4}>
        <VStack space={8}>
          {students && students.map((student, index) => (
            <TouchableOpacity
              key={student.id}
              style={{
                paddingVertical: 12,
                paddingHorizontal: 16,
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 8,
                marginBottom: 8,
                flexDirection: 'row',
                alignItems: 'center',
              }}
              onPress={() => handleStudentPress(student.id)}
            >
              <HStack
                space={4}
              >
                <Center>
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
                        {student.first_name[0]}
                      </Text>
                  </View>
                </Center>
                <View>
                  <Text fontWeight="bold" fontSize={18} mb={1}>
                    {student.first_name} {student.last_name}
                  </Text>
                  <Text fontSize={16} color={theme.colors.gray[700]}>
                    Year: {student.year}
                  </Text>
                  <Text fontSize={16}>Behaviour: {student.behavior_score}</Text>
                </View>
              </HStack>
            </TouchableOpacity>
          ))}
        </VStack>
      </ScrollView>
    </>
  );
};



export default Dashboard;
