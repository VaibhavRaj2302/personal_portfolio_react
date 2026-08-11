import { push, ref, serverTimestamp } from "firebase/database";
import { database } from "../utils/Firebase_RTDB";
import { Queries } from "../models/QueryModel";

export const saveUserQuery = async ({
  queryData,
}: {
  queryData: Queries;
}): Promise<{ message: string }> => {
  const queriesRef = ref(database, "queries");
  try {
    push(queriesRef, {
      ...queryData,
      createdAt: serverTimestamp(),
    });
    return {
      message:
        "I will reach out to you soon! Your query has been registered with me.",
    };
  } catch (error) {
    throw { message: `${error}`, from: "Saving Query" };
  }
};
