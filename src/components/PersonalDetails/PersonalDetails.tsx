import React, { useContext } from "react";
import { CheckoutContext } from "../../reducers/checkoutReducer";
import {
  PersonalDetailsContainer,
  PersonalDetailsInput,
  PersonalDetailsLabel,
  PersonalDetailsLocked,
  PersonalDetailsLockedContainer,
  PersonalDetailsLockedText,
  PersonalDetailsTitle,
} from "./PersonalDetails.style";

const PersonalDetails = () => {
  const checkoutContext = useContext(CheckoutContext);
  const { checkoutState, checkoutDispatch } = checkoutContext;
  const { states } = checkoutState;

  if (states.isPersonalDetailsLocked) {
    return (
      <PersonalDetailsLocked>
        <PersonalDetailsLockedContainer>
          <PersonalDetailsLockedText>
            Personal Details:
          </PersonalDetailsLockedText>
          <PersonalDetailsLockedText
            onPress={() =>
              checkoutDispatch({
                type: "UNLOCK_PERSONAL_DETAILS",
              })
            }
          >
            change?
          </PersonalDetailsLockedText>
        </PersonalDetailsLockedContainer>
      </PersonalDetailsLocked>
    );
  } else
    return (
      <PersonalDetailsContainer>
        <PersonalDetailsTitle>Personal Details:</PersonalDetailsTitle>
        <PersonalDetailsLabel>Name</PersonalDetailsLabel>

        <PersonalDetailsInput
          onChangeText={(name) =>
            checkoutDispatch({ type: "CHANGING_INFO", payload: { name } })
          }
          value={checkoutState.userInfo.name}
        />
        <PersonalDetailsLabel>Email</PersonalDetailsLabel>

        <PersonalDetailsInput
          onChangeText={(email) =>
            checkoutDispatch({ type: "CHANGING_INFO", payload: { email } })
          }
          value={checkoutState.userInfo.email}
        />
      </PersonalDetailsContainer>
    );
};

export default PersonalDetails;
