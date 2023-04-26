import React, { useEffect, useState } from 'react';
import { Box, VStack, HStack, Text, Image, Center, Button, Heading } from 'native-base';
import { useRoute } from '@react-navigation/core';
import GoalStatusWidget from '../components/goals/GoalStatusWidget';
import BodyWrapper from '../components/wrappers/BodyWrapper';
import { formatDateSix } from '../helpers/helpers';
import { useNavigation } from '@react-navigation/native';


const GoalDetails = () => {
    const { goal } = useRoute().params;
    const [evidence, setEvidence] = useState([]);

    const navigation = useNavigation();

    const handleAddEvidence = () => {
        navigation.navigate("Add Progress", { goal })
    };

    return (
        <Box flex={1}> 
            <Center bg={'primary.400'} py={4}>
                    <Heading color="white">
                        {goal.title}
                    </Heading>
            </Center>
            <BodyWrapper>
                    <HStack pb={6} justifyContent="space-between">
                        <GoalStatusWidget status={goal.status} />
                        <Text>Started: {formatDateSix(goal.created)}</Text>
                    </HStack>
                {evidence[0] && (
                    <VStack space={4}>
                    {evidence.map((evidence) => (
                        <Box
                            key={evidence.id}
                            p={4}
                            borderWidth={1}
                            borderRadius="md"
                            borderColor="gray.200"
                        >
                        <HStack space={2} mb={2}>
                            <Text fontWeight="bold">Staff Member:</Text>
                            <Text>{evidence.staffMember}</Text>
                        </HStack>
                        <HStack space={2} mb={2}>
                            <Text fontWeight="bold">Comment:</Text>
                            <Text>{evidence.comment}</Text>
                        </HStack>
                        {evidence.imageLink && (
                            <Image
                                source={{ uri: evidence.imageLink }}
                                alt="Evidence Image"
                                resizeMode="contain"
                                height={200}
                                borderRadius="md"
                            />
                        )}
                        </Box>
                    ))}
                    </VStack>
                )}
                {!!!evidence[0] && (
                    <Center flex={1}>
                        <Text>No progress logged yet!</Text>
                    </Center>
                )}
                <Button onPress={handleAddEvidence} mt={4}>
                    Add Progress
                </Button>
            </BodyWrapper>
        </Box>
    );
};

export default GoalDetails;
