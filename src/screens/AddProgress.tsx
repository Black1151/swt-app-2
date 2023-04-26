import React, { useState } from 'react';
import {
  VStack,
  Box,
  FormControl,
  TextArea,
  Button,
  Image,
  Text,
  HStack,
  Flex,
} from 'native-base';
import { addEvidenceAPI } from '../../api/api';
import { useRoute, RouteProp } from '@react-navigation/native';
import { Goals } from '../types/types';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';

const AddProgress = () => {
  const [comment, setComment] = useState('');
  const [staffMember, setStaffMember] = useState('');
  const [imageLink, setImageLink] = useState('');

  const { goal } = useRoute<RouteProp<Record<string, Goals>, string>>().params;

  const handleAddProgress = () => {
    const progressData = {
      goalID: goal.id,
      comment,
      staffMember,
      imageLink,
    };

    addEvidenceAPI(progressData);
  };

  const handleImagePicker = async (isCamera: boolean) => {
    if (isCamera) {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setImageLink(result.uri);
      }
    } else {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setImageLink(result.uri);
      }
    }
  };

  return (
    <Box flex={1} p={4}>
      <Flex justifyContent="space-between" flex={1}>
        <VStack space={4} flex={1}>
          <FormControl>
            <FormControl.Label>Purple pen</FormControl.Label>
            <Box height={160}>
              <TextArea
                value={comment}
                onChangeText={(text) => setComment(text)}
                flex={1}
              />
            </Box>
          </FormControl>
          {imageLink !== '' && (
            <VStack flex={1}>
              <HStack alignItems="center" space={2}>
                <MaterialIcons name="check-circle" size={24} color="green" />
                <Text color="green">Image attached</Text>
              </HStack>
              <Box flex={1} py={4}>
                <Image
                  source={{ uri: imageLink }}
                  alt="Selected Image"
                  resizeMode="contain"
                  size="full"
                />
              </Box>
            </VStack>
          )}
        </VStack>
        <VStack space={4}>
        <HStack space={2}>
            <Button
              flex={1}
              onPress={() => handleImagePicker(true)}
              startIcon={
                <MaterialIcons
                  name="camera-alt"
                  size={24}
                  color="white"
                />
              }
            >
              Take photo
            </Button>
            <Button
              flex={1}
              onPress={() => handleImagePicker(false)}
              startIcon={
                <MaterialIcons
                  name="photo-library"
                  size={24}
                  color="white"
                />
              }
            >
              Choose photo
            </Button>
          </HStack>
          <Button onPress={handleAddProgress}>Submit</Button>
        </VStack>
      </Flex>
    </Box>
  );
};

export default AddProgress;
