import React, { useState } from "react";
import {
  VStack,
  FormControl,
  Input,
  Button,
  Text,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { addStudentAPI } from "../../api/api";
import theme from "../../theme/theme";
import ConfirmationModal from "../components/modals/ConfirmationModal";

const AddStudent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [year, setYear] = useState("");
  const [formError, setFormError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState()
 
  const navigation = useNavigation();

  const handleAdd = async () => {
    if (firstName && lastName && year) {
      setFormError(false);
      const newStudent = {
        first_name: firstName,
        last_name: lastName,
        year: parseInt(year),
        behavior_score: 1000
      };
      
      const outcome = await addStudentAPI(newStudent)
      setSuccess(outcome)
      setShowModal(true);    
    } else {
      setFormError(true);
    }
  };
  

  return (
    <>
    <ConfirmationModal 
      result={success}
      message={success ? "student added" : "could not add student"}
      navigate="Dashboard"
      show={showModal}
      setShow={setShowModal}
    />
    <VStack
      padding={4}
      borderRadius="lg"
      borderColor="gray.300"
      borderWidth={1}
    >
      <Text fontSize="xl" fontWeight="bold" marginBottom={4}>
        Add Student
      </Text>
      <FormControl isRequired isInvalid={formError} marginBottom={4}>
        <FormControl.Label>First Name</FormControl.Label>
        <Input
          placeholder="Enter first name"
          value={firstName}
          onChangeText={setFirstName}
          borderColor="gray.400"
          focusBorderColor={theme.colors.primary[500]}
        />
        {formError && !firstName && (
          <FormControl.ErrorMessage>
            First name is required
          </FormControl.ErrorMessage>
        )}
      </FormControl>
      <FormControl isRequired isInvalid={formError} marginBottom={4}>
        <FormControl.Label>Last Name</FormControl.Label>
        <Input
          placeholder="Enter last name"
          value={lastName}
          onChangeText={setLastName}
          borderColor="gray.400"
          focusBorderColor={theme.colors.primary[500]}
        />
        {formError && !lastName && (
          <FormControl.ErrorMessage>
            Last name is required
          </FormControl.ErrorMessage>
        )}
      </FormControl>
      <FormControl isRequired isInvalid={formError} marginBottom={4}>
        <FormControl.Label>Year</FormControl.Label>
        <Input
          placeholder="Enter year"
          value={year}
          onChangeText={setYear}
          keyboardType="numeric"
          borderColor="gray.400"
          focusBorderColor={theme.colors.primary[500]}
        />
        {formError && !year && (
          <FormControl.ErrorMessage>
            Year is required
          </FormControl.ErrorMessage>
        )}
      </FormControl>
      <Button
        onPress={handleAdd}
        colorScheme="primary"
        _text={{ color: "white" }}
        borderRadius="md"
        marginTop={4}
      >
        Add
      </Button>
    </VStack>
    </>
  );
};

export default AddStudent;
