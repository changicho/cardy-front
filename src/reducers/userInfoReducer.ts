import type { User as UserType } from "@/types/user";

type State = {
  userInfo: UserType | null;
  color: string;
  roomId: string | null;
};

type ActionSetRoomId = {
  type: "set-room-info";
  payload: {
    roomId: string;
  };
};

type ActionSetUserInfo = {
  type: "set-user-info";
  payload: {
    playerName: string;
    color: string;
  };
};

type Action = ActionSetRoomId | ActionSetUserInfo;

export const userInfoReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "set-room-info": {
      const newState = {
        userInfo: state.userInfo,
        roomId: action.payload.roomId,
        color: state.color,
      };
      return newState;
    }
    case "set-user-info": {
      const newState = {
        userInfo: {
          playerName: action.payload.playerName,
          score: 0,
        },
        color: action.payload.color || state.color,
        roomId: state.roomId,
      };
      return newState;
    }
    default:
      throw new Error();
  }
};
