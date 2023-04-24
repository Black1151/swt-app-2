import React, {useState, useEffect} from 'react';
import { ScrollView, View, Text, VStack, HStack, Button } from 'native-base';
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import theme from '../../theme/theme';
import { addStudent, getAllStudentsAPI } from '../../api/api';


const Dashboard = () => {
  const [students, setStudents] = useState();

  useEffect(() => {
    const fetchStudents = async () => {
       const fetchedStudents = await getAllStudentsAPI();
       setStudents(fetchedStudents);
     };
    fetchStudents();
  }, []);

  const navigation = useNavigation();
  
  const handleStudentPress = (id) => {
    navigation.navigate('StudentProfile');
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
                    {student.first_name[0]}
                  </Text>
                </View>
                <View>
                  <Text fontWeight="bold" fontSize={18} mb={1}>
                    {student.first_name}
                  </Text>
                  <Text fontSize={16} color={theme.colors.gray[700]} mb={1}>
                    {student.last_name}
                  </Text>
                  <Text fontSize={16} color={theme.colors.gray[700]}>
                    Year: {student.year}
                  </Text>
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
