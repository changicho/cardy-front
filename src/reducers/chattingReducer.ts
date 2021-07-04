import type { Message as MessageType } from "@/types/chatting";

type State = {
  messages: MessageType[];
};

type ActionReceived = {
  type: "received";
  payload: MessageType;
};

type ActionSend = {
  type: "send";
  payload: MessageType;
};

type ActionInit = {
  type: "init";
  payload: MessageType[];
};

type Action = ActionReceived | ActionSend | ActionInit;

export const chattingReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "received": {
      const newState = {
        messages: [...state.messages, action.payload],
      };
      return newState;
    }
    case "send": {
      const newState = {
        messages: [...state.messages, action.payload],
      };
      return newState;
    }
    case "init": {
      const newState = {
        messages: action.payload,
      };
      return newState;
    }
    default:
      throw new Error();
  }
};
