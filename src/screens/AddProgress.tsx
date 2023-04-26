import React, { useState } from 'react';
import {
  VStack,
  Box,
  FormControl,
  Input,
  TextArea,
  Button,
  Heading,
} from 'native-base';
import { addEvidenceAPI } from '../../api/api';
import { useRoute, RouteProp } from '@react-navigation/native';
import { Goals } from '../types/types';

const AddProgress = () => {
  const [comment, setComment] = useState('');
  const [staffMember, setStaffMember] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [goalId, setGoalId] = useState('');

  const { goal } = useRoute<RouteProp<Record<string, Goals>, string>>().params;

  console.log()

  const handleAddProgress = () => {
    const progressData = {
      goalId,
      comment,
      staffMember,
      imageLink,
    };

    addEvidenceAPI(progressData)
  };

  return (
    <Box flex={1} justifyContent="center" p={4}>
      <Heading mb={4}>Add Progress</Heading>
      <VStack space={4}>
        <FormControl>
          <FormControl.Label>Comment</FormControl.Label>
          <TextArea
            value={comment}
            onChangeText={(text) => setComment(text)}
          />
        </FormControl>
        <FormControl>
          <FormControl.Label>Staff Member</FormControl.Label>
          <Input
            value={staffMember}
            onChangeText={(text) => setStaffMember(text)}
          />
        </FormControl>
        <FormControl>
          <FormControl.Label>Image Link</FormControl.Label>
          <Input
            value={imageLink}
            onChangeText={(text) => setImageLink(text)}
          />
        </FormControl>
        <Button onPress={handleAddProgress}>Add Progress</Button>
      </VStack>
    </Box>
  );
};

export default AddProgress;
