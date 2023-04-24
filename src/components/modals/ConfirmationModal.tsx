import React from 'react';
import { Modal, VStack, HStack, Center, Heading, Text, Button } from 'native-base';
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import theme from "../../../theme/theme"

type ConfirmationModalProps = {
  result: boolean;
  message: string;
  navigate: string;
  show: boolean;
  setShow: (show: boolean) => void;
}

const ConfirmationModal = ({
  result,
  message,
  navigate,
  show,
  setShow
}: ConfirmationModalProps): JSX.Element => {

  const navigation: { navigate: (screen: string) => void } = useNavigation();

  const closeModalAndNavigate = () => {
    setShow(false);
    navigation.navigate(navigate);
  };

  return (
    <Modal isOpen={show} onClose={closeModalAndNavigate}>
      <Modal.Content>
        <Modal.Body bg={result ? theme.colors.green[500] : theme.colors.red[500] }>
          <VStack space={8}>
            <HStack space={4} alignItems="center" justifyContent="space-around">
              <Center>
                { result ? (
                  <MaterialIcons name="check-circle" size={48} color="white" />
                ) : (
                  <MaterialIcons name="error" size={48} color="white" />
                )}
                <Heading fontSize={20} color="white">
                  { result ? "Success" : "Error"}
                </Heading>
              </Center>
              <Text fontSize={15} color="white">{message}</Text>
            </HStack>
            <Button onPress={closeModalAndNavigate} colorScheme="primary">
              Close
            </Button>
          </VStack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default ConfirmationModal;
