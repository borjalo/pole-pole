import axios from "axios";
import { IEvent } from "interfaces/event";

export const sendEvent = async (body: IEvent) => {
  const { data } = await axios.post("/api/events", body);

  return data;
};
